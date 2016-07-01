angular.module('PrometheusApp').controller('EurekaController',
    function($scope, Eureka, $interval) {

    $scope.appsTeste = [];
    $scope.appsLocal = [];

    Eureka.getTestes().then(function(response) {
        var apps = response.applications.application;
        $scope.appsTeste = apps;
    });

    function atualiza(){
        Eureka.getLocal().then(function(response) {
            var apps = response.applications.application;
            $scope.appsLocal = apps;
        });
    }
    atualiza();

    $interval(atualiza,1000*60)

    $scope.remove = function(instance){
        Eureka.remove(instance).then(function(){
            $scope.appsLocal = $scope.appsLocal.map(function(app){
                app.instance = app.instance.filter(function(appInstance){
                   return instance != appInstance
               })
               return app;
            })
        });
    }

    $scope.add = function(instance,app){

        var instanceEntity = {
             "instance": {
                 "app": instance.app,
                 "hostName": instance.hostName,
                 "ipAddr": instance.ipAddr,
                 "port": instance.port,
                 "statusPageUrl": instance.statusPageUrl,
                 "vipAddress": instance.vipAddress,
                 "dataCenterInfo": {
                   "@class":"com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
                   "name": "MyOwn"
                 },
                 "status": "UP"
             }
        }

        $scope.appsLocal.push({
            'name':app.name,
            'instance':[{
                   'instanceId':instance.instanceId
                }
            ]
        })

        Eureka.add(instanceEntity,instance.app);
    }

});