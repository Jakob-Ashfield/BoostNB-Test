//GDP Summary Report Graphs
//---------------------------------------------------Graph for GDP per Capita------------------------------------------------------
var context = document.getElementById("barChart").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels = [
    72715, 65295, 58578, 50349, 50277, 44284, 43920, 40077, 39395, 38177,
];
const ylabels = ["AB", "SK", "NL", "ON", "BC", "MA", "QC", "NB", "NS", "PE"];

// setup
const data = {
  labels: ylabels,
  datasets: [
    {
      label: "GDP Per Capita",
      data: xlabels,
      backgroundColor: [
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(255,165,0)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
      ],
    },
  ],
};
//config
const config = {
    type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data,
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        indexAxis: "y",
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 7,
                    maxRotation: 0,
                },
                grid: {
                    display: true,
                },
                ticks: {
                    callback: function (value, index, ticks) {
                        return "$" + " " + value;
                    },
                },
            },
            y: {
                ticks: {
                    autoSkip: false,
                },
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Province:" + " " + context[0].label;
                    },
                },
            },
            legend: {
                display: false,
            },
        },
    },
};

//render init block
const barChart = new Chart(
    document.getElementById("barChart").getContext("2d"),
    config
);

//-------------------------------------------------Graph for Real GDP Growth Rate (NB vs Canda)------------------------------------------------

var context = document.getElementById("myChart1").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels1 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels1 = [
    4.75, 2.2, 2.82, 0.97, 1.79, 0.61, 0.87, -1.41, 2.09, 0.21, -1.19, -0.34,
    0.08, 0.81, 0.92, 2.36, 1.33, 1.21, -3.11, 5.25,
];
const ylabels3 = [
    3.26, 2.0, 3.33, 3.15, 2.76, 2.02, 0.84, -3.14, 3.27, 3.24, 1.86, 2.55, 2.87,
    0.8, 0.97, 3.12, 2.85, 1.73, -5.26, 4.78,
];

// setup
const data1 = {
  labels: xlabels1,
  datasets: [
    {
      label: "New Brunswick",
      data: ylabels1,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1,
    },
    {
      label: "Canada",
      data: ylabels3,
      borderColor: "rgb(255,165,0)",
      backgroundColor: "rgb(255,165,0)",
      borderWidth: 3,
      pointRadius: 1,
    },
  ],
};

//config
const config1 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data1,
    options: {
        tension: 0.1, //Tension is essentially whether you want a little smoother transition for the lines in your line graph
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 7,
                    maxRotation: 0,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 6,
                min: -6,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 0) {
                            return "#808080";
                        } else {
                            return "#EAEAEA";
                        }
                    },
                    borderColor: "#808080",
                },
                ticks: {
                    autoSkip: true,
                    stepSize: 3,
                    callback: function (value, index, ticks) {
                        return value + " " + "%";
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year" + " " + context[0].label;
                    },
                },
            },
            maintainAspectRatio: true,
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    pointStyle: "line",
                },
            },
        },
    },
};

//render init block
const myChart1 = new Chart(
    document.getElementById("myChart1").getContext("2d"),
    config1
);

// -----------------------------------------------Graph of Debt-to-GDP Ratio----------------------------------------------------------------------
var context = document.getElementById("myChart2").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels4 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels4 = [
    31.2, 30.6, 28.4, 27.0, 25.1, 25.0, 26.2, 26.2, 29.6, 31.8, 31.9, 34.8, 36.6,
    40.5, 40.9, 40.0, 38.6, 37.4, 36.6, 36, 5.25,
];
const ylabels5 = [
    30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0,
    30.0, 30.0, 30.0, 30.0, 30.0, 30.0, 30.0,
];

// setup
const data2 = {
    labels: xlabels4,
    datasets: [
        {
            label: "Debt-to-GDP Ratio",
            data: ylabels4,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1,
        },
        {
            label: "Goal",
            data: ylabels5,
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 0,
            borderDash: [10, 5],
        },
    ],
};

//config
const config2 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data2,
    options: {
        tension: 0.15,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 7,
                    maxRotation: 0,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 45,
                min: 20,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 20) {
                            return "#808080";
                        } else {
                            return "#EAEAEA";
                        }
                    },
                    borderColor: "#808080",
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    stepSize: 9,
                    callback: function (value, index, ticks) {
                        return value + " " + "%";
                    },
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year" + " " + context[0].label;
                    },
                },
            },
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    pointStyle: "line",
                },
            },
        },
    },
};

//render init block
const myChart2 = new Chart(
    document.getElementById("myChart2").getContext("2d"),
    config2
);

