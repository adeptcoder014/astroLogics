// pages/natal-chart.js
import { useEffect } from 'react';

const NatalChart = () => {
  useEffect(() => {
    // Check if the AstroDraw library is loaded
    if (typeof chart !== 'undefined') {
      // Dummy data
      var data = {
        "planets": {
          "Pluto": [63],
          "Neptune": [110],
          "Uranus": [318],
          "Saturn": [201],
          "Jupiter": [192],
          "Mars": [210],
          "Moon": [268],
          "Sun": [281],
          "Mercury": [312],
          "Venus": [330]
        },
        "cusps": [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
      };

      // Draw the natal chart
      var radix = chart.radix(data);
      radix.render(document.getElementById('chart-container'));
    }
  }, []);

  return <div id="chart-container" style={{ width: '500px', height: '500px' }}></div>;
};

export default NatalChart;
