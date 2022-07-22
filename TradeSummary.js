// -----------------------------------------------Trade Balance Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart6").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels9 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020,
];

const ylabels13 = [
    -2489, -2657, -2590, -3030, -4309, -4796, -6318, -5936, -6019, -6075, -5532,
    -5745, -6043, -5498, -5641, -6203, -6585, -6232, -6385,
];
const ylabels14 = [
    -2841, -3457, -3360, -3190, -3770, -4694, -5154, -2530, -2981, -2106, -1543,
    -740, -1259, -1191, -784, -747, -378, -89, -1212,
];
const ylabels15 = [
    352, 801, 770, 160, -539, -102, -1164, -3406, -3038, -3969, -3989, -5005,
    -4784, -4307, -4857, -5457, -6207, -6142, -5173,
];

// setup
const data6 = {
    labels: xlabels9,
    datasets: [
        {
            label: "Total",
            data: ylabels13,
            backgroundColor: "rgb(0, 150, 255)",
        },
        {
            label: "Provincial",
            data: ylabels14,
            backgroundColor: "rgb(255,165,0)",
        },
        {
            label: "International",
            data: ylabels15,
            backgroundColor: "#004D40",
        },
    ],
};

//config
const config6 = {
    type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data6,
    options: {
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 2000,
                min: -7000,
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
                    callback: function(value, index, ticks){
                        return "$ " + value
                    }
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year:" + " " + context[0].label;
                    },
                },
            },
            legend: {
                align: "center",
                display: true,
                labels: {
                    boxWidth: 20,
                },
            },
        },
    },
};

//render init block
const myChart6 = new Chart(
    document.getElementById("myChart6").getContext("2d"),
    config6
);

// -----------------------------------------------Imports and Exports---------------------------------------------------------------------------
var context = document.getElementById("myChart7").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels10 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
    2015, 2016, 2017, 2018, 2019, 2020
];

const ylabels16 = [
    22.2, 22.3, 24.0, 25.6, 25.3, 27.3, 29.2, 24.5, 27.6, 30.0, 29.2, 29.9, 28.0,
    26.8, 25.2, 26.9, 26.5, 26.8, 22.5,
];
const ylabels17 = [
    24.7, 24.9, 26.6, 28.6, 29.6, 32.1, 35.5, 30.5, 33.6, 36.1, 34.8, 35.6, 34.0,
    32.3, 30.8, 33.1, 33.1, 33.0, 28.9,
];

// setup
const data7 = {
    labels: xlabels10,
    datasets: [
        {
            label: "Exports",
            data: ylabels16,
            borderColor: "rgb(255,165,0)",
            backgroundColor: "rgb(255,165,0)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
        {
            label: "Imports",
            data: ylabels17,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
    ],
};

//config
const config7 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data7,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 40,
                min: 0,
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
                    callback: function (value, index, ticks) {
                        return "$" + " " + value + "B";
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
                        return "Year: " + " " + context[0].label;
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
const myChart7 = new Chart(
    document.getElementById("myChart7").getContext("2d"),
    config7
);

// -----------------------------------------------No. of Exporting Firms-------------------------------------------------------------------------
var context = document.getElementById("myChart8").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels11 = [
    2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021,
];

const ylabels18 = [
    928, 943, 883, 874, 797, 766, 760, 765, 735, 718, 735, 728, 775, 786, 777,
    772, 798,
];

// setup
const data8 = {
    labels: xlabels11,
    datasets: [
        {
            label: "Number of Firms Exporting",
            data: ylabels18,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
    ],
};

//config
const config8 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data8,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 1000,
                min: 600,
                grid: {
                    color: (context) => {
                        console.log(context.tick.value);
                        if (context.tick.value == 600) {
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
                },
            },
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year: " + " " + context[0].label;
                    },
                },
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    pointStyle: "line",
                },
            },
        },
    },
};

//render init block
const myChart8 = new Chart(
    document.getElementById("myChart8").getContext("2d"),
    config8
);

// -----------------------------------------------No. of Exporting Firms-------------------------------------------------------------------------
var context = document.getElementById("myChart9").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels12 = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 
    2018, 2019, 2020
];


const ylabels19 = [
    8, 8, 8, 9, 12, 14, 18, 17,
    17, 17, 16, 16, 17, 15, 16,
    17, 18, 16, 17
];

// setup
const data9 = {
    labels: xlabels12,
    datasets: [
        {
            label: "Trade Deficit as a Percentage of GDP",
            data: ylabels19,
            borderColor: "rgb(0, 150, 255)",
            backgroundColor: "rgb(0, 150, 255)",
            borderWidth: 3,
            pointRadius: 1.0,
        },
    ],
};

//config
const config9 = {
    type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
    data: data9,
    options: {
        tension: 0.15,
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    minRotation: 90,
                    maxRotation: 90,
                },
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: false,
                max: 20,
                min: 0,
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
                    callback: function (value, index, ticks) {
                        return value + " " + "%";
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: function (context) {
                        console.log(context[0].label);
                        return "Year: " + " " + context[0].label;
                    },
                    label: function(context){
                        return "Trade Deficit as a Percentage of GDP: " + ylabels19[context.dataIndex] + " %"
                    }
                },
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    pointStyle: "line",
                },
            },
        },
    },
};

//render init block
const myChart9 = new Chart(
    document.getElementById("myChart9").getContext("2d"),
    config9
);

