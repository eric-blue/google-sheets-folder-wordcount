function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuItems=[{name: 'Get wordcount for files in this folder', functionName: 'getFiles'}];
  ss.addMenu('Script', menuItems);
};

function getFiles() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ssId = ss.getId();
  
  var folderId = DriveApp.getFileById(ssId).getParents().next().getId();
  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();
  
  var filenames = new Array();
  filenames.push(['File Name','URL', 'Word Count']);
  var i = 0;
  while(files.hasNext()) {
    var file = files.next();
    var ft = file.getMimeType();
    if (ft == 'application/vnd.google-apps.document') {
      filenames.push([file.getName(),file.getUrl(), getWordCount(file.getId())]);
    }
    i++
  }
  filenames.push(['','','']); // row break
  filenames.push(['','Total Word Count', '=SUM(C2:C' + i + ')']);
  
  var s = ss.getSheetByName('Main Sheet');
  s.getRange('A:C').clearContent();
  s.getRange(1,1,filenames.length,filenames[0].length).setValues(filenames);
};

function getWordCount(id) {
  var doc = DocumentApp.openById(id).getBody();
  var st = doc.getText();
    st.replace(/\n/g, ' ') + ' ';
    st = st.split(' ').length;
    return st;
};
