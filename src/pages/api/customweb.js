import connectMongo, { closeMongo } from "../../../utils/connectMongo";
import CustomWebModal from "../../../utils/CustomWebModal";

export default async function handler(req, res) {
  try {
    console.log("hiii", req.body);
    await connectMongo();
    const { id } = req.body;
    console.log("ids", id);
    const user = await CustomWebModal.findOne({ _id: id });
    console.log("user", user);
    if (user) {
      await closeMongo();
      return res.status(200).json({ Sucess: "User Found", user });
    }
    if (!user) {
      await closeMongo();
      return res.status(400).json({ error: "User Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
