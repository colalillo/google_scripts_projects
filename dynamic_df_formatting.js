function formatDF() {

    let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    let df = sheet.getDataRange();
  
    let headerLength = df.getValues()[0].length
    let headerRange = sheet.getRange(1, 1, 1, headerLength);
    
    df.setFontFamily("Roboto");
    df.setFontColor('#000000');
    df.setBackground("#ffffff");
    df.setHorizontalAlignment("center");
    df.setBorder(true, true, true, true, true, true, "#000000", SpreadsheetApp.BorderStyle.SOLID);
  
    headerRange.setFontWeight("bold");
    headerRange.setFontColor("white");
    headerRange.setBackground("#666666");
  
    df.createFilter();
  }
  
  
  function onOpen() {
    let ui = SpreadsheetApp.getUi();
    ui.createMenu('Custom Formatting').addItem("Custom Table Format 1", "formatDF").addToUi();
  } 