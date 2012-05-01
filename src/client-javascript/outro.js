/* outro.js */

	planet.vml.extend({
		
		clear : function(){
			
			this.container.empty();

		}

	});

	planet.svg.extend({
		
		clear : function(){
			
			this.container.empty();

		}
		
	});

	planet.canvas.extend({
		
		clear : function(){
			this.container.clearRect(0, 0, this.width, this.height);
			//var w = $(this.canvas).attr('width');
			//$(this.canvas).attr('width', 0).attr('width', w).css('background', 'none');

		}
		
	});

	window.planet = planet;

})(window);


