// General place for type sharing, will organize later
export interface Hourly {
    summary: string;
    icon: string;
    hourly: HourlyData[];
}

export interface HourlyData {
    time: number;
    summary: string;
    icon: string;
    precipIntensity: number;
    precipProbability: number;
    temperature: number;
    apparentTemperature: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    visibility: number;
    ozone: number;
  }

export interface Currently extends HourlyData{
    nearestStormDistance: number;
    nearestStormBearing: number;
  }
/*
{
  latitude: 37.8267,
  longitude: -122.423,
  timezone: 'America/Los_Angeles',
  currently: {
    time: 1578023923,
    summary: 'Clear',
    icon: 'clear-night',
    nearestStormDistance: 272,
    nearestStormBearing: 72,
    precipIntensity: 0,
    precipProbability: 0,
    temperature: 12.37,
    apparentTemperature: 12.37,
    dewPoint: 8.18,
    humidity: 0.76,
    pressure: 1020.5,
    windSpeed: 5.89,
    windGust: 7.15,
    windBearing: 311,
    cloudCover: 0.15,
    uvIndex: 0,
    visibility: 16.093,
    ozone: 292.9
  },
  hourly: {
      "summary":"Partly cloudy throughout the day.",
      "icon":"partly-cloudy-day",
      "data":[{
            "time":1578862800,
            "summary":"Clear",
            "icon":"clear-day",
            "precipIntensity":0.0005,
            "precipProbability":0.02,
            "precipType":"rain",
            "temperature":43.16,
            "apparentTemperature":41.68,
            "dewPoint":-2.21,
            "humidity":0.14,
            "pressure":1011.4,
            "windSpeed":3.25,
            "windGust":9.31,
            "windBearing":280,
            "cloudCover":0.18,
            "uvIndex":1,
            "visibility":10,
            "ozone":381.4
        },{
            "time":1578866400,
            "summary":"Partly Cloudy",
            "icon":"partly-cloudy-day",
            "precipIntensity":0,
            "precipProbability":0,"temperature":41.87,
            "apparentTemperature":40.29,"dewPoint":-1.28,
            "humidity":0.16,"pressure":1011.9,"windSpeed":3.18,
            "windGust":9.43,"windBearing":274,"cloudCover":0.58,
            "uvIndex":0,"visibility":10,"ozone":383
        },{
            "time":1578870000,"summary":"Mostly Cloudy",
            "icon":"partly-cloudy-day","precipIntensity":0,
            "precipProbability":0,"temperature":40.13,
            "apparentTemperature":37.53,"dewPoint":-0.03,
            "humidity":0.18,"pressure":1012.5,"windSpeed":3.94,
            "windGust":7.84,"windBearing":79,"cloudCover":0.78,
            "uvIndex":0,"visibility":10,"ozone":384.1
        },{"time":1578873600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":37.5,"apparentTemperature":34.12,"dewPoint":3.8,"humidity":0.24,"pressure":1013.5,"windSpeed":4.32,"windGust":6.55,"windBearing":86,"cloudCover":0.81,"uvIndex":0,"visibility":10,"ozone":385.4},{"time":1578877200,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":35.43,"apparentTemperature":31.19,"dewPoint":5.44,"humidity":0.28,"pressure":1014.6,"windSpeed":4.91,"windGust":7.62,"windBearing":116,"cloudCover":0.65,"uvIndex":0,"visibility":10,"ozone":387.6},{"time":1578880800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0015,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0116,"temperature":32.84,"apparentTemperature":28.57,"dewPoint":6.61,"humidity":0.33,"pressure":1015.5,"windSpeed":4.46,"windGust":6.8,"windBearing":152,"cloudCover":0.4,"uvIndex":0,"visibility":10,"ozone":389.8},{"time":1578884400,"summary":"Clear","icon":"clear-night","precipIntensity":0.0016,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0141,"temperature":31.01,"apparentTemperature":25.62,"dewPoint":6.75,"humidity":0.35,"pressure":1016.3,"windSpeed":5.32,"windGust":6.14,"windBearing":197,"cloudCover":0.15,"uvIndex":0,"visibility":10,"ozone":391},{"time":1578888000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":29.1,"apparentTemperature":23.35,"dewPoint":7.23,"humidity":0.39,"pressure":1016.4,"windSpeed":5.34,"windGust":6.26,"windBearing":193,"cloudCover":0.11,"uvIndex":0,"visibility":10,"ozone":390.5},{"time":1578891600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":27.57,"apparentTemperature":21.23,"dewPoint":7.5,"humidity":0.42,"pressure":1016.5,"windSpeed":5.68,"windGust":6.36,"windBearing":191,"cloudCover":0.08,"uvIndex":0,"visibility":10,"ozone":389},{"time":1578895200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":26.45,"apparentTemperature":19.19,"dewPoint":7.34,"humidity":0.44,"pressure":1016.7,"windSpeed":6.5,"windGust":7.83,"windBearing":185,"cloudCover":0.21,"uvIndex":0,"visibility":10,"ozone":387.1},{"time":1578898800,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0019,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0215,"temperature":25.52,"apparentTemperature":17.93,"dewPoint":6.73,"humidity":0.44,"pressure":1016.8,"windSpeed":6.69,"windGust":8.39,"windBearing":184,"cloudCover":0.34,"uvIndex":0,"visibility":10,"ozone":384.7},{"time":1578902400,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0006,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0076,"temperature":24.76,"apparentTemperature":17.45,"dewPoint":5.33,"humidity":0.43,"pressure":1016.4,"windSpeed":6.17,"windGust":7.41,"windBearing":182,"cloudCover":0.51,"uvIndex":0,"visibility":10,"ozone":382.1},{"time":1578906000,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":24.16,"apparentTemperature":16.59,"dewPoint":5.1,"humidity":0.43,"pressure":1015.8,"windSpeed":6.35,"windGust":7.9,"windBearing":180,"cloudCover":0.6,"uvIndex":0,"visibility":10,"ozone":380.3},{"time":1578909600,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0.0022,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0295,"temperature":23.63,"apparentTemperature":15.85,"dewPoint":4.8,"humidity":0.44,"pressure":1015.5,"windSpeed":6.46,"windGust":7.8,"windBearing":179,"cloudCover":0.66,"uvIndex":0,"visibility":10,"ozone":379.8},{"time":1578913200,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":23.28,"apparentTemperature":15.03,"dewPoint":6.41,"humidity":0.48,"pressure":1016.5,"windSpeed":6.95,"windGust":9.19,"windBearing":184,"cloudCover":0.58,"uvIndex":0,"visibility":10,"ozone":380.2},{"time":1578916800,"summary":"Mostly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":22.75,"apparentTemperature":14.25,"dewPoint":6.49,"humidity":0.49,"pressure":1016,"windSpeed":7.13,"windGust":9.68,"windBearing":181,"cloudCover":0.61,"uvIndex":0,"visibility":10,"ozone":381.1},{"time":1578920400,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":21.7,"apparentTemperature":12.88,"dewPoint":6.68,"humidity":0.52,"pressure":1015.1,"windSpeed":7.26,"windGust":10.02,"windBearing":182,"cloudCover":0.54,"uvIndex":0,"visibility":10,"ozone":382.5},{"time":1578924000,"summary":"Partly Cloudy","icon":"partly-cloudy-night","precipIntensity":0,"precipProbability":0,"temperature":20.89,"apparentTemperature":11.84,"dewPoint":6.79,"humidity":0.54,"pressure":1014,"windSpeed":7.33,"windGust":10.27,"windBearing":184,"cloudCover":0.42,"uvIndex":0,"visibility":10,"ozone":384.4},{"time":1578927600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":21.77,"apparentTemperature":12.96,"dewPoint":7.56,"humidity":0.54,"pressure":1013.2,"windSpeed":7.26,"windGust":10.17,"windBearing":188,"cloudCover":0.3,"uvIndex":0,"visibility":10,"ozone":386.6},{"time":1578931200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":25.86,"apparentTemperature":18.25,"dewPoint":8.66,"humidity":0.48,"pressure":1011.9,"windSpeed":6.79,"windGust":9.31,"windBearing":201,"cloudCover":0.25,"uvIndex":0,"visibility":10,"ozone":389.2},{"time":1578934800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":32.7,"apparentTemperature":26.93,"dewPoint":9.4,"humidity":0.37,"pressure":1010.9,"windSpeed":6.19,"windGust":8.11,"windBearing":219,"cloudCover":0.18,"uvIndex":1,"visibility":10,"ozone":392.1},{"time":1578938400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":38.19,"apparentTemperature":33.5,"dewPoint":8.35,"humidity":0.29,"pressure":1009.7,"windSpeed":6.15,"windGust":7.68,"windBearing":215,"cloudCover":0.14,"uvIndex":1,"visibility":10,"ozone":393.9},{"time":1578942000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":40.7,"apparentTemperature":35.76,"dewPoint":6.4,"humidity":0.24,"pressure":1008.7,"windSpeed":7.39,"windGust":8.88,"windBearing":150,"cloudCover":0.17,"uvIndex":2,"visibility":10,"ozone":394.7},{"time":1578945600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":42.44,"apparentTemperature":37.05,"dewPoint":4.2,"humidity":0.2,"pressure":1008.3,"windSpeed":9.09,"windGust":11.02,"windBearing":15,"cloudCover":0.22,"uvIndex":1,"visibility":10,"ozone":394.5},{"time":1578949200,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":42.18,"apparentTemperature":36.39,"dewPoint":3.01,"humidity":0.19,"pressure":1008.5,"windSpeed":9.87,"windGust":12.23,"windBearing":310,"cloudCover":0.25,"uvIndex":1,"visibility":10,"ozone":392.1},{"time":1578952800,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":40.06,"apparentTemperature":34.18,"dewPoint":2.64,"humidity":0.2,"pressure":1009.8,"windSpeed":8.98,"windGust":11.95,"windBearing":300,"cloudCover":0.23,"uvIndex":1,"visibility":10,"ozone":385.9},{"time":1578956400,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":36.96,"apparentTemperature":31.34,"dewPoint":2.54,"humidity":0.23,"pressure":1011.6,"windSpeed":7.22,"windGust":11.69,"windBearing":279,"cloudCover":0.19,"uvIndex":0,"visibility":10,"ozone":377.5},{"time":1578960000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":34.35,"apparentTemperature":29.15,"dewPoint":1.96,"humidity":0.25,"pressure":1013.5,"windSpeed":5.84,"windGust":11.19,"windBearing":281,"cloudCover":0.14,"uvIndex":0,"visibility":10,"ozone":371.1},{"time":1578963600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":32.93,"apparentTemperature":27.81,"dewPoint":1.17,"humidity":0.25,"pressure":1014.9,"windSpeed":5.41,"windGust":9.93,"windBearing":340,"cloudCover":0.11,"uvIndex":0,"visibility":10,"ozone":368.5},{"time":1578967200,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":31.97,"apparentTemperature":26.64,"dewPoint":0.31,"humidity":0.25,"pressure":1016,"windSpeed":5.46,"windGust":8.27,"windBearing":133,"cloudCover":0.08,"uvIndex":0,"visibility":10,"ozone":368},{"time":1578970800,"summary":"Clear","icon":"clear-night","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0017,"temperature":31.2,"apparentTemperature":25.47,"dewPoint":-0.41,"humidity":0.25,"pressure":1017,"windSpeed":5.75,"windGust":7.04,"windBearing":204,"cloudCover":0.05,"uvIndex":0,"visibility":10,"ozone":367.6},{"time":1578974400,"summary":"Clear","icon":"clear-night","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0018,"temperature":30.09,"apparentTemperature":23.69,"dewPoint":0.26,"humidity":0.27,"pressure":1017.8,"windSpeed":6.33,"windGust":6.7,"windBearing":209,"cloudCover":0.04,"uvIndex":0,"visibility":10,"ozone":366.8},{"time":1578978000,"summary":"Clear","icon":"clear-night","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0022,"temperature":29.14,"apparentTemperature":21.97,"dewPoint":1.65,"humidity":0.3,"pressure":1018.4,"windSpeed":7.12,"windGust":7.68,"windBearing":195,"cloudCover":0.02,"uvIndex":0,"visibility":10,"ozone":366.2},{"time":1578981600,"summary":"Clear","icon":"clear-night","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0031,"temperature":28.11,"apparentTemperature":20.33,"dewPoint":2.85,"humidity":0.33,"pressure":1018.8,"windSpeed":7.68,"windGust":8.67,"windBearing":190,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":365.7},{"time":1578985200,"summary":"Clear","icon":"clear-night","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.002,"temperature":27.16,"apparentTemperature":19.14,"dewPoint":3.48,"humidity":0.36,"pressure":1019.1,"windSpeed":7.72,"windGust":9.04,"windBearing":194,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":365.7},{"time":1578988800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":26.67,"apparentTemperature":18.67,"dewPoint":3.9,"humidity":0.37,"pressure":1019,"windSpeed":7.56,"windGust":9.62,"windBearing":197,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":366},{"time":1578992400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":26.29,"apparentTemperature":18.26,"dewPoint":4.76,"humidity":0.39,"pressure":1019,"windSpeed":7.47,"windGust":10.35,"windBearing":199,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":365.8},{"time":1578996000,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":25.76,"apparentTemperature":17.53,"dewPoint":5.61,"humidity":0.42,"pressure":1019.3,"windSpeed":7.6,"windGust":10.44,"windBearing":200,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":364.8},{"time":1578999600,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":25.24,"apparentTemperature":16.74,"dewPoint":6.37,"humidity":0.44,"pressure":1019.9,"windSpeed":7.82,"windGust":10.23,"windBearing":201,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":363.2},{"time":1579003200,"summary":"Clear","icon":"clear-night","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"snow","precipAccumulation":0.0023,"temperature":24.61,"apparentTemperature":15.85,"dewPoint":7.11,"humidity":0.47,"pressure":1020.2,"windSpeed":7.98,"windGust":10.22,"windBearing":201,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":361.9},{"time":1579006800,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":23.69,"apparentTemperature":14.72,"dewPoint":7.83,"humidity":0.5,"pressure":1020.1,"windSpeed":8.01,"windGust":10.62,"windBearing":202,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":361.1},{"time":1579010400,"summary":"Clear","icon":"clear-night","precipIntensity":0,"precipProbability":0,"temperature":23.08,"apparentTemperature":14.01,"dewPoint":8.38,"humidity":0.53,"pressure":1019.7,"windSpeed":7.97,"windGust":11.22,"windBearing":203,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":360.4},{"time":1579014000,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":24.33,"apparentTemperature":15.53,"dewPoint":8.55,"humidity":0.5,"pressure":1019,"windSpeed":7.97,"windGust":11.86,"windBearing":202,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":359.8},{"time":1579017600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":28.77,"apparentTemperature":20.93,"dewPoint":7.94,"humidity":0.41,"pressure":1017.2,"windSpeed":7.99,"windGust":12.55,"windBearing":197,"cloudCover":0,"uvIndex":0,"visibility":10,"ozone":359.1},{"time":1579021200,"summary":"Clear","icon":"clear-day","precipIntensity":0.0003,"precipProbability":0.01,"precipType":"rain","temperature":35.24,"apparentTemperature":28.76,"dewPoint":6.52,"humidity":0.3,"pressure":1014.9,"windSpeed":8.04,"windGust":13.28,"windBearing":211,"cloudCover":0,"uvIndex":1,"visibility":10,"ozone":358.6},{"time":1579024800,"summary":"Clear","icon":"clear-day","precipIntensity":0.0004,"precipProbability":0.02,"precipType":"rain","temperature":40.51,"apparentTemperature":35.17,"dewPoint":4.96,"humidity":0.22,"pressure":1012.7,"windSpeed":8.08,"windGust":13.92,"windBearing":217,"cloudCover":0,"uvIndex":2,"visibility":10,"ozone":358.2},{"time":1579028400,"summary":"Clear","icon":"clear-day","precipIntensity":0.0004,"precipProbability":0.01,"precipType":"rain","temperature":45.17,"apparentTemperature":40.77,"dewPoint":3.09,"humidity":0.17,"pressure":1010.6,"windSpeed":8.24,"windGust":14.78,"windBearing":210,"cloudCover":0,"uvIndex":2,"visibility":10,"ozone":358.5},{"time":1579032000,"summary":"Clear","icon":"clear-day","precipIntensity":0.0002,"precipProbability":0.01,"precipType":"rain","temperature":48.53,"apparentTemperature":44.8,"dewPoint":1.71,"humidity":0.14,"pressure":1008.6,"windSpeed":8.41,"windGust":15.56,"windBearing":227,"cloudCover":0,"uvIndex":2,"visibility":10,"ozone":359.1},{"time":1579035600,"summary":"Clear","icon":"clear-day","precipIntensity":0,"precipProbability":0,"temperature":49.98,"apparentTemperature":46.62,"dewPoint":2.14,"humidity":0.14,"pressure":1007.4,"windSpeed":8.31,"windGust":15.32,"windBearing":237,"cloudCover":0,"uvIndex":1,"visibility":10,"ozone":359.1}]},
  alerts: [
    {
      title: 'High Surf Advisory',
      regions: [Array],
      severity: 'advisory',
      time: 1577963400,
      expires: 1578027600,
      description: '...HIGH SURF ADVISORY NOW IN EFFECT UNTIL 9 PM PST THIS EVENING... * WHAT...A long period northwest swell will bring an increased threat of rip currents, large and dangerous breaking waves in the surf zone, and increased wave run-up on beaches with waves topping and washing over large rocks and jetties through Thursday morning. * WHERE...Coastline from Sonoma County southward through Monterey County. * WHEN...Through 9 PM PST Thursday. * IMPACTS...Large breaking waves will generate hazardous conditions on area beaches. The surf zone will be dangerous due to strong currents and powerful breaking waves. This threat will be maximized on steeply sloped beaches. Rip currents can pull swimmers and surfers out to sea. Large breaking waves can cause injury, wash people off beaches and rocks, and capsize small boats near shore. * ADDITIONAL DETAILS...Swell heights 11 to 14 feet at 20 to 22 seconds. This will generate breaking waves of 20 to 25 feet, favored locations may exceed 25 feet. PRECAUTIONARY/PREPAREDNESS ACTIONS... Remain out of the water due to dangerous surf conditions, or stay near occupied lifeguard towers. Rock jetties can be deadly in such conditions, stay off the rocks.\n',
      uri: 'https://alerts.weather.gov/cap/wwacapget.php?x=CA125F33E92718.HighSurfAdvisory.125F33F77B10CA.MTRCFWMTR.9609375b886768091642456b51fe6d48'
    }
  ],
  flags: {
    sources: [
      'nwspa',          'cmc',
      'gfs',            'hrrr',
      'icon',           'isd',
      'madis',          'nam',
      'sref',           'darksky',
      'nearest-precip'
    ],
    'nearest-station': 3.589,
    units: 'ca'
  },
  offset: -8
}
*/
  export class DarkSkyResponse {
    latitude: number;
    longitude: number;
    timezone: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    currently: Currently;
    hourly: {
        summary: string;
        icon: string;
        data: HourlyData[];
    }
  }
