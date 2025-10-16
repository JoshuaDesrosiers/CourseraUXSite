// entry-server.jsx
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Wip from "./wip";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";

/**
 * @param {string} _url
 */


export function render(_url) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={_url}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </StaticRouter>
    </StrictMode>
  );

  return { html };
}