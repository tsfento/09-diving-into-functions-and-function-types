function add(a: number, b:number) {
    return a + b; // return type inferred as number
}

function printOutput(value: any) {
    console.log(value); // no return = return type: void
}