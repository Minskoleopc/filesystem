const xlsx = require("xlsx");
const fs = require("fs")

// Read the data from excel and store the data into json

let wb = xlsx.readFile('./Data.xlsx',{cellDates:true})
console.log(wb)
console.log(wb.SheetNames)

//Program - 2 Reading a particular sheet

// let ws =  wb.Sheets["products"]
// console.log(ws)
// console.log('---------------------------------------')
// let qa = xlsx.utils.sheet_to_json(ws)
// console.log(qa)

// fs.writeFileSync('./data.json',JSON.stringify(qa,null, 2))

// i have json file


let jsonA = JSON.parse(fs.readFileSync('./data.json','utf-8'))
console.log(jsonA)

// creating the workbook
let wb2 = xlsx.utils.book_new()
// creating the worksheet with json data
let newS = xlsx.utils.json_to_sheet(jsonA)
// append the sheet to workbook
xlsx.utils.book_append_sheet(wb2,newS,"prod")
// write to the excel
xlsx.writeFile(wb2,'add.xlsx')

// json read ---- > wb-- ws ---> wb sheet append with name ----- wb --- xlsx()









