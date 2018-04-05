
//find all prime numbers from 1 through 100
function findPrime() {
      //create an array variable for remainder array
      let remainderArr = [];
      //create an array variable for prime numbers
      const primeNumbers = [];
      
      //iterate over the numbers 1 through 100
      for(let i = 1; i <= 100; i++) {
              //1 is not a prime number
              //2 is the only even prime number, so add it to the array
              if(i==2){
                  primeNumbers.push(i);
                
              //even numbers can't be prime, so eliminate even numbers by dividing by 2  
              } else if (i > 2){
                    let output = i % 2;
                
                    //if when i is divided by 2, there is a remainder (it is odd)
                    if(output !== 0){
                      
                        //iterate over the numbers 2 through 1 less than i
                        for(let j = 2; j <= i-1; j++) {
                          
                              //divide i by every number from 2 through 1 number less than itself
                              let remainder = i % j;
                              //add the remainder to an array
                              remainderArr.push(remainder);
                              
                        }
                        //if the remainder array does not include 0 (i was not divisible by any of the numbers below it)
                        if(!remainderArr.includes(0)) {
                                 //then the number is prime - add it to the primeNumbers array
                                 primeNumbers.push(i);
                          } 
                        //empty remainderArr before next iteration
                        remainderArr = [];
                    }     
              } 
                   
      }

      let prime = primeNumbers.join(" - ");
      document.getElementById("root").innerHTML = prime;
}

findPrime();

