function popBox(){
    var popBox = document.getElementById('popBox');
    var popLayer = document.getElementById('popLayer');

    popLayer.style.width = document.body.scrollWidth + "px";
    popLayer.style.height = document.body.scrollHeight + "px";

    popLayer.style.display = "block";
    popBox.style.display = "block";
}//end func popBox()

function closeBox(){
    var popBox = document.getElementById('popBox');
    var popLayer = document.getElementById('popLayer');

    popLayer.style.display = "none";
    popBox.style.display = "none";

}

$("#image-selector").change(function() {
    readURL(this);
});

$("#pre-selector").change(function() {
    readPreURL(this);
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $("#originalImg").attr('src', e.target.result);
            $("#snp_ori").attr('src', e.target.result);
            $("#spe_ori").attr('src', e.target.result);
            $("#gau_ori").attr('src', e.target.result);
            $("#snp_1").attr('src', e.target.result);
            $("#spe_1").attr('src', e.target.result);
            $("#gau_1").attr('src', e.target.result);
            $('#snpImg').show();
            $('#originalImg').show();
           
            image = e.target.result;
		}
        reader.readAsDataURL(input.files[0]);
    }
}
function readPreURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $("#pre_ori").attr('src', e.target.result);
            $("#originalImg").attr('src', e.target.result);
            image = e.target.result;
		}
        reader.readAsDataURL(input.files[0]);
    }
}
function toggle(mode)
{
    if(mode==1)
    {
        $(".panel1").slideToggle("slow");
        $(".xs1").toggle();
        $(".xs2").toggle();
    }
    if(mode==2)
    {
        $(".panel2").slideToggle("slow");
        $(".xs1").toggle();
        $(".xs2").toggle();
    }
    else if(mode==3)
    {
        $(".panel3").slideToggle("slow");
        $(".xs1").toggle();
        $(".xs2").toggle();   
    }
}

$('#load1').click(function()
{
    $('#why').show();
}
);
$('#load2').click(function()
{
    $('#why').show();
}
);
$('#load3').click(function()
{
    $('#why').show();
}
);
$('#load4').click(function()
{
    $('#why').show();
}
);
