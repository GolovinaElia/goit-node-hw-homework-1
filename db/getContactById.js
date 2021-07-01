const listContacts = require("./listContacts")
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
module.exports = getContactById
