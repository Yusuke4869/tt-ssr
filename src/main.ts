import express from "express";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => res.send("Hello World"));

try {
  app.listen(PORT, () => {
    console.log(`server running at: http://localhost:${PORT.toString()}/`);
  });
} catch (e) {
  if (e instanceof Error) console.error(e.message);
}
