/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(6));
	else if(typeof define === 'function' && define.amd)
		define(["nilutil"], factory);
	else if(typeof exports === 'object')
		exports["nilui"] = factory(require("nilutil"));
	else
		root["nilui"] = factory(root["nilutil"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function noop() {}

function assign(target) {
	var k,
	    source,
	    i = 1,
	    len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) {
			target[k] = source[k];
		}
	}

	return target;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

// TODO this is out of date
function destroyEach(iterations, detach, start) {
	for (var i = start; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].destroy(detach);
	}
}

function createElement(name) {
	return document.createElement(name);
}

function createSvgElement(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function setXlinkAttribute(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
	var value = [];
	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function children(element) {
	return Array.from(element.childNodes);
}

function claimElement(nodes, name, attributes, svg) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeName === name) {
			for (var j = 0; j < node.attributes.length; j += 1) {
				var attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? createSvgElement(name) : createElement(name);
}

function claimText(nodes, data) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return createText(data);
}

function linear(t) {
	return t;
}

function generateKeyframes(a, b, delta, duration, ease, fn, node, style) {
	var id = '__svelte' + ~~(Math.random() * 1e9); // TODO make this more robust
	var keyframes = '@keyframes ' + id + '{\n';

	for (var p = 0; p <= 1; p += 16.666 / duration) {
		var t = a + delta * ease(p);
		keyframes += p * 100 + '%{' + fn(t) + '}\n';
	}

	keyframes += '100% {' + fn(b) + '}\n}';
	style.textContent += keyframes;

	document.head.appendChild(style);

	node.style.animation = (node.style.animation || '').split(',').filter(function (anim) {
		// when introing, discard old animations if there are any
		return anim && (delta < 0 || !/__svelte/.test(anim));
	}).concat(id + ' ' + duration + 'ms linear 1 forwards').join(', ');
}

function wrapTransition(node, fn, params, intro, outgroup) {
	var obj = fn(node, params);
	var duration = obj.duration || 300;
	var ease = obj.easing || linear;
	var cssText;

	// TODO share <style> tag between all transitions?
	if (obj.css) {
		var style = document.createElement('style');
	}

	if (intro) {
		if (obj.css && obj.delay) {
			cssText = node.style.cssText;
			node.style.cssText += obj.css(0);
		}

		if (obj.tick) obj.tick(0);
	}

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,
		run: function run(intro, callback) {
			var program = {
				start: window.performance.now() + (obj.delay || 0),
				intro: intro,
				callback: callback
			};

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},
		start: function start(program) {
			program.a = this.t;
			program.b = program.intro ? 1 : 0;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;
				generateKeyframes(program.a, program.b, program.delta, program.duration, ease, obj.css, node, style);
			}

			this.program = program;
			this.pending = null;
		},
		update: function update(now) {
			var program = this.program;
			if (!program) return;

			var p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t);
		},
		done: function done() {
			this.t = this.program.b;
			if (obj.tick) obj.tick(this.t);
			if (obj.css) document.head.removeChild(style);
			this.program.callback();
			this.program = null;
			this.running = !!this.pending;
		},
		abort: function abort() {
			if (obj.tick) obj.tick(1);
			if (obj.css) document.head.removeChild(style);
			this.program = this.pending = null;
			this.running = false;
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,

	add: function add(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			this.next();
		}
	},

	next: function next() {
		this.running = false;

		var now = window.performance.now();
		var i = this.transitions.length;

		while (i--) {
			var transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	}
};

function differs(a, b) {
	return a !== b || a && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' || typeof a === 'function';
}

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (differs(newValue, oldValue)) {
			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.post : this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function observeDev(key, callback, options) {
	var c = (key = '' + key).search(/[^\w]/);
	if (c > -1) {
		var message = 'The first argument to component.observe(...) must be the name of a top-level property';
		if (c > 0) message += ", i.e. '" + key.slice(0, c) + "' rather than '" + key + "'";

		throw new Error(message);
	}

	return observe.call(this, key, callback, options);
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function onDev(eventName, handler) {
	if (eventName === 'teardown') {
		console.warn("Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2");
		return this.on('destroy', handler);
	}

	return on.call(this, eventName, handler);
}

function set(newState) {
	this._set(assign({}, newState));
	this._root._flush();
}

function _flush() {
	if (!this._renderHooks) return;

	while (this._renderHooks.length) {
		this._renderHooks.pop()();
	}
}

var proto = {
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	_flush: _flush
};

var protoDev = {
	get: get,
	fire: fire,
	observe: observeDev,
	on: onDev,
	set: set,
	_flush: _flush
};

exports.differs = differs;
exports.dispatchObservers = dispatchObservers;
exports.get = get;
exports.fire = fire;
exports.observe = observe;
exports.observeDev = observeDev;
exports.on = on;
exports.onDev = onDev;
exports.set = set;
exports._flush = _flush;
exports.proto = proto;
exports.protoDev = protoDev;
exports.appendNode = appendNode;
exports.insertNode = insertNode;
exports.detachNode = detachNode;
exports.detachBetween = detachBetween;
exports.destroyEach = destroyEach;
exports.createElement = createElement;
exports.createSvgElement = createSvgElement;
exports.createText = createText;
exports.createComment = createComment;
exports.addListener = addListener;
exports.removeListener = removeListener;
exports.setAttribute = setAttribute;
exports.setXlinkAttribute = setXlinkAttribute;
exports.getBindingGroupValue = getBindingGroupValue;
exports.toNumber = toNumber;
exports.children = children;
exports.claimElement = claimElement;
exports.claimText = claimText;
exports.linear = linear;
exports.generateKeyframes = generateKeyframes;
exports.wrapTransition = wrapTransition;
exports.transitionManager = transitionManager;
exports.noop = noop;
exports.assign = assign;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function add_css() {
	var style = (0, _shared.createElement)('style');
	style.id = "svelte-3251233350-style";
	style.textContent = "\nbutton[svelte-3251233350], [svelte-3251233350] button {\n  background: #eee;\n  color: #333;\n  border: 1px solid #aaa;\n  cursor: pointer;\n}\n\nbutton[svelte-3251233350]:hover, [svelte-3251233350] button:hover {\n  background: #f9f9f9;\n}\n\n[svelte-3251233350].size-standard, [svelte-3251233350] .size-standard {\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n}\n";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var button, button_disabled_value;

	function click_handler(event) {
		component.fire('click');
	}

	return {
		create: function create() {
			button = (0, _shared.createElement)('button');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setAttribute)(button, 'svelte-3251233350', '');
			button.className = "size-standard";
			button.disabled = button_disabled_value = state.disabled;
			(0, _shared.addListener)(button, 'click', click_handler);
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(button, target, anchor);
			component.refs.button = button;
			if (component._yield) component._yield.mount(button, null);
		},

		update: function update(changed, state) {
			if (button_disabled_value !== (button_disabled_value = state.disabled)) {
				button.disabled = button_disabled_value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(button);
			if (component.refs.button === button) component.refs.button = null;
			if (component._yield) component._yield.unmount();
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(button, 'click', click_handler);
		}
	};
}

function Button(options) {
	options = options || {};
	this.refs = {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-3251233350-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}
}

(0, _shared.assign)(Button.prototype, _shared.proto);

Button.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Button.prototype.teardown = Button.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Button;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nilutil = __webpack_require__(1);

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

var _shared = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = function () {
	return {
		oncreate: function oncreate() {
			var head = this.refs.iconName.closest('html').querySelector('head');

			if (!head.querySelector('link[href*="font-awesome"]')) {
				var fa = (0, _nilutil.link)('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'stylesheet');
				head.appendChild(fa);
			}

			var _refs = this.refs,
			    iconName = _refs.iconName,
			    icon = _refs.icon;
			var button = this.refs.button.refs.button;

			setTimeout(function () {
				return button.style.width = button.offsetHeight + 'px';
			}, 100);
			icon.classList.add('fa-' + iconName.innerText);
		}
	};
}();

function create_main_fragment(state, component) {
	var text, span;

	var button_1_yield_fragment = create_button_yield_fragment(state, component);

	var button_1 = new _Button2.default({
		_root: component._root,
		_yield: button_1_yield_fragment
	});

	button_1.on('click', function (event) {
		component.fire('click');
	});

	component.refs.button = button_1;

	return {
		create: function create() {
			button_1_yield_fragment.create();
			button_1._fragment.create();
			text = (0, _shared.createText)("\n");
			span = (0, _shared.createElement)('span');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			span.style.cssText = "display: none";
		},

		mount: function mount(target, anchor) {
			button_1._fragment.mount(target, anchor);
			(0, _shared.insertNode)(text, target, anchor);
			(0, _shared.insertNode)(span, target, anchor);
			component.refs.iconName = span;
			if (component._yield) component._yield.mount(span, null);
		},

		unmount: function unmount() {
			button_1._fragment.unmount();
			(0, _shared.detachNode)(text);
			(0, _shared.detachNode)(span);
			if (component.refs.iconName === span) component.refs.iconName = null;
			if (component._yield) component._yield.unmount();
		},

		destroy: function destroy() {
			if (component.refs.button === button_1) component.refs.button = null;
			button_1_yield_fragment.destroy();
			button_1.destroy(false);
		}
	};
}

function create_button_yield_fragment(state, component) {
	var i;

	return {
		create: function create() {
			i = (0, _shared.createElement)('i');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			i.className = "fa";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(i, target, anchor);
			component.refs.icon = i;
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(i);
			if (component.refs.icon === i) component.refs.icon = null;
		},

		destroy: _shared.noop
	};
}

function IconButton(options) {
	options = options || {};
	this.refs = {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	this._renderHooks = [];

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}
	this._flush();

	if (options._root) {
		options._root._renderHooks.push(template.oncreate.bind(this));
	} else {
		template.oncreate.call(this);
	}
}

(0, _shared.assign)(IconButton.prototype, _shared.proto);

IconButton.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
	this._flush();
};

IconButton.prototype.teardown = IconButton.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = IconButton;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function add_css() {
	var style = (0, _shared.createElement)('style');
	style.id = "svelte-1442169788-style";
	style.textContent = "\n[svelte-1442169788].menu-container, [svelte-1442169788] .menu-container {\n  height: 100%;\n  width: 100%;\n  padding: 4px;\n}\n";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div;

	return {
		create: function create() {
			div = (0, _shared.createElement)('div');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setAttribute)(div, 'svelte-1442169788', '');
			div.className = "menu-container";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			if (component._yield) component._yield.mount(div, null);
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
			if (component._yield) component._yield.unmount();
		},

		destroy: _shared.noop
	};
}

function Menu(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-1442169788-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}
}

