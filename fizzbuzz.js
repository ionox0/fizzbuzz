function fizzbuzz (numbers){

  if (number%3 == 0 && number%5 == 0){
    console.log("FIZZBUZZ");
  }
  else if (number%3 == 0){
    console.log("FIZZ");
  }
  else if (number%5 == 0){
    console.log("BUZZ");
  }
  else {
    console.log(number);
  }
}


//test

fizzbuzz(3);
fizzbuzz(5);
fizzbuzz(15);
