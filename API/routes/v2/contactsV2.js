//uses aliases to avoid name conflicts
import { contactsV2 as v2 } from "../../controllers";
import { AsyncWrapper } from "../../utils";


export default function(router){
    //GET /api/v2/contacts
    router.get("/contacts", AsyncWrapper(v2.getBasicContacts));

    //GET /api/v2/contacts/full
    router.get("/contacts/full", AsyncWrapper(v2.getContacts));

};