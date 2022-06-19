//Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

//Сортировка по нижнему значению диапазона цены курсов
courses.sort(function courses_sort(a, b) {
  if (a.prices[0] > b.prices[0])
    return 1;
  else if (a.prices[0] < b.prices[0])
    return -1;
  else
    return 0;
})

//Спрашиваю диапазон у пользователя. При желании, можно получать эти данные из формы HTML
let requiredRange1 = [prompt('Укажите нижний диапазон цены. Если нижний диапазон не требуется, просто нажмите "Enter".'), prompt('Укажите верхний диапазон цены. Если верхний диапазон не требуется, просто нажмите "Enter".')];

//Сообщаю пользователю, какой диапазон он выбрал
if (requiredRange1[0] == '' && requiredRange1[1] == '')
  console.log('Вы не выбрали ценовой диапазон. Ниже представлены все курсы:')
else if (requiredRange1[0] == '')
  console.log('Вы выбрали диапазон от 0 до ' + requiredRange1[1])
else if (requiredRange1[1] == '')
  console.log('Вы выбрали диапазон от ' + requiredRange1[0] + ' до максимальной цены')
else
  console.log('Вы выбрали диапазон от ' + requiredRange1[0] + ' до ' + requiredRange1[1])

//Функция по диапазону пользователя
function course(low_range, high_range) {
  let res = [];
  for (i = 0; i < courses.length; i++) {
    //Проверка курсов, у которых не указан ценовой диапазон
    if (courses[i].prices[0] == null && courses[i].prices[1] == null) {
      if (low_range == '' && high_range == '') {
        res.push(courses[i].name + ', цена не определена');
      }
      else if (low_range != '' && high_range != '')
        res.push(courses[i].name + ', ценой только от ' + low_range + ' до ' + high_range);
      else if (low_range == '' && high_range != '')
        res.push(courses[i].name + ', ценой только от 0 до ' + high_range);
      else if (low_range != '' && high_range == '')
        res.push(courses[i].name + ', ценой только от ' + low_range);
      continue;
    }
    //Проверка курсов, у которых указан только верхний ценовой диапазон
    else if (courses[i].prices[0] == null && courses[i].prices[1] != null) {
      if (low_range == '' && high_range == '')
        res.push(courses[i].name + ', цена до ' + courses[i].prices[1]);
      else if (low_range != '' && high_range != '' && high_range >= courses[i].prices[0]) {
        if (high_range <= courses[i].prices[1])
          res.push(courses[i].name + ', ценой только от ' + low_range + ' до ' + high_range);
        else
          res.push(courses[i].name + ', ценой только от ' + low_range + ' до ' + courses[i].prices[1]);
      }
      else if (low_range == '' && high_range != '') {
        if (high_range <= courses[i].prices[1])
          res.push(courses[i].name + ', ценой только от 0 до ' + high_range);
        else
          res.push(courses[i].name + ', ценой только от 0 до ' + courses[i].prices[1]);
      }
      else if (low_range != '' && high_range == '')
        if (low_range <= courses[i].prices[1])
          res.push(courses[i].name + ', ценой только от ' + low_range + ' до ' + courses[i].prices[1]);
      continue;
    }
    //Проверка курсов, у которых указан только нижний ценовой диапазон
    else if (courses[i].prices[0] != null && courses[i].prices[1] == null) {
      if (low_range == '' && high_range == '')
        res.push(courses[i].name + ', цена от ' + courses[i].prices[0]);
      else if (low_range != '' && high_range != '' && high_range >= courses[i].prices[0]) {
        if (low_range >= courses[i].prices[0])
          res.push(courses[i].name + ', ценой только от ' + low_range + ' до ' + high_range);
        else
          res.push(courses[i].name + ', ценой только от ' + courses[i].prices[0] + ' до ' + high_range);
      }
      else if (low_range != '' && high_range == '') {
        if (low_range >= courses[i].prices[0])
          res.push(courses[i].name + ', ценой только от ' + low_range);
        else
          res.push(courses[i].name + ', ценой только от ' + courses[i].prices[0]);
      }
      else if (low_range == '' && high_range != '')
        if (high_range >= courses[i].prices[0])
          res.push(courses[i].name + ', ценой только от ' + courses[i].prices[0] + ' до ' + high_range);
      continue;
    }
    //Проверка курсов, у которых указан весь ценовой диапазон
    else if (courses[i].prices[0] != null && courses[i].prices[1] != null) {
      if (low_range == '' && high_range == '')
        res.push(courses[i].name + ', цена от ' + courses[i].prices[0] + ' до ' + courses[i].prices[1]);
      else if (low_range != '' && high_range != '' && high_range <= courses[i].prices[0]) {
        if (low_range >= courses[i].prices[0] && high_range >= courses[i].prices[1])
          res.push(courses[i].name + ', ценой только от ' + low_range + ' до ' + courses[i].prices[1]);
        else if (low_range <= courses[i].prices[0] && high_range <= courses[i].prices[1])
          res.push(courses[i].name + ', ценой только от ' + courses[i].prices[0] + ' до ' + high_range);
        else if (low_range <= courses[i].prices[0] && high_range >= courses[i].prices[1])
          res.push(courses[i].name + ', ценой только от ' + courses[i].prices[0] + ' до ' + high_range);
        else if (low_range >= courses[i].prices[0] && high_range <= courses[i].prices[1])
          res.push(courses[i].name + ', ценой только от ' + courses[i].prices[0] + ' до ' + high_range);
      }
      else if (low_range == '' && high_range != '')
        if (high_range >= courses[i].prices[0]) {
          if (high_range <= courses[i].prices[1])
            res.push(courses[i].name + ', ценой только от ' + courses[i].prices[0] + ' до ' + high_range);
          else
            res.push(courses[i].name + ', цена от ' + courses[i].prices[0] + ' до ' + courses[i].prices[1]);
        }
      else if (low_range != '' && high_range == '') {
        if (low_range <= courses[i].prices[0])
          res.push(courses[i].name + ', цена от ' + courses[i].prices[0] + ' до ' + courses[i].prices[1]);
        else
          res.push(courses[i].name + ', ценой только от ' + courses[i].prices[0] + ' до ' + high_range);
      }
      continue;
    }
  }
  return res;
}
//Переменная для вывода результата в консоль (можно и без нее)
lis = course(requiredRange1[0], requiredRange1[1]);
//Вывод в консоль списка курсов, которые доступны пользователю с полученным ценовым диапазоном
for (j = 0; j < lis.length; j++) {
  console.log(lis[j]);
}
