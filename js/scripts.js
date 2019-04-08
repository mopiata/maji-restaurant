$(document).ready(function () {
  $(".subscribe form").submit(function (event) {

    var userEmail = $("input#mce-EMAIL").val();
    $("#subscribe-feedback").text(userEmail +" has been successfully added to our email list. Thank you.");

    $("#subscribe-feedback").show();
    
  });

  $('#happyModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });
  $('#partyModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  });
  
});
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

