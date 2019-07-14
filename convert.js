const fs = require('fs')
const path = require('path')

try {

    const data = fs.readFileSync(path.resolve(__dirname, 'firebase/codes.txt')).toString()

    const codes = data.split(/\r?\n/)

    const collection = {
        codes
    }

    fs.writeFileSync(path.resolve(__dirname, 'firebase/codes.json'), JSON.stringify(collection, null, 4))

    console.log(`Converted codes to json`)

}

catch (err) {
    console.warn(err)
}