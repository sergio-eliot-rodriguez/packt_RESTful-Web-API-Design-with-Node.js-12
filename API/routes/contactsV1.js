import { Router } from "express";

import { contactsV1 as v1 } from "../controllers";

import { AsyncWrapper } from "../utils/async-wrapper";

const router = Router();

// GET /contacts
router.get("/", AsyncWrapper(v1.getContacts));

// GET /contact/:id
router.get("/:id", AsyncWrapper(v1.getContact));

// POST /contacts
router.post("/", AsyncWrapper(v1.postContact));

// POST /contacts/many
router.post("/many", AsyncWrapper(v1.postContactMany));

// PUT /contacts/:id
router.put("/:id", AsyncWrapper(v1.putContact));

// DELETE /contacts/:id
router.delete("/:id", AsyncWrapper(v1.deleteContact));

// DELETE /contacts
router.delete("/", AsyncWrapper(v1.deleteAllContacts));

export const contactsV1 = {
    baseUrl: "/api/v1/contacts",
    router
}

