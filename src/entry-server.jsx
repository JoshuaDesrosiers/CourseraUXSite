// entry-server.jsx
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Wip from "./wip";
import About from "./about";
import Connect from "./connect";

/**
 * @param {string} _url
 */
export async function render(_url) {
  const appHtml = renderToString(
    <StrictMode>
      <StaticRouter location={_url}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="wip" element={<Wip />} />
            <Route path="about" element={<About />} />
            <Route path="connect" element={<Connect />} />
          </Route>
        </Routes>
      </StaticRouter>
    </StrictMode>
  );

  return {html: appHtml };
}
