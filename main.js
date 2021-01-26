nosa=[];

function submit()
{
    var name_1=document.getElementById("nots_1").Value;
    var name_2=document.getElementById("nots_2").Value;
    var name_3=document.getElementById("nots_3").Value;
    var name_4=document.getElementById("nots_4").Value;

    nosa.push(name_1);
    nosa.push(name_2);
    nosa.push(name_3);
    nosa.push(name_4);


console.log(nosa);


document.getElementById("display_name").innerHTML=nosa;
document.getElementById("sb").style.display="none";
document.getElementById("sortb").style.display="inline-block";



}

function sorting()
{
    nosa.sort();
    console.log(nosa);
    document.getElementById("display_name").innerHTML=nosa;
}


