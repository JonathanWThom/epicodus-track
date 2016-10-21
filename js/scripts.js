//Business Logic

var track;

var whatTrack = function(answer1, answer2, answer3, answer5) {
  if (answer5 === "windows") {
    track = "windows";
  }
  else if (answer1 === "works" && answer2 === "newrelic" && answer3 === "startup") {
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
    var answer5 = $("input:radio[name=question5]:checked").val();

    var nameInput = $("input#name").val();
    $(".name").text(nameInput);

    var trackOutcome = whatTrack(answer1, answer2, answer3, answer5);

    if (nameInput === "") {
      $("#namediv").addClass("has-error");
    } else if (trackOutcome === "windows") {
      alert("There must be some kind of mistake, no one likes the Windows Phone OS. Please change your answer and resubmit.");
    } else if (trackOutcome === "Ruby") {
      $("#ruby").fadeIn();
      $("#introduction, .row").fadeOut();
    } else if (trackOutcome === "C#/.NET") {
      $("#csharp").fadeIn();
      $("#introduction, .row").fadeOut();
    } else if (trackOutcome === "Design") {
      $("#design").fadeIn();
      $("#introduction, .row").fadeOut();
    }
  });
});
