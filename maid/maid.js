class MaidConfig {
    constructor() {
        this.maxRunningTasks = 5;
    }
}

class Maid {
    constructor(config) {
        this.config = config || new MaidConfig();
        this.q = [];
    }

    get() {
        return this.q;
    }

    add(task) {
        this.q.push(task);
        task.onCompleted(() => this.start());
    }

    start() {
        const running = this.q.filter(t => t.isRunning());
        const waiting = this.q.filter(t => t.isWaiting());
        const availableNum = this.config.maxRunningTasks - running.length;
        if (availableNum > 0) {
            waiting.slice(0, availableNum).forEach(t => t.start());
        }
    }
}

module.exports = Maid;
