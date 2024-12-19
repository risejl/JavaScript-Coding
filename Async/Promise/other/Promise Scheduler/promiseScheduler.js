class Scheduler {
  constructor(concurrencyLimit) {
    this.taskQueue = [];
    this.concurrencyLimit = concurrencyLimit;
    this.runningTasks = 0;
  }

  addTask(delay, taskId) {
    this.taskQueue.push(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Executing task: ${taskId}`);
          resolve();
        }, delay);
      });
    });
  }

  async start() {
    console.log(
      `Starting scheduler with concurrency limit: ${this.concurrencyLimit}`
    );
    for (let i = 0; i < this.concurrencyLimit; i += 1) {
      this.executeNextTask();
    }
  }

  async executeNextTask() {
    if (
      this.taskQueue.length === 0 ||
      this.runningTasks >= this.concurrencyLimit
    ) {
      return;
    }

    this.runningTasks += 1;
    const task = this.taskQueue.shift();

    try {
      await task();
    } catch (err) {
      console.error(`Task error: ${err.message}`);
    } finally {
      this.runningTasks -= 1;
      this.executeNextTask();
    }
  }

  get pendingTasksCount() {
    return this.taskQueue.length;
  }

  get activeTasksCount() {
    return this.runningTasks;
  }
}

// Usage example
const scheduler = new Scheduler(2);

scheduler.addTask(1000, "Task 1");
scheduler.addTask(500, "Task 2");
scheduler.addTask(300, "Task 3");
scheduler.addTask(400, "Task 4");

scheduler.start();

setInterval(() => {
  console.log(
    `Active tasks: ${scheduler.activeTasksCount}, Pending tasks: ${scheduler.pendingTasksCount}`
  );
}, 500);

/*
Starting scheduler with concurrency limit: 2
Executing task: Task 2
Active tasks: 2, Pending tasks: 1
Executing task: Task 3
Executing task: Task 1
Active tasks: 1, Pending tasks: 0
Executing task: Task 4
Active tasks: 0, Pending tasks: 0
Active tasks: 0, Pending tasks: 0
Active tasks: 0, Pending tasks: 0
*/
