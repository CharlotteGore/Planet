describe("Pathways#Basic dependencies", function() {
  it("checks that jQuery exists", function() {
    expect(typeof jQuery).toEqual("function");
  });
  it("checks that Planet exists", function() {
    expect(typeof planet).toEqual("function");
  });
  
});

describe("Planet#Intro", function(){

	beforeEach(function(){
		$('body').append('<div id="drawing-surface" style="width:500px;height:500px"></div>');
	});
	
	afterEach(function(){
		$('#drawing-surface').remove();
	});
	
	it("initialises properly", function(){
		var surface = planet('#drawing-surface');
		expect(surface).toBeDefined();
		expect(surface.path).toBeDefined();
		expect(typeof surface).toEqual('object');
		
		if(planet.canvasSupported && planet.svgSupported){
			expect(surface.mode).toEqual('canvas');
		}
		
		if(planet.vmlSupported){
			expect(surface.mode).toEqual('vml');
		}
		
		if(!planet.canvasSupported && !planet.vmlSupported && planet.svgSupported){
			expect(surface.mode).toEqual('svg');
		}
	});
	
	it("holds variables for which modes are supported", function(){
	
		expect(planet.vmlSupported).toBeDefined();
		expect(planet.svgSupported).toBeDefined();
		expect(planet.canvasSupported).toBeDefined();
	
	});
	
	if(planet.svgSupported){
	
		it("can initialise SVG mode (forced & supported)", function(){
		
			var surface = planet('#drawing-surface', "svg");
			
			expect(surface).toBeDefined();
			expect(typeof surface).toEqual('object');
			expect(surface.path).toBeDefined();
			expect(surface.mode).toEqual("svg");
	
		});

	}
	
	if(planet.vmlSupported){
	
		it("can initialise VML mode (forced & supported)", function(){
		
			var surface = planet('#drawing-surface', "vml");
			
			expect(surface).toBeDefined();
			expect(typeof surface).toEqual('object');
			expect(surface.path).toBeDefined();
			expect(surface.mode).toEqual("vml");
		
		
		});
	
	}
	
	if(planet.canvasSupported){
	
		it("can initialise Canvas mode (forced & supported)", function(){
		
			var surface = planet('#drawing-surface', "canvas");
			
			expect(surface).toBeDefined();
			expect(typeof surface).toEqual('object');
			expect(surface.path).toBeDefined();
			expect(surface.mode).toEqual("canvas");
		
		});
	
	}
	
	if(planet.canvasSupported && !planet.vmlSupported){
	
		it("VML not supported, will initialise Canvas instead (when supported)", function(){
		
			var surface = planet('#drawing-surface', "vml");
			
			expect(surface).toBeDefined();
			expect(typeof surface).toEqual('object');
			expect(surface.path).toBeDefined();
			expect(surface.mode).toEqual("canvas");
		
		});
	
	}
	
	if(planet.vmlSupported && !planet.canvasSupported && !planet.svgSupported){
	
		it("Canvas & SVG not supported, will initialise VML even when 'forced' into Canvas mode", function(){
		
			var surface = planet('#drawing-surface', "canvas");
			
			expect(surface).toBeDefined();
			expect(typeof surface).toEqual('object');
			expect(surface.path).toBeDefined();
			expect(surface.mode).toEqual("vml");
		
		});
	
	}
	
	
	
});