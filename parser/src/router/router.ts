import express = require("express");
import { Parser } from "../service/parser-service";
import multer = require("multer");

export const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/parse", upload.single("file"), Parser.createJsonData);
