import { contactsV1 as v1 } from "../../controllers";

import { AsyncWrapper } from "../../utils/async-wrapper";


export default function(router){
    // GET /contacts
    router.get("/contacts", AsyncWrapper(v1.getContacts));

    // GET /contact/:id
    router.get("/contacts/:id", AsyncWrapper(v1.getContact));

    // POST /contacts
    router.post("/contacts", AsyncWrapper(v1.postContact));

    // POST /contacts/many
    router.post("/contacts/many", AsyncWrapper(v1.postManyContacts));

    // PUT /contacts/:id
    router.put("/contacts/:id", AsyncWrapper(v1.putContact));

    // DELETE /contacts/:id
    router.delete("/contacts/:id", AsyncWrapper(v1.deleteContact));

    // DELETE /contacts
    router.delete("/contacts", AsyncWrapper(v1.deleteAllContact));

};