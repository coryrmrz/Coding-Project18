import React, { useEffect, useState } from 'react'; //import React
import BarChart from './components/BarChart'; //import BarChart
import LineChart from './components/LineChart'; //import LineChart
import ScatterChart from './components/ScatterChart'; //import ScatterChart
import BubbleChart from './components/BubbleChart'; //import BubbleChart

const App = () => {
    const [chartData, setChartData] = useState(null); //chartData initialized to null
    useEffect(() => { //fetch financial data when component mpunts
        fetch('/financial_data.json') //retrieve json data
        .then((response) => response.json()) //convert response to json format
        .then ((data) => setChartData(data)); //update ChartData with fetched data
    }, []);

    if (!chartData) { //if chartData is null
        return <div>Loading...</div>; //return 'Loading...' message
    }

    return ( //return ChartData components for bar, line, scatter, and bubble chart
        <div style={{ textAlign: 'center' }}>
            <h1>Dynamic Charts with React and Chart.js</h1>
            <BarChart data={barChartData} />
            <LineChart data={lineChartData} />
            <ScatterChart data={scatterChartData} />
            <BubbleChart data={bubbleChartData} />
        </div>
    );
};
export default App;