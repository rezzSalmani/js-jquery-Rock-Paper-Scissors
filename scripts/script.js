$(function () {
  const options = [
    { title: "Rock", emoji: "🤜🏻", beats: "Scissors" },
    { title: "Paper", emoji: "🤚🏻", beats: "Rock" },
    { title: "Scissors", emoji: "✌🏻", beats: "Paper" },
  ];
  const container = $(".container");
  const status = $(".result");
  const userResult = $(".user_result span");
  const cpuResult = $(".cpu_result span");
  const allButtons = $(".option_image span");
  let playerScore, cpuScore;
  allButtons.each(function () {
    $(this).click(() => {
      $(this).parent().addClass("active");
      const playerChoice = $(this).data("type");
      selectOption(playerChoice);
    });
  });

  const selectOption = (playerChoice) => {
    container.addClass("start");
    status.text("Wait ...");

    const userMatchOption = findMatch(playerChoice);
    const cpuRandomChoice = options[Math.floor(Math.random() * options.length)];

    userResult.text(userMatchOption.emoji);
    cpuResult.text(cpuRandomChoice.emoji);

    setTimeout(() => {
      const resultData = determineWinner(userMatchOption, cpuRandomChoice);
      container.removeClass("start");
      status.text(resultData);
    }, 1000);
  };

  function determineWinner(userChoice, computerChoice) {
    // switch (userChoice.title){
    //     case :
    // }
    switch (userChoice.title) {
      case "Rock":
        if (computerChoice.title === "Scissors") {
          return "You win!";
        } else if (computerChoice.title === "Paper") {
          return "You lose!";
        } else {
          return "It's a tie!";
        }
      case "Paper":
        if (computerChoice.title === "Rock") {
          return "You win!";
        } else if (computerChoice.title === "Scissors") {
          return "You lose!";
        } else {
          return "It's a tie!";
        }
      case "Scissors":
        if (computerChoice.title === "Paper") {
          return "You win!";
        } else if (computerChoice.title === "Rock") {
          return "You lose!";
        } else {
          return "It's a tie!";
        }
      default:
        return "Invalid choice!";
    }
  }

  const userChoice = options[0]; // Replace with user's choice
  const computerChoice = options[2]; // Replace with computer's choice

  const findMatch = (identifier) => {
    return options.find((item) => item.title === identifier);
  };
});
