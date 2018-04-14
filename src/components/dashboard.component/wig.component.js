import React from 'react';
import PieChart from '../pie.chart.component/pie.chart.component';
import './dashboard.style.css';

const preciousMetals = () => {

    const data = [
        ['Metal', 'Wartość (PLN)'],
        ['WIG', 59740.56],
        ['WIG20', 2271.93],
        ['mWIG40', 4631.45],
        ['sWIG80', 14318.01],
        ['WIG30', 2631.80],
    ];

    return (
        <div className="displayInline">
            <PieChart id="pieChartWIG" name="Indeks WIG" data={data}/>
        </div>
    );
};

export default preciousMetals;