(0, _shared.assign)(Menu.prototype, _shared.proto);

Menu.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Menu.prototype.teardown = Menu.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Menu;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nilutil = __webpack_require__(1);

var _shared = __webpack_require__(0);

var template = function () {
	return {
		data: function data() {
			return {
				size: 0
			};
		},
		oncreate: function oncreate() {
			var container = this.refs.container;


			var head = container.closest('html').querySelector('head');
			if (!head.querySelector('link[href*="font-awesome"]')) {
				var fa = (0, _nilutil.link)('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', 'stylesheet');
				head.appendChild(fa);
			}

			this.set({ size: container.offsetWidth });
		}
	};
}();

function add_css() {
	var style = (0, _shared.createElement)('style');
	style.id = "svelte-3495982801-style";
	style.textContent = "\n[svelte-3495982801].menu-item-container, [svelte-3495982801] .menu-item-container {\n  width: 100%;\n  cursor: pointer;\n}\n\n[svelte-3495982801].body, [svelte-3495982801] .body {\n  color: #666;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n[svelte-3495982801].menu-item-container:hover .body, [svelte-3495982801] .menu-item-container:hover .body {\n  color: #ccc;\n}\n\n[svelte-3495982801].menu-item-container.active .body, [svelte-3495982801] .menu-item-container.active .body {\n  background: #666;\n  color: #000;\n}\n\n[svelte-3495982801].menu-item-container.active:hover .body, [svelte-3495982801] .menu-item-container.active:hover .body {\n  background: #ccc;\n  color: #000;\n}\n";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div, div_class_value, div_1, div_1_style_value, i, i_class_value, i_style_value;

	function click_handler(event) {
		component.fire('select');
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)('div');
			div_1 = (0, _shared.createElement)('div');
			i = (0, _shared.createElement)('i');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setAttribute)(div, 'svelte-3495982801', '');
			div.className = div_class_value = "menu-item-container " + (state.active ? 'active' : '');
			(0, _shared.addListener)(div, 'click', click_handler);
			div_1.className = "body";
			div_1.style.cssText = div_1_style_value = "border-radius: " + state.size / 10 + "px";
			i.className = i_class_value = "icon fa fa-" + state.icon;
			i.style.cssText = i_style_value = "font-size: " + state.size / 2 + "px; line-height: " + state.size + "px";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			component.refs.container = div;
			(0, _shared.appendNode)(div_1, div);
			(0, _shared.appendNode)(i, div_1);
		},

		update: function update(changed, state) {
			if (div_class_value !== (div_class_value = "menu-item-container " + (state.active ? 'active' : ''))) {
				div.className = div_class_value;
			}

			if (div_1_style_value !== (div_1_style_value = "border-radius: " + state.size / 10 + "px")) {
				div_1.style.cssText = div_1_style_value;
			}

			if (i_class_value !== (i_class_value = "icon fa fa-" + state.icon)) {
				i.className = i_class_value;
			}

			if (i_style_value !== (i_style_value = "font-size: " + state.size / 2 + "px; line-height: " + state.size + "px")) {
				i.style.cssText = i_style_value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
			if (component.refs.container === div) component.refs.container = null;
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(div, 'click', click_handler);
		}
	};
}

function MenuItem(options) {
	options = options || {};
	this.refs = {};
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-3495982801-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}

	if (options._root) {
		options._root._renderHooks.push(template.oncreate.bind(this));
	} else {
		template.oncreate.call(this);
	}
}

(0, _shared.assign)(MenuItem.prototype, _shared.proto);

MenuItem.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

MenuItem.prototype.teardown = MenuItem.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = MenuItem;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function add_css() {
	var style = (0, _shared.createElement)('style');
	style.id = "svelte-1347919699-style";
	style.textContent = "\n[svelte-1347919699].number-input-container, [svelte-1347919699] .number-input-container {\n  display: inline-block;\n  background-color: #fff;\n  padding: 0.5rem;\n  border: 1px solid #aaa;\n  border-radius: 0.25rem;\n}\n\ninput[svelte-1347919699], [svelte-1347919699] input {\n  font-size: 1rem;\n  border: 0;\n  background: transparent;\n  font-family: 'Roboto', sans-serif;\n  padding: 0;\n  outline: none;\n}\n";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div,
	    input,
	    input_placeholder_value,
	    input_title_value,
	    input_min_value,
	    input_max_value,
	    input_step_value,
	    input_updating = false;

	function input_input_handler() {
		input_updating = true;
		component._set({ value: (0, _shared.toNumber)(input.value) });
		input_updating = false;
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)('div');
			input = (0, _shared.createElement)('input');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setAttribute)(div, 'svelte-1347919699', '');
			div.className = "number-input-container";
			input.type = "number";
			input.placeholder = input_placeholder_value = state.label;
			input.title = input_title_value = state.label;
			input.min = input_min_value = state.min || 0;
			input.max = input_max_value = state.max || 100;
			input.step = input_step_value = state.step || 1;

			(0, _shared.addListener)(input, 'input', input_input_handler);
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(input, div);

			input.value = state.value;
		},

		update: function update(changed, state) {
			if (input_placeholder_value !== (input_placeholder_value = state.label)) {
				input.placeholder = input_placeholder_value;
			}

			if (input_title_value !== (input_title_value = state.label)) {
				input.title = input_title_value;
			}

			if (input_min_value !== (input_min_value = state.min || 0)) {
				input.min = input_min_value;
			}

			if (input_max_value !== (input_max_value = state.max || 100)) {
				input.max = input_max_value;
			}

			if (input_step_value !== (input_step_value = state.step || 1)) {
				input.step = input_step_value;
			}

			if (!input_updating) {
				input.value = state.value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(input, 'input', input_input_handler);
		}
	};
}

