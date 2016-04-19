/**
 * File: tabplate.js
 * Type: Javascript component
 * Author: Chris Humboldt
 */

// Table of contents
// Defaults
// Tools

var $tabplateDefault = {
	selector: '#tab-triggers',
	tabs: '#tab-content',
	animate: true
}

var tabplate = function($userOptions) {
	// Setup
	var $self = this;

	// Options
	$userOptions = $userOptions || false;
	$self.options = {
		selector: $userOptions.selector || $tabplateDefault.selector,
		tabs: $userOptions.tabs || $tabplateDefault.tabs,
		animate: (typeof $userOptions.animate != 'undefined') ? $userOptions.animate : $tabplateDefault.animate
	}

	// Web tools
	var web = function(document) {
		// Variables
		var $webEl = {
			body: document.getElementsByTagName('body')[0],
			html: document.getElementsByTagName('html')[0]
		};

		// Functions
		var classAdd = function($element, $class) {
			if (exists($element)) {
				if (typeof $class === 'object') {
					for (var $i = 0, $len = $class.length; $i < $len; $i++) {
						classAddExecute($element, $class[$i]);
					}
				} else if (hasWhiteSpace($class)) {
					var $classes = $class.split(' ');
					for (var $i = 0, $len = $classes.length; $i < $len; $i++) {
						classAddExecute($element, $classes[$i]);
					}
				} else {
					classAddExecute($element, $class);
				}
			}
		};
		var classAddExecute = function($element, $class) {
			var $crtClass = $element.className;
			if ($crtClass.match(new RegExp('\\b' + $class + '\\b', 'g')) === null) {
				$element.className = $crtClass === '' ? $class : $crtClass + ' ' + $class;
			}
		};
		var classClear = function($element) {
			if (exists($element)) {
				$element.removeAttribute('class');
			}
		};
		var classRemove = function($element, $class) {
			if (exists($element)) {
				if (typeof $class === 'object') {
					for (var $i = $class.length - 1; $i >= 0; $i--) {
						classRemoveExecute($element, $class[$i]);
					}
				} else if (hasWhiteSpace($class)) {
					var $classes = $class.split(' ');
					for (var $i = 0, $len = $classes.length; $i < $len; $i++) {
						classRemoveExecute($element, $classes[$i]);
					}
				} else {
					classRemoveExecute($element, $class);
				}
			}
		};
		var classRemoveExecute = function($element, $class) {
			if ($element.className.indexOf($class) > -1) {
				$element.className = $element.className.split(' ').filter(function($val) {
					return $val != $class;
				}).toString().replace(/,/g, ' ');
				if ($element.className === '') {
					classClear($element);
				}
			}
		};
		var exists = function($element) {
			return ($element === null || typeof($element) === undefined) ? false : true;
		};
		var hasWhiteSpace = function($check) {
			return /\s/.test($check);
		};
		var randomString = function($stringLength) {
			var $chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
			var $len = $stringLength || 5;
			var $randomString = '';
			for (var $i = 0; $i < $len; $i++) {
				$rNum = Math.floor(Math.random() * $chars.length);
				$randomString += $chars[$rNum];
			}
			return $randomString;
		};

		// Return
		return {
			classAdd: classAdd,
			classRemove: classRemove,
			element: $webEl,
			exists: exists,
			hasWhiteSpace: hasWhiteSpace,
			randomString: randomString
		};
	}(document);

	// Variables
	var $tabContainer = document.querySelector($self.options.tabs);
	var $triggersContainer = document.querySelector($self.options.selector);

	// Functions
	var tabTriggers = function() {
		var $triggers = $triggersContainer.querySelectorAll('a');
		for (var $i = 0, $len = $triggers.length; $i < $len; $i++) {
		   $triggers[$i].onclick = function(event) {
				event.preventDefault();
				if (this.getAttribute('href') !== null) {
					web.classRemove($triggersContainer.querySelector('._active'), '_active');
					web.classAdd(this.parentNode, '_active');
					tabShow(this.getAttribute('href').substring(1));
				}
			};
		}
	};
	var tabsSetup = function() {
		// Triggers
		if (web.exists($triggersContainer)) {
			web.classAdd($triggersContainer, 'tp-triggers');
			web.classAdd($triggersContainer.querySelector('li:first-child'), '_active');
			tabTriggers();
		}
		// Tabs
		if (web.exists($tabContainer)) {
			web.classAdd($tabContainer, 'tp-tabs');
			web.classAdd($tabContainer.querySelector('li:first-child'), '_active');
		}
		// Animate
		if ($self.options.animate === true) {
			web.classAdd(web.element.html, 'tp-animate');
		}
	};
	var tabShow = function($id) {
		web.classRemove($tabContainer.querySelector('._active'), '_active');
		web.classAdd(document.getElementById($id), '_active');
	};

	// Execute
	tabsSetup();
};
