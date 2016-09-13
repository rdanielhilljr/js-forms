$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var firstName = $("input#firstname").val();
    var lastName = $("input#lastname").val();
    var streetName = $("input#streetname").val();
    var cityName = $("input#cityname").val();
    var stateName = $("input#statename").val();
    var zipCode = $("input#zipcode").val();
    var messageText = $("input#message").val();
    var delivery = $("#delivery").val();
    var day = $("input:radio[name=day]:checked").val();
    var today = $("#today").val();
    var favoriteColor = $("#color").val();

    $(".firstnameto").text(firstName);
    $(".lastnameto").text(lastName);
    $(".streetnameto").text(streetName);
    $(".citynameto").text(cityName);
    $(".statenameto").text(stateName);
    $(".zipcodeto").text(zipCode);
    $(".messageto").text(messageText);
    $("span.deliverymethod").text(delivery);
    $("span.deliveryday").text(day);
    $("span.todaysDate").text(today);
    $("span.favoriteColor").text(favoriteColor);

    event.preventDefault();

  });
});
