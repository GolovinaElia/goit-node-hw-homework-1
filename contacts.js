const path = require("path")
const fs = require("fs").promises
const { v4 } = require("uuid")

const contactsPath = path.join(__dirname, "./db/contacts.json")

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

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts()
    const findContacts = contacts.find((item) => item.id === contactId)
    if (!findContacts) {
      throw new Error("Id incorrect")
    }
    return findContacts
  } catch (error) {
    throw error
  }
}

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts()
    const index = contacts.findIndex((item) => item.id === contactId)
    if (index === -1) {
      throw new Error("Id incorrect")
    }
    const filteredContacts = contacts.filter((item) => item.id !== contactId)
    const str = JSON.stringify(filteredContacts)
    fs.writeFile(contactsPath, str)
  } catch (error) {
    throw error
  }
}

const addContact = async ({ name, email, phone }) => {
  const newContact = { id: v4(), name, email, phone }
  try {
    const contacts = await listContacts()
    const newContacts = [...contacts, newContact]
    const str = JSON.stringify(newContacts)
    await fs.writeFile(contactsPath, str)
    return newContacts
  } catch (error) {
    throw error
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact }
