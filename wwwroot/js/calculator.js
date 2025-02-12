//calculator js function
$(document).ready(function() {
    $("#calculateBtn").click(function() {
        let hours = parseFloat($("#hours").val()); //convert hours to float
        let rate = parseFloat($("#rate").val()); //convert rate to float
//checks if the input is valid number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid number of hours.");
            return;
        }
//calculate the total fee
        let total = hours * rate;
        $("#totalCost").text(total.toFixed(2));
    });
});