function NumberInput(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-1347919699-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}
}

(0, _shared.assign)(NumberInput.prototype, _shared.proto);

NumberInput.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

NumberInput.prototype.teardown = NumberInput.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = NumberInput;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function add_css() {
	var style = (0, _shared.createElement)('style');
	style.id = "svelte-803674756-style";
	style.textContent = "\n[svelte-803674756].panel-container, [svelte-803674756] .panel-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div, div_style_value;

	return {
		create: function create() {
			div = (0, _shared.createElement)('div');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setAttribute)(div, 'svelte-803674756', '');
			div.className = "panel-container";
			div.style.cssText = div_style_value = state.style || '';
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			if (component._yield) component._yield.mount(div, null);
		},

		update: function update(changed, state) {
			if (div_style_value !== (div_style_value = state.style || '')) {
				div.style.cssText = div_style_value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
			if (component._yield) component._yield.unmount();
		},

		destroy: _shared.noop
	};
}

function Panel(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-803674756-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}
}

(0, _shared.assign)(Panel.prototype, _shared.proto);

Panel.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Panel.prototype.teardown = Panel.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Panel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

var template = function () {
	return {
		data: function data() {
			return {
				options: []
			};
		}
	};
}();

function add_css() {
	var style = (0, _shared.createElement)('style');
	style.id = "svelte-1603990050-style";
	style.textContent = "\n[svelte-1603990050].select-container, [svelte-1603990050] .select-container {\n  display: inline-block;\n  background-color: #fff;\n  padding: 0.5rem;\n  border: 1px solid #aaa;\n  border-radius: 0.25rem;\n}\n\nselect[svelte-1603990050], [svelte-1603990050] select {\n  font-size: 0.7rem;\n  border: 0;\n  background: transparent;\n  font-family: 'Roboto', sans-serif;\n  padding: 0;\n  outline: none;\n}\n";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div,
	    select,
	    select_updating = false;

	var each_block_value = state.options;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	function select_change_handler() {
		select_updating = true;
		var selectedOption = select.querySelector(':checked') || select.options[0];
		component._set({ value: selectedOption && selectedOption.__value });
		select_updating = false;
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)('div');
			select = (0, _shared.createElement)('select');

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setAttribute)(div, 'svelte-1603990050', '');
			div.className = "select-container";

			if (!('value' in state)) component._bindings.push(select_change_handler);

			(0, _shared.addListener)(select, 'change', select_change_handler);
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(select, div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(select, null);
			}

			var value = state.value;
			for (var i = 0; i < select.options.length; i += 1) {
				var option_1 = select.options[i];

				if (option_1.__value === value) {
					option_1.selected = true;
					break;
				}
			}
		},

		update: function update(changed, state) {
			var each_block_value = state.options;

			if ('options' in changed) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(select, null);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}

			if (!select_updating) {
				var value = state.value;
				for (var i = 0; i < select.options.length; i += 1) {
					var option_1 = select.options[i];

					if (option_1.__value === value) {
						option_1.selected = true;
						break;
					}
				}
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function destroy() {
			(0, _shared.destroyEach)(each_block_iterations, false, 0);

			(0, _shared.removeListener)(select, 'change', select_change_handler);
		}
	};
}

function create_each_block(state, each_block_value, option, option_index, component) {
	var option_1, text_value, text;

	return {
		create: function create() {
			option_1 = (0, _shared.createElement)('option');
			text = (0, _shared.createText)(text_value = option);
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(option_1, target, anchor);
			(0, _shared.appendNode)(text, option_1);

			option_1.__value = option_1.textContent;
		},

		update: function update(changed, state, each_block_value, option, option_index) {
			if (text_value !== (text_value = option)) {
				text.data = text_value;
			}

			option_1.__value = option_1.textContent;
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(option_1);
		},

		destroy: _shared.noop
	};
}

function Select(options) {
	options = options || {};
	this._state = (0, _shared.assign)(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-1603990050-style")) add_css();
	this._bindings = [];

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}

	while (this._bindings.length) {
		this._bindings.pop()();
	}
}

(0, _shared.assign)(Select.prototype, _shared.proto);

Select.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
	while (this._bindings.length) {
		this._bindings.pop()();
	}
};

Select.prototype.teardown = Select.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Select;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _nilutil = __webpack_require__(1);

var _shared = __webpack_require__(0);

var template = function () {
	return {
		oncreate: function oncreate() {
			var head = this.refs.container.closest('html').querySelector('head');

			if (!head.querySelector('link[href*="Roboto"]')) {
				head.appendChild((0, _nilutil.link)('https://fonts.googleapis.com/css?family=Roboto', 'stylesheet'));
			}

			head.appendChild((0, _nilutil.meta)('viewport', 'width=device-width'));
			this.observe('favicon', function (url) {
				return url && (0, _nilutil.favicon)(url);
			});
		}
	};
}();

function add_css() {
	var style = (0, _shared.createElement)('style');
	style.id = "svelte-2563596050-style";
	style.textContent = "\n[svelte-2563596050].shell-container, [svelte-2563596050] .shell-container {\n  background: #000;\n  color: #fff;\n  font-family: 'Roboto', sans-serif;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n*[svelte-2563596050], [svelte-2563596050] * {\n  box-sizing: border-box;\n}\n";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div;

	return {
		create: function create() {
			div = (0, _shared.createElement)('div');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setAttribute)(div, 'svelte-2563596050', '');
			div.className = "shell-container";
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			component.refs.container = div;
			if (component._yield) component._yield.mount(div, null);
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
			if (component.refs.container === div) component.refs.container = null;
			if (component._yield) component._yield.unmount();
		},

		destroy: _shared.noop
	};
}

function Shell(options) {
	options = options || {};
	this.refs = {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-2563596050-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}

	if (options._root) {
		options._root._renderHooks.push(template.oncreate.bind(this));
	} else {
		template.oncreate.call(this);
	}
}

(0, _shared.assign)(Shell.prototype, _shared.proto);

Shell.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Shell.prototype.teardown = Shell.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Shell;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _shared = __webpack_require__(0);

function add_css() {
	var style = (0, _shared.createElement)('style');
	style.id = "svelte-3868518314-style";
	style.textContent = "\n[svelte-3868518314].textbox-container, [svelte-3868518314] .textbox-container {\n  display: inline-block;\n  background-color: #fff;\n  padding: 0.5rem;\n  border: 1px solid #aaa;\n  border-radius: 0.25rem;\n}\n\ninput[svelte-3868518314], [svelte-3868518314] input {\n  font-size: 1rem;\n  border: 0;\n  background: transparent;\n  font-family: 'Roboto', sans-serif;\n  padding: 0;\n  outline: none;\n}\n";
	(0, _shared.appendNode)(style, document.head);
}

