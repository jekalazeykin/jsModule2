let res;
let num = prompt('Введите число, соответсвующее курорту: 1 - taba, 2 - sharm, 3 - hurgada', 1);
switch (num) {
  case "1" : res = "taba"; break;
  case "2" : res = "sharm"; break;
  case "3" : res = "hurgada"; break;
  default : res = "Введено число, варианта курорта для которого нет";
}

alert(`Вы выбрали курорт - ${res}!`);
