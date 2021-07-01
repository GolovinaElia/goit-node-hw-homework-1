const listContacts = require("./listContacts")
const { v4 } = require("uuid")
const addContact = async (name, email, phone) => {
  const newContact = {
    name: "Mango",
    email: "mango@gmail.com",
    phone: "322-22-22",
    id: v4(),
  }
  try {
    const contacts = await listContacts()
    const newContacts = [...contacts, newContact]
    const str = JSON.stringify(newContacts)
  } catch (error) {
    throw error
  }
}
module.exports = addContact
