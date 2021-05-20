import React from 'react';
import {getDayFromDate, getMonthFromNum} from "./utilities"

class Clock extends React.Component{
  constructor(){
    super();
    const time = new Date()
    this.state = {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds(),
      date: time.getDate(),
      day: getDayFromDate(time.getDay()),
      month: time.getMonth(),
      year: time.getFullYear()
    }
  
  }

  componentDidMount(){
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  updateDay(){
    const time = new Date();
    this.setState({
      date: time.getDate(),
      day: getDayFromDate(time.getDay()),
      month: time.getMonth(),
      year: time.getFullYear()
    })
  }

  tick(){
    const time = new Date()
    this.setState({
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    }, () => {
      if(this.state.hours === 0){
        this.updateDay()
      }
    })
  }

  render(){
    const hours = (this.state.hours < 10) ? "0" + this.state.hours : this.state.hours;
    const minutes = (this.state.minutes < 10) ? "0" + this.state.minutes : this.state.minutes;
    const seconds = (this.state.seconds < 10) ? "0" + this.state.seconds : this.state.seconds;
    const date =  this.state.day + " " + getMonthFromNum(this.state.month) + " " + 
     this.state.date + " " + this.state.year;
    return (
      <div className='clock'>
      <h1>Clock</h1>
        <div>
          <div className="contentBox">
            <h1>Time:</h1> <p>{hours}:{minutes}:{seconds} PDT</p>
          </div>
          <div className="contentBox">
            <h1>Date:</h1> <p>{date}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock;