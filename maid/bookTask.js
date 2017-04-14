const path = require('path');

class BookTask {
    constructor(url, name, total) {
        this.url = url;
        this.name = name;
        this.total = total;
        this.dest = './';
        this._complete = false;
        this._start = false;
        this._onCompleted = null;
        this.fn = null;
    }

    setDest(parent) {
        this.dest = path.join(parent, this.name);
    }

    setFn(fn) {
        this.fn = fn;
    }

    start() {
        console.log(name, 'start!');
        this._start = true;
        if (this.fn) {
            this.fn(this).then(() => this.complete());
        } else {
            console.error('BookTask: no fn specified.');
        }
    }

    isRunning() {
        return this._start;
    }

    complete() {
        if (!this._completed) {
            this._completed = true;
            this._start = false;
            if (this._onCompleted) {
                this._onCompleted();
            }
            return true;
        }
    }

    isCompleted() {
        return this._completed;
    }

    isWaiting() {
        return !(this.isRunning() || this.isCompleted());
    }

    onCompleted(cb) {
        this._onCompleted = cb;
    }
}

module.exports = BookTask;