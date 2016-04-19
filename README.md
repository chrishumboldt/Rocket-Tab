# Tabplate
A tabulation component.

## Getting Started
You can either download a copy of the source files or install Tabplate via Bower.

```
bower install tabplate
```

Start by including the necessary files.

```
<head>
	<link href="css/tabplate.min.css" rel="stylesheet" type="text/css">
</head>
<body>
	/* Your content goes here */
	<script src="js/tabplate.min.js"></script>
</body>
```

## HTML Example
The Tabplate component uses two unordered lists to change between what content is viewed. See a basic HTML example below.

```
<ul id="tab-triggers">
	<li><a href="#tab-create">Create</a></li>
	<li><a href="#tab-images">Images</a></li>
	<li><a href="#tab-order">Order</a></li>
</ul>
<ul id="tab-content">
	<li id="tab-create"><p>Your content goes here.</p></li>
	<li id="tab-images"><p>Your content goes here.</p></li>
	<li id="tab-order"><p>Your content goes here.</p></li>
</ul>

```

## Execute Via Javascript
Use the following example to trigger the Tabplate component.

```
<script>
new tabplate({
	selector: '#tab-triggers',
	tabs: '#tab-content',
	animate: true
});
</script>
```

## Javascript Options

| Name | Default | Options | Description |
| ---- | ---- | ---- | ---- |
| selector | #tab-triggers | | Set the HTML selector. |
| animate | false | true, false | Set the tabulation change to animate or not. |
| tabs | #tab-content | | Set the tabulation content selector. |

#### Defaults
You can also set or overwrite the above options globally by altering the Tabplate defaults. To do so reference the **$tabplateDefault** object. For example:

```
<script>
// Default change
$tabplateDefault.selector = '.tab-links';
$tabplateDefault.tabs = '#tab-content';
$tabplateDefault.animate = true;

// Execute
new tabplate();
</script>
```

## Author
Created and maintained by Chris Humboldt<br>
Website: <a href="http://chrishumboldt.com/">chrishumboldt.com</a><br>
Twitter: <a href="https://twitter.com/chrishumboldt">twitter.com/chrishumboldt</a><br>
GitHub <a href="https://github.com/chrishumboldt">github.com/chrishumboldt</a><br>

## Copyright and License
Copyright 2016 Webplate Project

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
