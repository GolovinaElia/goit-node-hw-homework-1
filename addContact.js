// const listContacts = require("./contacts")
// const updateContacts = require("./updateContacts")
// const { v4 } = require("uuid")
// const contactsPath = require("./contacts")

// function addContact(name, email, phone) {
//   fs.readFile(contactsPath, { encoding: "utf8" }, (err, data) => {
//     if (err) {
//       console.log(err.message)
//     }
//     const contacts = JSON.parse(data)
//     const contactsNew = { id: v4(), name, email, phone }
//     const contactsList = JSON.stringify([contactNew, ...contacts], null, "\t")
//     fs.writeFile(contactsPath, contactsList, (err) => {
//       if (err) console.error(err)
//     })
//   })
// }
// try {
//   addContact()
// } catch (error) {
//   console.log(error)
// }

// const addContact = async (obj) => {
//   const newContact = { ...obj, id: v4() }
//   try {
//     const contacts = await listContacts()
//     const newContacts = [...contacts, newContact]
//     await updateContacts(newContacts)
//     return newContact
//   } catch (error) {
//     throw error
//   }
// }
// module.exports = addContact
