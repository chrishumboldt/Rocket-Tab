/**
 * File: tabplate.js
 * Type: Javascript component
 * Author: Chris Humboldt
 */

// Table of contents
// Defaults
// Tools

var $tabplateDefault = {
	selector: '#tabplate-triggers',
	animate: false,
	tabs: '#tabplate-tabs'
}

var tabplate = function($userOptions) {
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

	var $selector = ($userOptions && $userOptions.selector) ? $userOptions.selector : $tabplateDefault.selector;
	var $selectorType = $selector.charAt(0).toString();
	if ($selectorType === '#' && !web.hasWhiteSpace($selector)) {
		new tabplateComponent(document.getElementById($selector.substring(1)), $userOptions, web);
	} else {
		var $elements = document.querySelectorAll($selector);
		for (var $i = $elements.length - 1; $i >= 0; $i--) {
			new tabplateComponent($elements[$i], $userOptions, web);
		};
	}
};

var tabplateComponent = function($self, $userOptions, web) {
	// Variables
	var $tabs;

	// Options
	$userOptions = $userOptions || false;
	$options = {
		animate: (typeof $userOptions.animate !== 'undefined') ? $userOptions.animate : $tabplateDefault.animate,
		tabs: $userOptions.tabs || $tabplateDefault.tabs,
	};

	// Internal functions
	var tabChange = function($id) {
		web.classRemove($tabs.querySelector('li.active'), 'active');
		web.classAdd(document.getElementById($id.substring(1)), 'active');
		if ($options.animate.toString() == 'true') {
			$tabs.style.height = $tabs.querySelector('li.active').clientHeight + 'px';
		}
	};
	function tabSetup() {
		$tabs = document.querySelector($options.tabs);
		if (web.exists($tabs)) {
			web.classAdd($tabs, 'tabplate-tabs');
			web.classAdd($tabs.querySelector('li:first-child'), 'active');
			if ($options.animate.toString() == 'true') {
				$tabs.style.height = $tabs.querySelector('li.active').clientHeight + 'px';
				web.classAdd(web.element.html, 'tp-animate');
			}
		}
	}

	function triggerSetup() {
		var $triggerLinks = $self.querySelectorAll('li a');
		var $triggerLength = $triggerLinks.length;
		web.classAdd($self, 'tabplate-triggers');
		web.classAdd($self, 'tabplate-count-' + $triggerLength);
		web.classAdd($self.querySelector('li:first-child'), 'active');
		for (var $i = $triggerLength - 1; $i >= 0; $i--) {
			$triggerLinks[$i].onclick = function(event) {
				event.preventDefault();
				web.classRemove($self.querySelector('li.active'), 'active');
				web.classAdd(this.parentNode, 'active');
				tabChange(this.getAttribute('href'));
			};
		}
	}

	// Calls
	tabSetup();
	triggerSetup();
};
