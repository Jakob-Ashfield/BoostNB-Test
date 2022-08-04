//-------Graphs for GDP Highlight Boxes-----------------------
//---------------------------------------------------Graph for GDP per Capita------------------------------------------------------
//Below is the first line of code neccessary for the graph all you need to change is the name like barChart can be changed to another name, however make sure this matches the name in the last line of the code, and it matches the reference name in the html code 
var context = document.getElementById("barChart").getContext("2d");
 

//Global Options: This is essentially the formatting of the graph. Like what is the font, colour, and font style. Global essentially means that all the fonts in this graph are formatted in the following way

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

//This is essentially the dataset that will go into the x axis. Like in this case we want the GDP per capita goes into the x axis
const xlabels = [
  72715, 65295, 58578, 50349, 50277, 44284, 43920, 40077, 39395, 38177,
];

//This is the y axis labels so in this case the provinces in Canada go in here
const ylabels = ["AB", "SK", "NL", "ON", "BC", "MA", "QC", "NB", "NS", "PE"]; 
//End most of the data labels/chunk of code with a semicolon. Semicolon after the bracket closing!!!

// setup: Essentially this is how every graph would be setup. First you define the data itself. Here you can add the backgroundColor (which is different than borderColor which just colors the border of a graph ideal for line graphs)

const data = {
  //If you star a code with an open curly bracket it must be closed with a curly bracket with all the key information within these two brackets
  labels: ylabels, //This case is different usally in labels we would mention xlabels. This is a different case because it is a horizontal bar graph
  datasets: [
    {
      label: "GDP Per Capita", // This is essentially the label that will show up in the hover box. For example, for this graph it will show up as "GDP Per Capita: ---"
      // This is essentially the data and the above is the label for this data
      data: xlabels,
      //backgroundColor essentially color codes our bars. Here if you notice there are 10 colors to color our 10 bar graphs/ 10 data points.
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
      ]//Again important to close your brackets appropriately
    },
  ],
};
//Another thing to notice is that after a particular code we add commas. Notice after label: ----- there was a comma after. This is another important syntax of javascript. After a command basically don't forget a comma if you have more commands. If you do not have more commands you definitely need to add a bracket (depends on the type of bracket you opend with).
//Types of brackets: {These are essentially the most important for commands} and [These are usually for lists]

//Config is essentially important for the makeup of the graph. Like how do you want your gridlines, how you want your legend, etc. 
const config = {
  type: "bar", //Here you can insert bar, line, pie, etc.
  data: data, //Here we are calling to the data variable which we defined above in const data={}
  options: {
    //Options essentially is the major part of formatting the graph
    indexAxis: "y",
    //This is essentially the special formatting for horizontalbar graphs. You would not see this in the below graphs. IndexAxis essentially tells javascript which axis is the horizontal, and also it is very important for horinzontal bar charts.
    scales: {
      //Scales is used for formatting the axis itself
      x: {
        ticks: {
          //Ticks is essentially related to that specific axis like in this case x axis.
          autoSkip: true, //This tells javascript to skips some data labels in the x axis, and not have every data label.
          maxTicksLimit: 7, //This determines the number of x datalabels there will be.
          maxRotation: 0, //This ensures that the datalabels is not rotated to optimize space
        },
        grid: {
          //Essentially for the x axis gridlines
          display: true, //Here we are displaying the x axis gridlines
        },
        ticks: {
          //This is used to show the $ sign before the data in the x axis. You will notice more callback commands in the below graphs used in differnt situations.
          callback: function (value, index, ticks) {
            return "$" + " " + value;
          },
        },
      },
      y: {
        ticks: {
          autoSkip: false, //This is to ensure the graph does not miss any y data label as we want to see all provinces' data
        },
        grid: {
          display: false, //This gets rid of the y axis gridlines
        },
      },
    },
    plugins: {
      //This is to make changes to stuff like the hover box, and legend
      tooltip: {
        //Tool tip is essentially the name for the hover box that appears when you hover over a data point
        enabled: true, //This is to ensure the hover box is displayed
        callbacks: {
          //As mentioned there are multiple callbacks
          title: function (context) {
            //Context is essentially the data, labels, etc. of the graph which has been defined in const data
            console.log(context[0].label); //context[0].label is calling the labels of the graph
            return "Province:" + " " + context[0].label; //This returns the tooltip as for example, "Province: New Brunswick"
          },
        },
      },
      legend: {
        display: false, //display is a command for the legend itself and here we are not displaying a legend.
      } //Notice all the curly brackets this is to close all the yet open curly brackets
    }
  }
};

