// importing
import express from "express";
// const Pusher = require("pusher");
import Pusher from 'pusher'
import cors from 'cors'

import mongoose from "mongoose";
import Messages from "./dbMessages.js";

//app config
const app = express();
const port = process.env.PORT || 9001;

// moddilware

app.use(express.json());
app.use(cors())


   const db=mongoose.connection;
  db.once("open",()=>{
    console.log("DB connected")
    const msgCollection =db.collection("messagecontents")
    const changeStream =msgCollection.watch()
    changeStream.on("change", (change)=>{
        console.log("a change occurs",change)
        if (change.operationType==='insert'){
          const messageDetails =change.fullDocument;
          pusher.trigger('messages','inserted',{
            name:messageDetails.name,
            message:messageDetails.message,
            timestamp:messageDetails.timestamp,
            recevied :messageDetails.recevied
          })

        }
          else{
            console.log('error triggering pusher')
          }
    });

  });

const connection_url = "mongodb+srv://mohddaniyal365:kaif@cluster0.ovor8bc.mongodb.net/";
// mongodb://localhost:27017/whatsapp-mern
// mongodb+srv://mohddaniyal365:<password>@cluster0.ovor8bc.mongodb.net/
const pusher = new Pusher({
    appId: "1600949",
    key: "34e02ec70d2258515213",
    secret: "046b06f4a4af0b2afc0d",
    cluster: "ap2",
    useTLS: true
  });




mongoose
  .connect(connection_url, {})
  .then(() => {
    console.log("connection successfull");
  })
  .catch((e) => {
    console.log("connection fail");
  });

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", async (req, res) => {
  try {
    const FindMessage = await Messages.find();
    res.status(201).send(FindMessage)
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/messages/new", async (req, res) => {
  try {
    const dbMessage = req.body;
    console.log(dbMessage);
    const newMessage = await Messages.create(dbMessage);
    res.status(201).send(newMessage);
  } catch (e) {
    res.status(400).send(e);
  }
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
