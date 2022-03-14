var today = moment().format(`dddd, MMM Do YYYY`); // time display at top
$("#currentDay").html(today);
var hourEl = document.getElementById("#hour"); // time block colorcoding
var textAreaEL = document.getElementsByClassName("description") // save to browser
var savebuttonEl = document.getElementById("#btnSave") // for save button click event

// Save to local storage
var saveLocal = function () {
    var linkEl = Event.target.getAttribute('description');
    var text = document.getElementById(linkEl).value;
    localStorage.setItem(text, JSON.stringify());

}


// function colorTracker() {
//     var timeNow = moment().hour();

//     $(".time-block").each(function () {
//         var blockTime = parseInt($(this).attr("id").split("hour")[1]);

//         if (blockTime < timeNow) {
//             $(this).removeClass("future");
//             $(this).removeClass("present");
//             $(this).addClass("past");
//         } else if (blockTime === timeNow) {
//             $(this).removeClass("past");
//             $(this).removeClass("future");
//             $(this).addClass("present");
//         } else {
//             $(this).removeClass("present");
//             $(this).removeClass("past");
//             $(this).addClass("future");
//         } console.log();
//     }
//     )
// }

// when save button is clicked, saveLocal() will save to local Storage
savebuttonEl.addEventListener('click', saveLocal());


// colorTracker();

