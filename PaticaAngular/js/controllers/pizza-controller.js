﻿module.controller("myPizzaController", function ($scope) {
    var controller = $scope;

    controller.name = "My Pizza";
    controller.clients = [
        { name: "Peter", tel: "1234-1231" },
        { name: "Ann", tel: "2342-2341" },
        { name: "Joel", tel: "1231-1241" },
        { name: "Mary", tel: "1241-4123" }
    ];

    controller.add = Add;
    controller.edit = Edit;
    controller.save = Save;
    controller.delete = Delete;
    controller.orderBy = OrderBy;

    controller.order = 'name';

    function Add(client) {
        if (client.name != "" && client.tel != ""){
            controller.clients.push(angular.copy(client));
            delete controller.client;
        }            
        else
            return;
    }

    function Edit(client) {        
        controller.client = client;
        controller.editing = true;
    }

    function Save(client) {
        client = angular.copy(controller.client);
        controller.editing = false;
        delete controller.client;
    }

    function Delete(client) {
        controller.clients.splice(controller.clients.indexOf(client), 1);
    }

    function OrderBy(colName) {
        controller.order = colName;
        controller.reverse = !controller.reverse;
    }
});
