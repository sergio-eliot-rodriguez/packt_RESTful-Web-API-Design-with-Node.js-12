import { Contact } from "../models";
import { contactsV1 } from "./contactsV1";

export const getBasicContacts = async (req, res) =>{
    const result = await Contact.find().select({
        firstName: 1,
        lastName: 1,
        primaryContactNumber: 1,
        primaryEmailAddress: 1
    });

    res.json(result);
}

export const getContacts = contactsV1.getContacts;

export const contactsV2 = {
    getBasicContacts,
    getContacts
}