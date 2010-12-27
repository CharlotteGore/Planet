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

jQuery. It's used for DOM manipulation and CSS3 selectors.

Usage
-----

var container = planet('#graphics-container')

container.line({
	x1 : 0,
	y1 : 0,
	x2 : 100,
	y2 : 100,
	color : "#000",
	strokeWidth : 3
})

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
