import { Router } from "express";
import Text from "../models/text.js";
const router = Router();

const genTextId = () => {
  return Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
};


//-------------------------------------------------------------------
router.post("/post", async (req, res) => {
  const text_id = genTextId();
  const { text } = req.body;

  const newText = await Text.create({
    text_id,
    text: text
  });
  //add send text logid
  //the text id also sholud be send with the text to the db
  // set the expiray time of

  res.json({
    message: "text created sucussfully",
    text_id
  });
});

 

//-------------------------------------------------------------------
router.get("/get", async  (req, res) => {
    const {text_id} =  req.query
    
    const fetchText = await Text.findOne({
        text_id
    })

    const text = fetchText.text;


  res.json({
    text
  })
  //fetch the data from database and if there is matching id in the db
});

export default router;


