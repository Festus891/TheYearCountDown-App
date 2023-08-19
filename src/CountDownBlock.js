import React, { useEffect, useState } from 'react'
import './CountDown.css';

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
            <h1>CountDownApp</h1>
        </div>

        <div className='take_charge'>
                <h2>Keep track of the Numbers of Months, weeks, days left in a year</h2>
        </div>

        
        <div className="flex-container">
            <div className="content">
                <h3 id = "months">{months}</h3>
                <p>months</p>
            </div>
            <div className="content">
                <h3 id="weeks">{weeks}</h3>
                <p>weeks</p>
            </div>
            <div className="content">
                <h3 id = "days">{days}</h3>
                <p>days</p>
            </div>
            <div className="content">
                <h3 id = "hours">{hours}</h3>
                <p>hours</p>
            </div>
            <div className="content">
                <h3 id = "minutes">{mins}</h3>
                <p>minutes</p>
            </div>
            <div className="content">
                <h3 id = "seconds">{seconds}</h3>
                <p>seconds</p>
            </div>
        </div>
</div>
  )
}

export default CountDownBlock
