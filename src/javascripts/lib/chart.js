import Chart from "chart.js";

const ctx = document.getElementById("sampleChart").getContext("2d");
export const sampleChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["5月", "4月", "3月", "2月", "1月"],
    datasets: [
      {
        label: "昨年",
        data: [4.5, 6.2, 4.7, 5.8, 7.1],
        backgroundColor: "#eee",
      },
      {
        label: "今年",
        data: [5.3, 4.9, 8.2, 7.0, 6.5],
        backgroundColor: "#f4c16e",
      },
    ],
  },
  options: {
    title: {
      display: false,
      text: "2019年1月～2019年6月",
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMax: 8,
            suggestedMin: 0,
            stepSize: 2,
            callback: function (value) {
              return value + "㎥";
            },
          },
        },
      ],
    },
  },
});
