const fs = require("fs").promises
const path = require("path")

const filePath = path.join(__dirname, "contacts.json")

const listContacts = async () => {
  try {
    const data = await fs.readFile(filePath)
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    error.message = "Cannot read contacts"
    throw error
  }
}

module.exports = listContacts
