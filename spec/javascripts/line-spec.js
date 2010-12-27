describe("Planet#Line", function(){

	var line;

	beforeEach(function(){
		$('body').append('<div id="drawing-surface" style="width:500px;height:500px"></div>');
		
		line = {
			x1 : 0,
			y1 : 0,
			x2 : 100,
			y2 : 100,
			color : "#000",
			strokeWidth : 2
		};
	});
	
	afterEach(function(){
		$('#drawing-surface').remove();
	});
	
	if(planet.svgSupported){
		
		describe("Planet # Line # SVG", function(){
		
			it("draws a line as expected", function(){
			
				var surface = planet('#drawing-surface', "svg");
				surface.line(line);
				
				var contents = $($('#drawing-surface').html());
				
				// draw one line...
				expect(contents.find('line').length).toEqual(1);

				// Every browser implementation is different, impossible to reliably test the values of x1, y1 etc. Testing has to be done with Eyes.
			
			});
			
		
		});
	
	}
	
	if(planet.canvasSupported){
		
		describe("Planet # Line # Canvas", function(){
		
			it("draws a line as expected", function(){
			
				var surface = planet('#drawing-surface', "canvas");
				surface.line(line);
				
				var contents = surface.container.getImageData(0,0,500,500);
				var pixelData = contents.data;
				
				// 4 * x * y
				
				expect(pixelData[4 * 0 * 0 + 0]).toEqual(0);
				expect(pixelData[4 * 25 * 25 + 0]).toEqual(0);
				expect(pixelData[4 * 100 * 100 + 0]).toEqual(0);
				
				
				// draw one line...
			});
			
		
		});
	
	}
	
	if(planet.vmlSupported){
		
		describe("Planet # Line # VML", function(){
		
			it("draws a line as expected", function(){
			
				var surface = planet('#drawing-surface', "vml");
				surface.line(line);
				
				var contents = $('#drawing-surface').html();
				
				expect(contents).toEqual('<v:line from = "0,0" to = "75pt,75pt" filled = "f" strokecolor = "black" strokeweight = "1.5pt"></v:line>');

			});
			
		
		});
	
	}


	
});