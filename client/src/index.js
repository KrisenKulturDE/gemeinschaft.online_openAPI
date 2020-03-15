import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./css/modules/fonts.css";
import "./css/modules/divider.css";
import "./css/modules/core.css";
import "./css/modules/colors.css";
import "./css/modules/bars.css";

import "./css/modules/elements/alert.css";
import "./css/modules/elements/button.css";
import "./css/modules/elements/cards.css";
import "./css/modules/elements/form.css";
import "./css/modules/elements/links.css";

import "./css/modules/flex/flex.css";
import "./css/modules/flex/flex_display.css";

import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
