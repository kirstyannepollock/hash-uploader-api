'use strict';

const asset = require('../classes/asset');
const hashing = require('../hashing');
//const hasher = new hashing(); //could set algorithm here..

class AssetRepository {
    constructor() {

      
        // Create testing repo with the files keyed by their hashes
        this.assets = new Map([
            ['7pen7mWClOf5uP64ho6mxQ31BLREcLiILFwZ3h3Z8cs=', new asset('7pen7mWClOf5uP64ho6mxQ31BLREcLiILFwZ3h3Z8cs=', 'files/test-file.xml', 'XML File')],
            ['fpGq6b63eEXCcyGwmC4wRkW0mCc3iTUdHp2jiqXvJUY=', new asset('fpGq6b63eEXCcyGwmC4wRkW0mCc3iTUdHp2jiqXvJUY=', 'files/test-image.jpg', 'Image File')]
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

        var hash = hashing.getHash(asset);
        // error?
        if (hash.error) {
            return hash.error;
        } else {
            //already exists?

            asset.hash = hash;
            this.assets.set(asset.hash, asset);
            return "Added asset with hash = " + asset.hash;
        }



    }
}

const assetRepository = new AssetRepository();
module.exports = assetRepository;