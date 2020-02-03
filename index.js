const colorScale = d3.scaleOrdinal(d3.schemeCategory10)

function drawCircles(){
	console.log("Hi I'm here")
	let r = Math.random() * 10.0;
	console.log("colorScale is ", colorScale);
	console.log("colorScale (1) is ", colorScale(1));
	console.log("colorScale (2) is ", colorScale(2));
	console.log("colorScale (3) is ", colorScale(3));
	console.log("colorScale (4) is ", colorScale(4));
	console.log("colorScale (5) is ", colorScale(5));
	colorScale(Math.random() * 10)
	d3.select('svg')
		.append('circle')
		.attr('cx', Math.random() * 500)
		.attr('cy', Math.random() * 500)
		.attr('r', "" + Math.max(r, 3))
		.attr('fill', 'black');
}
d3.select('#shapeAdder').on('click', drawCircles)