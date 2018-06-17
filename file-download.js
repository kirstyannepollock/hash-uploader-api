'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');

class FileDownload {

  static getContent(params) {

    var filePath = __dirname + '/' + params.fileName;

    //read and send the content back in the response
    fs.readFile(filePath, function (err, content) {
      if (err) {
        console.log(err);
        return { error: "Error Reading file" };
      } else {
          params.handleContent(content);
      }
    });

  }


  static getFile(res, params) {
    var filePath = __dirname + '/' + params.fileName;

    //read and send the content back in the response
    fs.readFile(filePath, function (err, content) {
      if (err) {
        res.writeHead(404, { 'Content-type': 'text/html' })
        console.log(err);
        res.end("No such file");
      } else {
        //specify Content will be an attachment
        res.setHeader('Content-disposition', 'attachment; filename=' + params.fileName);
        res.end(content);
      }
    });

  }
}

module.exports = FileDownload;


