const app = require("./src/app/app");
require("dotenv").config();

const port = process.env.PORT;

const { dbConnection } = require("./src/database/connection");

app.listen(port, () => {
  console.log(`Server is listening... ${port}`)
})

dbConnection();
