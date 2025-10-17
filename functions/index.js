const { onRequest } = require('firebase-functions/v2/https');
const express = require('express');
const path = require('path');
const fs = require('fs');

// Paths to built assets
const SSR_BUILD_PATH = path.resolve(__dirname, './dist/server/entry-server.js');
const TEMPLATE_PATH = path.resolve(__dirname, './dist/client/index.html');

const app = express();

// Serve static assets (JS, CSS, images, etc.)
app.use(express.static(path.resolve(__dirname, './dist/client'), { index: false }));

// Catch-all SSR route
app.use('*', async (req, res) => {
  try {
    // 1️⃣ Read the base template (built client HTML)
    let template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

    // 2️⃣ Import the SSR renderer
    const { render } = require(SSR_BUILD_PATH);

    // 3️⃣ Generate rendered HTML from your server entry
    const { html, head = '', preloadLinks = '' } = await render(req.originalUrl, {});

    // 4️⃣ Inject into the template
    const finalHtml = template
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--app-head-->', head)
      .replace('<!--app-html-->', html);

    // 5️⃣ Send result
    res.status(200).set({ 'Content-Type': 'text/html' }).end(finalHtml);

  } catch (err) {
    console.error('SSR error:', err);
    res.status(500).end(err.stack);
  }
});

// Export as Cloud Function
exports.ssrApp = onRequest(app);
