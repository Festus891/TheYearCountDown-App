import React, { Component } from 'react'
import './Countdown.css'

class CountDownBlock extends Component {    
    
    
  render() {
    const monthsEl = document.getElementById("months");
    const weeksEl =  document.getElementById("weeks");
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // declare a variable holding date string format to be use in a function
    const nextYear = "25 dec 2023";

    // declaring the countdown timer function 
    function countdownTimer() {
        const nextYearDate = new Date(nextYear); //variable of currentYear
        const currentDate = new Date(); //variable of current date 
        const totalSeconds = (nextYearDate - currentDate) / 1000; //totalseconds from the begining of the year till current date(now)
        const months = Math.floor(totalSeconds / 3600 / 24 / 30);
        const weeks = Math.floor(totalSeconds / 3600 / 24 / 30 * 4 )
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600 % 24);
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        monthsEl.innerHTML = months;
        weeksEl.innerHTML = weeks
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minsEl.innerHTML = mins;
        secondsEl.innerHTML = seconds;
    }

    countdownTimer();
    setInterval(countdownTimer, 1000);

    return (
            <h1>hi</h1>
    )
  }
}

export default CountDownBlock