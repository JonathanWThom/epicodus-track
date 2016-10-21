//Business Logic

//define empty variables??

var whatTrack = function(answer1, answer2, answer3) {
  if (answer1 === "works" && answer2 === "newrelic" && answer3 === "startup") {
    return "Ruby";
  }
  else if (answer1 === "works" && answer2 === "newrelic" && answer3 === "corporate") {
    return "C#/.NET";
  }
  else {
    return "Design";
  }
}

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();

    console.log("this is answer1 " + answer1);
    console.log("this is answer2 " + answer2);
    console.log("this is answer3 " + answer3);

    var trackOutcome = whatTrack(answer1, answer2, answer3);

    if (trackOutcome === "Ruby") {
      $("#ruby").show();
    }
    else if (trackOutcome === "C#/.NET") {
      $("csharp").show();
    }
    else if (trackOutcome === "Design") {
      $("design").show();
    }

  });
});
