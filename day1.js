const fs = require('fs')
const sample = `1721
979
366
299
675
1456`

fs.readFile('day1-input.txt', 'utf-8', (err, data) => {
    console.log('result:')
    console.log(parseList(data)
    )
})

function parseList(list) {
    const entries = list.split(/\r?\n/).map(entry => parseInt(entry, 10)
)
    for (let a = entries.length-1; a >= 0; a--) {
        for (let b = entries.length-1; b >= 0; b--) {
            // console.log(entries[a] + entries[b])
            if (entries[a]+entries[b] === 2020) {
                return entries[a]*entries[b]
            }
        }
    }
}
