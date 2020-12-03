var express = require('express');
var router = express.Router();

/* GET home page. */

const anaSayfa= function(req, res, next) {
  res.render('mekanlar-liste', { title: 'Anasayfa ', 'footer':' Hasan  MERCAN  2020' });
}


const mekanBilgisi= function(req, res, next) {
  res.render('mekan-detay', { title: 'Mekan Bilgisi ', 'footer':' Hasan  MERCAN  2020 ' });
}
const yorumEkle= function(req, res, next) {
  res.render('yorum-ekle', { title: 'yorumEkle ', 'footer':' Hasan  MERCAN  2020 ' });
}
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle

}