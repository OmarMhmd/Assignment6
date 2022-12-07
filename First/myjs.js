
var counter=0;
 var add5=function add( value)
{
      counter+=value;
     function reset()
     {
         counter=0;//free variable
         return counter;
 
     };
    return counter;
}
add5(5);
add5(5);
console.log(add5(5));

/*free variable is a variable referred by a fucntion which is not one of
its parameters or local variables.*/

(function () {
    //All the given code
})();