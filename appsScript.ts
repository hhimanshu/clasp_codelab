function main () {
    var doc = DocumentApp.create('Hello, world!');
    doc.getBody().appendParagraph('This document was created by Google Apps Script.');
    doc.getBody().appendParagraph("I have added this manually")
    Logger.log(doc.getUrl());
}