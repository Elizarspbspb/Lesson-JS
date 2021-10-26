1. Реализовать функцию foo:
let a = {
name: 'static',
count: 0
}
console.log(foo(a, 'count', 10)); /*
В консоль выведет:
[{name:'static', count:0}, {name:'static', count:1}, ...,
{name:'static', count:9}] */