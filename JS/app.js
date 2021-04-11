'use strict';


const seattle ={
    location : 'Seattle' ,
    minCustomer : 23 ,
    maxCustomer : 65 ,
    avgCoockieCustomer : 6.3 ,
    workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
    cookiePerHour : [],


    customersPerHour : function getRandomIntInclusive(min, max) {
        let minCus = Math.ceil(min);
        let maxCus = Math.floor(max);
        return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
    },

    getCookiePerHour : function(){
        let total = 0;
        for (let i=0; i < this.workingHours.length ; i++){
            let cookiePerHourNum = this.avgCoockieCustomer * this.customersPerHour(this.minCustomer, this.maxCustomer) ;
            cookiePerHourNum = Math.ceil(cookiePerHourNum);
            this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
            total = total + cookiePerHourNum ; 
    
        }
        this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`)
        return this.cookiePerHour;
    },

    consumedCookiesUl : function (){
        let container = document.getElementById('Locations');
        let head2 = document.createElement('h2');
        container.appendChild(head2);
        head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
        let unorderedList = document.createElement('ul');
        container.appendChild(unorderedList);
        for (let i = 0 ; i <= this.workingHours.length ; i++){
            let list = document.createElement('li');
            unorderedList.appendChild(list);
            list.textContent = this.getCookiePerHour()[i];
        }
    }


}
seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer);
//console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
seattle.getCookiePerHour();
//console.log(seattle.getCookiePerHour());
seattle.consumedCookiesUl();




const tokyo ={
    location : 'Tokyo' ,
    minCustomer : 3 ,
    maxCustomer : 24 ,
    avgCoockieCustomer : 1.2 ,
    workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
    cookiePerHour : [],


    customersPerHour : function getRandomIntInclusive(min, max) {
        let minCus = Math.ceil(min);
        let maxCus = Math.floor(max);
        return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
    },

    getCookiePerHour : function(){
        let total = 0;
        for (let i=0; i < this.workingHours.length ; i++){
            let cookiePerHourNum = this.avgCoockieCustomer * this.customersPerHour(this.minCustomer, this.maxCustomer) ;
            cookiePerHourNum = Math.ceil(cookiePerHourNum);
            this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
            total = total + cookiePerHourNum ; 
    
        }
        this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`)
        return this.cookiePerHour;
    },

    consumedCookiesUl : function (){
        let container = document.getElementById('Locations');
        let head2 = document.createElement('h2');
        container.appendChild(head2);
        head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
        let unorderedList = document.createElement('ul');
        container.appendChild(unorderedList);
        for (let i = 0 ; i <= this.workingHours.length ; i++){
            let list = document.createElement('li');
            unorderedList.appendChild(list);
            list.textContent = this.getCookiePerHour()[i];
        }
    }


}
tokyo.customersPerHour(tokyo.minCustomer, tokyo.maxCustomer);
//console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
tokyo.getCookiePerHour();
//console.log(seattle.getCookiePerHour());
tokyo.consumedCookiesUl();




const dubai ={
    location : 'Dubai' ,
    minCustomer : 11 ,
    maxCustomer : 38 ,
    avgCoockieCustomer : 3.7 ,
    workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
    cookiePerHour : [],


    customersPerHour : function getRandomIntInclusive(min, max) {
        let minCus = Math.ceil(min);
        let maxCus = Math.floor(max);
        return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
    },

    getCookiePerHour : function(){
        let total = 0;
        for (let i=0; i < this.workingHours.length ; i++){
            let cookiePerHourNum = this.avgCoockieCustomer * this.customersPerHour(this.minCustomer, this.maxCustomer) ;
            cookiePerHourNum = Math.ceil(cookiePerHourNum);
            this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
            total = total + cookiePerHourNum ; 
    
        }
        this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`)
        return this.cookiePerHour;
    },

    consumedCookiesUl : function (){
        let container = document.getElementById('Locations');
        let head2 = document.createElement('h2');
        container.appendChild(head2);
        head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
        let unorderedList = document.createElement('ul');
        container.appendChild(unorderedList);
        for (let i = 0 ; i <= this.workingHours.length ; i++){
            let list = document.createElement('li');
            unorderedList.appendChild(list);
            list.textContent = this.getCookiePerHour()[i];
        }
    }


}
dubai.customersPerHour(dubai.minCustomer, dubai.maxCustomer);
//console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
dubai.getCookiePerHour();
//console.log(seattle.getCookiePerHour());
dubai.consumedCookiesUl();




const paris ={
    location : 'Paris' ,
    minCustomer : 20 ,
    maxCustomer : 38 ,
    avgCoockieCustomer : 2.3 ,
    workingHours : ['06:00 am','07:00 am', '08:00 am', '09:00 am', '10:00 am','11:00 am', '12:00 pm', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm' ,'07:00 pm'],
    cookiePerHour : [],


    customersPerHour : function getRandomIntInclusive(min, max) {
        let minCus = Math.ceil(min);
        let maxCus = Math.floor(max);
        return Math.floor(Math.random() * (maxCus - minCus + 1) + minCus);
    },

    getCookiePerHour : function(){
        let total = 0;
        for (let i=0; i < this.workingHours.length ; i++){
            let cookiePerHourNum = this.avgCoockieCustomer * this.customersPerHour(this.minCustomer, this.maxCustomer) ;
            cookiePerHourNum = Math.ceil(cookiePerHourNum);
            this.cookiePerHour.push(`${this.workingHours[i]} : ${cookiePerHourNum} cookies consumed`);
            total = total + cookiePerHourNum ; 
    
        }
        this.cookiePerHour.push(`Total cookies consumed today = ${total} cookie.`)
        return this.cookiePerHour;
    },

    consumedCookiesUl : function (){
        let container = document.getElementById('Locations');
        let head2 = document.createElement('h2');
        container.appendChild(head2);
        head2.textContent = `Cookies Consumed at ${this.location}, Daily:`;
        let unorderedList = document.createElement('ul');
        container.appendChild(unorderedList);
        for (let i = 0 ; i <= this.workingHours.length ; i++){
            let list = document.createElement('li');
            unorderedList.appendChild(list);
            list.textContent = this.getCookiePerHour()[i];
        }
    }


}
paris.customersPerHour(paris.minCustomer, paris.maxCustomer);
//console.log(seattle.customersPerHour(seattle.minCustomer, seattle.maxCustomer));
paris.getCookiePerHour();
//console.log(seattle.getCookiePerHour());
paris.consumedCookiesUl();
