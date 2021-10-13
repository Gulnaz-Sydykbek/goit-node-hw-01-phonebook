const { fs, contactsPath } = require("./contacts");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const parseContacts = JSON.parse(data);

    return console.table(parseContacts);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  listContacts,
};
