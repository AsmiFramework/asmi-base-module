var util = require('util');
var config = require('asmi-config');
var events = require('events');

function AsmiBaseModule(moduleName) {
	events.EventEmitter.call(this);
	this.conf = config.modules[moduleName];
}

util.inherits(AsmiBaseModule, events.EventEmitter);

var p = AsmiBaseModule.prototype;

module.exports = exports = AsmiBaseModule;
