angular.module('PrometheusApp').factory('Eureka',
    function($resource) {
        var eureka = $resource('', {}, {
            'getTestes': {
                method: 'GET',
                url: "eureka-testes/eureka/apps",
                isArray: false,
                cache:false
            },
            'getLocal': {
                method: 'GET',
                url: "/eureka/apps",
                isArray: false,
                cache: false
            },
            'remove': {
                method: 'DELETE',
                url: "/eureka/apps/:app/:instanceId",
                isArray: false,
                cache:false
            },
            'add': {
                method: 'POST',
                url: "/eureka/apps/:app",
                cache:false,
                headers: {
                    'Content-type':'application/json'
                }
            }
        }),
        service = {
            getTestes: function() {
                return eureka.getTestes().$promise;
            },
            getLocal: function() {
                return eureka.getLocal().$promise;
            },
            remove: function(instance){
                return eureka.remove(instance, {}).$promise;
            },
            add: function(instance,app){
                return eureka.add({app:app},instance).$promise;
            }
        };

        return service;
});