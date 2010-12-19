cg-generic
==========

Introduction
------------

A generic system for building client-side and server-side javascript, as well as compiling sass into css. Derived from the jQuery build system.

Does JSlint checking of all Javascript and minifies and compiles client-side javascript using Google's Closure compiler. It is assumed this will be used for writing Node.JS applications for the server-side, but you don't need Node to be installed in order to build, as it's distributed with Rhino to run the JSlint checking. 

Installation
------------

git clone git@github.com:CharlotteGore/cg-generic.git your-application-name

Dependences
-----------

You're going to need two Ruby gems - rake and compass - and Java. 

Configuration
-------------

Your client and server sources files are in src/client-javascript and src/server-javascript respectively. As you add source files of your own, you need to update the Rakefile to include these new files. This is a manual step so that you can control the order that the files are merged together in.

The primary things you're going to want to change in the Rakefile are "client_files" and "server_files". You can also change the output file names 

Building
--------

rake 

-builds client-side & server-side JS, and compiles the scss files.

rake client

-builds the client-side JS only

rake server

-builds the server-side JS only

rake sass

-compiles the sass into css

Outputs
-------

By default, the build system creates client.js and client.min.js in ./public/client-javascript, creates server.js in the root and creates ie.css, print.css and styles.css in ./public/client-css.

Directory Structure
-------------------

/public - static files expected to be served to the client
/lib - supporting files for the server-side javascript, CommonJS modules etc. 
/build - contains tools used for compiling the project - Rhino, JSlint, Google Closure Compiler and the Compass project
/src - contains source files for the client-side & server-side JS, and the Sass stylesheet files. 
