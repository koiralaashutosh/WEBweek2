import express from "express";
import addContact from "./addContact";
import deleteContact from "./deleteContact";
import editContact from "./editContact";
import getContacts from "./getContacts";
import getSinglecontact from "./getSingleContact";

const server = express();

server.use(express.json());

server.listen(8000, () => {
  console.log("Server started successfully");
});

server.get("/api/contacts", getContacts);
server.get("/api/contact/:id", getSinglecontact);
server.post("/api/contacts", addContact);
server.patch("/api/contacts/:id", editContact);
server.delete("/api/contacts/:id", deleteContact);
