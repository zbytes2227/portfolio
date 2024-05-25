const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String },
    heading: { type: String },
    content: { type: String },
    links: {type: Array}
  },
  { collection: "all-Projects" },
  { timestamps: true }
);

mongoose.models = {};
const Projects = mongoose.model("Projects", ProjectSchema);
module.exports = Projects;