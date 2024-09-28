import { company, name, address, phone, internet, random } from "faker";


const generateFakeContacts = function(n = 3){
new Array(n).fill("toto").forEach(() => {
    random.uuid(), {
      firstName: name.firstName(),
      lastName: name.lastName(),
      company: company.companyName(),
      jobTitle: name.jobTitle(),
      primaryContactNumber: phone.phoneNumber(),
      otherContactNumbers: [phone.phoneNumber(), phone.phoneNumber()],
      primaryEmailAddress: internet.email(),
      otherEmailAddresses: [internet.email(), internet.email()],
      groups: ["Dev", "Node.js"],
      socialMedia: [
        { name: "Linkedin", link: internet.url() },
        { name: "Twitter", link: internet.url() }
      ]
    };
  });
};
export { generateFakeContacts };