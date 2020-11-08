import CountdownTimer from './js/countdownTimer';
import { updateClockFace } from './js/updateClockFace';
import './styles.scss';


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January  01 , 2021'),
  onTick: updateClockFace,
}

);

 timer.startTimer()


 



