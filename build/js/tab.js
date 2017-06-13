/**
@author Chris Humboldt
**/
// Extend Rocket
Rocket.defaults.tab = {
    target: '.rt-triggers a',
    animate: false,
    style: 'line',
    vertical: false
};
// Module
var RockMod_Tab;
(function (RockMod_Tab) {
    var styles = ['line', 'flat', 'raised'];
    // Functions
    var tabs = {
        execute: function (triggers, opt) {
            var tabs = [];
            var tabParentClasses = ['rt-triggers'];
            // Functions
            function showTab(trigger, tab) {
                var thisTab = (Rocket.is.string(tab)) ? Rocket.dom.element(tab) : tab;
                // Triggers
                for (var _i = 0, triggers_1 = triggers; _i < triggers_1.length; _i++) {
                    var trigger_1 = triggers_1[_i];
                    Rocket.state.clear(trigger_1);
                }
                if (triggers.indexOf(trigger) > -1) {
                    Rocket.state.add(trigger, 'active');
                }
                // Tabs
                for (var _a = 0, tabs_1 = tabs; _a < tabs_1.length; _a++) {
                    var tab_1 = tabs_1[_a];
                    Rocket.state.clear(tab_1);
                }
                if (tabs.indexOf(tab) > -1) {
                    Rocket.state.add(tab, 'active');
                }
            }
            // Execute
            if (styles.indexOf(opt.style) > -1) {
                tabParentClasses.push('_s-' + opt.style);
            }
            if (opt.vertical) {
                tabParentClasses.push('_vertical');
            }
            Rocket.classes.add(triggers[0].parentNode.parentNode, tabParentClasses);
            Rocket.state.add(triggers[0], 'active');
            Rocket.state.add(triggers[0].getAttribute('href'), 'active');
            var _loop_1 = function (trigger) {
                var tab = Rocket.dom.element(trigger.getAttribute('href'));
                if (tab) {
                    Rocket.event.add(trigger, 'click', function (ev) {
                        ev.preventDefault();
                        showTab(trigger, tab);
                    });
                    var classes = ['rt-tab'];
                    if (opt.animate) {
                        classes.push('_animate');
                    }
                    Rocket.classes.add(tab, classes);
                    tabs.push(tab);
                }
            };
            for (var _i = 0, triggers_2 = triggers; _i < triggers_2.length; _i++) {
                var trigger = triggers_2[_i];
                _loop_1(trigger);
            }
            return {
                triggers: triggers,
                tabs: tabs
            };
        }
    };
    // Initialiser
    function init(uOpt) {
        if (!Rocket.is.object(uOpt)) {
            uOpt = {};
        }
        var opt = {
            target: Rocket.helper.setDefault(uOpt.target, Rocket.defaults.tab.target),
            animate: Rocket.helper.setDefault(uOpt.animate, Rocket.defaults.tab.animate),
            style: Rocket.helper.setDefault(uOpt.style, Rocket.defaults.tab.style),
            vertical: Rocket.helper.setDefault(uOpt.vertical, Rocket.defaults.tab.vertical)
        };
        var triggers = Rocket.dom.select(opt.target);
        // Catch
        if (triggers.length <= 0) {
            return false;
        }
        // Continue
        return tabs.execute(triggers, opt);
    }
    RockMod_Tab.init = init;
})(RockMod_Tab || (RockMod_Tab = {}));
// Bind to Rocket
Rocket.tab = RockMod_Tab.init;
