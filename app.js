const db = require("./db")
;(async () => {
  try {
    const allContacts = await db.listContacts()
    console.log(allContacts)
    contactId = 5
    const oneContact = await db.getContactById(contactId)
    console.log(oneContact)
  } catch (error) {
    throw error
  }
})()
