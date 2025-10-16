const { onRequest } = require('firebase-functions/v2/https');
const express = require('express');
const path = require('path');
const fs = require('fs');

// Path to your built server bundle (Vite SSR output)
const SSR_BUILD_PATH = path.resolve(__dirname, './dist/server/entry-server.js');
// Path to your built client index.html (acts as the template)
const TEMPLATE_PATH = path.resolve(__dirname, './dist/client/index.html');

const app = express();

// Serve static assets (for JS, CSS, images, etc.)
app.use(express.static(path.resolve(__dirname, './dist/client'), { index: false }));

// SSR route handler — catches all URLs
app.use('*', async (req, res) => {
  try {
    // 1️⃣ Load the base template (from your built client index.html)
    let template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

    // 2️⃣ Import your SSR renderer
    const { render } = require(SSR_BUILD_PATH);

    // 3️⃣ Generate the HTML using your renderer
    // Make sure your `entry-server.js` exports `render(url, context?)`
    const { appHtml, head = '', preloadLinks = '' } = await render(req.originalUrl, {});

    // 4️⃣ Inject rendered app into the template
    const html = template
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--head-->', head)
      .replace('<!--app-html-->', appHtml);

    // 5️⃣ Send the SSR result
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (err) {
    console.error('SSR error:', err);
    res.status(500).end(err.stack);
  }
});

// Export as Cloud Function
exports.ssrApp = onRequest(app);
