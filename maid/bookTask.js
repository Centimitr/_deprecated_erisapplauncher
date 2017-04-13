const path = require('path');

class BookTask {
    constructor(url, name, total) {
        this.url = url;
        this.name = name;
        this.total = total;
        this.dest = './';
    }

    setDest(parent) {
        this.dest = path.join(parent, this.name);
    }
}

module.exports = BookTask;