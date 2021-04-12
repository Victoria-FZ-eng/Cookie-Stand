'use strict';

let customersPerHour = function getRandomIntInclusive(min, max) {
  let minCus = Math.ceil(min);
  let maxCus = Math.floor(max);
  return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
};

let objectsLocation = [];
let workingHours = ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'];
//let cookiePerHour = [];

let globalTotal = [];
for (let i=0; i < workingHours.length ; i++){
  globalTotal.push(0);
}


let container = document.getElementById('Locations');
let title = document.createElement('h3');
container.appendChild(title);
title.textContent='Daily Consumed Cookies';
let table = document.createElement('table');
container.appendChild(table);

let row1 = function(){
  let tablerow = document.createElement('tr');
  table.appendChild(tablerow);
  let tablehead = document.createElement('th');
  tablerow.appendChild(tablehead);
  tablehead.textContent = 'Store\'s Location';

  for (let i = 0 ; i < workingHours.length ; i++){
    let tableheadi = document.createElement('th');
    tablerow.appendChild(tableheadi);
    tableheadi.textContent = workingHours[i];
  }
  let tableheadt1 = document.createElement('th');
  tablerow.appendChild(tableheadt1);
  tableheadt1.textContent='Total';

};






function StoreLocation(location, minCustomer, maxCustomer, avgCoockieCustomer){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCoockieCustomer = avgCoockieCustomer;
  this.cookiePerHour = [];
  objectsLocation.push(this);
}

StoreLocation.prototype.getCookiePerHour = function(){
  let total = 0;
  for (let i=0; i < workingHours.length ; i++){
    let cookiePerHourNum = this.avgCoockieCustomer * customersPerHour(this.minCustomer, this.maxCustomer) ;
    cookiePerHourNum = Math.ceil(cookiePerHourNum);
    this.cookiePerHour.push(cookiePerHourNum);
    globalTotal[i]= globalTotal[i] + cookiePerHourNum;

    total = total + cookiePerHourNum ;

  }
  this.cookiePerHour.push(total);
  return this.cookiePerHour;
};

StoreLocation.prototype.render = function(){

  let tablerowi = document.createElement('tr');
  table.appendChild(tablerowi);
  let tabledatai = document.createElement('td');
  tablerowi.appendChild(tabledatai);
  tabledatai.textContent= this.location;

  for(let i =0; i<=workingHours.length ; i++){
    let tabledata = document.createElement('td');
    tablerowi.appendChild(tabledata);
    tabledata.textContent= this.cookiePerHour[i];
  }



};



let location1 = new StoreLocation ('Seattle', 23, 65, 6.3, []);
let location2 = new StoreLocation ('Tokyo', 3, 24, 1.2, []);
let location3 = new StoreLocation ('Dubai', 11, 38, 3.7, []);
let location4 = new StoreLocation ('Paris', 20, 38, 2.3, []);
let location5 = new StoreLocation ('Lima', 2, 16, 4.6, []);


let lastrow = function (){
  for (let i = 0 ; i < objectsLocation.length ; i++){
    objectsLocation[i].getCookiePerHour();
    objectsLocation[i].render();
  }

  let tablerowf = document.createElement('tr');
  table.appendChild(tablerowf);
  let tabledataf = document.createElement('td');
  tablerowf.appendChild(tabledataf);
  tabledataf.textContent = 'Total';

  for (let i = 0 ; i < workingHours.length ; i++){
    let tabledatafi = document.createElement('td');
    tablerowf.appendChild(tabledatafi);
    tabledatafi.textContent = globalTotal[i];

  }

  let totall = 0;
  for (let i = 0 ; i < workingHours.length ; i++){

    totall = totall + globalTotal[i];
  }

  let tabledatafi = document.createElement('td');
  tablerowf.appendChild(tabledatafi);
  tabledatafi.textContent = (totall);
};
row1();
lastrow();
//console.log(globalTotal);




// const seattle ={
//   location : 'Seattle' ,
//   minCustomer : 23 ,
//   maxCustomer : 65 ,
//   avgCoockieCustomer : 6.3 ,
//   workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
//   cookiePerHour : [],


//   // customersPerHour : function getRandomIntInclusive(min, max) {
//   //   let minCus = Math.ceil(min);
//   //   let maxCus = Math.floor(max);
//   //   return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
//   // },

//   // getCookiePerHour : function(){
//   //   let total = 0;
//   //   for (let i=0; i < this.workingHours.length ; i++){
//   //     let cookiePerHourNum = this.avgCoockieCustomer * customersPerHour(this.minCustomer, this.maxCustomer) ;
//   //     cookiePerHourNum = Math.ceil(cookiePerHourNum);
//   //     this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
//   //     total = total + cookiePerHourNum ;

//   //   }
//   //   this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`);
//   //   return this.cookiePerHour;
//   // },

//   consumedCookiesUl : function (){
//     let container = document.getElementById('Locations');
//     let head2 = document.createElement('h2');
//     container.appendChild(head2);
//     head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let i = 0 ; i <= this.workingHours.length ; i++){
//       let list = document.createElement('li');
//       unorderedList.appendChild(list);
//       list.textContent = this.getCookiePerHour()[i];
//     }
//   }


// };
// // // seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer);
// // //console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
// // seattle.getCookiePerHour();
// // //console.log(seattle.getCookiePerHour());
// seattle.consumedCookiesUl();




// const tokyo ={
//   location : 'Tokyo' ,
//   minCustomer : 3 ,
//   maxCustomer : 24 ,
//   avgCoockieCustomer : 1.2 ,
//   workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
//   cookiePerHour : [],


//   // customersPerHour : function getRandomIntInclusive(min, max) {
//   //   let minCus = Math.ceil(min);
//   //   let maxCus = Math.floor(max);
//   //   return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
//   // },

