import { Router } from "express";

import {
    getContacts,
    getContact,
    postContact,
    postContactMany,
    putContact,
    deleteContact,
    deleteAllContacts
} from "../controllers";

import { AsyncWrapper } from "../utils/async-wrapper";

const router = Router();

// GET /contacts
router.get("/", AsyncWrapper(getContacts));

// GET /contact/:id
router.get("/:id", AsyncWrapper(getContact));

// POST /contacts
router.post("/", AsyncWrapper(postContact));

// POST /contacts/many
router.post("/many", AsyncWrapper(postContactMany));

// PUT /contacts/:id
router.put("/:id", AsyncWrapper(putContact));

// DELETE /contacts/:id
router.delete("/:id", AsyncWrapper(deleteContact));

// DELETE /contacts
router.delete("/", AsyncWrapper(deleteAllContacts));

export const contacts = {
    baseUrl: "/contacts",
    router
}

