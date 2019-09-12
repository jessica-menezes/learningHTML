// uncomment to get an alert = alert("This is an ALERT");

var isPreimumUser = true ;

if (isPreimumUser == true){
    console.log("Thanks for being a loyal subscriber.");
}
else{
    console.log("Please subscribe");
}

for(i = 0; i<10; i++){
    console.log("The current i value is:", i);
}

function buttonClicked(){
    console.log("Button clicked");
    var customText = document.getElementsByClassName("my-input");
    var textArea = document.getElementsByClassName("my-textarea");

    var results = document.getElementById("text");

    results.innerHTML = "Hello " + customText[0].value + "<br/>";
    results.innerHTML += "Message: " + textArea[0].value;
}

var btn = document.getElementById("go-button");
btn.addEventListener("click", buttonClicked);

var hobbies = ["pizza", "gaming", "reading", "programming", "music"];

console.log(hobbies);

//hobbies.pop(); Gets rid of last item in array
hobbies.push("Coffee");
hobbies.shift() //takes out the first item
hobbies.unshift("Dancing")//adds to beginning of array

console.log(hobbies);

hobbies.forEach(function(item, index){
    console.log("I like", item, index);
})

var numbers = [1, 20, 16, 11, 3, 14, 4, 9, 10, 5, 8, 17, 7, 15, 6, 13, 18, 19, 2];

function missingNumber(numbers){
    var missing = -1;
    var sorted = numbers.sort(function(a,b){a-b});

    for(var i = sorted[0]; i <= numbers.length - 1; i++){
        if(numbers.indexOf(i) === -1){
            missing = i;
        }
    }
    
    return missing;
}

console.log(missingNumber(numbers));

class Animal{
    constructor(name, height, weight){
        console.log("Created Animal called:" , name);
    }

}

var dog = new Animal("Dex", 20, 10);
var cat = new Animal("Snow", 25, 14);
 