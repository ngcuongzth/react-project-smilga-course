// include react 
import React from 'react';

// include the react-fusioncharts component
import ReactFC from 'react-fusioncharts'

// include the fusioncharts library
import FusionCharts from 'fusioncharts';

// include the chart type 
import Column3D from 'fusioncharts/fusioncharts.charts'

// include the theme as fusion 
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

//adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column3D, FusionTheme);




const ChartComponent = ({data}) =>{
  const chartConfigs = {
    type: 'column3d',        // the chart type 
    width: '100%',           // width of the chart 
    height: '400',           // height of the chart 
    dataFormat: 'json',     // data type 
    dataSource: {
      chart: {
        caption: 'Most Popular',
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        yAxisNameFontSize: '16px',
      },
      data
    }
  };

  return <ReactFC {...chartConfigs} />
};

export default ChartComponent;
