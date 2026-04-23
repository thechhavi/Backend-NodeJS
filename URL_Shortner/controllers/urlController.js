const urlMod = require('../models/urlModel');
const { nanoid } = require('nanoid');
async function generateurl(req, res) {
    try {
        const { actualurl } = req.body;
        if (!actualurl) {
            return res.status(400).json({ error: "URL is mandatory" });
        }
        const shorturl = nanoid(8);
        const newUrl = await urlMod.create({
            shorturl,
            actualurl
        });
        return res.status(201).json({
            message: "Short URL created successfully",
            data: newUrl
        });
    } catch (err) {
        return res.status(500).json({ error: "Server error" });
    }
}
module.exports = { generateurl };