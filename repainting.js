/*
· Предпазен найлон - 1.50 лв. за кв. метър
· Боя - 14.50 лв. за литър
· Разредител за боя - 5.00 лв. за литър
1. Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]

2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]

3. Количество разредител (в литри) - цяло число в интервала [1…30]

4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]
*/
function repainting(index) {

    let nylon =Number(index[0]);
    let paint =Number(index[1]);
    let thinner =Number(index[2] * 5);
    let hours =Number(index[3]);
    let bags = 0.40;

    let nylonPrice = (nylon +2)*1.50;
    let paintPrice = (paint * 1.1)*14.50;

    let sum = nylonPrice+paintPrice+thinner+bags;
    let master = (sum*0.3)*hours;
    let finalSum = sum+master;
    console.log(finalSum);
   
    
    

}
repainting(["5 ",

"10 ",

"10 ",

"1 "])