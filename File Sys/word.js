const fs = require('fs');

fs.readFile("newText.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const words = data.split(/\s+/);

        for (let word of words) {
            console.log(word);
        }
    }
});