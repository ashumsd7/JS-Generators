function* generateSequence(){
    yield 1;
    yield 2;
    return 3;
}

let gene= generateSequence();

let value= gene.next();

console.log(value);

value= gene.next();

console.log(value);

value= gene.next();

console.log(value);


console.log(value);
