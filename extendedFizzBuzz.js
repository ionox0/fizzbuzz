function extendedFizzBuzz(numbers, words){
  for (var i = 0; i < 106; i++){
    var print = "";
    for (var j = 0; j < numbers.length; j++){
      if (i%numbers[j] === 0){
        print += words[j] + " ";
      }
    }
    if (print === ""){
      print = i;
    }
    console.log(print);
  }
}


//test


extendedFizzBuzz([3, 5, 7], ["fizz", "buzz", "sivv"]);