//render init block. This is essentially the part where the script paints the picture of our graph. Ensure the config is the config of the above graph. To ensure the variables do not repeat I have used config1, config2,.... simialrly I used data1, data2.... in the below graphs. 
// After const I usually put the name I used in the first line. You will notice the same in the below graphs. 
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
    tension: 0.1,
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

// -----------------------------------------------Graph of Debt-to-GDP ratio---------------------------------------------------------------------
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

//Graphs for Population Highlightboxes
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
      borderColor: "rgb(255,165,0)",
      backgroundColor: "rgb(255,165,0)",
      borderWidth: 3,
      pointRadius: 1,
    },
    {
      label: "New Brunswick",
      data: ylabels7,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1,
    },
  ],
};

//config
const config3 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data3,
  options: {
    tension: 0.15,
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
      borderColor: "rgb(255,165,0)",
      backgroundColor: "rgb(255,165,0)",
      borderWidth: 3,
      pointRadius: 1,
    },
    {
      label: "Net International Migration",
      data: ylabels9,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1,
    },
    {
      label: "Net Interprovincial Migration",
      data: ylabels10,
      borderColor: "#004D40",
      backgroundColor: "#004D40",
      borderWidth: 3,
      pointRadius: 0.25,
    },
  ],
};

//config
const config4 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data4,
  options: {
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

// -----------------------------------------------Province Age Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart5").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels8 = [
  "CA",
  "NL",
  "PEI",
  "NS",
  "NB",
  "QC",
  "ON",
  "MA",
  "SK",
  "AB",
  "BC",
  "YT",
  "NT",
  "NU",
];
const ylabels11 = [
  41.1, 47.8, 42.4, 45, 46.2, 43, 40.7, 37.8, 38.1, 37.9, 42.3, 39.3, 35.8,
  26.5,
];
const ylabels12 = [
  41.7, 45.2, 42.4, 44, 44.5, 42.8, 41.5, 39.3, 39.4, 38.9, 42.8, 39.7, 36.4,
  28.9,
];

// setup
const data5 = {
  labels: xlabels8,
  datasets: [
    {
      label: "Median Age",
      data: ylabels11,
      backgroundColor: "rgb(255,165,0)",
    },
    {
      label: "Average Age",
      data: ylabels12,
      backgroundColor: "rgb(0, 150, 255)",
    },
  ],
};

