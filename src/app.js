const express = require("express");
const notFoundMiddleware = require("./middlewares/notFound");
const errorMiddleware = require("./middlewares/error");
const fruitRoute = require("./routes/FruitRoute");
// const { sequelize } = require("./models");

// sequelize.sync({ force: true });

const app = express();
app.use(express.json());

app.use("/fruit", fruitRoute);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(8000, () => console.log("Start server at port 8000"));
