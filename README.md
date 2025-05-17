# Je Vous Crois

Je vous crois.

by Madame Dreams [madamedreams.com]

AI:

## Structure

- `index.html` - Main HTML file with title, GIF and video player
- `style.css` - Styling for the webpage (includes bold Montserrat 900 font)
- `assets/` - Directory containing media files
  - `jevouscrois.gif` - The main GIF file (you need to add this)
  - `video.mp4` - The video file to be played (you need to add this)

## How to Use

1. Place your GIF file at `assets/jevouscrois.gif`
2. Place your video file at `assets/video.mp4`
3. If needed, adjust styling in `style.css`

## Deployment Instructions (Cloudflare Pages)

1. Push this code to a GitHub repository
2. Login to your Cloudflare dashboard
3. Navigate to "Pages"
4. Click "Create a project"
5. Select "Connect to Git"
6. Choose your GitHub repository with this code
7. Configure your build settings:
   - Build command: (leave empty - not required for static sites)
   - Build output directory: (leave as root)
8. Click "Save and deploy"

After deployment, you'll get a URL like `your-project-name.pages.dev` where your site will be accessible.

## Customization

- To change the title font or style, edit the `.main-title` style in `style.css`
- To change the footer text, edit the text inside the `<footer>` tag in `index.html`
- To modify the overall look and feel, edit the `style.css` file