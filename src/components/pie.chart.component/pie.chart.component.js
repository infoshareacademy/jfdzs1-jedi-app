import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = (props) => {

    return(
        <div>
            <Chart
                chartType="PieChart"
                data={props.data}
                options={{
                    title: props.name,
                    pieSliceText: 'label',
                    pieHole: 0.35,
                    pieStartAngle: 100,
                }}
                graph_id={props.id}
                width="35%"
                height="30vh"
            />
        </div>
    );
};

export default PieChart;