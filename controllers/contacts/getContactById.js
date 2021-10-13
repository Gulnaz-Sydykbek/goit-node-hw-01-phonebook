const { fs, contactsPath } = require("./contacts");

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseContacts = JSON.parse(data);

    const contact = parseContacts.find(
      (contact) => Number(contact.id) === Number(contactId)
    );
    return console.log(contact);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getContactById,
};
