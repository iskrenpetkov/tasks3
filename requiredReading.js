/*
1. Брой страници в текущата книга – цяло число в интервала [1…1000]

2. Страници, които прочита за 1 час – цяло число в интервала [1…1000]

3. Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]
*/




function requiredReading(index) {
let bookPages = Number(index[0]);
let pagesOneHour = Number(index[1]);
let theNumberOfDays = Number(index[2]);
let result = bookPages / pagesOneHour / theNumberOfDays;

console.log(result);

    
}
requiredReading(["212 ","20 ","2 "])