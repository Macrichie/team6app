angular.module('app.addQuestion',[])
.controller('addQuestionCtrl',function($scope,$http,$document,$state, $location,$mdToast,heroku){
 var id = sessionStorage.id;
       //var userName = sessionStorage.userName;
        $document.ready(function(){
        //  if(id == "" || id == 'undefined' || id == null){
            if(id !== '582d4b2796f59928131d9db8'){
              $location.path('/');     
              $state.go('home');
              $scope.isAdmin = false;  
            }
            else if(id == '582d4b2796f59928131d9db8'){
                $scope.isAdmin = true;
            }
         
     //}
     })
 $scope.question = {}
    $scope.saved = function(){

        console.log($scope.question)
        
        $http.post(heroku +'/addQuestion',$scope.question).success(function(data){
          console.log('Success ' +data.msg);
          $scope.data = data.msg;
         $mdToast.show(
         $mdToast.simple()
        .textContent($scope.data)
        .position("bottom right")
        .hideDelay(3000)
        
       );
         })
         
                  $scope.question = "";
    }   
}) 
 