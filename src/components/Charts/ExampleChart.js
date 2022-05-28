// include react 
import React from 'react';

// include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// include the fusioncharts library
import FusionCharts from 'fusioncharts';

// include the chart type 
import Column2D from 'fusioncharts/fusioncharts.charts'

// include the theme as fusion 
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

//adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


// STEP 2: CHART DATA 

const chartData = [
  {
    label: 'Venezuela',
    value: '290'
  },
  {
    label: 'Saudi',
    value: '260'
  },
  {
    label: 'Canada',
    value: '180'
  },
  {
    label: 'Iran',
    value: '140'
  }
]


const ChartComponent = ({data}) =>{
  const chartConfigs = {
    type: 'column2d', // the chart type 
    width: '500', // width of the chart 
    height: '400', // height of the chart 
    dataFormat: 'json', // data type 
    dataSource: {
      // chart configuration
      chart: {
        //set the chart caption
        caption: 'Countries with most oil reverses [2017-2018]',
        // set the chart subcaption
        subCaption: 'In MMbbl = One Million barrels',
        // set the x-asis name 
        xAxisName: 'Country',
        // set the y-axis name 
        yAxisName:'Reserves (MMbbl)',
        numberSuffix: 'K',
        // set the themefor your chart 
        theme: 'fusion'
      },
      // chart data 
      data : data
    }
  };

  return <ReactFC {...chartConfigs} />
};

export default ChartComponent;
