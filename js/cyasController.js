function CyasController($scope){
  $scope.sortBy = 'date';
  $scope.sortBy = 'time';

  $scope.cyas = [
                  {title: "Eating at Joe's", location: "Joe's House", date: "11/12/2014", time: "19:30", type: "Dinner"},
                  {title: "Video Games at Bob's", location: "Bob's House", date: "11/13/2014", time: "20:30", type: "Gaming"},
                  {title: "Walking Downtown", location: "Downtown", date: "11/14/2014", time: "21:30", type: "Hanging"},
                  {title: "Seeing a movie", location: "CinemaHouse", date: "11/15/2014", time: "22:30", type: "Movie"},
                  {title: "Eating at SharkBait", location: "Sharkbait Cafe", date: "11/16/2014", time: "23:30", type: "Dinner"},
                ];
  $scope.doSort = function(property){
    $scope.sortBy = property;
    $scope.reverse = !$scope.reverse;
  };
}
