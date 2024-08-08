import React, { useEffect } from 'react'
import { useState } from 'react'
import Chart  from 'react-google-charts'



const LineChart = ({historicalData}) => {


    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(()=>{
        let dataCopy = [["Date", "Prices"]];
        if(historicalData.prices){
            historicalData.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleString().slice(0,-5)}`, item[1]]);
            })
            setData(dataCopy);
        }
    },[historicalData])

  return (
    <div>
    <Chart 
    chartType="LineChart"
    data={data} 
    width='100%'
    legendToggle
     />
    </div>
  )
}

export default LineChart