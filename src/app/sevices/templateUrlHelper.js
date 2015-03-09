'use strict';

angular.module('VirtuaCup').factory('templateUrlHelper', function (stateBuilder) {

	return {
		state: stateBuilder.templateUrl,

		directive: function (directiveName, parentState) {
			return (parentState ? 
						parentState.replace('root', 'app/states').replace(/\./g, '/') 
						: 'app/components') +
					'/' + directiveName + '.html';
		}
	};
});