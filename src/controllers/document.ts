import { Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { Document } from "../models";
import {Op} from "sequelize";

export const addDocument = async (req: Request, res: Response) => {
  const { documentText } = req.body;
  console.log(documentText);
  try {
    await Document.create({
        content: documentText
    });
    return res.json({ message: "Document added successfully!"});
  } catch (err) {
    console.error(err);
    res
      .status(HttpStatus.BAD_REQUEST)
      .json({ message: "Can not add document. Please try again." });
  }
};

export const searchDocuments = async (req: Request, res: Response) => {
    try {
        // console.log(req.headers);
        const { searchtext } = req.headers;
        // console.log(req.headers);
        console.log(searchtext);
        let searchOption = {};
        if(searchtext) {
            searchOption = {
                [Op.or]: {
                content: {
                    [Op.like]: `%${searchtext}%`
                },
                },
            }
        }
        let documents: any = await Document.findAll({
            where: {
                ...searchOption,
            },
            attributes: ['id', 'content']
        });
        return  res.status(HttpStatus.OK).json({ documents });
    } catch (err) {
      console.error(err);
      res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: "Can not fetch documents. Please try again." });
    }
  };