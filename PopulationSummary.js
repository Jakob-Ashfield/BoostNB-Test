// -----------------------------------------------Population Graph 1---------------------------------------------------------------------------
var context = document.getElementById("myChart3").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels6 = [
    "Q1 2002", "Q2 2002", "Q3 2002", "Q4 2002", "Q1 2003", "Q2 2003", "Q3 2003", "Q4 2003", "Q1 2004", "Q2 2004", "Q3 2004", "Q4 2004",
    "Q1 2005", "Q2 2005", "Q3 2005", "Q4 2005", "Q1 2006", "Q2 2006", "Q3 2006", "Q4 2006", "Q1 2007", "Q2 2007", "Q3 2007", "Q4 2007",
    "Q1 2008", "Q2 2008", "Q3 2008", "Q4 2008", "Q1 2009", "Q2 2009", "Q3 2009", "Q4 2009", "Q1 2010", "Q2 2010", "Q3 2010", "Q4 2010",
    "Q1 2011", "Q2 2011", "Q3 2011", "Q4 2011", "Q1 2012", "Q2 2012", "Q3 2012", "Q4 2012", "Q1 2013", "Q2 2013", "Q3 2013", "Q4 2013",
    "Q1 2014", "Q2 2014", "Q3 2014", "Q4 2014", "Q1 2015", "Q2 2015", "Q3 2015", "Q4 2015", "Q1 2016", "Q2 2016", "Q3 2016", "Q4 2016",
    "Q1 2017", "Q2 2017", "Q3 2017", "Q4 2017", "Q1 2018", "Q2 2018", "Q3 2018", "Q4 2018", "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019",
    "Q1 2020", "Q2 2020", "Q3 2020", "Q4 2020", "Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021", "Q1 2022", "Q2 2022"
];
const ylabels6 = [
    1.12, 1.11, 1.09, 1.04, 1.0, 0.95, 0.91, 0.91, 0.94, 0.94, 0.94, 0.95, 0.94,
    0.93, 0.95, 0.98, 0.99, 1.02, 1.02, 1.01, 1.0, 0.97, 0.98, 0.98, 1.02, 1.04,
    1.09, 1.12, 1.14, 1.16, 1.15, 1.15, 1.14, 1.13, 1.12, 1.11, 1.06, 1.01, 0.98,
    0.96, 1.03, 1.06, 1.09, 1.1, 1.06, 1.06, 1.06, 1.08, 1.05, 1.05, 1.01, 0.99,
    0.92, 0.81, 0.75, 0.74, 0.83, 1.01, 1.14, 1.22, 1.23, 1.19, 1.21, 1.28, 1.33,
    1.37, 1.42, 1.44, 1.43, 1.42, 1.45, 1.51, 1.56, 1.54, 1.16, 0.59, 0.42, 0.4,
    0.55, 1.06, 1.2, 1.31
];
const ylabels7 = [
    -0.14, -0.13, -0.06, 0.02, 0.08, 0.07, 0.01, 0.01, -0.01, 0.01, 0.0, -0.03,
    -0.03, -0.09, -0.18, -0.21, -0.27, -0.31, -0.33, -0.36, -0.29, -0.19, -0.03,
    0.16, 0.19, 0.21, 0.19, 0.22, 0.28, 0.35, 0.41, 0.44, 0.39, 0.38, 0.41, 0.43,
    0.47, 0.37, 0.35, 0.28, 0.33, 0.32, 0.35, 0.3, 0.13, 0.11, 0.02, 0.0, 0.09,
    0.1, 0.06, 0.11, 0.08, 0.01, -0.02, 0.03, 0.13, 0.44, 0.59, 0.67, 0.53, 0.33,
    0.43, 0.4, 0.44, 0.48, 0.48, 0.61, 0.63, 0.72, 0.89, 1.04, 1.02, 1.05, 0.78,
    0.34, 0.44, 0.46, 0.77, 1.41, 1.65, 1.84
];

// setup
const data3 = {
    labels: xlabels6,
    datasets: [
        {
            label: "Canada",
            data: ylabels6,
            borderColor: "	rgb(0, 150, 255)",
            backgroundColor: "	rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "New Brunswick",
            data: ylabels7,
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
    ],
};

//config
const config3 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data3,
    options: {
        maintainAspectRatio: false,
        tension: 0,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    maxRotation: 100,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 2,
                min: -2,
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
const myChart3 = new Chart(
    document.getElementById("myChart3").getContext("2d"),
    config3
);

// -----------------------------------------------Migration Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart4").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels7 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels8 = [
    906, 923, 699, 683, 882, 933, 810, 1092, 1084, 673, 888, 398, 432, -656, -307,
    -801, -1190, -1260, -1354, -1782,
];
const ylabels9 = [
    400, 524, 576, 565, 674, 1801, 1832, 2514, 1714, 2230, 2369, 1840, 2298, 2093,
    4880, 3638, 4389, 6418, 5604, 3916,
];

const ylabels10 = [
    -1218, -843, -760, -2074, -3487, -2632, -908, -237, 571, -158, -1806, -3290,
    -3517, -2790, -1113, 434, 481, 1669, 1826, 3887,
];

// setup
const data4 = {
    labels: xlabels7,
    datasets: [
        {
            label: "Natural Change",
            data: ylabels8,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Net International Migration",
            data: ylabels9,
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Net Interprovincial Migration",
            data: ylabels10,
            borderColor: "#004D40",
            backgroundColor: "#004D40",
            borderWidth: 3,
            pointRadius: 1.0,
        },
    ],
};

//config
const config4 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data4,
    options: {
        maintainAspectRatio: false,
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 7000,
                min: -4000,
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
                    stepSize: 1000,
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
const myChart4 = new Chart(
    document.getElementById("myChart4").getContext("2d"),
    config4
);

// -----------------------------------------------Migration Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart5").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels8 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020, 2021
];
const ylabels11 = [
    6971, 7104, 7072, 6874, 6869, 7127, 7269, 7440, 7390, 7140, 7246, 6927, 7045,
    6693, 6647, 6593, 6425, 6371, 6228, 6216
];
const ylabels12 = [
    6065, 6181, 6373, 6191, 5987, 6194, 6459, 6348, 6306, 6467, 6358, 6529,
    6613, 7349, 6954, 7394, 7615, 7631, 7582, 7998
];

// setup
const data5 = {
    labels: xlabels8,
    datasets: [
        {
            label: "Number of Births",
            data: ylabels11,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Number of Deaths",
            data: ylabels12,
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        }
    ],
};

//config
const config5 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data5,
    options: {
        maintainAspectRatio: false,
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 9000,
                min: 4000,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 4000) {
                            return "#808080";
                        } else {
                            return "#EAEAEA";
                        }
                    },
                    borderColor: "#808080",
                },
                ticks: {
                    autoSkip: true,
                    stepSize: 1000,
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
const myChart5 = new Chart(
    document.getElementById("myChart5").getContext("2d"),
    config5
);