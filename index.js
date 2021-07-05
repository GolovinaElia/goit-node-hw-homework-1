const db = require("./db/contacts.json")
const contactsPath = require("./contacts")
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts")

const { Command } = require("commander")
const program = new Command()
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone")

program.parse(process.argv)

const argv = program.opts()

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts()
      console.table(contacts)
      break

    case "get":
      const oneContact = await getContactById(Number(id))
      console.log(oneContact)
      break

    case "add":
      const newContact = { name, email, phone }
      const resultNewContact = await addContact(newContact)
      console.log(resultNewContact)
      break

    case "remove":
      await removeContact(id)
      break

    default:
      console.warn("\x1B[31m Unknown action type!")
  }
}

invokeAction(argv)
// ;(async () => {
//   try {
//     const contacts = await listContacts()
//     console.log(contacts)
//     contactId = 5
//     const oneContact = await getContactById(contactId)
//     console.log(oneContact)
//     const newContact = {
//       name: "Mango",
//       email: "mango@gmail.com",
//       phone: "322-22-22",
//     }
//     const resultNewContact = await addContact(newContact)
//     console.log(resultNewContact)

//     await removeContact("d028f10b-5bd0-40e0-a3a9-476e9ead7b94")
//   } catch (error) {
//     throw error
//   }
// })()
