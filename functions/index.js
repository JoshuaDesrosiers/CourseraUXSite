const { onRequest } = require('firebase-functions/v2/https');
const express = require('express');
const path = require('path');
const fs = require('fs');

// The name of the file containing the SSR entry point, relative to the functions directory.
// This is typically the output of your 'vite build --ssr' command.
const SSR_BUILD_PATH = '../dist/server/entry-server.js';

// The path to the client index.html, used as a template for the SSR response.
const TEMPLATE_PATH = path.resolve(__dirname, '../dist/client/index.html');

// Create the Express app for the Cloud Function
const app = express();

// Serve the static client-side assets from the 'dist/client' directory.
// Firebase Hosting will usually handle this, but it's good practice for fallback
// or if the request bypasses Hosting for some reason.
app.use(
  express.static(path.resolve(__dirname, '../dist/client'), { index: false })
);

// Catch-all handler for all requests (the actual SSR logic)
app.use('*', async (req, res) => {
  try {
    // 1. Read the index.html template from the client build
    let template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
    
    // 2. Load the server-entry module
    // We must use 'require' here because the function runs in a Node.js environment,
    // and the SSR build is a CJS module.
    const { render } = require(SSR_BUILD_PATH);

    // 3. Render the application
    // 'render' is the function exported by your vite-extra entry-server.js
    const { appHtml, head, preloadLinks } = await render(req.originalUrl, {});

    // 4. Inject the rendered content into the HTML template
    template = template
      .replace(``, preloadLinks)
      .replace(``, head)
      .replace(``, appHtml);

    // 5. Send the final HTML response
    res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    
  } catch (e) {
    // If an error is caught, log it and return a 500 error
    console.error(e.stack);
    res.status(500).end(e.stack);
  }
});

// Export the Express app as a Cloud Function
// Replace 'ssrApp' with the function name you used in your firebase.json rewrites.
exports.ssrApp = onRequest(app);