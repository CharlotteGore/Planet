/* box.js */

planet.vml.extend({

    box: function (obj) {

        var path = "", px = [], py = [], p, vEl, width = this.container.width(), height = this.container.height(), i, il;

        vEl = document.createElement('v:shape');

        $(vEl).attr('style', 'position: absolute; top: 0; left: 0; width:' + width + 'px; height: ' + height + 'px;');
        $(vEl).attr('coordorigin', '0 0');
        $(vEl).attr('coordsize', width + ' ' + height);
        //style = 'style="position: absolute; top: 0; left: 0; width:' + width + 'px; height: ' + height + 'px;"';

        px[0] = obj.position.x;
        px[3] = px[0] + obj.size.w;

        py[0] = obj.position.y;
        py[3] = py[0] + obj.size.h;

        if (obj.cornerRadius) {

            px[1] = px[0] + obj.cornerRadius;
            px[2] = px[3] - obj.cornerRadius;
            py[1] = py[0] + obj.cornerRadius;
            py[2] = py[3] - obj.cornerRadius;

            path += "m " + px[1] + " " + py[0] + " ";
            path += "l " + px[2] + " " + py[0] + " ";
            path += "qx " + px[3] + " " + py[1] + " ";
            path += "l " + px[3] + " " + py[2] + " ";
            path += "qy " + px[2] + " " + py[3] + " ";
            path += "l " + px[1] + " " + py[3] + " ";
            path += "qx " + px[0] + " " + py[2] + " ";
            path += "l " + px[0] + " " + py[1] + " ";
            path += "qy " + px[1] + " " + py[0] + " ";

        } else {

            path += "m " + px[0] + " " + py[0] + " ";
            path += "l " + px[3] + " " + py[0] + " ";
            path += "l " + px[3] + " " + py[3] + " ";
            path += "l " + px[0] + " " + py[3] + " ";
            path += "l " + px[0] + " " + py[0] + " ";

        }

        $(vEl).attr('strokecolor', this.pen.strokeColor);
        $(vEl).attr('strokeweight', this.pen.strokeWidth);


        if (close === true || this.pen.fillColor !== "none") {

            path += ' x e';

            if (this.pen.fillType === "fill") {

                $(vEl).attr('fillcolor', this.pen.fillColor);

            } else if (this.pen.fillType === "gradient") {

                $(vEl).attr('fillcolor', this.pen.gradientColor1);

                var fill = document.createElement('v:fill');
                $(fill).attr('type', 'gradient');
                $(fill).attr('color2', this.pen.gradientColor2);
                $(fill).attr('method', 'linear sigma');
                $(fill).attr('angle', '180');

                $(vEl).append(fill);

            }

        } else {

        }

        $(vEl).attr('path', path);

        this.container.append(vEl);


        return this;

    }

});

	planet.svg.extend({

	    box: function (obj) {

	        var d = "", px = [], py = [], p;

	        px[0] = obj.position.x;
	        px[3] = px[0] + obj.size.w;

	        py[0] = obj.position.y;
	        py[3] = py[0] + obj.size.h;

	        if (obj.cornerRadius) {

	            px[1] = px[0] + obj.cornerRadius;
	            px[2] = px[3] - obj.cornerRadius;
	            py[1] = py[0] + obj.cornerRadius;
	            py[2] = py[3] - obj.cornerRadius;
	            r = obj.cornerRadius + "," + obj.cornerRadius;

	            d += "M " + px[1] + " " + py[0] + " ";
	            d += "L " + px[2] + " " + py[0] + " ";
	            d += "A " + r + " 90 0,1 " + px[3] + "," + py[1];
	            d += "L " + px[3] + " " + py[2];
	            d += "A " + r + " 90 0,1 " + px[2] + "," + py[3];
	            d += "L " + px[1] + " " + py[3];
	            d += "A " + r + " 90 0,1 " + px[0] + "," + py[2];
	            d += "L " + px[0] + " " + py[1];
	            d += "A " + r + " 90 0,1 " + px[1] + "," + py[0];

	        } else {

	            d += "M " + px[0] + " " + py[0] + " ";
	            d += "L " + px[3] + " " + py[0] + " ";
	            d += "L " + px[3] + " " + py[3] + " ";
	            d += "L " + px[0] + " " + py[3] + " ";
	            d += "L " + px[0] + " " + py[0] + " ";


	        }

	        var shape = document.createElementNS(this.svgNS, "path");

	        if (this.pen.fillType !== "none" || obj.close === true) {
	            d += "Z";

	            if (this.pen.fillType === "fill") {

	                shape.setAttributeNS(null, "fill", this.pen.fillColor);

	            } else if (this.pen.fillType === "gradient") {
	                var gradId = this.createGradient(this.pen.gradientColor1, this.pen.gradientColor2);
	                shape.setAttributeNS(null, "fill", "url(#" + gradId + ")");
	            }

	        } else {

	            shape.setAttributeNS(null, "fill", "none");

	        }
	        shape.setAttributeNS(null, "stroke", this.pen.strokeColor);
	        shape.setAttributeNS(null, "stroke-width", (this.pen.strokeWidth + 1) + "px");


	        shape.setAttributeNS(null, "d", d);

	        this.container.append(shape);

	        return this;
	    }
	});
	
	planet.canvas.extend({
	
		box : function( obj ){

			var px = [], py = [], q = (Math.PI / 2);

			this.container.beginPath();

			px[0] = obj.position.x;
	        px[3] = px[0] + obj.size.w;
	
	        py[0] = obj.position.y;
	        py[3] = py[0] + obj.size.h;
	
	        if (obj.cornerRadius) {
	
	            px[1] = px[0] + obj.cornerRadius;
	            px[2] = px[3] - obj.cornerRadius;
	            py[1] = py[0] + obj.cornerRadius;
	            py[2] = py[3] - obj.cornerRadius;

				this.container.moveTo(px[1], py[0]);
	
	            this.container.arc(px[2], py[1], obj.cornerRadius, q * 3, q * 4);
	            this.container.arc(px[2], py[2], obj.cornerRadius, q * 4, q * 5);
	            this.container.arc(px[1], py[2], obj.cornerRadius, q * 5, q * 6);
	            this.container.arc(px[1], py[1], obj.cornerRadius, q * 6, q * 7);

	
	        } else {
	        
	        	this.container.moveTo(px[1], py[0]);
	        	this.container.lineTo(px[3], py[0]);
	        	this.container.lineTo(px[3], py[3]);
	        	this.container.lineTo(px[0], py[3]);
	        	this.container.lineTo(px[0], py[0]);
	
	        }
			
			if(this.pen.fillType === "fill"){
				this.container.fillStyle = this.pen.fillColor;
				this.container.fill();
			}
			if(this.pen.fillType === "gradient"){
		
				var grad = this.container.createLinearGradient(0, obj.position.y, 0, obj.position.y + obj.size.h);
				grad.addColorStop(0, this.pen.gradientColor1);
				grad.addColorStop(1, this.pen.gradientColor2);
				
				this.container.fillStyle = grad;
				this.container.fill();
				
			}
			
			if(this.pen.strokeType !== "none"){
				this.container.lineWidth = (this.pen.strokeWidth + 1);
				this.container.strokeStyle = this.pen.strokeColor;
				
				this.container.stroke();
			}
			
			this.container.closePath();
			
			return this;


		}
		
	});