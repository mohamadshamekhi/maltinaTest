const express = require("express");
const next = require("next");
const notifier = require("node-notifier");
const path = require("path");
const open = require("open");

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    notifier.notify(
      {
        title: "Maltina test",
        message: `Maltina test App is run! \nmode : ${
          process.env.NODE_ENV === "production" ? "production" : "development"
        }`,
        appID: "\t",
        icon: path.join(__dirname, "../", "public", "logo.png"),
        sound: true,
        wait: true,
      },
      function (err, response, metadata) {
        open(`http://localhost:${port}`);
      }
    );
  });
});
