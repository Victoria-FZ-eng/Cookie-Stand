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
  let thead = document.createElement('thead');
  table.appendChild(thead);
  let tablerow = document.createElement('tr');
  thead.appendChild(tablerow);
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



let tbody = document.createElement('tbody');
table.appendChild(tbody);


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
  tbody.appendChild(tablerowi);
  let tabledatai = document.createElement('th');
  tablerowi.appendChild(tabledatai);
  tabledatai.textContent= this.location;

  for(let i =0; i<=workingHours.length ; i++){
    let tabledata = document.createElement('td');
    tablerowi.appendChild(tabledata);
    tabledata.textContent= this.cookiePerHour[i];
  }



};




console.log(objectsLocation);

new StoreLocation ('Seattle', 23, 65, 6.3);
new StoreLocation ('Tokyo', 3, 24, 1.2);
new StoreLocation ('Dubai', 11, 38, 3.7);
new StoreLocation ('Paris', 20, 38, 2.3);
new StoreLocation ('Lima', 2, 16, 4.6);

for (let i = 0 ; i < objectsLocation.length ; i++){
  objectsLocation[i].getCookiePerHour();
  objectsLocation[i].render();
}



let lastrow = function (){

  let tablefoot = document.createElement('tfoot');
  tablefoot.id='remove';
  table.appendChild(tablefoot);
  let tablerowf = document.createElement('tr');
  tablefoot.appendChild(tablerowf);
  let tabledataf = document.createElement('th');
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
console.log(globalTotal);
row1();
lastrow();





const form = document.getElementById('branch');
form.addEventListener('submit',handleSubmitting);


function handleSubmitting (event){

  event.preventDefault();
  let loc = event.target.location.value;
  let minn = event.target.minNum.value;
  // minn = parseInt(minn);
  let maxx = event.target.maxNum.value;
  // maxx = parseInt(maxx);
  let avg = event.target.avgCookie.value;
  // avg = parseFloat(avg);

  let del = document.getElementById('remove');
  del.parentNode.removeChild(del);


  let newBranch = new StoreLocation(loc, minn, maxx, avg);
  // console.log(typeof(minn, maxx, avg));
  // console.log(objectsLocation);
  // console.log(globalTotal);
  // console.log (newBranch.cookiePerHour);
  newBranch.getCookiePerHour();
  newBranch.render();
  lastrow();


}

//console.log(globalTotal);



