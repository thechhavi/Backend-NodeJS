const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get('/setcookie', (req, res) => {
    res.cookie("Uname", "SectionFC", {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false
    });
    res.send("Successfully set cookie");
});
app.get('/getcookie', (req, res) => {
    const data=req.cookies.Uname
    if(data) res.send(data)
    else res.send("Cookies not found")
});
app.get('/delete1', (req, res) => {
    res.clearCookie("Uname");
    res.send("Cookie deleted using clearCookie()");
});
app.get('/delete2', (req, res) => {
    res.cookie("Uname", "", {
        expires: new Date(0)  
    });
    res.send("Cookie deleted using expiry date");
});
app.get('/delete3', (req, res) => {
    res.cookie("Uname", "", {
        maxAge: 0
    });
    res.send("Cookie deleted using maxAge 0");
});

/*app.get('/cookie_info', (req, res) => {
    console.log(req.cookies); 

    res.send(`
        <h2>Your Cookies:</h2>
        <pre>${JSON.stringify(req.cookies, null, 2)}</pre>
    `);
});*/
app.listen(3000, () => {
    console.log("Server running on port http://localhost:3000/setcookie");
}); 