const spreadSheetName = "TS-101"
const sheetName = "My Main Experimental Sheet"

const createSheet = () => {
    const spreadsheet = SpreadsheetApp.create(spreadSheetName);
    const activeSheet = spreadsheet.getActiveSheet();
    activeSheet.setName(sheetName)
}

const main = () => {
    const file = DriveApp.getFilesByName(spreadSheetName).next();
    const spreadsheet = SpreadsheetApp.open(file);
    const sheet = spreadsheet.getSheetByName(sheetName);
    spreadsheet.setActiveSheet(sheet);
    console.log(`${spreadsheet.getUrl()}`)
}