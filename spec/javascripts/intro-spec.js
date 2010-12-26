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
		$('body').append('<div id="drawing-surface"></div>');
	});
	
	afterEach(function(){
		$('#map-test').remove();
	});
	
	it("initialises properly", function(){
		var surface = planet('#drawing-surface');
		expect(surface).toBeDefined();
		expect(surface.path).toBeDefined();
		expect(typeof surface).toEqual('object');
	});
	
	it("can initialise VML mode (forced)", function(){
		
		var surface = planet('#drawing-surface', "vml");
		
		expect(surface).toBeDefined();
		expect(typeof surface).toEqual('object');
		expect(surface.path).toBeDefined();
		expect(surface.mode).toEqual("vml");
	
	});
	
	it("can initialise SVG mode (forced)", function(){
		
		var surface = planet('#drawing-surface', "svg");
		
		expect(surface).toBeDefined();
		expect(typeof surface).toEqual('object');
		expect(surface.path).toBeDefined();
		expect(surface.mode).toEqual("svg");
	
	});
	
	it("can initialise Canvas mode (forced)", function(){
		
		var surface = planet('#drawing-surface', "canvas");
		
		expect(surface).toBeDefined();
		expect(typeof surface).toEqual('object');
		expect(surface.path).toBeDefined();
		expect(surface.mode).toEqual("canvas");
	
	});
});