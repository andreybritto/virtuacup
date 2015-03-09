'use strict';

angular.module('VirtuaCup').constant('stateBuilder', function stateBuilder(name, options) {
	function templateUrl(stateName, templateName) {
		var parts = stateName.split('.').splice(1);
		var path = parts.join('/');
		return ('app/states/' + path + '/' + (templateName || parts[parts.length-1]) + '.html')
					.replace(/\/\//g, '/');
	}

	stateBuilder.templateUrl = templateUrl;

	if (!options.noTemplate && !options.template && !options.templateUrl) {
		options.templateUrl = templateUrl(name, options.templateName);
	}

	if (options.login) {
		options.data = options.data || {};
		options.data.login = true;
	}
	
	options.name = name;
	delete options.templateName;
	return options;
});