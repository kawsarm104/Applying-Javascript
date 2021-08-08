        //Sher to Mon Convert

function seerToMon(seer){
    if(seer < 0 ){
        return "please enter a positive number"
    }
    else{
        const mon = seer/40; //40 seer = 1 mon  
            return mon; 
    }
}

        // totalSales calculating

function totalSales(numberOfShirt, numberOfPant, numberOfShoe){
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    if(numberOfShirt>=0 && numberOfPant>=0 && numberOfShoe >= 0){
        totalCost = (numberOfShirt*perShirtPrice) + (numberOfPant*perPantPrice) + (numberOfShoe*perShoePrice);
        return totalCost;
    }
    return "Please Enter a valid amount of number"
    
}


            // deliveryCost 

function deliveryCost(numberOfParcel){
    let parcelCost;
    const firstHundredCost = 100;
    const secondHundredCost = 80;
    const restAmountCost = 50;

    if(numberOfParcel < 0 ){
        return "Please enter a valid number"
    }
    else{
        if(numberOfParcel<=100){
        parcelCost = numberOfParcel*firstHundredCost
    }
    else if(numberOfParcel > 100 && numberOfParcel <= 200){
        parcelCost =  (firstHundredCost*100) + ((numberOfParcel-100)*secondHundredCost) // 100 tar jonno 100 kore 100*100
    }
    else if(numberOfParcel>200){
        parcelCost = (firstHundredCost*100) + (secondHundredCost*100) + ((numberOfParcel-200) * restAmountCost )
    }
    return parcelCost
    }
    
}



// perfectFriend 
function perfectFriend(friends){
    let cnt = 0;
    if(friends.length <= 0) { 
        return "you forgot to write frinds name" // when the input is an empty array
    }

        for(let friend of friends){ 
            
            if(friend.length == 5 ){
                
                return friend;
            }
            else {
                cnt++;
                if(cnt == friends.length){ // when there is no string contains 5 charecter
                    return "you have no frinds name which has 5 charecter!!" 
                }
            }
    
        }

 }


 const totalMon = seerToMon(15)
console.log("Total Mon: ", totalMon)  // float value re 1 ghor obodhi dekhamu
console.log("Total Cost of Shopping: ", totalSales(0,7,0))// kono man khali rakhle error dekhabo 
const khoroch = deliveryCost(150)
console.log("parcel cost: ",khoroch)   
friendsname = perfectFriend(["saiful", "testuu","nuriddin","aliee","mohhin"])
console.log("my bestuuu  friend : ", friendsname)