class Scheduler {
  private queue: (() => Promise<void>)[];
  private maxCount: number;
  private runCounts: number;

  constructor(limit: number) {
    this.queue = [];
    this.maxCount = limit;
    this.runCounts = 0;
  }

  add(time: number, order: string): void {
    const promiseCreator = (): Promise<void> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(order);
          resolve();
        }, time);
      });
    };
    this.queue.push(promiseCreator);
  }

  taskStart(): void {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }

  private request(): void {
    if (this.queue.length === 0 || this.runCounts >= this.maxCount) {
      return;
    }
    this.runCounts++;
    const promiseCreator = this.queue.shift();
    if (promiseCreator) {
      promiseCreator()
        .then(() => {
          this.runCounts--;
          this.request();
        })
        .catch((error) => {
          console.error('Error:', error);
          this.runCounts--;
          this.request();
        });
    }
  }
}

const scheduler = new Scheduler(2);

const addTask = (time: number, order: string): void => {
  scheduler.add(time, order);
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.taskStart();