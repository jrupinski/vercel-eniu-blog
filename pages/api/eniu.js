// req = HTTP incoming message, res = HTTP server response
export default function dupa(req, res) {
  const words = ["Siema Eniu", "Siema Heniu"];
  const randomElement = words[Math.floor(Math.random() * words.length)];
  res.status(200).json({ text: randomElement });
}
