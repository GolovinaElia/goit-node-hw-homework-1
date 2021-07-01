const fs = require("fs").promises
const contactsPath = require("./contacts")

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    error.message = "Cannot read contacts"
    throw error
  }
}

module.exports = listContacts
