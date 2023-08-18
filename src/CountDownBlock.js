import React, { useEffect, useState } from 'react'
import './CountDown.css';
import clock from './clock.png'

function CountDownBlock() {
    const[months, setMonths] = useState(0)
    const[weeks, setWeeks] = useState(0)
    const[days, setDays] = useState(0)
    const[hours, setHours] = useState(0)
    const[mins, setMins] = useState(0)
    const[seconds, setSeconds] = useState(0)

    const nextYear ="25 dec 2023"

    const calcTimeLeft = () =>{
        const nextYearDate = new Date(nextYear);
        const currentDate = new Date();
        const totalSeconds = Math.floor((nextYearDate - currentDate) / 1000);

        setMonths(Math.floor(totalSeconds / 3600 /24 / 30));
        setWeeks(Math.floor(totalSeconds / 3600 /24 / 7));
        setDays(Math.floor(totalSeconds / 3600 /24));
        setHours(Math.floor(totalSeconds / 3600) % 24);
        setMins(Math.floor(totalSeconds / 60) % 60)
        setSeconds(Math.floor(totalSeconds) % 60)
    };

    useEffect(() =>{
        calcTimeLeft();
        const interval = setInterval(calcTimeLeft, 1000);

        return () =>{
            clearInterval(interval);
        }
    }, [])

  return (
    <div className="main_container">
        <div className='header'>
            <div className='header_left'>
                <h1>CountDownApp</h1>
            </div>
            
        </div>

        <div className='take_charge'>
                <h2>Take charge of Your Life Now...</h2>
        </div>

        <div className='text'>
            <p>Now is the time you have to work on yourself</p>
            <p> Be Aware The time is Ticking {seconds}</p>
            <p>The Year is running Out - <span>STAY MOTIVATED KING</span></p>

        </div>

        <img src={clock} alt='clock' /> 
        <div className="flex-container">
            <div className="month">
                <h3 id = "months">{months}</h3>
                <p>months</p>
            </div>
            <div className="wee">
                <h3 id="weeks">{weeks}</h3>
                <p>weeks</p>
            </div>
            <div className="days">
                <h3 id = "days">{days}</h3>
                <p>days</p>
            </div>
            <div className="hours">
                <h3 id = "hours">{hours}</h3>
                <p>hours</p>
            </div>
            <div className="minutes">
                <h3 id = "minutes">{mins}</h3>
                <p>minutes</p>
            </div>
            <div className="seconds">
                <h3 id = "seconds">{seconds}</h3>
                <p>seconds</p>
            </div>
        </div>
</div>
  )
}

export default CountDownBlock