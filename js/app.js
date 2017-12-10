app = angular.module("app", [] );


app.controller("TabelaController", function( $scope ){

  $scope.data = [];
  $scope.title = "Fixando header e primeira coluna da tabela!";

  for (var i = 0; i < 100; i++) {
    $scope.data.push(
      {
        "id": i,
        "firstName": "Nome do Candango "+ i,
        "lastName": "Sobrenome do Candango" + i,
        "sex": sexPerson(i),
        "phone": numberRandom(i),
        "cep": numberRandom(i+1),
        "city": "Rio de Janerio",
        "district": "Rio de Janerio",
        "nation": "Brazil"
      }
    );
  }

  function numberRandom ( indice ){
    return "9" + Math.floor((Math.random() * 100000000) + indice);
  }

  function sexPerson( i ){
    if (i % 2 == 0 ) {
      return "Masculino";
    }
    return "Feminino";
  }

});


$(document).ready(function() {
  let widthContainer = $(".container").innerWidth();
  let heightContainer = $(".container").innerHeight();
  $("table").css({"width": widthContainer, "height": heightContainer });
  $("thead").css({"width": widthContainer});
  $("tbody").css({"width": widthContainer, "height": heightContainer });

  console.log(widthContainer);
  console.log(heightContainer);


  $('tbody').scroll(function(e) {
    $('thead').css("left", -$("tbody").scrollLeft());
    $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft());
    $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft());
  });
});
