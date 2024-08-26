import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";

import { Home } from "./pages/home";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  const app = renderToString(<Home />);
  const html = `
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Yusuke4869</title>
</head>
<body>
  <div id="root">${app}</div>
</body>
</html>
`;

  res.send(html);
});

app.use(express.static("./dist"));

try {
  app.listen(PORT, () => {
    console.log(`server running at: http://localhost:${PORT.toString()}/`);
  });
} catch (e) {
  if (e instanceof Error) console.error(e.message);
}
