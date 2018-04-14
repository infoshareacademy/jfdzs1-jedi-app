import React from 'react';
import PieChart from '../pie.chart.component/pie.chart.component';
import './dashboard.style.css';

const preciousMetals = () => {

    const data = [
        ['Metal', 'Wartość (PLN)'],
        ['Złoto', 4947.60],
        ['Srebro', 65.68],
        ['Miedź', 25798.59],
        ['Pallad', 3594.31],
        ['Platyna', 3570.39],
        ['Nikiel', 41957.87],
        ['Aluminium', 8219.34],
        ['Ołów', 9698.63],
        ['Cynk', 12318.49],
    ];

    return (
        <div className="displayInline">
            <PieChart id="pieChartMetals" name="Metale szlachetne" data={data}/>
        </div>
    );
};

export default preciousMetals;