//config
const config5 = {
  type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data5,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 50,
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
          stepSize: 10,
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
          boxWidth: 20,
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
//Graphs for Trade Highlightboxes
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
          callback: function (value, index, ticks) {
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
  2015, 2016, 2017, 2018, 2019, 2020,
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
//Graphs for Natural Resources Highlightboxes
// -----------------------------------------------Forestry---------------------------------------------------------------------------
var context = document.getElementById("myChart9").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels12 = [
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020, 2021,
];

const ylabels19 = [
  1.47, 1.54, 1.73, 1.26, 1.14, 1.1, 1.02, 0.875, 1.02, 1.0, 0.96, 1.07, 1.14,
  1.24, 1.33, 1.27, 1.23, 1.23, 1.19, 1.25,
];

// setup
const data9 = {
  labels: xlabels12,
  datasets: [
    {
      label: "Total International Export Value",
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
        max: 1.8,
        min: 0.6,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0.6) {
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
          label: function (context) {
            return (
              "Total International Export Value: $" +
              ylabels19[context.dataIndex] +
              "B"
            );
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
const myChart9 = new Chart(
  document.getElementById("myChart9").getContext("2d"),
  config9
);

// -----------------------------------------------Mining---------------------------------------------------------------------------
var context = document.getElementById("myChart10").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels13 = [
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020, 2021,
];

const ylabels20 = [
  0.96, 0.96, 0.92, 0.84, 1.22, 1.17, 1.28, 0.81, 0.88, 0.86, 0.79, 0.48, 0.36,
  0.46, 0.37, 0.4, 0.37, 0.31, 0.26, 0.24,
];

// setup
const data10 = {
  labels: xlabels13,
  datasets: [
    {
      label: "Total International Export Value",
      data: ylabels20,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
  ],
};

//config
const config10 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data10,
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
        max: 1.4,
        min: 0.0,
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
          label: function (context) {
            return (
              "Total International Export Value: $" +
              ylabels20[context.dataIndex] +
              "B"
            );
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
const myChart10 = new Chart(
  document.getElementById("myChart10").getContext("2d"),
  config10
);

// ---------------------------------------------Fisheries, and Agriculture----------------------------------------------------------------------
var context = document.getElementById("myChart11").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels14 = [
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020, 2021,
];

const ylabels21 = [
  1.26, 1.09, 1.09, 1.08, 1.02, 0.87, 0.99, 0.91, 0.95, 0.99, 1.08, 1.12, 1.21,
  1.54, 1.66, 1.72, 1.66, 1.7, 1.38, 2.03,
];

// setup
const data11 = {
  labels: xlabels14,
  datasets: [
    {
      label: "Total International Export Value",
      data: ylabels21,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
  ],
};

//config
const config11 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data11,
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
        max: 2.1,
        min: 0.7,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 0.7) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          stepSize: 0.35,
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
          label: function (context) {
            return (
              "Total International Export Value: $" +
              ylabels21[context.dataIndex] +
              "B"
            );
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
const myChart11 = new Chart(
  document.getElementById("myChart11").getContext("2d"),
  config11
);
//Graphs for  Highlightboxes
//-------------------------------------------R&D Expedentiture----------------------------------------------------------------------
var context = document.getElementById("myChart12").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels15 = [
  "CA",
  "NL",
  "PEI",
  "NS",
  "NB",
  "QC",
  "ON",
  "MA",
  "SK",
  "AB",
  "BC",
];

const ylabels22 = [378, 669, 224, 412, 229, 426, 387, 298, 310, 350, 335];

// setup
const data12 = {
  labels: xlabels15,
  datasets: [
    {
      label: "Total R&D Expenditure Per Capita ",
      data: ylabels22,
      borderColor: "rgb(45, 73, 36)",
      backgroundColor: [
        "#004D40",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(255,165,0)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
      ],
      borderWidth: 0,
      pointRadius: 1.0,
    },
  ],
};

//config
const config12 = {
  type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data12,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        max: 500,
        min: 100,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 100) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
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
            return "Province: " + " " + context[0].label;
          },
          label: function (context) {
            console.log(context);
            return (
              "Total R&D Expenditure Per Capita: $" +
              ylabels22[context.dataIndex]
            );
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
const myChart12 = new Chart(
  document.getElementById("myChart12").getContext("2d"),
  config12
);

//-----------------------------------------R&D Expedentiture Funding by Sources------------------------------------------------------------------
var context = document.getElementById("myChart13").getContext("2d");
context.width = 50;
context.height = 50;

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels16 = [
  "Business Enterprise",
  "Federal Government",
  "Foreign",
  "Higher Education",
  "Private Non-Profit",
  "Provincial Government",
];

const xlabels17 = ["BE", "FG", "Foreign", "HE", "PNP", "PG"];

const ylabels23 = [3, 17, 0, 66, 8, 6];

// setup
const data13 = {
  labels: xlabels17,
  datasets: [
    {
      label: "Total R&D Expenditure Per Capita ",
      data: ylabels23,
      backgroundColor: [
        "rgb(255,165,0)",
        "rgb(0, 150, 255)",
        "rgb(0, 0, 0)",
        "#004D40",
        "rgb(30, 75, 117)",
        "rgb(115, 45, 77)",
      ],
    },
  ],
};

//config
const config13 = {
  type: "pie", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data13,
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            console.log(context);
            return (
              xlabels16[context.dataIndex] +
              ": " +
              ylabels23[context.dataIndex] +
              "%"
            );
          },
        },
      },
      legend: {
        display: true,
      },
    },
  },
};

//render init block
const myChart13 = new Chart(
  document.getElementById("myChart13").getContext("2d"),
  config13
);
//---------------------------------------------Labour Productivity Graph-------------------------------------------------------------------------
var context = document.getElementById("myChart14").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels18 = [
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels24 = [
  51.6, 51.7, 52.3, 53.4, 54.1, 54.1, 53.8, 53.9, 54.7, 55.7, 55.9, 56.9, 58.6,
  58.6, 58.8, 59.8, 60.1, 60.5, 65.0, 61.5,
];
const ylabels25 = [
  40.9, 41.0, 41.6, 41.3, 41.8, 41.7, 42.1, 42.4, 43.2, 43.7, 43.1, 43.9, 44.6,
  45.4, 45.7, 47.0, 45.7, 47.0, 51.1, 49.2,
];

const ylabels26 = [
  42.4, 43.5, 44.3, 45.1, 45.1, 44.9, 44.8, 44.3, 45.2, 46.6, 45.6, 45.9, 46.6,
  47.0, 46.7, 47.3, 47.6, 48.3, 50.9, 50.5,
];

// setup
const data14 = {
  labels: xlabels18,
  datasets: [
    {
      label: "Canada",
      data: ylabels24,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
    {
      label: "New Brunswick",
      data: ylabels25,
      borderColor: "rgb(255,165,0)",
      backgroundColor: "rgb(255,165,0)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
    {
      label: "Nova Scotia",
      data: ylabels26,
      borderColor: "#004D40",
      backgroundColor: "#004D40",
      borderWidth: 3,
      pointRadius: 1.0,
    },
  ],
};

//config
const config14 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data14,
  options: {
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
        beginAtZero: false,
        max: 70,
        min: 35,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 35) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
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
            return "Year:" + " " + context[0].label;
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
const myChart14 = new Chart(
  document.getElementById("myChart14").getContext("2d"),
  config14
);

//Graphs for Labour Highlightboxes
//-----------------------------------------------Average Weekly Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart15").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels19 = [
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels27 = [
  650.12, 662.54, 679.79, 703.14, 726.92, 750.2, 780.9, 801.67, 816.85, 836.08,
  862.87, 881.84, 897.23, 921.76, 938.97, 952.94, 980.31, 1012.28, 1080.99,
  1098.97,
];
const ylabels28 = [
  548.06, 561.34, 572.91, 591.2, 610.82, 639.63, 670.02, 702.84, 719.68, 727.05,
  749.91, 777.8, 782.32, 808.3, 821.62, 843.14, 862.26, 884.42, 918.85, 942.73,
];

// setup
const data15 = {
  labels: xlabels19,
  datasets: [
    {
      label: "Canada",
      data: ylabels27,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
    {
      label: "New Brunswick",
      data: ylabels28,
      borderColor: "rgb(255,165,0)",
      backgroundColor: "rgb(255,165,0)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
  ],
};

//config
const config15 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data15,
  options: {
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
        beginAtZero: false,
        max: 1200,
        min: 500,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 500) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          callback: function (value, index, ticks) {
            return "$" + " " + value;
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
            return "Year:" + " " + context[0].label;
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
const myChart15 = new Chart(
  document.getElementById("myChart15").getContext("2d"),
  config15
);
//-------------------------------------------Labour Force Production Rate Graph-----------------------------------------------------------------
var context = document.getElementById("myChart16").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels20 = [
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels29 = [
  77.4, 78.2, 78.1, 77.7, 77.7, 78.1, 78.3, 77.9, 77.7, 77.7, 77.7, 77.9, 77.6,
  77.8, 77.9, 78.2, 78.2, 78.7, 77.4, 79.1,
];
const ylabels30 = [
  74.3, 74.1, 75.0, 74.7, 74.9, 75.0, 76.6, 76.3, 75.8, 75.3, 75.8, 76.6, 76.7,
  77.0, 76.8, 76.1, 77.0, 77.1, 76.7, 78.0,
];

// setup
const data16 = {
  labels: xlabels20,
  datasets: [
    {
      label: "Canada",
      data: ylabels29,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
    {
      label: "New Brunswick",
      data: ylabels30,
      borderColor: "rgb(255,165,0)",
      backgroundColor: "rgb(255,165,0)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
  ],
};

//config
const config16 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data16,
  options: {
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
        beginAtZero: false,
        max: 80,
        min: 70,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 60) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          callback: function (value, index, ticks) {
            return value + "%";
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
            return "Year:" + " " + context[0].label;
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
const myChart16 = new Chart(
  document.getElementById("myChart16").getContext("2d"),
  config16
);

//--------------------------------------Post Secondary Education Attainment Rate Graph----------------------------------------------------------
var context = document.getElementById("myChart17").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels21 = [
  2000, 2005, 2010, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
];
const ylabels31 = [52, 58, 62, 64, 66, 67, 67, 68, 69, 70, 72];
const ylabels32 = [47, 51, 56, 59, 59, 60, 61, 62, 61, 63, 66];

// setup
const data17 = {
  labels: xlabels21,
  datasets: [
    {
      label: "Canada",
      data: ylabels31,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
    {
      label: "New Brunswick",
      data: ylabels32,
      borderColor: "rgb(255,165,0)",
      backgroundColor: "rgb(255,165,0)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
  ],
};

//config
const config17 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data17,
  options: {
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
        beginAtZero: false,
        max: 75,
        min: 40,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 40) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          callback: function (value, index, ticks) {
            return value + "%";
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
            return "Year:" + " " + context[0].label;
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
const myChart17 = new Chart(
  document.getElementById("myChart17").getContext("2d"),
  config17
);

//Graphs for Social and Environmental Welfare Highlightboxes
//-----------------------------------------------GHC Emissions Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart18").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels22 = [
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020,
];
const ylabels33 = [
  21.16, 20.84, 21.71, 19.78, 19.38, 19.44, 18.31, 18.06, 17.69, 17.79, 16.1,
  14.24, 13.69, 14.04, 14.84, 13.76, 13.56, 13.15, 12.44,
];

// setup
const data18 = {
  labels: xlabels22,
  datasets: [
    {
      label: "NB Inventory Total (Mt CO2 eq)",
      data: ylabels33,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
  ],
};

//config
const config18 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data18,
  options: {
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
        beginAtZero: false,
        max: 25,
        min: 5,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 5) {
              return "#808080";
            } else {
              return "#EAEAEA";
            }
          },
          borderColor: "#808080",
        },
        ticks: {
          autoSkip: true,
          callback: function (value, index, ticks) {
            return value + " Mt";
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
          label: function (context) {
            console.log(context);
            return (
              "NB Inventory Total: " + ylabels33[context.dataIndex] + " Mt CO2e"
            );
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
const myChart18 = new Chart(
  document.getElementById("myChart18").getContext("2d"),
  config18
);

// -----------------------------------------------Life Satisfaction Graph-----------------------------------------------------------------------
var context = document.getElementById("myChart5").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels23 = [
  "CA",
  "NL",
  "PEI",
  "NS",
  "NB",
  "QC",
  "ON",
  "MA",
  "SK",
  "AB",
  "BC",
];
const ylabels34 = [
  93.2, 94.4, 96.5, 91.7, 91.3, 94.9, 92.8, 90.0, 95.1, 93, 92.5,
];

// setup
const data19 = {
  labels: xlabels23,
  datasets: [
    {
      label: "Percentage of Satisfied People",
      data: ylabels34,
      backgroundColor: [
        "#004D40",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(255,165,0)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
        "rgb(0, 150, 255)",
      ],
    },
  ],
};

//config
const config19 = {
  type: "bar", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data19,
  options: {
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          minRotation: 90,
          maxRotation: 90,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        min: 80,
        grid: {
          color: (context) => {
            console.log(context.tick.value);
            if (context.tick.value == 80) {
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
          stepSize: 10,
          callback: function (value, index, ticks) {
            return value + " %";
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
            return "Province:" + " " + context[0].label;
          },
          label: function (context) {
            console.log(context);
            return (
              "Percentage of Satisfied People: " +
              ylabels34[context.dataIndex] +
              "%"
            );
          },
        },
      },
      legend: {
        display: false,
        labels: {
          boxWidth: 20,
        },
      },
    },
  },
};

//render init block
const myChart19 = new Chart(
  document.getElementById("myChart19").getContext("2d"),
  config19
);

//-----------------------------------------------Poverty Graph---------------------------------------------------------------------------
var context = document.getElementById("myChart20").getContext("2d");

//Global Options

Chart.defaults.defaultFontFamily = "Montserrat";
Chart.defaults.font.size = 12;
Chart.defaults.color = "black";

const xlabels24 = [ 
  2015, 2016, 2017, 2018, 2019, 2020
];
const ylabels35 = [
   14.5, 12.9, 11.9, 11.2, 10.3, 6.4
];
const ylabels36 = [
  16.2, 13.9, 12.6, 10.8, 9.9, 7.6
];
const ylabels37 = [
  16.8, 16.4, 15.1, 13.8, 12.0, 7.7
];


// setup
const data20 = {
  labels: xlabels24,
  datasets: [
    {
      label: "Canada",
      data: ylabels35,
      borderColor: "rgb(0, 150, 255)",
      backgroundColor: "rgb(0, 150, 255)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
    {
      label: "New Brunswick",
      data: ylabels36,
      borderColor: "rgb(255,165,0)",
      backgroundColor: "rgb(255,165,0)",
      borderWidth: 3,
      pointRadius: 1.0,
    },
    {
      label: "Nova Scotia",
      data: ylabels37,
      borderColor: "#004D40",
      backgroundColor: "#004D40",
      borderWidth: 3,
      pointRadius: 1.0,
    },
  ],
};

//config
const config20 = {
  type: "line", //bar, horizonatlBar, pie, line, doughnout, rada, polarArea
  data: data20,
  options: {
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
          callback: function (value, index, ticks) {
            return value + " %";
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
          }          
        }
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
const myChart20 = new Chart(
  document.getElementById("myChart20").getContext("2d"),
  config20
);
