const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.createHash();
        this.nonce = 0;
    }

    createHash() {
        return SHA256(this.index + this.date.toString() + this.data + this.nonce + this.previousHash).toString();
    }

    minar(dificultad) {
        while (!this.hash.startsWith(dificultad)) {
            this.nonce++;
            this.hash = this.createHash();
        }
    }

}

module.exports = Block;