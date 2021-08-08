// Celcius to Farenheit

// Simple Interst Calculation 
let profit, year, ratio,finalAmount,takawithInterst;
 function simpleInterest(profit,year,ratio){
    finalAmount = profit*year*(ratio/100);
    takawithInterst =profit + finalAmount
    return  console.log("interest of "+ profit+" in "+year+" is "+finalAmount+" taka and total amount with interest will be "+ takawithInterst);
 }
//  profit = 1000;
//  year = 4;
//  ratio = 7;
//  simpleInterest(profit, year, ratio)
simpleInterest(1200,5,3)
//  console.log("interest of "+ profit+" in "+year+" is "+finalAmount+" taka and total amount with interest will be "+ takawithInterst)