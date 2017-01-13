const express = require('express');
const fs = require('fs');
const moment = require('moment');
const app = express();
//moment().format();

app.get('/:path', (req, res) => {
  let params = req.params.path;
  
  if (params) {
    let newDate;
    let nowNew = params;
    
    if (nowNew.match(/^[0-9]*$/)) {
      newDate = moment(nowNew, "X");
    } else {
      newDate = moment(nowNew, "MMMM D, YYYY");
    }
    
    if (newDate.isValid()) {
      res.send({
        unix: newDate.format("X"),
        natural: newDate.format("MMMM D, YYYY")
      });
    } else {
      res.send({
        unix: "error",
        natural: "error"
      });
    }
    
    res.send('hello world');
  }
});

app.use((req, res, next) => res.status(404).send('not found'));

app.listen(8080, () => {
    console.log('listen');
});
