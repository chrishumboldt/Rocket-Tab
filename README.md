# Rocket Tab
A Javascript tabulation module.

* [Getting Started](#getting-started)
* [Basic Example](#basic-example)
* [Initialization](#initialization)
	* [Options](#options)
	* [Defaults](#defaults)

## Getting Started
Install via NPM.

```
npm install rocket-tab
```

**NOTE** that this module has a dependency [Rocket Tools (21kb)](https://github.com/chrishumboldt/Rocket-Tools) which will automatically be installed as well.

Start by including the necessary files.

```html
<head>
   <link href="node_modules/rocket-tab/css/tab.min.css" rel="stylesheet" type="text/css">
</head>
<body>
   /* Your content goes here */
   <script src="node_modules/rocket-tools/js/tools.min.js"></script>
   <script src="node_modules/rocket-tab/js/tab.min.js"></script>
</body>
```

## HTML Example
The tab module uses a basic HTML structure to achieve the desired effect. See an example below.

```html
<ul class="rocket-tab-triggers">
   <li><a href="#tab-info">Info</a></li>
   <li><a href="#tab-comments">Comments</a></li>
   <li><a href="#tab-security">Security</a></li>
</ul>

<div id="tab-info">Info Tab</div>
<div id="tab-comments">Comments Tab</div>
<div id="tab-security">Security Tab</div>
```

## Initialization
Use the following example to trigger the tab module.

```js
Rocket.tab();
```

#### Options
Name | Default | Options | Description
---- | ---- | ---- | ----
`target` | `.rocket-tab-triggers a` | | Set the target triggers elements.
`animate` | `false` | `false` `true` | Animate the transition from one tab content to the next.
`style` | `line` | `flat` `line`, `raised` | Set some basic styling.
`vertical` | `false` | `false` `true` | Set a vertical class with some basic styling.

```js
Rocket.tab({
   target: '.link-trigger',
   animate: true,
   style: 'flat',
   vertical: true
});
```

#### Defaults
You can also overwrite the module options globally by altering the defaults. To do so reference the defaults object property. For example:

```js
Rocket.defaults.tab.style = 'raised';
```

## Author
Created and maintained by Chris Humboldt<br>
Website: <a href="http://chrishumboldt.com/">chrishumboldt.com</a><br>
Twitter: <a href="https://twitter.com/chrishumboldt">twitter.com/chrishumboldt</a><br>
GitHub <a href="https://github.com/chrishumboldt">github.com/chrishumboldt</a><br>

## Copyright and License
Copyright 2017 Rocket Project

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
