const xlsx = require("xlsx");
const fs = require("fs")

// Read the data from excel and store the data into json

let wb = xlsx.readFile('./Data.xlsx',{cellDates:true})
console.log(wb)
console.log(wb.SheetNames)

//Program - 2 Reading a particular sheet

let ws =  wb.Sheets["products"]
console.log(ws)
console.log('---------------------------------------')
let qa = xlsx.utils.sheet_to_json(ws)
console.log(qa)

fs.writeFileSync('./data.json',JSON.stringify(qa,null, 2))
