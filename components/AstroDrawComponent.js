import React, { useEffect } from 'react';
// import astrochart from '@astrodraw/astrochart';

const AstroChart = () => {
  useEffect(() => {
    const Chart = astrochart?.default;

    const chart = new Chart(
      'paper',
      590,
      590,
      {
        'COLOR_ARIES': 'red',
        'COLOR_TAURUS': 'orange',
        'COLOR_GEMINI': 'yellow',
        'COLOR_CANCER': 'green',
        'COLOR_LEO': 'blue',
        'COLOR_VIRGO': 'indigo',
        'COLOR_LIBRA': 'violet',
        'COLOR_SCORPIO': 'purple',
        'COLOR_SAGITTARIUS': 'pink',
        'COLOR_CAPRICORN': 'brown',
        'COLOR_AQUARIUS': 'gray',
        'SYMBOL_SCALE': 1.2,
        'COLOR_BACKGROUND': 'white',
        'POINTS_COLOR': 'red',
        'SYMBOL_CUSP_12': 'green',
        'SYMBOL_PISCES': 'green',
        'CUSPS_STROKE': 1,
        'CUSPS_FONT_COLOR': 'red',
        'DIGNITIES_RULERSHIP': true,
        'ID_ASPECTS': 'aspects',
      }
    );

    const data = {
      planets: {
        Saturn: [201],
        Jupiter: [246],
        Mars: [210],
        Moon: [0],
        Sun: [180],
        Mercury: [330],
        Venus: [330]
      },
      cusps: [330, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
     
    };

    const dataTransit = {
      planets: {
        Moon: [60.739220451080115],
        Venus: [305.6996431634707],
        Jupiter: [198.6565699576221],
        NNode: [157.25592636170012],
        Mars: [324.84013049518734],
        Lilith: [232.88904207991555],
        Saturn: [259.1015412368795, -0.2],
        Chiron: [350.7285587924208],
        Uranus: [20.678747795787075],
        Sun: [260.94912160755536],
        Mercury: [281.5699804920016],
        Neptune: [339.3848859932604],
        Pluto: [286.29683069280685],
      },
      cusps: [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274],
    };
    const radix = chart.radix(data);
    console.log('radix=====', radix)
    radix.addPointsOfInterest({
      As: [data.cusps[0]],
      Ic: [data.cusps[3]],
      Ds: [data.cusps[6]],
      Mc: [data.cusps[9]],
    });
    radix.aspects({
      point: {
          name: 'Moon',
          position: 0,
      },
      toPoint: {
          name: 'Sun',
          position: 180,
      },
      aspect: {
          name: 'opposition',
          degree: 180,
          color: 'yellow',
          orbit: 10,
      },
      precision: 10,
  })

    const transit = radix.transit(dataTransit);


  }, []);

  return (
    <>
      <h2>Astro Natal Chart</h2>
      <div id="paper" style={{ zoom: '58%' }}>

        <div id='svg'></div>
      </div>
    </>
  );
};

export default AstroChart;