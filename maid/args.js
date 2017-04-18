const {ipcRenderer} = require('electron');

class Args {

    constructor() {
        this._promise = new Promise(resolve => this._resolve = resolve);
        ipcRenderer.on('path', (event, message) => {
            // console.log('path:', message);
            this.path = message;
            this.check();
        });
        ipcRenderer.on('port', (event, message) => {
            // console.log('port:', message);
            this.port = message;
            this.check();
        });
    }

    check() {
        if (this._resolve && this.path && this.port) {
            this._resolve();
        }
    }

    wait() {
        return this._promise;
    }
}

module.exports = new Args();
