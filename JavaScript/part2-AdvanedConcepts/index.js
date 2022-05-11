function StopWatch() {
  // private
  let startTime,
    endTime,
    runningFlag,
    duration = 0;

  this.start = function () {
    if (runningFlag) {
      throw new Error("Stopwatch has already started.");
    }

    runningFlag = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!runningFlag) {
      throw new Error("Stopwatch is not started.");
    }

    runningFlag = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    runningFlag = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    //getter
    get: function () {
      return duration;
    },
  });
}
