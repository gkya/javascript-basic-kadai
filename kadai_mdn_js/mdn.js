const date = new Date();
const [month, day, year] = [
  date.getMonth() + 1 + '月',
  date.getDate() + '日',
  date.getFullYear() + '年',
];
console.log(year, month, day);

const today = () => {
  const year = date.getFullYear()+ '年';
  const month = date.getMonth() + 1 + '月';
  const day = date.getDate() + '日';
  return '本日は' + year + month + day + 'です!!';
};
console.log(today());

