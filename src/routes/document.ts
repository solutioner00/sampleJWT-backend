import express from "express";
import {
    addDocument,
    searchDocuments,
} from "../controllers/document";
import { authenticate } from "../middleware/auth";

const documentRouter = express.Router();

documentRouter.post("/add", authenticate, addDocument);
documentRouter.get("/search", authenticate, searchDocuments);

export default documentRouter;
