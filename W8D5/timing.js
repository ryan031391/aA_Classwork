class Clock {
    constructor() {
        
      // 1. Create a Date object.
      const date = new Date();  
      // 2. Store the hours, minutes, and seconds.
      this.hour = date.getHours(); // ("0" + date.getHours()).slice(-2);
      this.min = date.getMinutes();
      this.sec = date.getSeconds(); // ("0" + date.getSeconds()).slice(-2);
      // 3. Call printTime.
      this.printTime();
      // 4. Schedule the tick at 1 second intervals.
      setInterval(this._tick.bind(this), 1000);
    }
  
    printTime() {
        let second = `${this.sec}` 
        if (this.sec < 10) {
            second = `0${this.sec}` ;
        }
        let minute = `${this.min}` 
        if (this.min < 10) {
            minute = `0${this.min}` ;
        }
        let hours = `${this.hour}` 
        if (this.hour < 10) {
            hours = `0${this.hour}` ;
        }
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        
        console.log(`${hours}:${minute}:${second}`);
    
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
        this.sec++;
        if (this.sec === 60) {
            this.sec = 0;
            this.min++;
        }
        if (this.min === 60) {
            this.min = 0;
            this.hour++;
        }
        if (this.hour === 24) {
            this.hour = 0;
        }
        this.printTime();
    }
  }
  
  const clock = new Clock();
  console.log(clock);

