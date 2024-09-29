import { findContacts } from "../services";
import { contactsV1 } from "./contactsV1";

export const getBasicContacts = async (req, res) =>{
    findContacts({
        fields: {
            firstName: 1,
            lastName: 1,
            primaryContactNumber: 1,
            primaryEmailAddress: 1
        },
        req,
        res
    });
}

export const getContacts = contactsV1.getContacts;

export const contactsV2 = {
    getBasicContacts,
    getContacts
}