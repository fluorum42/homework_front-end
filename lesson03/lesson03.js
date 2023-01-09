//lesson03
//block2 task1
function sayHi(name1){
    if(typeof(name1) =="string"){
        console.log('Hello, ' + name1 +'!');
    }else{
            console.log('Не той тип даних!');
        }
}
sayHi('dalek')
//block2 task2
const type1 = "Text"
console.log(typeof type1)
const type2 = 123
console.log(typeof type2)
const type3 = false
console.log(typeof type3)
const type4 = undefined
console.log(typeof type4)
const type5 = null
console.log(typeof type5)
//block3 task1
const arr1 = ['Капуста', 'Репа', 'Редиска', 'Морковка']
console.log(arr1.join('|'))
//block3 task2
let str1 = 'Вася;Петя;Вова;Олег'
let arr2 = str1.split(';')
console.log(arr2)
//block3 task3
function sayHello2(name2){
    if(name2 == undefined){
        console.log('Hello, guest!');
    }else{
            console.log('Hello, ' + name2 +'!');
        }
}
sayHello2()
//block3 task4
const fruits = ['яблоко', 'ананас', 'груша']
const fruitsInUpperCase = fruits.map(e => e.toUpperCase())
console.log(fruitsInUpperCase)
//block3 task5
function addOneForAll(...numbers){
    return numbers.map(item => item+1)
}
console.log(addOneForAll(1, 2, 3, 4))
//block3 task6
function getSum(...numbers){
    let sum = 0;
    numbers.forEach(function(item){
        sum += item
    })
    return sum;
}
console.log(getSum(1, 2, 3, 4))
//block3 task7
const arr9 = [1, 'hello', 2, 3, 4, '5', '6', 7, null]
const numberArray = arr9.filter(el => typeof el == "number")
console.log(numberArray)
//block3 task8
function arrayTesting(...numbers){
    for (var i = 0; i < numbers.length; i++) {
        if (Boolean(i) == true){
            return('Нашли true значение')
        }else{
            return('Ничего нет')
        }  
    }
}
const haveTrueValue = arrayTesting([0, false, null, 1])
console.log(haveTrueValue)
const dontHaveTrueValue = arrayTesting([0, false, null, 0])
console.log(dontHaveTrueValue)