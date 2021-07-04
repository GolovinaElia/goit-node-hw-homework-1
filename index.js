const db = require("./db/contacts.json")
const { listContacts, getContactById, addContact } = require("./contacts")

const contactsPath = require("./contacts")
;(async () => {
  try {
    const contacts = await listContacts()
    console.log(contacts)
    contactId = 5
    const oneContact = await getContactById(contactId)
    console.log(oneContact)
    const newContact = {
      name: "Mango",
      email: "mango@gmail.com",
      phone: "322-22-22",
    }
    const resultNewContact = await addContact(newContact)
    console.log(resultNewContact)
  } catch (error) {
    throw error
  }
})()
