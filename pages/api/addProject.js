import connectDb from "@/middleware/mongoose";
import Projects from "@/models/Projects";




const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      console.log(req.body);
      const newCard = new Projects({
        name: req.body.name,
        heading: req.body.heading,
        content: req.body.content,
        links: req.body.links
      });

      await newCard.save();
      console.log("okay");
      return res.status(200).json({ success: true, msg: "New Project Added Successfuly.." });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ success: false, msg: "Server error..Contact the Developers." });
    }
  }
};

export default connectDb(handler);