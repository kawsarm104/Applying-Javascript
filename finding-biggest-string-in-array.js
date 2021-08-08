
function longestString(names){
    let temp = names[0]
    for(let name of names)
        if(temp.length<=name.length)  temp = name

    return console.log("the largesta string is "+temp+
    " and the total charecter in that is "+temp.length+ " and position of its "+names.indexOf(temp))

}


longestString(["hello ","friendsssss","hasmothasmothasmo","testtititititi", "iamthelargestname", "safuuuu", "aldddddi", "ddde "]);
// longest = ["hello ","friendsssss","hasmothasmothasmo","testtititititi", "iamthelargestname", "safuuuu", "aldddddi", "ddde "]
// for (let i = 0; i<=longest.length; i++) console.log(longest.length)
// console.log(longest)