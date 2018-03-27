import React from 'react';
import { Chart } from 'react-google-charts';

const LineChart = (props) => {

    return(
        <div>
            <Chart
                chartType="LineChart"
                data={[['Data', props.currencyName], [8, 12], [4, 5.5]]}
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