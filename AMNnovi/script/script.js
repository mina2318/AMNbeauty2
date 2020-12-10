function scaleUp(obj,size)
{
    obj.style.fontSize=size;
}

function handleOnFocus(x)
{
    x.style.color=":rgb(94, 44, 29)";
    x.style.backgroundColor="rosybrown";
}

function prozor1()
{
    var input_text=document.getElementById("username1");
    if(input_text.value=""){
        window.alert("Unesite korisnicko ime");
        return false;
    }
    window.alert("Uspesno ste se registrovali!");
    return true;
}

function prozor2()
{
    var input_text=document.getElementById("username2");
    if(input_text.value=""){
        window.alert("Unesite korisnicko ime");
        return false;
    }
    window.alert("Uspesno ste se prijavili!");
    return true;
}

$(document).ready(function(){
    $('.thing').slick({
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:1500
    });
});