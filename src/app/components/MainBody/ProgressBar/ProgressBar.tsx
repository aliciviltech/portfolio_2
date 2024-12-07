import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({bgColor, percent}:{bgColor:string, percent:number}) => {
  if(percent>80){
    bgColor = 'green'
  } else if(percent>60){
    bgColor = 'blue'
  } else if(percent>40){
    bgColor = 'royalblue'
  }
    const progressValues ={
        bgColor: bgColor,
        percent: percent
    }
  return (
    <>
        progress bar
    <div className='ProgressBarContainer'>
        <div className="progressBar" style={{backgroundColor:`${progressValues.bgColor}`, width:`${progressValues.percent}%`}}></div>

    </div>
    </>
  )
}

export default ProgressBar