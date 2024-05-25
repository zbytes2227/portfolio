import connectDb from "@/middleware/mongoose";
import Projects from "@/models/Projects";


const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      // Check if the request body contains the 'cardid' field
      if (!req.body.projectid) {
        return res.status(400).json({ success: false, msg: "Missing 'projectid' in the request body." });
      }

      const projectId = req.body.projectid;

      // Find the card in the database based on the provided cardid
      const foundProject = await Projects.findOne({ name: projectId });
      console.log(" dd" + foundProject);
      if (!foundProject) {
        return res.status(404).json({ success: false, msg: "Project not found." });
      }

      // Return the details of the found card as a JSON response
      return res.status(200).json({ success: true, Project: foundProject });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, msg: "Server error. Contact the Developers." });
    }
  } else if (req.method === "GET") {
    try {
   

      // Find all Projects in the database
      const allProjects = await Projects.find({}, { name: 1, heading: 1, content: 1, blog: 1, _id: 0 }); // Query to select only specific fields

        return res.status(200).json({ success: true, Projects: allProjects });

      // Return the found Projects as a JSON response
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, msg: "Server error. Contact the Developers." });
    }
  }
};

export default connectDb(handler);