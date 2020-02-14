function* generatorFunction(){
    yield "ashu";
    yield "aasim";
    yield "mohan";
    return "success";
    
    }
    
    
    let mygenFun= generatorFunction();

    console.log([...mygenFun]);