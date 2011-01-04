
	// Path drawing functions
	
	planet.vml.extend({
	
		curve : function( obj ){
		
			// Do nothing.

			
			return this;
		
		
		}
	
	});
	
	planet.svg.extend({
	
		curve : function( obj ){
		
			/*
			var d = "M "+obj.startx+" "+obj.starty+" ", i, il;
			
			for(i = 0, il = obj.points.length; i < il ; i++){
				d += "L"+obj.points[i].x+" "+obj.points[i].y;
			}
			
			*/
			
			// top right: 90 0,1
			// top left: -90 0,1
			
			// 
			
			/*
			
			var d = "M 25 0 ";
			
			d += "L 75 0 ";
			d += "A 25,25 90 0,1 100,25";
			d += "L 100 75";
			d += "A 25,25 90 0,1 75,100";
			d += "L 25 100";
			d += "A 25,25 90 0,1 0,75";
			d += "L 0 25";
			d += "A 25,25 90 0,1 25,0";

			var shape = document.createElementNS(this.svgNS, "path");
			
			
			if(obj.close || obj.fillColor){
				d += "Z";
			}
			
			if(obj.fillColor){
			
				shape.setAttributeNS(null, "fill", obj.fillColor);
			
			}else{
			
				shape.setAttributeNS(null, "fill", "none");
			
			}
			
			if(obj.strokeColor){
				shape.setAttributeNS(null, "stroke", (obj.strokeColor ? obj.strokeColor : "#000"));
				shape.setAttributeNS(null, "stroke-width", (obj.strokeWidth ? obj.strokeWidth : 1) + "px");	
			}else{
				shape.setAttributeNS(null, "stroke", "none");
			}
			
			
			shape.setAttributeNS(null, "d", d);
			
			this.container.append(shape);	
			
			*/
			
			return this;
		
		}
	});
	
	planet.canvas.extend({
	
		curve : function( obj ){
		
			// Do Nothing
			
			return this;
		
		}
		
	});
	
