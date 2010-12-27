Planet
======

Introduction
------------

A minimalist cross-browser library for drawing basic vector graphics in either Canvas, SVG or VML.

Priority is Canvas, then SVG, then VML. In practice, it's Canvas for decent browsers, VML for IE.

Implemented
-----------

Lines. You can draw lines. Be still your beating heart.


Priorities
----------

Utterly cross-platform, feature detectin' (not browser sniffin'), lightweight, simple interface, easy to deploy and use.

Dependencies
------------

jQuery. It's used for DOM manipulation and CSS3 selectors. To build you'll need Ruby, (let's say 1.9.2, to be sure), Ruby Gems, Rake and Java. To run the specs you'll need Jasmine. Google Closure Compiler, JSlint and Rhino are in the repository already.

Building
--------

	git clone git@github.com:CharlotteGore/Planet.git
	
	cd planet

	rake

The minified version goes in dist/planet.min.js, the debug version in debug/planet.js. 

Tests
-----

	rake jasmine
	
or

	rake jasmine:ci
	
You'll need the Ruby gem 'jasmine' to run the specs.

Usage
-----

	var container = planet('#graphics-container');

	container.line({
		x1 : 0,
		y1 : 0,
		x2 : 100,
		y2 : 100,
		color : "#000",
		strokeWidth : 3
	});

or you can chain instructions...

	planet('#container')
		.line( obj )
		.line( obj )
		.line( obj ) ...
	
etc.

Pretty simple at the moment. Documentation will be extended as more methods are added.

Roadmap
-------

Paths
Boxes (with and without rounded edges)
Ovals and Circles
Lightweight JSON platform neutral Vector Graphic definition format.

Author
------

Charlotte Gore
