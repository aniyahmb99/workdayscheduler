var today = moment().format(`dddd, MMM Do YYYY`);
$("#currentDay").html(today);




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
        }
    })
}


colorTracker();




