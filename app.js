const XLSX = require('xlsx');

function readExcel(ruta) {
  const workbook = XLSX.readFile(ruta);
  const workbookSheets = workbook.SheetNames;

  const sheet = workbookSheets[0];
  const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

  //console.log(dataExcel);
  for (const itemnFila of dataExcel) {
    console.log(itemnFila['Nombre']);

  }


}

readExcel('baseDeDatos.xlsx');