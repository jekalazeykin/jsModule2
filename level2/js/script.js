let num = prompt('Введите число участников группы');
num = Number(num);

if (num > 0 === true && (num ^ 0) === num) {
  num = num;
} else {
  alert("неправильный ввод");
}

let sharm = 15;
let hurgada = 25;
let taba = 6;

if (num <= 25 && num > 0 && (num ^ 0) === num) {
  var userAnswer = confirm('В группе hurgada есть места, согласны ли вы быть в этой группе?');
  if (userAnswer === true) {
    hurgada = hurgada - num;
  } else if (num <= 15 && num > 0 && (num ^ 0) === num) {
    var userAnswer = confirm('В группе sharm есть места, согласны ли вы быть в этой группе?');
    if (userAnswer === true) {
      sharm = sharm - num;
    } else if (num <= 6 && num > 0 && (num ^ 0) === num) {
      var userAnswer = confirm('В группе taba есть места, согласны ли вы быть в этой группе?');
      if (userAnswer === true) {
        taba = taba - num;
      } else {
        alert('вы не сделали выбор');
      }
    }
    else {
      alert('вы не сделали выбор');
    }
  }
} else {
  alert('Мест нет');
}
console.log(taba);
console.log(sharm);
console.log(hurgada);
