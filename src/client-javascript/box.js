/* box.js */

	planet.vml.extend({
	
		box : function( obj ){
			return this;
		}
	
	});
	
	planet.svg.extend({
	
		box : function( obj ){
						var d = "", px = [], py = [], p;
			
			px[0] = obj.position.x;
			px[3] = px[0] + obj.size.w;
				
			py[0] = obj.position.y;
			py[3] = py[0] + obj.size.h;
			
			if(obj.cornerRadius){

				px[1] = px[0] + obj.cornerRadius;
				px[2] = px[3] - obj.cornerRadius;
				py[1] = py[0] + obj.cornerRadius;
				py[2] = py[3] - obj.cornerRadius;
				r = obj.cornerRadius + "," + obj.cornerRadius;
				
				d += "M " + px[1] + " " + py[0] + " ";
				d += "L " + px[2] +" " + py[0] + " ";
				d += "A " + r + " 90 0,1 " + px[3] + "," + py[1];
				d += "L " + px[3] + " " + py[2];
				d += "A " + r + " 90 0,1 " + px[2] + "," + py[3];
				d += "L " + px[1] + " " + py[3];
				d += "A " + r + " 90 0,1 " + px[0] + "," +py[2];
				d += "L " + px[0] + " " + py[1];
				d += "A " + r + " 90 0,1 " + px[1] + "," + py[0];
			
			}else{
				
				d += "M " + px[0] + " " + py[0] + " ";
				d += "L " + px[3] +" " + py[0] + " ";
				d += "L " + px[3] +" " + py[3] + " ";
				d += "L " + px[0] +" " + py[3] + " ";
				d += "L " + px[0] +" " + py[0] + " ";
				
				
			}

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
			
			return this; 
		}
	});
	
	planet.canvas.extend({
	
		box : function( obj ){


			return this;


		}
		
	});