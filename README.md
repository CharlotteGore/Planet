Planet
======

Introduction
------------

A minimalist cross-browser library for drawing basic vector graphics in either Canvas, SVG or VML.

When choosing a rendering mode, the priority is Canvas, then SVG, then VML. In practice it's Canvas for decent browsers, VML for IE.

This repository isn't being actively developed but any bugs are fixed.

Implemented
-----------

Lines, paths, boxes. It's a small subset of vector graphics but lets you have CSS3 style rounded edges in IE6, IE7 and IE8... which is the reason this library exists in the first place!


Priorities
----------

Cross-browser, feature detectin' (not browser sniffin'), lightweight (currently 5k compiled and minified), fast, simple interface, easy to deploy and use.

Dependencies
------------

jQuery. It's used for DOM manipulation and CSS3 selectors. 

Planet now comes pre-assembled into the useable script files. jQuery and the build tools are no longer being distributed here.

Installing
----------

In /dist there is planet.min.js, for use in production environments.
In /debug there is planet.js, unminified. 

	<script type="text/javascript" src="/planet.min.js"

	
You'll need the Ruby gem 'jasmine' to run the specs.

NOTE: I've long since stopped using Jasmine, I need to update this to something else. ;)

Usage
-----

	var container = planet('#graphics-container'); // VERY IMPORTANT: This element MUST have an explicit WIDTH and HEIGHT. 


	// draw a line. Set start and end. Usually better to use Path though...
	container.line({
		x1 : 0,
		y1 : 0,
		x2 : 100,
		y2 : 100,
		strokeColor : "#000", // defaults to black if you leave out a strokeColor property
		strokeWidth : 3 // defaults to 1 if you leave out the strokeWidth property
	});
	
	// Draw a series of straight lines. 
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

	container.box({

        position: {
            x: data[i].x,
            y: data[i].y
        },
        size: {
            w: data[i].w,
            h: data[i].h
        },
        cornerRadius: 5

	})

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
* Lightweight JSON platform neutral Vector Graphic definition format.

Author
------

Charlotte Gore
