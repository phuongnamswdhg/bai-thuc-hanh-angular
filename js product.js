myapp.controller('productList',function ($scope){
    $scope.user='test@test.com' ;
    console.log($scope.user);
    $scope.isShow='False';
    $scope.listproduct = [
        {
            ID:1,
            TITLE:"Banh keo",
            PARENT_ID:"Banh"
        }
    ];
    $scope.AddNewProduct = function()
    {
        var p = {
            ID:$scope.IDProduct,
            TITLE:$scope.titleProduct,
            PARENT_ID:$scope.ParentID
        }
        $scope.listproduct.push(p);
    }
//==================================
    $scope.DeleteProduct = function(product)
    {
        $scope.listproduct.splice(product,1);
    }

}); 