console.log(Math.floor(10.5));

function doSomething(message: string): string {
    return message + "\n";
}

let all: string | number = "hello";
console.log(typeof all);
all = 200;
console.log(typeof all);

let myFriends = ["Osama", "Ahmed", "Sayed", 10];

for (let i = 0; i < myFriends.length; i++ ) {
    console.log(myFriends[i].repeat(3));
}

console.log(typeof myFriends)

