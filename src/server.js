const express = require("express");
const app = express();
const port = process.env.PORT || 3333;
const cors = require("cors");
require("./database");

// routers
const routes = require("./routes");

app.use(cors());
// apply middleware default
app.use(express.json());
app.use(routes);

// run to server
app.listen(port, () => console.log(`## servidor rodando na port ${port}`));
