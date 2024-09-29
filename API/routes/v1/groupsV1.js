import { groupsV1 as v1 } from "../../controllers";
import { AsyncWrapper } from "../../utils";

export default function(router){

  // GET /groups
  router.get("/groups", AsyncWrapper(v1.getGroups));

  // GET /groups/:contactId
  router.get("/groups/:contactId", AsyncWrapper(v1.getGroupsForContact));

  // DELETE /groups/:id
  router.get("/groups/:id", () => null);

};