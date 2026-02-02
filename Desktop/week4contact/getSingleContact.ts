import { Request, Response } from "express";
import { contacts } from "./contacts";

const getSinglecontact = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  res.status(200).json({
    data: contacts.find((el: any) => {
      return el.id === id;
    }),
  });
};

export default getSinglecontact;
