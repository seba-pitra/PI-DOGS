const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3002;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
