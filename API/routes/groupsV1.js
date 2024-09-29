import { Router } from "express";
import { groupsV1 as v1 } from "../controllers";
import { AsyncWrapper } from "../utils";

const router = Router();

// GET /groups
router.get("/", AsyncWrapper(v1.getGroups));

// GET /groups/:contactId
router.get("/:contactId", AsyncWrapper(v1.getGroupsForContact));

// DELETE /groups/:id
router.get("/:id", () => null);

export const groupsV1 = {
  baseUrl: "/api/v1/groups",
  router
};