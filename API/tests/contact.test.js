import mongoose from "mongoose";
import assert from "assert";
import { connectDb } from "../config";
import { Contact } from "../models";
import { ConfigService } from "../services/config.services";

//const connection = connectDb("contacts-test");
mongoose.connect(`mongodb://${ConfigService.MONGO_LOCALHOST}/contacts-test?retryWrites=true&w=majority`);

mongoose.connection 
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => { 
        console.warn('Error : ', error); 
    });     


    // don't change database state

// Hook running before each test.
// runs before each test 
beforeEach(function (done) { 
    this.timeout(15000);
    mongoose.connection.collections.contacts.drop(() => { 
    done(); 
    })
});

// Hook running after each test.
afterEach(done => {
    mongoose.disconnect();
    return done();
});

describe("Create Contact", function() {    
    it("should insert one new contact", done => {
        const createdContact = new Contact({
        firstName: "John",
        lastName: "TOTO",
        otherContactNumbers: ["675-422-2796 x13687", "001-388-8810 x253"],
        otherEmailAddresses: ["Rosalyn84@hotmail.com", "Ben71@gmail.com"],
        groups: ["Dev", "Node.js"],
        company: "Prosacco, Dickens and Gerlach",
        jobTitle: "International Configuration Representative",
        address: "78334 Dorcas Parkways",
        city: "Sagemouth",
        country: "Totoland",
        primaryContactNumber: "641-611-4904 x03036",
        primaryEmailAddress: "Nicolette.Jacobi@yahoo.com",
        socialMedia: [
            {
            _id: "5de6ec65740ebf7f7216190a",
            name: "Linkedin",
            link: "https://marley.com"
            },
            {
            _id: "5de6ec65740ebf7f72161909",
            name: "Twitter",
            link: "http://simeon.biz"
            }
        ]
        });

        createdContact
        .save()
        .then(() => {
            assert(!createdContact.isNew);
            return done();
        })
        .catch(error => {
            console.error("Error Create Contact test: " + error.message);
            return done();
        });
    });
});