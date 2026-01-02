const uniqueKey: symbol = Symbol('description');

interface obj {
    [uniqueKey]: string;
}

const o1 = {[uniqueKey]: "Hello, World!"};

console.log(o1[uniqueKey]);

console.log(`Symbol('description') is: ${String(uniqueKey)}`);

const secret: unique symbol = Symbol('secret');
const user = { name: 'Alice', [secret]: 123 };

for (let key in user) {
  console.log(key); // only logs 'name', not the symbol
}

const arr = [1, 2, 3] as number[] & { [secret2]?: string };
const secret2: unique symbol = Symbol('secret');

arr[secret2] = 'hidden value';


for (const val of arr) {
  console.log(val);
}

const hidden_keys = Object.getOwnPropertySymbols(arr);

for (const key of hidden_keys) {
  console.log(key);
}

for (const key of [...Object.keys(arr), ...Object.getOwnPropertySymbols(arr)]) {
  console.log(key);
}


