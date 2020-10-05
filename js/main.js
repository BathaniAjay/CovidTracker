// https://covid19.mathdro.id/api/countries/USA
const url = 'https://covid19.mathdro.id/api';
let app = angular.module('MyApp',[]);
app.controller("MyCtrl",($scope,$http)=>{

  $scope.title = "Stay Home Stay Safe";
  $scope.para = "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.";

  $http.get(url).then((response)=>{

    //response 
    console.log(response);
    $scope.all_data = response.data;
  },(error)=>{

    //error
    console.log(error);

  })

  $scope.get_c_data = ()=>{
      // console.log($scope.c);
      let country = $scope.c;
      if(country == ""){
        $scope.c_data = undefined;
        return;
      }

      $http.get(`${url}/countries/${country}`).then((response)=>{

        //response
        $scope.c_data = response.data;

      },(error)=>{
          //error
          console.log(error);

      })
  }
  // $http.get(`url/`)
})

