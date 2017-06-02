// Start with the constructor
function Timer(name) {
    this.name = name;
    this.checkpointThreshold = 20; // ignore checkpoints with elapsed time since last checkpoint less than (ms)
    this.timerThreshold = 100; // ignore timer end with elapsed time since start less than (ms)
    this.startTime = new Date();
    this.lastCheckpointTime = this.startTime;
}

// Now add methods

Timer.prototype = {

    constructor: Timer,

    start: function () {
        this.startTime = new Date();
        return "Timer(" + this.name + ") start vvv";
    },

    end: function () {
        var elapsed = new Date() - this.startTime;
        if (elapsed > this.timerThreshold) {
            return "Timer(" + this.name + ") elapsed " + elapsed + " ms ^^^";
        }
    },


    checkpoint: function (tag) {
        var checkpointTime = new Date();
        var elapsed = checkpointTime - this.lastCheckpointTime;
        this.lastCheckpointTime = checkpointTime;
        if (elapsed > this.checkpointThreshold) {
            return "Timer(" + this.name + ") elapsed " + elapsed + " ms @ " + tag;
        }
    }
};

