// include react 
import React from 'react';

// include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// include the fusioncharts library
import FusionCharts from 'fusioncharts';

// include the chart type 
import Pie3D from 'fusioncharts/fusioncharts.charts'

// include the theme as fusion 
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

//adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Pie3D, FusionTheme);


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


const Pie3DComponent = ({data}) =>{

  const chartConfigs = {
    type: 'pie3D', // the chart type 
    width: '100%',
    height: '400',
    dataFormat: 'json', // data type 
    dataSource: {
      // chart configuration
      chart: {
        caption: 'Stars Per Language',
        decimals: 0,
        doughnutRadius: '45%',
        showPercentValues: 0,
        theme: 'fusion'
      },
      // chart data 
      data: data
    }
  };

  return <ReactFC {...chartConfigs} />
};

export default Pie3DComponent;
