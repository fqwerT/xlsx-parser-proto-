
import express = require('express')
import cors = require('cors')
import { router } from "./router/router";
import bodyParser = require("body-parser");
import multer = require("multer");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(express.json())
const upload = multer({ storage: multer.memoryStorage() });
const port = 5000;

app.use("/api", router);
app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});