function create_main_fragment(state, component) {
	var div,
	    input,
	    input_placeholder_value,
	    input_title_value,
	    input_updating = false;

	function input_input_handler() {
		input_updating = true;
		component._set({ value: input.value });
		input_updating = false;
	}

	return {
		create: function create() {
			div = (0, _shared.createElement)('div');
			input = (0, _shared.createElement)('input');
			this.hydrate();
		},

		hydrate: function hydrate(nodes) {
			(0, _shared.setAttribute)(div, 'svelte-3868518314', '');
			div.className = "textbox-container";
			input.type = "text";
			input.placeholder = input_placeholder_value = state.label;
			input.title = input_title_value = state.label;

			(0, _shared.addListener)(input, 'input', input_input_handler);
		},

		mount: function mount(target, anchor) {
			(0, _shared.insertNode)(div, target, anchor);
			(0, _shared.appendNode)(input, div);

			input.value = state.value;
		},

		update: function update(changed, state) {
			if (input_placeholder_value !== (input_placeholder_value = state.label)) {
				input.placeholder = input_placeholder_value;
			}

			if (input_title_value !== (input_title_value = state.label)) {
				input.title = input_title_value;
			}

			if (!input_updating) {
				input.value = state.value;
			}
		},

		unmount: function unmount() {
			(0, _shared.detachNode)(div);
		},

		destroy: function destroy() {
			(0, _shared.removeListener)(input, 'input', input_input_handler);
		}
	};
}

function Textbox(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-3868518314-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}
}

(0, _shared.assign)(Textbox.prototype, _shared.proto);

Textbox.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = (0, _shared.assign)({}, oldState, newState);
	(0, _shared.dispatchObservers)(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	(0, _shared.dispatchObservers)(this, this._observers.post, newState, oldState);
};

Textbox.prototype.teardown = Textbox.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

exports.default = Textbox;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textbox = exports.Shell = exports.Select = exports.Panel = exports.NumberInput = exports.MenuItem = exports.Menu = exports.IconButton = exports.Button = undefined;

var _Button = __webpack_require__(2);

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = __webpack_require__(3);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = __webpack_require__(4);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(5);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _NumberInput = __webpack_require__(6);

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _Panel = __webpack_require__(7);

var _Panel2 = _interopRequireDefault(_Panel);

var _Select = __webpack_require__(8);

var _Select2 = _interopRequireDefault(_Select);

var _Shell = __webpack_require__(9);

var _Shell2 = _interopRequireDefault(_Shell);

var _Textbox = __webpack_require__(10);

var _Textbox2 = _interopRequireDefault(_Textbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _Button2.default;
exports.IconButton = _IconButton2.default;
exports.Menu = _Menu2.default;
exports.MenuItem = _MenuItem2.default;
exports.NumberInput = _NumberInput2.default;
exports.Panel = _Panel2.default;
exports.Select = _Select2.default;
exports.Shell = _Shell2.default;
exports.Textbox = _Textbox2.default;

/***/ })
/******/ ]);
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return differs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return dispatchObservers; });
/* unused harmony export get */
/* unused harmony export fire */
/* unused harmony export observe */
/* unused harmony export observeDev */
/* unused harmony export on */
/* unused harmony export onDev */
/* unused harmony export set */
/* unused harmony export _flush */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return proto; });
/* unused harmony export protoDev */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return appendNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachNode; });
/* unused harmony export detachBetween */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return destroyEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return createElement; });
/* unused harmony export createSvgElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return removeListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return setAttribute; });
/* unused harmony export setXlinkAttribute */
/* unused harmony export getBindingGroupValue */
/* unused harmony export toNumber */
/* unused harmony export children */
/* unused harmony export claimElement */
/* unused harmony export claimText */
/* unused harmony export linear */
/* unused harmony export generateKeyframes */
/* unused harmony export wrapTransition */
/* unused harmony export transitionManager */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return assign; });
function noop() {}

function assign(target) {
	var k,
		source,
		i = 1,
		len = arguments.length;
	for (; i < len; i++) {
		source = arguments[i];
		for (k in source) target[k] = source[k];
	}

	return target;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function detachBetween(before, after) {
	while (before.nextSibling && before.nextSibling !== after) {
		before.parentNode.removeChild(before.nextSibling);
	}
}

// TODO this is out of date
function destroyEach(iterations, detach, start) {
	for (var i = start; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].destroy(detach);
	}
}

function createElement(name) {
	return document.createElement(name);
}

function createSvgElement(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function createText(data) {
	return document.createTextNode(data);
}

function createComment() {
	return document.createComment('');
}

function addListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function setXlinkAttribute(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function getBindingGroupValue(group) {
	var value = [];
	for (var i = 0; i < group.length; i += 1) {
		if (group[i].checked) value.push(group[i].__value);
	}
	return value;
}

function toNumber(value) {
	return value === '' ? undefined : +value;
}

function children (element) {
	return Array.from(element.childNodes);
}

function claimElement (nodes, name, attributes, svg) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeName === name) {
			for (var j = 0; j < node.attributes.length; j += 1) {
				var attribute = node.attributes[j];
				if (!attributes[attribute.name]) node.removeAttribute(attribute.name);
			}
			return nodes.splice(i, 1)[0]; // TODO strip unwanted attributes
		}
	}

	return svg ? createSvgElement(name) : createElement(name);
}

function claimText (nodes, data) {
	for (var i = 0; i < nodes.length; i += 1) {
		var node = nodes[i];
		if (node.nodeType === 3) {
			node.data = data;
			return nodes.splice(i, 1)[0];
		}
	}

	return createText(data);
}

function linear(t) {
	return t;
}

function generateKeyframes(
	a,
	b,
	delta,
	duration,
	ease,
	fn,
	node,
	style
) {
	var id = '__svelte' + ~~(Math.random() * 1e9); // TODO make this more robust
	var keyframes = '@keyframes ' + id + '{\n';

	for (var p = 0; p <= 1; p += 16.666 / duration) {
		var t = a + delta * ease(p);
		keyframes += p * 100 + '%{' + fn(t) + '}\n';
	}

	keyframes += '100% {' + fn(b) + '}\n}';
	style.textContent += keyframes;

	document.head.appendChild(style);

	node.style.animation = (node.style.animation || '')
		.split(',')
		.filter(function(anim) {
			// when introing, discard old animations if there are any
			return anim && (delta < 0 || !/__svelte/.test(anim));
		})
		.concat(id + ' ' + duration + 'ms linear 1 forwards')
		.join(', ');
}

function wrapTransition(node, fn, params, intro, outgroup) {
	var obj = fn(node, params);
	var duration = obj.duration || 300;
	var ease = obj.easing || linear;
	var cssText;

	// TODO share <style> tag between all transitions?
	if (obj.css) {
		var style = document.createElement('style');
	}

	if (intro) {
		if (obj.css && obj.delay) {
			cssText = node.style.cssText;
			node.style.cssText += obj.css(0);
		}

		if (obj.tick) obj.tick(0);
	}

	return {
		t: intro ? 0 : 1,
		running: false,
		program: null,
		pending: null,
		run: function(intro, callback) {
			var program = {
				start: window.performance.now() + (obj.delay || 0),
				intro: intro,
				callback: callback
			};

			if (obj.delay) {
				this.pending = program;
			} else {
				this.start(program);
			}

			if (!this.running) {
				this.running = true;
				transitionManager.add(this);
			}
		},
		start: function(program) {
			program.a = this.t;
			program.b = program.intro ? 1 : 0;
			program.delta = program.b - program.a;
			program.duration = duration * Math.abs(program.b - program.a);
			program.end = program.start + program.duration;

			if (obj.css) {
				if (obj.delay) node.style.cssText = cssText;
				generateKeyframes(
					program.a,
					program.b,
					program.delta,
					program.duration,
					ease,
					obj.css,
					node,
					style
				);
			}

			this.program = program;
			this.pending = null;
		},
		update: function(now) {
			var program = this.program;
			if (!program) return;

			var p = now - program.start;
			this.t = program.a + program.delta * ease(p / program.duration);
			if (obj.tick) obj.tick(this.t);
		},
		done: function() {
			this.t = this.program.b;
			if (obj.tick) obj.tick(this.t);
			if (obj.css) document.head.removeChild(style);
			this.program.callback();
			this.program = null;
			this.running = !!this.pending;
		},
		abort: function() {
			if (obj.tick) obj.tick(1);
			if (obj.css) document.head.removeChild(style);
			this.program = this.pending = null;
			this.running = false;
		}
	};
}

