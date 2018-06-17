'use strict';
const crypto = require("crypto");

class Hashing {


  static getHash(asset) {


    // use content to get hash

    //empty content is an error
    if (!asset.content || asset.content.length === 0) {
      return { error: 'content empty' };
    }

    var contentType = asset.contentType ? asset.contentType : 'binary';

    //use built in crypto to hash content
    return crypto.createHash("sha256").update(asset.content, contentType).digest("base64");

  }
}

module.exports = Hashing;