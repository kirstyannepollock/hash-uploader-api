'use strict';

const Asset = require('../classes/asset');
const hashing = require('../hashing');
//const hasher = new hashing(); //could set algorithm here..

class AssetRepository {
    constructor() {

      
        // Create testing repo with the files keyed by their hashes
        this.assets = new Map([
            ['7pen7mWClOf5uP64ho6mxQ31BLREcLiILFwZ3h3Z8cs=', new Asset('7pen7mWClOf5uP64ho6mxQ31BLREcLiILFwZ3h3Z8cs=', 'files/test-file.xml', 'XML File')],
            ['fpGq6b63eEXCcyGwmC4wRkW0mCc3iTUdHp2jiqXvJUY=', new Asset('fpGq6b63eEXCcyGwmC4wRkW0mCc3iTUdHp2jiqXvJUY=', 'files/test-image.jpg', 'Image File')]
        ]);
    }


    getByHash(hash) {
        return this.assets.get(hash);
    }

    getAll() {
        return Array.from(this.assets.values());
    }

    deleteAll() {
        const keys = Array.from(this.assets.keys());
        this.assets.delete(keys[keys.length - 1]);
    }

    create(asset) {
        //assumes the client call sends also the content. 
        //TO DO: save as file!!!
        var hash = hashing.getHash(
            {
                content: asset.content,
                contentType: asset.contentType
            });
        // error?
        if (hash.error) {
            return hash.error;
        } else {
            //already exists?
            asset = new Asset( asset.hash, asset.filename, asset.description, asset.contentType);
            asset.hash = hash;
            this.assets.set(asset.hash, asset);
            return "Added asset with hash = " + asset.hash;
        }



    }
}

const assetRepository = new AssetRepository();
module.exports = assetRepository;