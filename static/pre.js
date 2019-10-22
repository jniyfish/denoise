async function preFunction() {
    var tmp = $('#originalImg').get(0);

    var tensor = tf.fromPixels(tmp);

    await tf.toPixels(tensor, document.getElementById("snpImg"));

    var canvas = document.getElementById("snpImg");
    var img = canvas.toDataURL("image/jpeg", 0.7);
    var addnoise = document.getElementById("addnoise");

    await addnoise.setAttribute("src", img);

}

async function demoPredict() {

    let img = await cv.imread('histo');

    $("#preCav").show();
    let image = await $('#histo').get(0);

    let tensor = await tf.fromPixels(image, 1)
        .toFloat()
        .expandDims(0);

    const b = tf.scalar(255);


    tensor = tensor.div(b);

    let predictions = await model.predict(tensor).data();

    pre = predictions;
    let top = Array.from(predictions)
        .map(function (p, i) {
            return {
                probability: p,
                className: IMAGENET_CLASSES[i]
            };
        }).sort(function (a, b) {
            return b.probability - a.probability;
        }).slice(0, 5);
    classname = top[0].className;
    top.forEach(function (p) {
        $('#prediction').append(`<li>${p.className}: ${p.probability.toFixed(7)}</li>`);
    });

    await demoDenoise();
}

async function demoDenoise() {
    if (classname == "snp") {
        let img = await cv.imread('snpImg');
        let deno = new cv.Mat();
        cv.medianBlur(img, deno, 3);
        cv.imshow('preCav', deno);
    } else if (classname == "gaussian") {
        let img = cv.imread('snpImg');
        let deno = new cv.Mat();
        cv.cvtColor(img, img, cv.COLOR_RGBA2RGB, 0);
        cv.bilateralFilter(img, deno, 3, 95, 95, cv.BORDER_DEFAULT);
        cv.imshow('preCav', deno);
    } else if (classname == "speckle") {
        let img = cv.imread('snpImg');
        let deno = new cv.Mat();
        cv.cvtColor(img, img, cv.COLOR_RGBA2RGB, 0);
        cv.bilateralFilter(img, deno, 3, 78, 78, cv.BORDER_DEFAULT);
        cv.imshow('preCav', deno);
    }
    $('#snpImg').hide();
    $('#originalImg').hide();
}