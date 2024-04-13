let num = Math.floor(Math.random() * 100) +1;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
  document.write(num + "は3と5の倍数です");
} else if (num % 3 === 0) {
  console.log("3の倍数です");
  document.write(num + "は3の倍数です");
} else if (num % 5 === 0) {
  console.log("5の倍数です");
  document.write(num + "は5の倍数です");
} else {
  console.log(num);
  document.write(num);
}

