import { Request, Response } from "express";
import { contacts } from "./contacts";

const editContact = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { phone, name, email } = req.body;

  const findContact: any = contacts.find((el: any) => {
    return el.id === id;
  });

  if (!findContact) {
    res.status(400).json({
      message: "contact not found!",
    });
    return;
  } else {
    try {
      if (name) {
        findContact.name = name;
      }
      //validations
      if (phone) {
        if (!/^9\d{9}$/.test(phone)) {
          throw "Phone must start with 9 and contain 10 digits total!";
        }
        findContact.phone = phone;
      }

      if (email) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          throw "Invalid email";
        }
        findContact.email = email;
      }
    } catch (e) {
      res.status(400).json({
        message: e,
      });
      return;
    }
  }

  res.status(200).json({
    status: "Updated successfully",
    data: findContact,
  });
};

export default editContact;
