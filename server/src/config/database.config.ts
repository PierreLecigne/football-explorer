import mongoose from "mongoose";

class Connection {
  constructor() {
    const url = process.env.MONGODB_URI!;
    console.log("New connection to database", url);

    mongoose.Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);

    mongoose.connect(url);
  }
}

export default new Connection();
