import db from "./createConnection"

db.tutorials.deleteOne({ channelName: "Computerphile" });