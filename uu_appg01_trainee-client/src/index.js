import React from "react";
import ReactDOM from "react-dom";

import Spa from "./common/spa.js";


import "./index.less";


// NOTE To be able to detect which modules are already loaded in SystemJS loader,
// we have to export a rendering method instead of immediately perform the rendering.
export function render(targetElementId) {
  ReactDOM.render(
    <Spa />,
    document.getElementById(targetElementId)
  );
}
