const { fs, contactsPath } = require("./contacts");

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseContacts = JSON.parse(data);

    const contact = parseContacts.filter((contact) => contact.id !== contactId);

    await fs.writeFile(contactsPath, JSON.stringify(contact));

    if (contact.length === parseContacts.length) {
      return console.log(`id "${contactId}" not found!`);
    }

    console.log(`Contact id "${contactId}" has been removed successfully!`);
    return console.table(contact);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  removeContact,
};
