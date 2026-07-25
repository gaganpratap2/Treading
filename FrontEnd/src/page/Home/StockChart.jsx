import { Button } from '@/components/ui/button';
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';


const timeSeries = [
    {
        Keyword : "Digital_currency_DAILY",
        key: "Time Series(Daily)",
        label : "1 Day",
        value: 1,
    },

    {
        Keyword : "Digital_currency_WEEKLY",
        key: "WEEKLY time Series ",
        label : "1 Week",
        value: 7,
    },

    {
        Keyword : "Digital_currency_MONTHLY",
        key: "Monthly Time Series",
        label : "1 Month",
        value: 30,
    }
]


const StockChart = () => {

    const [activeLabel , setActiveLabel] = useState("1 Day");

    const handleActiveLabel = (label) => {
        setActiveLabel(label);
    }

    const searies = [
        {
            data :[ [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ],
            [73872438724823289 , 83982.3281389237 ] ]
        }
    ];

    const options = {
        chart : {
            id : 'area-datetime',
            type : 'area',
            height : 450,
            zoom : {
                autoScaleYaxis : true
        }
    },
    dataLabels : {enabled : false},
    xaxis:{
        type : 'datetime',
        min : new Date('01 Mar 2012').getTime(),
        tickAmount : 6
    },
    colors : ["#FFA41B"],
    markers : {
        color : ["#FFA41B"],  
        strokeColor : '#FFA41B',
        strokeWidth : 2,
        style : "hollow",
        size : 0
    },
    tooltip : {
        theme : 'dark',
    },
    fill : {
        type : 'gradient',
        gradient : {
            shadeIntensity : 1,
            opacityFrom : 0.7,
            opacityTo : 0.9,
            stops : [0, 100]
        }
    },

    grid : {
        borderColor : '#f1f1f1',
        strokeDashArray : 4,
        show : true,
    }
}
  return (
    <div>
        <div className="space-x-3">
            {timeSeries.map((item) => <Button onClick={() => handleActiveLabel(item.label)} key={item.value} className={`px-4 py-2 rounded-md ${activeLabel === item.label ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                {item.label}

            </Button>
            )
        }
        </div>

        <div className="" id="chart-timeline">
            <ReactApexChart 
                options={options}
                series={searies}
                type="area"
                height={450}
            />
        </div>
    </div>
  )
}

export default StockChart