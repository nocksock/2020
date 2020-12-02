const fs = require('fs');

fs.readFile('./day2-input.txt', 'utf-8', (err, data) => {
    const lines = data.trim().split(/\r?\n/);
    const validPasswords = lines.filter(line => {
        const [amount, character, password] = line
              .replace(":", "")
              .split(" ")
        const [min, max] = amount.split('-').map(i => parseInt(i))
        const contained = password.replace(new RegExp(`[^${character}]`, "gi"), "");


        return contained.length >= min && contained.length <= max
    })

    console.log(`Valid Passwords: ${validPasswords.length}`)
})
