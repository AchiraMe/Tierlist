export default async function handler(req, res) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/data`);
    const data = await response.json();
    res.status(200).json(data);
  }