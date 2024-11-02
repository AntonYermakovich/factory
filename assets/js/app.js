const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnComplete = document.querySelector(".btn-complete");
const display = document.querySelector(".display");

btnStart?.addEventListener("click", startTimer);

function startTimer() {
  this.classList.add("btn_hide");
  btnPause.classList.remove("btn_hide");
  btnComplete.classList.remove("btn_hide");
  display.classList.remove("btn_hide");
}

// конечная дата
let deadline = new Date(Date.now() + (3 * 60 * 60 * 1000 + 999));
// id таймера
let timerId = null;
// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
function countdownTimer() {
  let diff = deadline - new Date();
  if (diff <= 0) {
    clearInterval(timerId);
  }
  const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
  $hours.textContent = hours < 10 ? "0" + hours : hours;
  $minutes.textContent = minutes < 10 ? "0" + minutes : minutes;
  $seconds.textContent = seconds < 10 ? "0" + seconds : seconds;
}
// получаем элементы, содержащие компоненты даты
const $hours = document?.querySelector(".time__hours");
const $minutes = document?.querySelector(".time__minutes");
const $seconds = document?.querySelector(".time__seconds");

// вызываем функцию countdownTimer
// вызываем функцию countdownTimer каждую секунду
if (btnStart) {
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
}

// =========================== CHART ===========================
const chart1 = document.getElementById("chart1");
const chart2 = document.getElementById("chart2");
const chart3 = document.getElementById("chart3");
const chart4 = document.getElementById("chart4");
const chart5 = document.getElementById("chart5");
const chart6 = document.getElementById("chart6");

const labels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const data1 = [
  0, 68, 60, 0, 40, 15, 50, 0, 8, 60, 15, 64, 30, 35, 5, 50, 40, 0, 0, 0, 0, 0,
  0, 0,
];

const data2 = [
  0, 0, 0, 0, 0, 0, 0, 0, 8, 60, 15, 64, 30, 35, 5, 50, 40, 0, 0, 0, 0, 0, 0, 0,
];

function createChart(elementId, data, titleChart) {
  return new Chart(elementId, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Загрузка (%)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Часы",
          },
          ticks: {
            autoSkip: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: titleChart,
        },
      },
    },
  });
}

chart1 && createChart(chart1, data2, "Почасовая загрузка ZBS-320-8IR");
chart2 && createChart(chart2, data2, "Почасовая загрузка ZBS-320-8IR");
chart3 && createChart(chart3, data2, "Почасовая загрузка ZBS-320-8IR");
chart4 && createChart(chart4, data2, "Почасовая загрузка ZBS-320-8IR");
chart5 && createChart(chart5, data1, "Почасовая загрузка ZBS-320-8IR");
chart6 && createChart(chart6, data1, "Почасовая загрузка ZBS-320-8IR");
