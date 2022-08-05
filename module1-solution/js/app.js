
(function(){ // use IIFE and strict to help not pollute global scope
    'use strict';

    angular.module('hw1',[])

    .controller('lunchChecker',function($scope){  //In AngularJs, Controller serves the function of ViewModel
        $scope.btnClear = function(){
            $scope.lunchMessage = ""
            $scope.emptyMessage = ""
            $scope.lunchMessageDisplayStyle = ""
            $scope.lunchList =""
        }
        $scope.btnLunchListCheck = function(){

            //check to see if lunchList is undefined 
            if(typeof($scope.lunchList) == 'undefined'){
                $scope.lunchMessage = "Please enter data first"
                $scope.lunchMessageDisplayStyle = "border:solid;color:Red;padding:5px;"
                return
            }

            var lunchList = $scope.lunchList.split(",")
            var count = 0

            lunchList.forEach(element => {
                if(element.trim().length > 0 )
                {
                    count++
                }
                console.log(element + "\n")
            });

            if(lunchList.length != count){
                $scope.emptyMessage = "we do NOT consider and empty item, i.e., , , as an item towards to the count"
                if(count == 0)
                    return
            }

            if(count <= 3){
                $scope.lunchMessage = "Enjoy!"
            } else{
                $scope.lunchMessage = "Too much!"
 
            }
            $scope.lunchMessageDisplayStyle = "border:solid;color:Green;padding:5px;"
        };

    });

})();
