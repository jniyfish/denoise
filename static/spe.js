async function speFunction(){
    var tmp = $('#originalImg').get(0);
    var tensor = tf.fromPixels(tmp);
    tensor.print();
    const buffer = tf.buffer(tensor.shape, tensor.dtype, tensor.dataSync());
    var u,v,rand,x,y,z;
    for (let i = 0; i < tmp.height * tmp.width; i++) {
    	u = Math.random();
    	v = Math.random();
    	rand = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    	rand = rand * 0.1 ;
    	y = buffer.get(Math.floor(i / tmp.width), i % tmp.width, 0)/255;
    	z = (y+y*rand)*255;
    	if(z > 255)	z = 255;
    	if(z < 0 ) z = 0;
    	buffer.set(z, Math.floor(i / tmp.width), i % tmp.width, 0);

    	u = Math.random();
    	v = Math.random();
    	rand = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    	rand = rand * 0.1 ;
    //	x = (Math.exp(-1*(Math.pow(rand,2)/0.02)))*(1/(Math.sqrt(2*Math.PI)*0.1));
    	y = (buffer.get(Math.floor(i / tmp.width), i % tmp.width, 1))/255;
    	z = 255*(y+y*rand);
    	if(z > 255)	z = 255;
    	if(z < 0 ) z = 0;
    	buffer.set(z, Math.floor(i / tmp.width), i % tmp.width, 1);

    	u = Math.random();
    	v = Math.random();
    	rand = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    	rand = rand * 0.1 ;
    	y = buffer.get(Math.floor(i / tmp.width), i % tmp.width, 2)/255;
    	z = 255*(y+y*rand);
    	if(z > 255)	z = 255;
    	if(z < 0 ) z = 0;
    	buffer.set(z, Math.floor(i / tmp.width), i % tmp.width, 2);
    }
    const out = buffer.toTensor();
    out.print();


	await tf.toPixels(out, document.getElementById("snpImg"));
	await tf.toPixels(out, document.getElementById("speImg"));
	await tf.toPixels(out,document.getElementById("spe_2"));

    var canvas = document.getElementById("snpImg");
	var img    = canvas.toDataURL("image/jpeg",0.7);
	var addnoise = document.getElementById("addnoise");

	await addnoise.setAttribute("src",img);

	$("#snpImg").hide();

}