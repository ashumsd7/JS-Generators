function* generateSequence(start,end){
    for(let i=start;i<=end;i++)
    {
        yield i;
    }
}


function* generatePasswordCodes(){
    yield* generateSequence(48,57);

    yield* generateSequence(65,90);

    yield* generateSequence(97,122);
}

let str= '';

for(let code of generatePasswordCodes()){

    str= str+String.fromCharCode(code);
}



console.log(str);