const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.error(err);
    }

    const parseContacts = JSON.parse(data);
    console.table(parseContacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.error(err);
    }

    const parseContacts = JSON.parse(data);
    const contact = parseContacts.find(
      (contact) => Number(contact.id) === Number(contactId)
    );
    console.log(contact);
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, "utf-8", (err, data) => {
    if (err) {
      return console.error(err);
    }

    const parseContacts = JSON.parse(data);

    const contact = parseContacts.filter((contact) => contact.id !== contactId);

    fs.writeFile(contactsPath, JSON.stringify(contact), (err) => {
      if (err) {
        return console.error(err);
      }
    });

    if (contact.length === parseContacts.length) {
      return console.log(`id "${contactId}" not found!`);
    }

    console.log(`Contact id "${contactId}" has been removed successfully!`);
    console.table(contact);
  });
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
