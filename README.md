# Je vous crois.

Je vous crois.

by Madame Dreams [madamedreams.com]

AI: This project is a static website deployed on Cloudflare Workers that displays a full-screen video with a custom play button overlay.

## Features

- Clean, minimalist design
- Custom video player with overlay play button
- Responsive layout for mobile and desktop
- Automatic deployment via GitHub Actions

## Deployment

This site is automatically deployed to Cloudflare Workers when changes are pushed to the main branch.

### URL

The site is live at: [jevouscrois.gaabs.workers.dev](https://jevouscrois.gaabs.workers.dev)

## Development

### Local Setup

1. Clone the repository
```bash
git clone https://github.com/GabZoFar/jevouscrois.com.git
cd jevouscrois.com
```

2. Install dependencies
```bash
npm install
```

3. Test locally
```bash
npx wrangler dev
```

### Deployment

The deployment is automated via GitHub Actions. When you push to the main branch, GitHub Actions will:
1. Check out the code
2. Install dependencies
3. Deploy to Cloudflare Workers

## Cloudflare Workers Configuration

This project uses Cloudflare Workers for hosting and includes:
- Worker script to serve static assets
- Custom security headers
- Automatic handling of root path to serve index.html

## GitHub Actions

Deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`). You need to set up a `CLOUDFLARE_API_TOKEN` in your GitHub repository secrets.

### Creating the API Token

1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com)
2. Go to **My Profile** > **API Tokens**
3. Click **Create Token**
4. Select **Create Custom Token**
5. Name: "GitHub Workers Deployment"
6. Permissions (Add each one individually):
   - Workers Scripts: Edit
   - Zone: Workers Routes: Edit
7. Include All Zones
8. Create the token and copy it
9. Add to GitHub repository: Settings > Secrets > Actions as `CLOUDFLARE_API_TOKEN`

## License

© 2025 Made by [GabZoFar](https://github.com/GabZoFar)