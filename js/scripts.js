$(document).ready(function () {
  $(".subscribe form").submit(function (event) {

    var userEmail = $("input#subscriberEmail").val();
    $("#subscribe-feedback").text(userEmail +" has been successfully added to our email list. Thank you.");

    $("#subscribe-feedback").show();
    event.preventDefault();
  });

});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

