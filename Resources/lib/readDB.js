//open database
var db = Titanium.Database.open('sqliteDB');


//read data from table vacationDescrip
var query = "SELECT vacationName,vacationDate,vacationLocation,vacationDetail FROM vacationDescrip";//SQL read informatio from database
var resultset = db.execute(query);
var dataForDescrip = [];//information variable
var row = 0; //initail of row number
while (resultset.isValidRow()){
  Ti.API.info('resultset:   ' + 'vacationName:' + resultset.field(0) + ', vacationDate: ' + resultset.field(1) + ', vacationLocation: ' + resultset.field(2)+ ', vacationDetail: ' + resultset.field(3));
  dataForDescrip[row] = resultset.field(0) + ', ' + resultset.field(1) + ', ' + resultset.field(2) + ', ' + resultset.field(3);//vacation description
  row = row + 1;
  resultset.next();
}
//close resultset
resultset.close();



//close database
db.close();
