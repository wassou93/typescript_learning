let value: unknown = "hello";

// Unsafe casting
// let str: string = value as string;

// Safe casting
// let str: string;
//
// if (typeof value === "string") {
//     str = value;
// } else {
//     throw new Error(`Type of value: ${typeof value} cannot be converted to a string`);
// }

// Safe casting shorter version
const str: string = 
    typeof value === "string" 
        ? value 
        : (() => { throw new Error(`Type of value: ${typeof value} cannot be converted to a string`)})();

console.log(str);