//   getCookiePerHour : function(){
//     let total = 0;
//     for (let i=0; i < this.workingHours.length ; i++){
//       let cookiePerHourNum = this.avgCoockieCustomer * customersPerHour(this.minCustomer, this.maxCustomer) ;
//       cookiePerHourNum = Math.ceil(cookiePerHourNum);
//       this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
//       total = total + cookiePerHourNum ;

//     }
//     this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`);
//     return this.cookiePerHour;
//   },

//   consumedCookiesUl : function (){
//     let container = document.getElementById('Locations');
//     let head2 = document.createElement('h2');
//     container.appendChild(head2);
//     head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let i = 0 ; i <= this.workingHours.length ; i++){
//       let list = document.createElement('li');
//       unorderedList.appendChild(list);
//       list.textContent = this.getCookiePerHour()[i];
//     }
//   }


// };
// //tokyo.customersPerHour(tokyo.minCustomer, tokyo.maxCustomer);
// //console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
// tokyo.getCookiePerHour();
// //console.log(seattle.getCookiePerHour());
// tokyo.consumedCookiesUl();




// const dubai ={
//   location : 'Dubai' ,
//   minCustomer : 11 ,
//   maxCustomer : 38 ,
//   avgCoockieCustomer : 3.7 ,
//   workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
//   cookiePerHour : [],


//   // customersPerHour : function getRandomIntInclusive(min, max) {
//   //   let minCus = Math.ceil(min);
//   //   let maxCus = Math.floor(max);
//   //   return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
//   // },

//   getCookiePerHour : function(){
//     let total = 0;
//     for (let i=0; i < this.workingHours.length ; i++){
//       let cookiePerHourNum = this.avgCoockieCustomer * customersPerHour(this.minCustomer, this.maxCustomer) ;
//       cookiePerHourNum = Math.ceil(cookiePerHourNum);
//       this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
//       total = total + cookiePerHourNum ;

//     }
//     this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`);
//     return this.cookiePerHour;
//   },

//   consumedCookiesUl : function (){
//     let container = document.getElementById('Locations');
//     let head2 = document.createElement('h2');
//     container.appendChild(head2);
//     head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let i = 0 ; i <= this.workingHours.length ; i++){
//       let list = document.createElement('li');
//       unorderedList.appendChild(list);
//       list.textContent = this.getCookiePerHour()[i];
//     }
//   }


// };
// //dubai.customersPerHour(dubai.minCustomer, dubai.maxCustomer);
// //console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
// dubai.getCookiePerHour();
// //console.log(seattle.getCookiePerHour());
// dubai.consumedCookiesUl();




// const paris ={
//   location : 'Paris' ,
//   minCustomer : 20 ,
//   maxCustomer : 38 ,
//   avgCoockieCustomer : 2.3 ,
//   workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
//   cookiePerHour : [],


//   // customersPerHour : function getRandomIntInclusive(min, max) {
//   //   let minCus = Math.ceil(min);
//   //   let maxCus = Math.floor(max);
//   //   return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
//   // },

//   getCookiePerHour : function(){
//     let total = 0;
//     for (let i=0; i < this.workingHours.length ; i++){
//       let cookiePerHourNum = this.avgCoockieCustomer * customersPerHour(this.minCustomer, this.maxCustomer) ;
//       cookiePerHourNum = Math.ceil(cookiePerHourNum);
//       this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
//       total = total + cookiePerHourNum ;

//     }
//     this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`);
//     return this.cookiePerHour;
//   },

//   consumedCookiesUl : function (){
//     let container = document.getElementById('Locations');
//     let head2 = document.createElement('h2');
//     container.appendChild(head2);
//     head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let i = 0 ; i <= this.workingHours.length ; i++){
//       let list = document.createElement('li');
//       unorderedList.appendChild(list);
//       list.textContent = this.getCookiePerHour()[i];
//     }
//   }


// };
// //paris.customersPerHour(paris.minCustomer, paris.maxCustomer);
// //console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
// paris.getCookiePerHour();
// //console.log(seattle.getCookiePerHour());
// paris.consumedCookiesUl();




// const lima ={
//   location : 'Lima' ,
//   minCustomer : 2 ,
//   maxCustomer : 16 ,
//   avgCoockieCustomer : 4.6 ,
//   workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
//   cookiePerHour : [],


//   // customersPerHour : function getRandomIntInclusive(min, max) {
//   //   let minCus = Math.ceil(min);
//   //   let maxCus = Math.floor(max);
//   //   return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
//   // },

//   getCookiePerHour : function(){
//     let total = 0;
//     for (let i=0; i < this.workingHours.length ; i++){
//       let cookiePerHourNum = this.avgCoockieCustomer * customersPerHour(this.minCustomer, this.maxCustomer) ;
//       cookiePerHourNum = Math.ceil(cookiePerHourNum);
//       this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
//       total = total + cookiePerHourNum ;

//     }
//     this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`);
//     return this.cookiePerHour;
//   },

//   consumedCookiesUl : function (){
//     let container = document.getElementById('Locations');
//     let head2 = document.createElement('h2');
//     container.appendChild(head2);
//     head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
//     let unorderedList = document.createElement('ul');
//     container.appendChild(unorderedList);
//     for (let i = 0 ; i <= this.workingHours.length ; i++){
//       let list = document.createElement('li');
//       unorderedList.appendChild(list);
//       list.textContent = this.getCookiePerHour()[i];
//     }
//   }


// };
// //lima.customersPerHour(lima.minCustomer, lima.maxCustomer);
// //console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
// lima.getCookiePerHour();
// //console.log(seattle.getCookiePerHour());
// lima.consumedCookiesUl();
