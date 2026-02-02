import { Request, Response } from "express";
import { contacts } from "./contacts";

const addContact = (req: Request, res: Response) => {
  const { name, phone, email, id } = req.body;

  try {
    //validations
    if (!name) throw "Please define name!";
    if (!phone) throw "Please define phone!";

    if (!/^9\d{9}$/.test(phone)) {
      throw "Phone must start with 9 and contain 10 digits total!";
    }

    if (email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw "Invalid email";
      }
    }
    if (!id) throw "Please define id!";
  } catch (e) {
    res.status(400).json({
      message: e,
    });
    return;
  }

  contacts.push({
    name: name,
    phone,
    email,
    id,
  });

  res.status(200).json({
    data: contacts,
  });
};

export default addContact;
