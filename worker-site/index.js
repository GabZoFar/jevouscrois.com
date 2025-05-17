import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

const DEBUG = false;

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event));
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      );
    }
    event.respondWith(new Response('Internal Error', { status: 500 }));
  }
});

async function handleEvent(event) {
  const url = new URL(event.request.url);
  
  try {
    // Try to get the asset from KV
    let options = {};
    
    // Check if the request is for the root path
    if (url.pathname === '/') {
      options = {
        mapRequestToAsset: req => {
          // Rewrite the request to serve index.html for the root path
          const url = new URL(req.url);
          url.pathname = '/index.html';
          return new Request(url.toString(), req);
        },
      };
    }
    
    const page = await getAssetFromKV(event, options);
    
    // Allow headers to be altered
    const response = new Response(page.body, page);
    
    response.headers.set('X-XSS-Protection', '1; mode=block');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Feature-Policy', 'none');
    
    return response;
  } catch (e) {
    // If an error is thrown, return a 404 response
    return new Response('Not Found', { status: 404 });
  }
} 