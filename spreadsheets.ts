const spreadSheetName = "TS-101"
const sheetName = "My Main Experimental Sheet"

const createSheet = () => {
    const spreadsheet = SpreadsheetApp.create(spreadSheetName);
    const activeSheet = spreadsheet.getActiveSheet();
    activeSheet.setName(sheetName)
}

type Transaction = {
    name: string,
    amount: number,
    when: Date,
}
const main = () => {
    const file = DriveApp.getFilesByName(spreadSheetName).next();
    const spreadsheet = SpreadsheetApp.open(file);
    const sheet = spreadsheet.getSheetByName(sheetName);
    spreadsheet.setActiveSheet(sheet);
    console.log(`${spreadsheet.getUrl()}`)

    const addTransaction = (t: Transaction) => {
        // Adding a row
        sheet.appendRow([t.name, t.amount, t.when])
    }
    addTransaction({name: "Drip Coffee", amount: 10.22, when: new Date()})

}