var transitionManager = {
	running: false,
	transitions: [],
	bound: null,

	add: function(transition) {
		this.transitions.push(transition);

		if (!this.running) {
			this.running = true;
			this.next();
		}
	},

	next: function() {
		this.running = false;

		var now = window.performance.now();
		var i = this.transitions.length;

		while (i--) {
			var transition = this.transitions[i];

			if (transition.program && now >= transition.program.end) {
				transition.done();
			}

			if (transition.pending && now >= transition.pending.start) {
				transition.start(transition.pending);
			}

			if (transition.running) {
				transition.update(now);
				this.running = true;
			} else if (!transition.pending) {
				this.transitions.splice(i, 1);
			}
		}

		if (this.running) {
			requestAnimationFrame(this.bound || (this.bound = this.next.bind(this)));
		}
	}
};

function differs(a, b) {
	return a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (differs(newValue, oldValue)) {
			var callbacks = group[key];
			if (!callbacks) continue;

			for (var i = 0; i < callbacks.length; i += 1) {
				var callback = callbacks[i];
				if (callback.__calling) continue;

				callback.__calling = true;
				callback.call(component, newValue, oldValue);
				callback.__calling = false;
			}
		}
	}
}

function get(key) {
	return key ? this._state[key] : this._state;
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
}

function observe(key, callback, options) {
	var group = options && options.defer
		? this._observers.post
		: this._observers.pre;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
}

function observeDev(key, callback, options) {
	var c = (key = '' + key).search(/[^\w]/);
	if (c > -1) {
		var message =
			'The first argument to component.observe(...) must be the name of a top-level property';
		if (c > 0)
			message += ", i.e. '" + key.slice(0, c) + "' rather than '" + key + "'";

		throw new Error(message);
	}

	return observe.call(this, key, callback, options);
}

function on(eventName, handler) {
	if (eventName === 'teardown') return this.on('destroy', handler);

	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function onDev(eventName, handler) {
	if (eventName === 'teardown') {
		console.warn(
			"Use component.on('destroy', ...) instead of component.on('teardown', ...) which has been deprecated and will be unsupported in Svelte 2"
		);
		return this.on('destroy', handler);
	}

	return on.call(this, eventName, handler);
}

function set(newState) {
	this._set(assign({}, newState));
	this._root._flush();
}

function _flush() {
	if (!this._renderHooks) return;

	while (this._renderHooks.length) {
		this._renderHooks.pop()();
	}
}

var proto = {
	get: get,
	fire: fire,
	observe: observe,
	on: on,
	set: set,
	_flush: _flush
};

var protoDev = {
	get: get,
	fire: fire,
	observe: observeDev,
	on: onDev,
	set: set,
	_flush: _flush
};




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nilui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nilui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nilui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Address__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__ = __webpack_require__(1);






function recompute(state, newState, oldState, isInitial) {
	if (isInitial || 'menuSelection' in newState && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["a" /* differs */])(state.menuSelection, oldState.menuSelection)) {
		state.active = newState.active = template.computed.active(state.menuSelection);
	}
}

var template = function () {
	return {
		data() {
			const config = JSON.parse(window.localStorage.getItem('config') || '{"bitmixerCode":"","distribution":[]}');
			return {
				menuItems: [{ key: 'address', icon: 'qrcode' }, { key: 'config', icon: 'gear' }],
				menuSelection: 'address',
				config
			};
		},
		computed: {
			active(menuSelection) {
				return function (key) {
					return key === menuSelection;
				};
			}
		},
		oncreate() {
			this.observe('config', config => window.localStorage.setItem('config', JSON.stringify(config)));
		}
	};
}();

function create_main_fragment(state, component) {

	var shell_1_yield_fragment = create_shell_yield_fragment(state, component);

	var shell_1 = new __WEBPACK_IMPORTED_MODULE_0_nilui__["Shell"]({
		_root: component._root,
		_yield: shell_1_yield_fragment,
		data: { favicon: "./favicon.png" }
	});

	return {
		create: function () {
			shell_1_yield_fragment.create();
			shell_1._fragment.create();
		},

		mount: function (target, anchor) {
			shell_1._fragment.mount(target, anchor);
		},

		update: function (changed, state) {
			shell_1_yield_fragment.update(changed, state);
		},

		unmount: function () {
			shell_1._fragment.unmount();
		},

		destroy: function () {
			shell_1_yield_fragment.destroy();
			shell_1.destroy(false);
		}
	};
}

function create_shell_yield_fragment(state, component) {
	var text;

	var panel_2_yield_fragment = create_panel_yield_fragment(state, component);

	var panel_2 = new __WEBPACK_IMPORTED_MODULE_0_nilui__["Panel"]({
		_root: component._root,
		_yield: panel_2_yield_fragment,
		data: { style: "width: 50px" }
	});

	var panel_3_yield_fragment = create_panel_1_yield_fragment(state, component);

	var panel_3 = new __WEBPACK_IMPORTED_MODULE_0_nilui__["Panel"]({
		_root: component._root,
		_yield: panel_3_yield_fragment,
		data: {
			style: "left: 50px; background: #fff; color: #000"
		}
	});

	return {
		create: function () {
			panel_2_yield_fragment.create();
			panel_2._fragment.create();
			text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n  ");
			panel_3_yield_fragment.create();
			panel_3._fragment.create();
		},

		mount: function (target, anchor) {
			panel_2._fragment.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(text, target, anchor);
			panel_3._fragment.mount(target, anchor);
		},

		update: function (changed, state) {
			panel_2_yield_fragment.update(changed, state);
			panel_3_yield_fragment.update(changed, state);
		},

		unmount: function () {
			panel_2._fragment.unmount();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(text);
			panel_3._fragment.unmount();
		},

		destroy: function () {
			panel_2_yield_fragment.destroy();
			panel_2.destroy(false);
			panel_3_yield_fragment.destroy();
			panel_3.destroy(false);
		}
	};
}

function create_panel_yield_fragment(state, component) {

	var menu_1_yield_fragment = create_menu_yield_fragment(state, component);

	var menu_1 = new __WEBPACK_IMPORTED_MODULE_0_nilui__["Menu"]({
		_root: component._root,
		_yield: menu_1_yield_fragment
	});

	return {
		create: function () {
			menu_1_yield_fragment.create();
			menu_1._fragment.create();
		},

		mount: function (target, anchor) {
			menu_1._fragment.mount(target, anchor);
		},

		update: function (changed, state) {
			menu_1_yield_fragment.update(changed, state);
		},

		unmount: function () {
			menu_1._fragment.unmount();
		},

		destroy: function () {
			menu_1_yield_fragment.destroy();
			menu_1.destroy(false);
		}
	};
}

function create_menu_yield_fragment(state, component) {
	var each_block_anchor;

	var each_block_value = state.menuItems;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	return {
		create: function () {
			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}

			each_block_anchor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["e" /* createComment */])();
		},

		mount: function (target, anchor) {
			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(target, anchor);
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(each_block_anchor, target, anchor);
		},

		update: function (changed, state) {
			var each_block_value = state.menuItems;

			if ('menuItems' in changed || 'active' in changed) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(each_block_anchor.parentNode, each_block_anchor);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}
		},

		unmount: function () {
			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(each_block_anchor);
		},

		destroy: function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["f" /* destroyEach */])(each_block_iterations, false, 0);
		}
	};
}

