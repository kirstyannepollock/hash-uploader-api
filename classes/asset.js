'use strict';
 
class Asset {
    constructor(hash, fileName, description, content, contentType) {
        this.hash = hash;
        this.fileName = fileName;
        this.description = description;

        // ...might not be the best of ideas for images or video
        // but will do for the XML example for now.
       // this.content = content;
        this.contentType = contentType;
    }
}
 
module.exports = Asset;