'use strict';

/*let arr  = ["first", 2, 3, "four", 5];

arr.forEach(function (item, i, mass) {
  console.log(i + ': ' + item + " (массив: " + mass + ')');
});*/
/*
  Результат перебора массива с помощью forEach.
0: first (массив: first,2,3,four,5)
1: 2 (массив: first,2,3,four,5)
2: 3 (массив: first,2,3,four,5)
3: four (массив: first,2,3,four,5)
4: 5 (массив: first,2,3,four,5)
 */

/*let mass = [1, 3, 4, 6, 7];

for (let key of mass) {
  console.log(key);
}*/
//for ( of ) - Цикл дающий значения из массива.

/*
Принять занчения в массив через запятую
let ans = prompt('', ''),
  arr = [];

arr = ans.split(',');
console.log(arr);
*/

/*
let arr = ['adas', 'fffdg', 'sdsadf', '23ad'],
  i = arr.join(', ');    // join() - метод берущий каждый элемент массива и склеивает в одну строку. Внутрь скобок ставится разделитель.
console.log(i);
*/

/*
let arr = ['adas', 'fffdg', 'sdsadf', '23ad'],
i = arr.sort();    // sort() - метод сортирующий элементы массива по алфавиту. Сортирует всё как строки.
console.log(arr);
*/

/*
let arr = [1, 15, 4],
i = arr.sort(compareNum);    // sort() - метод сортирующий элементы массива по алфавиту. Сортирует всё как строки. Если добавить callback funct, можно сортировать по порядку числа.

function compareNum(a,b) {
  return a-b;
}

console.log(arr);
*/

/*
let soldier = {
  health: 400,
  armor: 100
};

let john = {
  health: 100
};

john.__proto__ = soldier;   //Пример из ООП дающий возможность унаследовать от потомака значение как прототип.

console.log(john);
console.log(john.armor);
*/

