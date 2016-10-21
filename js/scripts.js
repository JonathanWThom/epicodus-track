//Business Logic

var track;

var whatTrack = function(answer1, answer2, answer3) {
  if (answer1 === "works" && answer2 === "newrelic" && answer3 === "startup") {
    track = "Ruby";
  }
  else if (answer3 === "corporate") {
    track = "C#/.NET";
  }
  else {
    track = "Design";
  }
  return track;
}

//User Interface Logic

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var answer1 = $("input:radio[name=question1]:checked").val();
    var answer2 = $("input:radio[name=question2]:checked").val();
    var answer3 = $("input:radio[name=question3]:checked").val();

    var trackOutcome = whatTrack(answer1, answer2, answer3);

    if (trackOutcome === "Ruby") {
      $("#ruby").show();
      $("#homepage").hide();
    }
    else if (trackOutcome === "C#/.NET") {
      $("#csharp").show();
      $("#homepage").hide();
    }
    else if (trackOutcome === "Design") {
      $("#design").show();
      $("#homepage").hide();
    }

    var nameInput = $("input#name").val();
    $(".name").text(nameInput);
  });

  // $("#reload").click(function(event)) {
  //   event.preventDefault();
  //   window.location.reload();
//  });
});
