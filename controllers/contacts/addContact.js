const { fs, contactsPath, shortid } = require("./contacts");

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseContacts = JSON.parse(data);

    const uniqueContact = parseContacts.find(
      (contact) => contact.email === email && contact.phone === phone
    );

    if (uniqueContact) {
      return console.error("This contact has been added earlier!");
    }

    const newContact = { id: shortid.generate(), name, email, phone };
    const contacts = [...parseContacts, newContact];

    await fs.writeFile(contactsPath, JSON.stringify(contacts));

    console.log("Contact has been added successfully!");
    return console.table(contacts);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  addContact,
};
