function* generatorFunction(){
yield "ashu";
yield "aasim";
yield "mohan";
return "success";

}


let mygenFun= generatorFunction();

for(let value of mygenFun)
{
    
    console.log(value);
}

