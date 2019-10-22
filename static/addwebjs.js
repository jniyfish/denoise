async function snpFunction() {	
	var tmp = $('#originalImg').get(0);
	var tensor = tf.fromPixels(tmp);
	tensor.print();
	const buffer = tf.buffer(tensor.shape, tensor.dtype, tensor.dataSync());
	
	var n = 0;
	var p = [0.28, 0.72];
	var q = [0.5, 0.5];
	var ttff = [1, 0];
	var f_list = [];
	var s_list = [];
	var flipped_list = [];

	for (var i = 0; i < 2; i++) {
        var mulp = p[i] * 100;
        var mulq = q[i] * 100;
        for (var j = 0; j < mulp; j++) {
            f_list.push(ttff[i]);
        }
        for (var j = 0; j < mulq; j++) {
            s_list.push(ttff[i]);
        }
    }    
    for (let i=0; i<tmp.height*tmp.width*3; i++) {
    	var rand = Math.floor(Math.random() * 100) ;
		flipped_list.push(f_list[rand]);
		if(f_list[rand]==1) n++;
	}
	console.log(n); 
	var ns;
	var np;
	ns = parseInt(n/2);
	np = n - ns;
	console.log(ns);
	console.log(np);

	for (let i=0; i<tmp.height*tmp.width*3; i++) {
		if(ns!=0 && np!=0)	
			var rand = Math.floor(Math.random() * 100) ;
		else if(ns==0) 
			s_list[rand] = 0;
		else 
			s_list[rand] = 1;

    	if(s_list[rand] == 1 && flipped_list[i] == 1) {
    		if(i%3==0)
				buffer.set(255,parseInt(i/tmp.width),i%tmp.width,0);
			else if(i%3==1)
				buffer.set(255,parseInt(i/tmp.width),i%tmp.width,1);
			else
				buffer.set(255,parseInt(i/tmp.width),i%tmp.width,2);
			ns--;
    	}
    	else if(s_list[rand] == 0 && flipped_list[i] == 1){
    		if(i%3==0)	
				buffer.set(0,parseInt(i/tmp.width),i%tmp.width,0);
			else if(i%3==1)
				buffer.set(0,parseInt(i/tmp.width),i%tmp.width,1);
			else
    			buffer.set(0,parseInt(i/tmp.width),i%tmp.width,2);
			np--;
		}
	  }
	
  	const out = buffer.toTensor();
	out.print();
	await tf.toPixels(out,document.getElementById("snpImg"));
	await tf.toPixels(out,document.getElementById("realsnpImg"));
	await tf.toPixels(out,document.getElementById("snp_2"));

	var canvas = document.getElementById("snpImg");
	var img    = canvas.toDataURL("image/jpeg",0.7);
	var addnoise = document.getElementById("addnoise");
	await addnoise.setAttribute("src",img);



}