function create_each_block(state, each_block_value, menuItem, menuItem_index, component) {

	var menuitem = new __WEBPACK_IMPORTED_MODULE_0_nilui__["MenuItem"]({
		_root: component._root,
		data: {
			key: menuItem.key,
			active: state.active(menuItem.key),
			icon: menuItem.icon
		}
	});

	menuitem.on('select', function (event) {
		var each_block_value = this._context.each_block_value,
		    menuItem_index = this._context.menuItem_index,
		    menuItem = each_block_value[menuItem_index];

		component.set({ menuSelection: menuItem.key });
	});

	menuitem._context = {
		each_block_value: each_block_value,
		menuItem_index: menuItem_index
	};

	return {
		create: function () {
			menuitem._fragment.create();
		},

		mount: function (target, anchor) {
			menuitem._fragment.mount(target, anchor);
		},

		update: function (changed, state, each_block_value, menuItem, menuItem_index) {
			menuitem._context.each_block_value = each_block_value;
			menuitem._context.menuItem_index = menuItem_index;

			var menuitem_changes = {};

			if ('menuItems' in changed) menuitem_changes.key = menuItem.key;
			if ('active' in changed || 'menuItems' in changed) menuitem_changes.active = state.active(menuItem.key);
			if ('menuItems' in changed) menuitem_changes.icon = menuItem.icon;

			if (Object.keys(menuitem_changes).length) menuitem.set(menuitem_changes);
		},

		unmount: function () {
			menuitem._fragment.unmount();
		},

		destroy: function () {
			menuitem.destroy(false);
		}
	};
}

function create_panel_1_yield_fragment(state, component) {
	var if_block_anchor;

	function get_block(state) {
		if (state.menuSelection === 'config') return create_if_block;
		return create_if_block_1;
	}

	var current_block = get_block(state);
	var if_block = current_block(state, component);

	return {
		create: function () {
			if_block.create();
			if_block_anchor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["e" /* createComment */])();
		},

		mount: function (target, anchor) {
			if_block.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(if_block_anchor, target, anchor);
		},

		update: function (changed, state) {
			if (current_block === (current_block = get_block(state)) && if_block) {
				if_block.update(changed, state);
			} else {
				if_block.unmount();
				if_block.destroy();
				if_block = current_block(state, component);
				if_block.create();
				if_block.mount(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		unmount: function () {
			if_block.unmount();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(if_block_anchor);
		},

		destroy: function () {
			if_block.destroy();
		}
	};
}

function create_if_block(state, component) {
	var config_updating = false;

	var config_initial_data = {};
	if ('config' in state) config_initial_data.data = state.config;
	var config = new __WEBPACK_IMPORTED_MODULE_2__Config__["a" /* default */]({
		_root: component._root,
		data: config_initial_data
	});

	component._bindings.push(function () {
		if (config._torndown) return;
		config.observe('data', function (value) {
			if (config_updating) return;
			config_updating = true;
			component._set({ config: value });
			config_updating = false;
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["a" /* differs */])(config.get('data'), state.config) });
	});

	config._context = {
		state: state
	};

	return {
		create: function () {
			config._fragment.create();
		},

		mount: function (target, anchor) {
			config._fragment.mount(target, anchor);
		},

		update: function (changed, state) {
			if (!config_updating && 'config' in changed) {
				config_updating = true;
				config._set({ data: state.config });
				config_updating = false;
			}

			config._context.state = state;
		},

		unmount: function () {
			config._fragment.unmount();
		},

		destroy: function () {
			config.destroy(false);
		}
	};
}

function create_if_block_1(state, component) {

	var address = new __WEBPACK_IMPORTED_MODULE_1__Address__["a" /* default */]({
		_root: component._root,
		data: { config: state.config }
	});

	return {
		create: function () {
			address._fragment.create();
		},

		mount: function (target, anchor) {
			address._fragment.mount(target, anchor);
		},

		update: function (changed, state) {
			var address_changes = {};

			if ('config' in changed) address_changes.config = state.config;

			if (Object.keys(address_changes).length) address.set(address_changes);
		},

		unmount: function () {
			address._fragment.unmount();
		},

		destroy: function () {
			address.destroy(false);
		}
	};
}

function App(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["g" /* assign */])(template.data(), options.data);
	recompute(this._state, this._state, {}, true);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	this._renderHooks = [];
	this._bindings = [];

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}

	while (this._bindings.length) this._bindings.pop()();
	this._flush();

	if (options._root) {
		options._root._renderHooks.push(template.oncreate.bind(this));
	} else {
		template.oncreate.call(this);
	}
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["g" /* assign */])(App.prototype, __WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["h" /* proto */]);

App.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	recompute(this._state, newState, oldState, false);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
	while (this._bindings.length) this._bindings.pop()();
	this._flush();
};

App.prototype.teardown = App.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nilui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nilui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nilui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__ = __webpack_require__(1);




var template = function () {
	function cors(url) {
		return `https://cors-anywhere.herokuapp.com/${url}`;
	}

	function output({ type, address, percentage }) {
		switch (type) {
			case 'BTC':
				return Promise.resolve({ address, percentage });
			default:
				return shapeshift({ type, address }).then(address => ({ address, percentage }));
		}
	}

	function shapeshift({ type, address }) {
		const headers = { 'Content-Type': 'application/json' };
		const body = JSON.stringify({
			pair: `btc_${type.toLowerCase()}`,
			withdrawal: address
		});
		return fetch('https://shapeshift.io/shift', { method: 'POST', headers, body }).then(res => res.ok ? res.json() : Promise.reject(new Error(`Shapeshift request failed!`))).then(({ deposit, error }) => error ? Promise.reject(new Error('Shapeshift request failed!')) : deposit);
	}

	function mixerParameters({ address, percentage }, index) {
		return `addr${index + 1}=${address}&pr${index + 1}=${percentage}&time${index + 1}=0`;
	}

	function parseMixerResponse(text) {
		return text.split('&').map(param => param.split('=')).map(([key, value]) => ({ [key]: value })).reduce((params, param) => Object.assign({}, params, param), {});
	}

	return {
		methods: {
			createAddress() {
				if (this.get('addressRequested')) return;
				const { bitmixerCode, distribution } = this.get('config');
				const fee = Math.random() * 0.25 + 0.5;
				this.set({ error: '', addressRequested: true });
				Promise.all(distribution.map(output)).then(outputs => outputs.map(mixerParameters).join('&')).then(params => fetch(cors(`https://bitmixer.io/order.php?bitcode=${bitmixerCode}&fee=${fee}&${params}`))).then(res => res.ok ? res.text() : Promise.reject(new Error('Bitmixer request failed!'))).then(parseMixerResponse).then(({ addr: address }) => this.set({ address })).catch(({ message: error }) => this.set({ error, addressRequested: false }));
			}
		}
	};
}();

function add_css() {
	var style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('style');
	style.id = "svelte-1399269654-style";
	style.textContent = "\n[svelte-1399269654].address-container, [svelte-1399269654] .address-container {\n  padding: 0.5rem;\n}\n\n[svelte-1399269654].address-qr:not(.address-requested), [svelte-1399269654] .address-qr:not(.address-requested) {\n  cursor: pointer;\n}\n\n[svelte-1399269654].address-qr:not(.has-address), [svelte-1399269654] .address-qr:not(.has-address) {\n  opacity: 0.2;\n}\n\n[svelte-1399269654].error, [svelte-1399269654] .error {\n  color: #f00;\n}\n";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(style, document.head);
}

