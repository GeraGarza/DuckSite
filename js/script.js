var currentEvent = "rotation-start";


t = setTimeout(approach, 2000);

t = setInterval(walkacross, 10000);

var counter = 1;
var toggle = true;

function approach(){
    document.getElementById("thing").setAttribute("animation-mixer", "clip:idle");
  
}

async function walkacross() {

  if (toggle) {

    // property: position; from:-2 -2 -6; to: 2 -2 -6 ; dur: 2000; easing: linear; dir: alternate
    document.getElementById("thing").setAttribute("rotation", "0 270 0");
    document.getElementById("thing").setAttribute("animation-mixer", "clip:idle");
    document.getElementById("thing").setAttribute("animation", "property: position; from:3 -2 -6; to: 3 -2 -6 ; dur: 4000; easing: linear;  ");

    await setTimeout(function () {
      document.getElementById("thing").setAttribute("animation-mixer", "clip:walk");
      document.getElementById("thing").setAttribute("animation", "property: position; from:3 -2 -6; to: -3 -2 -6 ; dur: 4000; easing: linear;  ");
    }, 6000);

    toggle = false;
  } else {

    document.getElementById("thing").setAttribute("rotation", "0 90 0");
    document.getElementById("thing").setAttribute("animation-mixer", "clip:idle");
    document.getElementById("thing").setAttribute("animation", "property: position; from:-3 -2 -6; to: -3 -2 -6 ; dur: 4000; easing: linear;  ");

    await setTimeout(function () {
      document.getElementById("thing").setAttribute("animation-mixer", "clip:walk");
      document.getElementById("thing").setAttribute("animation", "property: position; from:-3 -2 -6; to: 3 -2 -6 ; dur: 4000; easing: linear;  ");
    }, 6000);

    toggle = true;
  }


};

var param1 = getParamValue('param1');

function getParamValue(paramName)
{
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++) 
    {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName) 
          var fov = parseInt(pArr[1], 10);
          if(isNaN(fov)){
            fov = 70;
          }
          console.log(fov)
          document.getElementById("camera").setAttribute("camera", "fov:"+ fov);
    }


}




