var today = moment().format(`dddd, MMM Do YYYY`); // time display at top
$("#currentDay").html(today);
var hourEl = document.getElementById("#hour"); // time block colorcoding
var textAreaEL = document.getElementsByClassName("description") // save to browser
var savebuttonEl = document.getElementById("#btnSave") // for save button click event

// Save to local storage
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);

        // fetch data from localStorage 
        var data = JSON.parse(localStorage.getItem(time, text))
    }
    )
});