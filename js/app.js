app = angular.module("app", []);

API = "http://localhost:3000";

app.controller("TabelaController", function ($scope, $http) {
  $scope.data = [];
  $scope.title = "Fixando header e primeira coluna da tabela!";

  $http.get(`${API}/data`).then(function (response) {
    $scope.data = response.data;
  });
});

var HeaderAndColumnFixed = function (wrapper) {
  $contaner = $(wrapper);
  let widthContainer = $contaner.innerWidth();
  let heightContainer = $contaner.innerHeight();
  $contaner
    .find("table")
    .css({ width: widthContainer, height: heightContainer });
  $contaner.find("thead").css({ width: widthContainer });
  $contaner
    .find("tbody")
    .css({ width: widthContainer, height: heightContainer });

  $contaner.find("tbody").scroll(function (e) {
    $contaner.find("thead").css("left", -$contaner.find("tbody").scrollLeft());
    $contaner
      .find("thead th:nth-child(1)")
      .css("left", $contaner.find("tbody").scrollLeft());
    $contaner
      .find("tbody td:nth-child(1)")
      .css("left", $contaner.find("tbody").scrollLeft());
  });
};

$(document).ready(function () {
  HeaderAndColumnFixed(".container");
});

$(window).resize(function () {
  HeaderAndColumnFixed(".container");
});