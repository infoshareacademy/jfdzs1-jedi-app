import React from 'react';
import { Chart } from 'react-google-charts';

const LineChart = (props) => {
   const {currencyRates} = props;

    return(
        <div>
            <Chart
                chartType="LineChart"
                data={currencyRates}
                options={{
                    hAxis: {title: 'Data'},
                    vAxis: {title: 'Wartość (PLN)'}
                }}
                graph_id="ScatterChart"
                width="100%"
                height="400px"
            />
        </div>
    );
};

export default LineChart;