function create_main_fragment(state, component) {
	var div, img, img_class_value, img_src_value, text, div_1, text_1_value, text_1, text_2;

	function click_handler(event) {
		component.createAddress();
	}

	var if_block = state.error && create_if_block(state, component);

	return {
		create: function () {
			div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('div');
			img = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('img');
			text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n  ");
			div_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('div');
			text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])(text_1_value = state.address || 'No address');
			text_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n  ");
			if (if_block) if_block.create();
			this.hydrate();
		},

		hydrate: function (nodes) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["l" /* setAttribute */])(div, 'svelte-1399269654', '');
			div.className = "address-container";
			img.className = img_class_value = "address-qr " + (state.addressRequested ? 'address-requested' : '') + " " + (state.address ? 'has-address' : '');
			img.src = img_src_value = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + (state.address || 'No addresss');
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["m" /* addListener */])(img, 'click', click_handler);
			div_1.className = "address";
		},

		mount: function (target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(img, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(div_1, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text_1, div_1);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text_2, div);
			if (if_block) if_block.mount(div, null);
		},

		update: function (changed, state) {
			if (img_class_value !== (img_class_value = "address-qr " + (state.addressRequested ? 'address-requested' : '') + " " + (state.address ? 'has-address' : ''))) {
				img.className = img_class_value;
			}

			if (img_src_value !== (img_src_value = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + (state.address || 'No addresss'))) {
				img.src = img_src_value;
			}

			if (text_1_value !== (text_1_value = state.address || 'No address')) {
				text_1.data = text_1_value;
			}

			if (state.error) {
				if (if_block) {
					if_block.update(changed, state);
				} else {
					if_block = create_if_block(state, component);
					if_block.create();
					if_block.mount(div, null);
				}
			} else if (if_block) {
				if_block.unmount();
				if_block.destroy();
				if_block = null;
			}
		},

		unmount: function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(div);
			if (if_block) if_block.unmount();
		},

		destroy: function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["n" /* removeListener */])(img, 'click', click_handler);
			if (if_block) if_block.destroy();
		}
	};
}

function create_if_block(state, component) {
	var div, text, text_1_value, text_1;

	return {
		create: function () {
			div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('div');
			text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("ERROR: ");
			text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])(text_1_value = state.error);
			this.hydrate();
		},

		hydrate: function (nodes) {
			div.className = "error";
		},

		mount: function (target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(div, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text_1, div);
		},

		update: function (changed, state) {
			if (text_1_value !== (text_1_value = state.error)) {
				text_1.data = text_1_value;
			}
		},

		unmount: function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(div);
		},

		destroy: __WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["o" /* noop */]
	};
}

function Address(options) {
	options = options || {};
	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-1399269654-style")) add_css();

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["g" /* assign */])(Address.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["h" /* proto */]);

Address.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
};

Address.prototype.teardown = Address.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Address);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nilui__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nilui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nilui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__ = __webpack_require__(1);




var template = function () {
	return {
		data() {
			return {
				data: {
					bitmixerCode: '',
					distribution: []
				}
			};
		},
		methods: {
			addDistribution() {
				const data = JSON.parse(JSON.stringify(this.get('data')));
				data.distribution.push({ type: 'BTC', address: '', percentage: 0 });
				this.set({ data });
			},
			removeDistribution(index) {
				const data = JSON.parse(JSON.stringify(this.get('data')));
				data.distribution.splice(index, 1);
				this.set({ data });
			}
		}
	};
}();

function add_css() {
	var style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('style');
	style.id = "svelte-1604673500-style";
	style.textContent = "\n[svelte-1604673500].config-container, [svelte-1604673500] .config-container {\n  padding: 0.5rem;\n}\n";
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(style, document.head);
}

function create_main_fragment(state, component) {
	var div,
	    textbox_updating = false,
	    text,
	    p,
	    text_1,
	    h2,
	    text_2,
	    text_3,
	    text_4,
	    p_1;

	var textbox_initial_data = { label: "Bitmixer Code" };
	if ('bitmixerCode' in state.data) textbox_initial_data.value = state.data.bitmixerCode;
	var textbox = new __WEBPACK_IMPORTED_MODULE_0_nilui__["Textbox"]({
		_root: component._root,
		data: textbox_initial_data
	});

	component._bindings.push(function () {
		if (textbox._torndown) return;
		textbox.observe('value', function (value) {
			if (textbox_updating) return;
			textbox_updating = true;
			var state = component.get();
			state.data.bitmixerCode = value;
			component._set({ data: state.data });
			textbox_updating = false;
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["a" /* differs */])(textbox.get('value'), state.data.bitmixerCode) });
	});

	textbox._context = {
		state: state
	};

	var each_block_value = state.data.distribution;

	var each_block_iterations = [];

	for (var i = 0; i < each_block_value.length; i += 1) {
		each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
	}

	var iconbutton_1_yield_fragment = create_iconbutton_yield_fragment_1(state, component);

	var iconbutton_1 = new __WEBPACK_IMPORTED_MODULE_0_nilui__["IconButton"]({
		_root: component._root,
		_yield: iconbutton_1_yield_fragment
	});

	iconbutton_1.on('click', function (event) {
		component.addDistribution();
	});

	return {
		create: function () {
			div = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('div');
			textbox._fragment.create();
			text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n  ");
			p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('p');
			text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n  ");
			h2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('h2');
			text_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("Distribution");
			text_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n  ");

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].create();
			}

			text_4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n  ");
			p_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('p');
			iconbutton_1_yield_fragment.create();
			iconbutton_1._fragment.create();
			this.hydrate();
		},

		hydrate: function (nodes) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["l" /* setAttribute */])(div, 'svelte-1604673500', '');
			div.className = "config-container";
		},

		mount: function (target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(div, target, anchor);
			textbox._fragment.mount(div, null);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(p, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text_1, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(h2, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text_2, h2);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text_3, div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].mount(div, null);
			}

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(text_4, div);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["k" /* appendNode */])(p_1, div);
			iconbutton_1._fragment.mount(p_1, null);
		},

		update: function (changed, state) {
			if (!textbox_updating && 'data' in changed) {
				textbox_updating = true;
				textbox._set({ value: state.data.bitmixerCode });
				textbox_updating = false;
			}

			textbox._context.state = state;

			var each_block_value = state.data.distribution;

			if ('data' in changed) {
				for (var i = 0; i < each_block_value.length; i += 1) {
					if (each_block_iterations[i]) {
						each_block_iterations[i].update(changed, state, each_block_value, each_block_value[i], i);
					} else {
						each_block_iterations[i] = create_each_block(state, each_block_value, each_block_value[i], i, component);
						each_block_iterations[i].create();
						each_block_iterations[i].mount(div, text_4);
					}
				}

				for (; i < each_block_iterations.length; i += 1) {
					each_block_iterations[i].unmount();
					each_block_iterations[i].destroy();
				}
				each_block_iterations.length = each_block_value.length;
			}
		},

		unmount: function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(div);

			for (var i = 0; i < each_block_iterations.length; i += 1) {
				each_block_iterations[i].unmount();
			}
		},

		destroy: function () {
			textbox.destroy(false);

			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["f" /* destroyEach */])(each_block_iterations, false, 0);

			iconbutton_1_yield_fragment.destroy();
			iconbutton_1.destroy(false);
		}
	};
}

