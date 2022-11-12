import connectMongo from "../../../utils/connectMongo";
import ContactModal from "../../../utils/ContactModal";

export default async function handler(req, res) {
  try {
    await connectMongo();
    const { first_name, last_name, email, subject, message } = req.body;
    console.log(req.body);
    const contactForm = await ContactModal.create({
      first_name,
      last_name,
      email,
      subject,
      message,
    });
    return res.status(200).json({
      message: "Contact Form Send successfully",
      contactForm,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: error.message,
      message: "Something went wrong",
    });
  }
}
