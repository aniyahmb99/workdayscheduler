var today = moment().format(`dddd, MMM Do YYYY`); // time display at top
$("#currentDay").html(today);
var hourEl = document.getElementById("#hour"); // time block colorcoding
var textAreaEL = document.getElementsByClassName("description") // save to browser
var savebuttonEl = document.getElementById("#btnsave") // for save button click event



// SAVE TO BROWSER
var saveBrowser = function () {
    console.log(saveBrowser);
    localStorage.setItem('description', json.stringify())
    localStorage.getItem()

}









savebuttonEl.addEventListener('click', saveBrowser());





















function colorTracker() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } console.log();
    }
    )
}


colorTracker();




