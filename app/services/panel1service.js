/**
 * Created by Administrator on 7/8/2017.
 */
angular.module('myAppservices')
var endpoint="http://172.20.27.20:81/connecting_hands/getitems.php"
var statusdata = function(endpoint,status) {
    var status = [];
    this.getObjectsFromService(endpoint,status).then(function(data) {
        statusdatavalue = data;

    });
    return statusdata;
}
