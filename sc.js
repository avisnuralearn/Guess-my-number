let scorecard = 20;
const incorrectNumber = function () {
  if (true) {
    console.log(scorecard);
    return scorecard--;
  }
};

incorrectNumber();
incorrectNumber();
incorrectNumber();
incorrectNumber();

// OUTPUT IM GETTING

/* 20
   19
   20
   19  */
