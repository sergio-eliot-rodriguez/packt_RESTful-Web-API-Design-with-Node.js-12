import { ObjectID } from "bson";
import { errorHandler, generateFakeContacts } from "../utils";
import { Contact } from "../models";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.format({
    // using new object method syntax (instead of json: function() {...})
    json() {
      res.json(contacts);
    },

    text() {
      const contactsAstext = contacts
        .map(contact => Object.entries(contact).map(t => t.join(":")))
        .join("\n\n ==========================>>    ");
      res.send(contactsAstext);
    },

    html() {
      const html = [
        `<table style="border: 1px solid black;">`,
        `<th style="border: 1px solid black; background:red;">BEIGN EXECUTED</th>
          <th style="border: 1px solid black; background:black; color:white;">Contact Data</th>
          `
      ];

      contacts.forEach(({ _doc }) => {
        let { _id, ...contact } = _doc;

        //reorder properties
        contact = Object.keys(contact)
          .sort()
          .reduce(
            (acc, key) => ({
              ...acc,
              [key]: _doc[key]
            }),
            {
              firstName: _doc.firstName,
              lastName: _doc.lastName
            }
          );
        html.push(`
              <tr style="border: 1px solid black;">
              <td style="border: 1px solid black; background:yellow;">${_id}</td>
              <td style="border: 1px solid black;">${Object.entries(contact)
                .map(([key, value]) => {
                  return `<div style="border: solid green 5px;"><p><b>${key}</b>: ${JSON.stringify(
                    value,
                    function replacer(k, v){
                      return k === "_id" ? undefined : v;
                    },
                    4
                ).replace(/"/g,"")}</p></div>`;
                })
                .join("\n")}</td>
              </tr>
            `);
      });

      res.send(html.join("\n"));
    }
  });
};

export const getContact = async (req, res, next) => {
  const contactId = req.params.id;
  contactId || next(errorHandler("Please enter a contact ID", 400));
  contactId.length >= 24 || next(errorHandler("Invalid contact ID", 422));

  const contact = await Contact.findOne({
    _id: new ObjectID(contactId)
  });
  res.json(contact);
};

export const postContact = async (req, res, next) => {
  const contact = req.body;
  contact || next(errorHandler("Please submit a valid contact", 400));
  contact.primaryContactNumber || next(errorHandler("Please submit valid contact", 422));

  const newContact = new Contact({ ...contact });
  const { _id, _doc } = await newContact.save();

  _doc && _doc.primaryContactNumber
    ? res
        .status(201)
        .set("location", `/contacts/${_id}`)
        .json({ message: "Contact created", data: _doc })
    : next(errorHandler("No contact created"));

  // const result = await Contact.insertOne(contact);

  // result.insertedCount === 1
  //   ? res.json({ message: "Contact created" })
  //   : next(errorHandler("No data inserted"));
};

export const postContactMany = async (req, res, next) => {
  const n = parseInt(req.query.n);
  n < 100 || next(errorHandler("Please enter a number less than 100", 422));

  const genearatedContacts = await Contact.insertMany(generateFakeContacts(n));
  console.log(genearatedContacts.length);

  res.status(201).json(
    { 
      message: `${n} contacts generated`,  
      locations: genearatedContacts.map(( { _id }) => `/contacts/${_id}`)    
    });
};

export const putContact = async (req, res, next) => {
  const contactId = req.params.id;
  const contactUpdate = req.body;

  contactId || next(errorHandler("Please enter a contact ID", 400));
  contactUpdate || next(errorHandler("Please submit valid contact", 400));

  const result = await Contact.updateOne(
    { _id: new ObjectID(contactId) },
    { $set: contact }
  );
  result.nModified === 1
    ? res.json({ message: "Contact updated" })
    : next(errorHandler("No data updated"));
};

export const deleteContact = async (req, res, next) => {
  const contactId = req.params.id;
  contactId || next(errorHandler("Please enter a contact ID", 422));

  const result = await Contact.deleteOne({
    _id: new ObjectID(contactId)
  });

  result.deletedCount === 1
    ? res.json({ message: "Contact deleted" })
    : next(errorHandler("No data deleted"));
};

export const deleteAllContacts = async (req, res, next) => {
  const result = await Contact.deleteMany({});

  result.deletedCount > 0
    ?  res.json({ message: "All contacts deleted" })
    : next(errorHanlder("No contacts were deleted"));
};