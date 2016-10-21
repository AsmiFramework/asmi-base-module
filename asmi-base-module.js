var config = require('asmi-config');

function AsmiBaseModule(moduleName) {
	this.conf = config.modules[moduleName];
}

var p = AsmiBaseModule.prototype;

module.exports = exports = AsmiBaseModule;
