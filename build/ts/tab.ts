/**
@author Chris Humboldt
**/

// Extend Rocket
Rocket.defaults.tab = {
   target: '.rocket-tab-triggers a',
   animate: false,
   style: 'line',
   vertical: false
};

// Module
module RockMod_Tab {
   const styles = ['line', 'flat', 'raised'];

   // Functions
   const tabs = {
      execute: (triggers, opt) => {
         let tabs = [];
         let tabParentClasses = ['rocket-tab-triggers'];

         // Functions
         function showTab(trigger, tab) {
            let thisTab = (Rocket.is.string(tab)) ? Rocket.dom.element(tab) : tab;

            // Triggers
            for (let trigger of triggers) {
               Rocket.state.clear(trigger);
            }
            if (triggers.indexOf(trigger) > -1) {
               Rocket.state.add(trigger, 'active');
            }

            // Tabs
            for (let tab of tabs) {
               Rocket.state.clear(tab);
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

         for (let trigger of triggers) {
            let tab = Rocket.dom.element(trigger.getAttribute('href'));

            if (tab) {
               Rocket.event.add(trigger, 'click', ev => {
                  ev.preventDefault();
                  showTab(trigger, tab);
               });

               let classes = ['rt-tab'];
               if (opt.animate) {
                  classes.push('_animate');
               }
               Rocket.classes.add(tab, classes);

               tabs.push(tab);
            }
         }

         return {
            triggers: triggers,
            tabs: tabs
         }
      }
   };

   // Initialiser
   export function init(uOpt: any) {
      if (!Rocket.is.object(uOpt)) {
         uOpt = {};
      }

      const opt = {
         target: Rocket.helper.setDefault(uOpt.target, Rocket.defaults.tab.target),
         animate: Rocket.helper.setDefault(uOpt.animate, Rocket.defaults.tab.animate),
         style: Rocket.helper.setDefault(uOpt.style, Rocket.defaults.tab.style),
         vertical: Rocket.helper.setDefault(uOpt.vertical, Rocket.defaults.tab.vertical)
      };

      let triggers = Rocket.dom.select(opt.target);

      // Catch
      if (triggers.length <= 0) {
         return false;
      }

      // Continue
      return tabs.execute(triggers, opt);
   }
}

// Bind to Rocket
Rocket.tab = RockMod_Tab.init;
