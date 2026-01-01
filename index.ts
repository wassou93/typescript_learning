function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message: string = greet("World");
console.log(message);

function isEven(n: number): boolean {
    return n % 2 == 0 ? true : false;
}

// const parts = new Array<string>(1_000_000);
const parts: string[] = [];

// for (let i = 0; i < parts.length; i++) {
for (let i = 0; i < 1_000_000; i++) {
    // parts[i] = i.toString();
    parts.push(i.toString());
}

const output = parts.join(" ");
console.log(output);

