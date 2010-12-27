/* line.js */

	planet.vml.extend({
	
		line : function( obj ){

			this.container.append('<v:line from="' + obj.x1 + "px, " + obj.y1 +'" to="' + obj.x2 + "px, " + obj.y2 + '" filled="f" strokecolor="' + (obj.color ? obj.color : "#000") + '" strokeweight="' + (obj.strokeWidth ? (obj.strokeWidth) : 1) + 'px" />');

			return this;
		}
	
	});
	
	planet.svg.extend({
	
		line : function( obj ){
		
			var shape = document.createElementNS(this.svgNS, "line");
			shape.setAttributeNS(null, "x1", obj.x1);
			shape.setAttributeNS(null, "y1", obj.y1);
			shape.setAttributeNS(null, "x2", obj.x2);
			shape.setAttributeNS(null, "y2", obj.y2);
			shape.setAttributeNS(null, "stroke", (obj.color ? obj.color : "#000"));
			shape.setAttributeNS(null, "stroke-width", (obj.strokeWidth ? obj.strokeWidth : 1) + "px");
			
			this.container.append(shape);	
		
			return this;
		}
	});
	
	planet.canvas.extend({
	
		line : function( obj ){
		
			
			this.container.moveTo(obj.x1, obj.y1);
			this.container.lineTo(obj.x2, obj.y2);
			
			this.container.lineWidth = (obj.strokeWidth ? obj.strokeWidth : 1);
			this.container.strokeStyle = (obj.color ? obj.color : "#000");
			this.container.stroke();
		
			return this;
		}
		
	});