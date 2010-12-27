Planet
======

Introduction
------------

A minimalist cross-browser library for drawing basic vector graphics in either Canvas, SVG or VML.

When choosing a rendering mode, the priority is Canvas, then SVG, then VML. In practice for modern browsers, it's Canvas for decent browsers, VML for IE.

Implemented
-----------

Lines and Paths. This pretty much allows you to draw arbitrary shapes to the screen, with a single fill and/or stroke colour.


Priorities
----------

Utterly cross-platform, feature detectin' (not browser sniffin'), lightweight (currently 5k compiled and minified), fast, simple interface, easy to deploy and use.

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
		strokeColor : "#000", // defaults to black if you leave out a strokeColor property
		strokeWidth : 3 // defaults to 1 if you leave out the strokeWidth property
	});
	
	container.path({
		startx : 0,
		starty : 0,
		points : [
			{x : 100, 0},
			{x : 100, 100},
			{x : 50, 50}
		],
		close : false // don't automatically 'close' the path, i.e, returning to the origin. Ignored if you apply a fill color. 
		fillColor : "#000", // no fill colour property, no fill.
		strokeColor : "#333", // no stroke colour property, no stroke.
		strokeWidth : 2 // defaults to 1 if you leave out the strokeWidth property
	});

or you can chain instructions...

	planet('#container')
		.line( obj )
		.line( obj )
		.path( obj ) ...
	
etc.

Pretty simple at the moment. Documentation will be extended as more methods are added.

Roadmap
-------

* Ovals and Circles
* 'Boxes' (with and without rounded edges)
* Lightweight JSON platform neutral Vector Graphic definition format.

Author
------

Charlotte Gore
