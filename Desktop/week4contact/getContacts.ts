import { Request, Response } from "express";
import { contacts } from "./contacts";

const getContacts = (req: Request, res: Response) => {
  res.status(200).json({
    contacts: contacts,
  });
};

export default getContacts;