function create_each_block(state, each_block_value, item, index, component) {
	var select_updating = false,
	    text,
	    textbox_updating = false,
	    text_1,
	    numberinput_updating = false,
	    text_2,
	    text_3,
	    br;

	var select_initial_data = { label: "Type", options: ['BTC', 'LTC', 'DCR', 'ETC'] };
	if (index in each_block_value) select_initial_data.value = item.type;
	var select = new __WEBPACK_IMPORTED_MODULE_0_nilui__["Select"]({
		_root: component._root,
		data: select_initial_data
	});

	component._bindings.push(function () {
		if (select._torndown) return;
		select.observe('value', function (value) {
			if (select_updating) return;
			select_updating = true;
			var list = this._context.each_block_value;
			var index = this._context.index;
			list[index].type = value;

			component._set({ data: component.get('data') });
			select_updating = false;
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["a" /* differs */])(select.get('value'), item.type) });
	});

	select._context = {
		each_block_value: each_block_value,
		index: index
	};

	var textbox_initial_data = { label: "Address" };
	if (index in each_block_value) textbox_initial_data.value = item.address;
	var textbox = new __WEBPACK_IMPORTED_MODULE_0_nilui__["Textbox"]({
		_root: component._root,
		data: textbox_initial_data
	});

	component._bindings.push(function () {
		if (textbox._torndown) return;
		textbox.observe('value', function (value) {
			if (textbox_updating) return;
			textbox_updating = true;
			var list = this._context.each_block_value;
			var index = this._context.index;
			list[index].address = value;

			component._set({ data: component.get('data') });
			textbox_updating = false;
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["a" /* differs */])(textbox.get('value'), item.address) });
	});

	textbox._context = {
		each_block_value: each_block_value,
		index: index
	};

	var numberinput_initial_data = { label: "Percentage", step: 5 };
	if (index in each_block_value) numberinput_initial_data.value = item.percentage;
	var numberinput = new __WEBPACK_IMPORTED_MODULE_0_nilui__["NumberInput"]({
		_root: component._root,
		data: numberinput_initial_data
	});

	component._bindings.push(function () {
		if (numberinput._torndown) return;
		numberinput.observe('value', function (value) {
			if (numberinput_updating) return;
			numberinput_updating = true;
			var list = this._context.each_block_value;
			var index = this._context.index;
			list[index].percentage = value;

			component._set({ data: component.get('data') });
			numberinput_updating = false;
		}, { init: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["a" /* differs */])(numberinput.get('value'), item.percentage) });
	});

	numberinput._context = {
		each_block_value: each_block_value,
		index: index
	};

	var iconbutton_1_yield_fragment = create_iconbutton_yield_fragment(state, each_block_value, item, index, component);

	var iconbutton_1 = new __WEBPACK_IMPORTED_MODULE_0_nilui__["IconButton"]({
		_root: component._root,
		_yield: iconbutton_1_yield_fragment
	});

	iconbutton_1.on('click', function (event) {
		var each_block_value = this._context.each_block_value,
		    index = this._context.index,
		    item = each_block_value[index];

		component.removeDistribution(index);
	});

	iconbutton_1._context = {
		each_block_value: each_block_value,
		index: index
	};

	return {
		create: function () {
			select._fragment.create();
			text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n    ");
			textbox._fragment.create();
			text_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n    ");
			numberinput._fragment.create();
			text_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n    ");
			iconbutton_1_yield_fragment.create();
			iconbutton_1._fragment.create();
			text_3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("\n    ");
			br = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["j" /* createElement */])('br');
		},

		mount: function (target, anchor) {
			select._fragment.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(text, target, anchor);
			textbox._fragment.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(text_1, target, anchor);
			numberinput._fragment.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(text_2, target, anchor);
			iconbutton_1._fragment.mount(target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(text_3, target, anchor);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(br, target, anchor);
		},

		update: function (changed, state, each_block_value, item, index) {
			if (!select_updating && 'data' in changed) {
				select_updating = true;
				select._set({ value: item.type });
				select_updating = false;
			}

			select._context.each_block_value = each_block_value;
			select._context.index = index;

			var select_changes = {};

			select_changes.options = ['BTC', 'LTC', 'DCR', 'ETC'];

			if (Object.keys(select_changes).length) select.set(select_changes);

			if (!textbox_updating && 'data' in changed) {
				textbox_updating = true;
				textbox._set({ value: item.address });
				textbox_updating = false;
			}

			textbox._context.each_block_value = each_block_value;
			textbox._context.index = index;

			if (!numberinput_updating && 'data' in changed) {
				numberinput_updating = true;
				numberinput._set({ value: item.percentage });
				numberinput_updating = false;
			}

			numberinput._context.each_block_value = each_block_value;
			numberinput._context.index = index;

			iconbutton_1._context.each_block_value = each_block_value;
			iconbutton_1._context.index = index;
		},

		unmount: function () {
			select._fragment.unmount();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(text);
			textbox._fragment.unmount();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(text_1);
			numberinput._fragment.unmount();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(text_2);
			iconbutton_1._fragment.unmount();
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(text_3);
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(br);
		},

		destroy: function () {
			select.destroy(false);
			textbox.destroy(false);
			numberinput.destroy(false);
			iconbutton_1_yield_fragment.destroy();
			iconbutton_1.destroy(false);
		}
	};
}

function create_iconbutton_yield_fragment(state, each_block_value, item, index, component) {
	var text;

	return {
		create: function () {
			text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("minus");
		},

		mount: function (target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(text, target, anchor);
		},

		unmount: function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(text);
		},

		destroy: __WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["o" /* noop */]
	};
}

function create_iconbutton_yield_fragment_1(state, component) {
	var text;

	return {
		create: function () {
			text = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["b" /* createText */])("plus");
		},

		mount: function (target, anchor) {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["c" /* insertNode */])(text, target, anchor);
		},

		unmount: function () {
			__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["d" /* detachNode */])(text);
		},

		destroy: __WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["o" /* noop */]
	};
}

function Config(options) {
	options = options || {};
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["g" /* assign */])(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root || this;
	this._yield = options._yield;

	this._torndown = false;
	if (!document.getElementById("svelte-1604673500-style")) add_css();
	this._renderHooks = [];
	this._bindings = [];

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.create();
		this._fragment.mount(options.target, null);
	}

	while (this._bindings.length) this._bindings.pop()();
	this._flush();
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["g" /* assign */])(Config.prototype, template.methods, __WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["h" /* proto */]);

Config.prototype._set = function _set(newState) {
	var oldState = this._state;
	this._state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["g" /* assign */])({}, oldState, newState);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.pre, newState, oldState);
	this._fragment.update(newState, this._state);
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Users_nick_Projects_nilchaos87_stash_node_modules_svelte_shared_js__["i" /* dispatchObservers */])(this, this._observers.post, newState, oldState);
	while (this._bindings.length) this._bindings.pop()();
	this._flush();
};

Config.prototype.teardown = Config.prototype.destroy = function destroy(detach) {
	this.fire('destroy');

	if (detach !== false) this._fragment.unmount();
	this._fragment.destroy();
	this._fragment = null;

	this._state = {};
	this._torndown = true;
};

/* harmony default export */ __webpack_exports__["a"] = (Config);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(2);

new __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */]({ target: document.body });

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nilutil"] = factory();
	else
		root["nilutil"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = favicon;
function favicon(url) {
  var link = document.createElement('link');
  link.href = url;
  link.rel = 'icon';
  return link;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = link;
function link(href, rel) {
  var link = document.createElement('link');
  link.href = href;
  link.rel = rel;
  return link;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = meta;
function meta(name, content) {
  var meta = document.createElement('meta');
  meta.name = name;
  meta.content = content;
  return meta;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;
function style(text) {
  var style = document.createElement('style');
  style.textContent = text;
  return style;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = exports.meta = exports.link = exports.favicon = undefined;

var _favicon = __webpack_require__(0);

var _favicon2 = _interopRequireDefault(_favicon);

var _link = __webpack_require__(1);

var _link2 = _interopRequireDefault(_link);

var _meta = __webpack_require__(2);

var _meta2 = _interopRequireDefault(_meta);

var _style = __webpack_require__(3);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.favicon = _favicon2.default;
exports.link = _link2.default;
exports.meta = _meta2.default;
exports.style = _style2.default;

/***/ })
/******/ ]);
});

/***/ })
/******/ ]);