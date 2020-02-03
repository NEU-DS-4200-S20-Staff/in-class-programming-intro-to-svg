function drawCircles(){
	console.log("Hi I'm here")
	let r = Math.random() * 10.0;
	d3.select('svg')
		.append('circle')
		.attr('cx', Math.random() * 500)
		.attr('cy', Math.random() * 500)
		.attr('r', "" + Math.max(r, 3))
		.attr('fill', 'black');
}
d3.select('#shapeAdder').on('click', drawCircles)