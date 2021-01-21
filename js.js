const newYearDate = "1 jan 2022";

// const hMonth = document.getElementById("month-higri-n");
// const hDay = document.getElementById("days-higri-n");
// const hHour = document.getElementById("hours-higri-n");
// const hMinute = document.getElementById("minutes-higri-n");
// const hSecond = document.getElementById("seconds-higri-n");

const ADMonth = document.getElementById("month-ad-n");
const ADDay = document.getElementById("days-ad-n");
const ADHour = document.getElementById("hours-ad-n");
const ADMinute = document.getElementById("minutes-ad-n");
const ADSecond = document.getElementById("seconds-ad-n");

function annoDominiCounter() {
  //  let autoCalcNextYear= Date.now() + 31556952
  let date = new Date(newYearDate);
  let todayDate = Date.now();
  let yearPeriodLeftInMiliSeconds = new Date(date - todayDate);
  let totalSeconds = Math.floor(yearPeriodLeftInMiliSeconds / 1000);
  let seconds = Math.floor((yearPeriodLeftInMiliSeconds / 1000) % 60);
  let minutes = Math.floor((totalSeconds / 60) % 60);
  let hours = Math.floor((totalSeconds / 3600) % 24);
  let days = Math.floor(totalSeconds / 3600 / 24);
  let months = Math.floor(totalSeconds / 3600 / 24 / 31);

  ADMonth.innerHTML = formatDate(months);
  ADDay.innerHTML = formatDate(days);
  ADHour.innerHTML = formatDate(hours);
  ADMinute.innerHTML = formatDate(minutes);
  ADSecond.innerHTML = formatDate(seconds);

  //console.log(AH);
  //   console.log(
  //     `seconds: ${totalSeconds} , minutes ${minutes}, hours : ${hours}, days : ${days}`
  //   );
}

function formatDate(time) {
  return time < 10 ? `0${time}` : time;
}

// function HigriCounter() {
//   // calculation for Date conversion since the Date object starts at 1970

//   let CEtoAHconversion = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
//     day: "numeric",
//     month: "long",
//     weekday: "long",
//     year: "numeric",
//   }).format(new Date(newYearDate));
//   let AHtodayDate = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
//     day: "numeric",
//     month: "long",
//     weekday: "long",
//     year: "numeric",
//   }).format(Date.now());
//   let yearPeriodLeftInMiliSeconds = CEtoAHconversion - AHtodayDate;
//   let totalSeconds = Math.floor(yearPeriodLeftInMiliSeconds / 1000);
//   let seconds = Math.floor((yearPeriodLeftInMiliSeconds / 1000) % 60);
//   let minutes = Math.floor((totalSeconds / 60) % 60);
//   let hours = Math.floor((totalSeconds / 3600) % 24);
//   let days = Math.floor(totalSeconds / 3600 / 24);
//   let months = Math.floor(totalSeconds / 3600 / 24 / 30);

//   hMonth.innerHTML = formatDate(months);
//   hDay.innerHTML = formatDate(days);
//   hHour.innerHTML = formatDate(hours);
//   hMinute.innerHTML = formatDate(minutes);
//   hSecond.innerHTML = formatDate(seconds);
//   console.log((CEtoAHconversion - AHtodayDate) / 1000 / 3600 / 24 / 29.5);
//   console.log(CEtoAHconversion / 1000 / 3600 / 24 / 29.5);
//   console.log(AHtodayDate / 1000 / 3600 / 24 / 29.5);
// }
setInterval(annoDominiCounter, 1000);

// HigriCounter();
// const AH = Math.floor(((1970 - 622) * 33) / 32);
 const CE = Math.floor(2020 + 622 - 2020 / 32);

// console.log(AH);
console.log(CE);
