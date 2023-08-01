export default function handler(req, res) {
  if (req.method == 'POST') {
    const { email, name, phoneNumber, subject, message } = req.body;

    console.log('This is a drill', email, name, phoneNumber, subject, message);

    return res.status(200).json({
      message: 'success',
    });
  }
}
