import React from "react";
import { hydrateRoot } from "react-dom/client";

import { Home } from "./pages/home";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
hydrateRoot(document.getElementById("root")!, <Home />);
