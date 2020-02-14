function* gen(){
    let result= yield "2+2=?"
    console.log(result);
}

let generator= gen();

let question= generator.next().value;

generator.next(6);