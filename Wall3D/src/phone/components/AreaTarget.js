$scope.$watch("app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value", function(){
  if($scope.app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value==true){
    $scope.view.wdg["modelItem-13"]["color"]="rgb(254,10,10)";
  }else{
    $scope.view.wdg["modelItem-13"]["color"]="rgb(150,150,150)";
  }
}
             )
$scope.$watch("app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_2']['eventData'][0]['newValue'][0].value", function(){
  if($scope.app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value==true){
    $scope.view.wdg["modelItem-24"]["color"]="rgb(254,10,10)";
  }else{
    $scope.view.wdg["modelItem-24"]["color"]="rgb(150,150,150)";
  }
}
             )
$scope.$watch("app.mdl['Wall_Helper'].events['DataChange.Baliza_Verde_1']['eventData'][0]['newValue'][0].value", function(){
  if($scope.app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value==true){
    $scope.view.wdg["modelItem-23"]["color"]="rgb(10,254,10)";
  }else{
    $scope.view.wdg["modelItem-23"]["color"]="rgb(150,150,150)";
  }
}
             )
$scope.$watch("app.mdl['Wall_Helper'].events['DataChange.Baliza_Verde_2']['eventData'][0]['newValue'][0].value", function(){
  if($scope.app.mdl['Wall_Helper'].events['DataChange.Baliza_Roja_1']['eventData'][0]['newValue'][0].value==true){
    $scope.view.wdg["modelItem-23"]["color"]="rgb(10,254,10)";
  }else{
    $scope.view.wdg["modelItem-25"]["color"]="rgb(150,150,150)";
  }
}
             )
$scope.intervalPromise1 = $interval(function() {
  $scope.view.wdg["modelItem-16"]["rz"]-=4;
  $scope.view.wdg["modelItem-20"]["rz"]-=4;
  $scope.view.wdg["modelItem-21"]["rz"]-=4;
  $scope.view.wdg["modelItem-22"]["rz"]-=4;
}
                                   , 100);
