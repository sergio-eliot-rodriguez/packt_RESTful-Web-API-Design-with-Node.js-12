// use aliases to avoid name conflicts//sdfasd
import { contactsV2 as v2 } from "../../controllers";//8
import { AsyncWrapper } from "../../utils/async-wrapper";
import { CorsConfig } from "../../config";
import { ConfigService } from "../../services";

export default async router => {
  

  const corsConf = new CorsConfig(ConfigService.get("CORS_WHITELIST"));
  // GET /api/v2/contacts
  router.get(
    "/contacts",
    (res, req, next) => corsConf.setAsyncConfig()(res, req,next),
    AsyncWrapper(v2.getBasicContacts)
  );

  // GET /api/v2/contacts/full
  router.get("/contacts/full", AsyncWrapper(v2.getContacts));

  // POST /api/v2/contacts/:id/image
  router.post("/contacts/:id/image", v2.postContactImage.map(AsyncWrapper));

  // GET /api/v2/contacts/:id/image
  router.get("/contacts/:id/image", AsyncWrapper(v2.getContactImage));

  // DELETE /api/v2/contacts/:id/image
  router.delete("/contacts/:id/image", AsyncWrapper(v2.deleteContactImage));

};
