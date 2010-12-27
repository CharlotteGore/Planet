/* line.js */

	planet.vml.extend({
	
		line : function( obj ){

			this.container.append('<v:line from="' + obj.x1 + "px, " + obj.y1 +'" to="' + obj.x2 + "px, " + obj.y2 + '" filled="f" strokecolor="' + (obj.strokeColor ? obj.strokeColor : "#000") + '" strokeweight="' + (obj.strokeWidth ? (obj.strokeWidth) : 1) + 'px" />');

			return this;
		}
	
	});
	
	planet.svg.extend({
	
		line : function( obj ){
			// A line is just a stroked path, making this a shortcut to Path.
			this.path({
				startx : obj.x1,
				starty : obj.y1,
				points : [
					{x : obj.x2, y : obj.y2}
					
				],
				close : false,
				strokeColor : (obj.strokeColor ? obj.strokeColor : "#000")
			});	
		
			return this;
		}
	});
	
	planet.canvas.extend({
	
		line : function( obj ){
			// Basically a line is very short stroked path, making this is a shortcut to Path.
			this.path({
				startx : obj.x1,
				starty : obj.y1,
				points : [
					{x : obj.x2, y : obj.y2}
					
				],
				close : false,
				strokeColor : (obj.strokeColor ? obj.strokeColor : "#000")
			});
		
			return this;
		}
		
	});