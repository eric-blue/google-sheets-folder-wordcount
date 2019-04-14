# Google Sheets Wordcount For All Google Docs Files in Folder.

## What, Why?

Using [custom functions](https://developers.google.com/apps-script/guides/sheets/functions), I felt a need for a total wordcount of a novel l I'd been working on.

## How
* Place all docs into a folder in your Drive
* In the same folder, create a new Google Sheet and call it "WordCount"
* Inside the [script editor](https://developers.google.com/apps-script/guides/docs), cut and paste the `script.js` contents into the editor.
* Save the script and return to your Google sheet. (Make sure to hard-refresh the Google Sheets window in order to grab the most up-to-date script)
* Run the script by clicking the new *Script* option from the toolbar and select *"Get wordcount for files in this folder"*
