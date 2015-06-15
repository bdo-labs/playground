
/**
 * Resource
 *
 * Builds upon the native $resource, to make it a bit more
 * REST-friendly. Specifically, it uses update (PUT-method)
 * whenever an `id` is present, and create (POST-method)
 * when not.
 */

function Resource($resource) {
    return function(url, params, methods){
        var defaults = {
            update: { method: 'put', isArray: false },
            create: { method: 'post' }
        };
        methods = angular.extend(defaults, methods);
        var resource = $resource(url, params, methods);
        resource.prototype.$save = function() {
            if (!this.id) {
                return this.$create.apply(this, arguments);
            } else {
                return this.$update.apply(this, arguments);
            }
        };
        return resource;
    }
}

var resourceService = angular.module('resourceService', []);

resourceService.factory('Resource', Resource);

module.exports = resourceService;
