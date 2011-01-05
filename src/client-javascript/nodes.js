/* 

	THIS IS JUNK CODE 
	
*/

var nodes = function( obj ){

	this.x = obj.x;
	this.y = obj.y;
	this.hw = obj.w / 2;
	this.hh = obj.h / 2;
	
	this.connectors = {
		up : {
			x : ( this.x + this.hw ),
			y : ( this.y )		
		},
		down : {
			x : ( this.x + this.hw ),
			y : ( this.y + this.hh + this.hh )
		},
		left : {
			x : ( this.x ),
			y : ( this.y + this.hh )
		},
		right : {
			direction : "e",
			x : (this.x + this.hw + this.hw),
			y : ( this.y + this.hh )
		}

	};
	
	return this;

};

/*



<geometry width="200" height="59" left="120" top="0"/><link rel="connection" uri="#does-the-person-have-concerns-or-symptoms"/>

<geometry width="200" height="159" left="120" top="150"/><link rel="connection" uri="#referral-for-suspected-breast-cancer"/><link rel="connection" uri="#familial-breast-cancer"/>

 <geometry width="200" height="60" left="360" top="330"/><link rel="connection" uri="#early-and-locally-advanced-breast-cancer"/><link rel="connection" uri="#advanced-breast-cancer"/>

<geometry width="200" height="59" left="0" top="330"/>

<geometry width="200" height="59" left="240" top="450"/>

<geometry width="200" height="59" left="480" top="450"/>
            </node>
    </nodes>
</map>

*/

var data = [
	{x : 120, y : 0, w : 200, h : 59},
	{x : 120, y : 150, w : 200, h : 159},
	{x : 360, y : 330, w : 200, h : 60},
	{x : 0, y : 330, w : 200, h : 59},
	{x : 240, y : 450, w : 200, h : 59},
	{x : 480, y : 450, w : 200, h : 59}
];