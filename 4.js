function *mygen(){
    yield 1;
    yield 2;
    return 4;

}


let mynewgen= mygen();

for(let values of mynewgen)
{
    console.log(values);
   
}