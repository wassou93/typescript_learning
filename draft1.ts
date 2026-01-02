console.log(Math.floor(10.5));

function doSomething(message: string): string {
    return message + "\n";
}

let all: string | number = "hello";
console.log(typeof all);
all = 200;
console.log(typeof all);

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (const friend of myFriends) {
    console.log(friend.repeat(3));
}

console.log(typeof myFriends)

