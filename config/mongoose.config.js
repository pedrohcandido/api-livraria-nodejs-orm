import mongoose from "mongoose";

async function connect() {
  const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
  return await mongoose.connect("mongodb://localhost:27017/livraria" ,{ useNewUrlParser: true, useUnifiedTopology: true })
}

export { connect }