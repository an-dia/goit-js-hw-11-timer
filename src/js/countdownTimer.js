import { updateClockFace } from './updateClockFace';

export default class CountdownTimer { 
  constructor({selector, targetDate, onTick}) {
    this.intervalId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;

   this.refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  title: document.querySelector('.title'),
  animation: document.querySelectorAll('.animation'),
}
// console.log(this.refs.animation);
  }

  startTimer() {
    if (this.targetDate === Date.now()) {
      this.stopTimer()
      
      return
    }
   
      this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
      
      }, 1000);
    
    
    
  }

  stopTimer() {
    this.refs.title.textContent = 'Happy New Year';
       
    this.refs.animation.forEach((a) => {
    a.classList.remove("animation")
    })
    
   clearInterval(this.intervalId)
    // this.onTick(0);
  }
  
  getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24))) ;
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))) ;
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))) ;
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000)) ;
  
  return { days, hours, mins, secs };
  }
  
  pad(value) {
  return String(value).padStart(2, '0');
}
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January  01 , 2021'),
  onTick: updateClockFace,
}

);