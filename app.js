const express = require('express')
const app = express()

app.get('/index', function (req, res) {
  res.send('Hello World')
  console.log("baglanti basarilii hoooppp");
})


app.get('/data', (req, res) => {
  const data = {
    id: 1,
    name: 'John Doe',
    value: 3.14
  };
  res.json(data);

  console.log("esp32den get sorgusu geldi. JSON verilerini gosteriyorum");
  console.log(data.id+" "+ data.name +" "+data.value);
});

app.get('/roomData', (req, res) => {
  const dataesp32 = {
    motorDurum: 1,
    RFID : '1234567890',
    temperature : '27',
    gazStatus : 1
  };
  res.json(dataesp32);

  console.log("\nOdanin mevcut durumu hakkinda bilgiler asagidadir");
  console.log("Motor Durumu : "+dataesp32.motorDurum+"\n"+"RFID numarası : "+ dataesp32.RFID +"\n"+"Sicaklik: "+dataesp32.temperature+"\nGaz Durumu : "+dataesp32.gazStatus);
  console.log(".........................")
});


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("sunucuya baglanti basarili...."))