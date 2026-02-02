import { Request, Response } from "express";
import { contacts } from "./contacts";

const deleteContact = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = contacts.findIndex((t) => t.id === id);

  if (index === -1) {
    res.status(404).json({ message: "Contact not found" });
    return;
  }

  contacts.splice(index, 1);

  res.json({
    message: "Contact deleted successfully",
  });
};

export default deleteContact;
