
var name="Shashank";
var age=21;
var isMarried=false;

var person={

    name:"Shashank",
    age:20,
    isMarried:false
};


//console.log(name+age+isMarried);
/*
console.log(person)
console.log(person.name)

person.height="181cm"
console.log(person.height)
*/

person.friends=["tom","jerry","donald"]

/*
for(var i=0;i<person.friends.length;i++)
{
    console.log("Welcome"+person.friends[i])
}


//index 3rd will give undefined and not"Array index out of bound".

function Name(){
    return null
}
*/

console.log(person.friends[3])

//var p



function calculations(x,y,operation){
    switch(operation){
        case "+":
            return x+y;
            break;
        case "-":
            return x-y;
            break;
        default:
            console.log("Error operand input");
    }
}
