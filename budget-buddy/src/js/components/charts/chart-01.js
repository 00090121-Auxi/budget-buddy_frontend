import ApexCharts from "apexcharts";

// ===== chartOne (agrupado)
const chart01 = () => {
  const chartOneOptions = {
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 260,
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Income",
        data: [800, 950, 900, 1000, 1050, 1100, 1200, 1150, 1000, 950, 900, 850],
      },
      {
        name: "Expenses",
        data: [300, 400, 350, 500, 490, 600, 700, 620, 580, 500, 400, 300],
      },
    ],
    colors: ["#465fff", "#6495ED"],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "75%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: { colors: "#6b7280" }
      }
    },
    yaxis: {
      labels: {
        style: { colors: "#6b7280" }
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
      labels: { colors: "#6b7280" },
      markers: { radius: 99 },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return `$${val}`;
        },
      },
    },
  };

  const chartSelector = document.querySelector("#chartOne");

  if (chartSelector) {
    const chart = new ApexCharts(chartSelector, chartOneOptions);
    chart.render();
  }
};

export default chart01;
