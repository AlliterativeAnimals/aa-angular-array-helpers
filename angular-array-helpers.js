angular.module("aa.helper.array", [])
    .factory("Pluck", function() {
        return function(key) {
            return function(obj) {
                return obj[key];
            };
        };
    })
    .factory("Concat", function() {
        return function(a,b) {
            return [].concat(a).concat(b);
        };
    });
