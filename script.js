var currentEvent = "rotation-start";


t = setInterval(approach, 2000);

t = setInterval(walkacross, 10000);

var counter = 1;
var toggle = true;

var once = true;
function approach(){
  if(once){
    document.getElementById("thing").setAttribute("animation-mixer", "clip:idle");
    once=false;
  }
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



  const secondFunction = async () => {
    const result = await firstFunction()
    // do something else here after firstFunction completes
  }


  // animation-mixer="clip:walk/idle"

  // var i;
  // for (i = 0; i < 2; i++) {
  // console.log(currentEvent)
  // document.getElementById("thing").emit(currentEvent);

  //   switch (currentEvent) {
  //     case "rotation-start":
  //     case "rotation-resume":
  //       currentEvent = "rotation-pause";
  //       document.getElementById("thing").setAttribute("animation-mixer", "clip:idle"); 

  //       await new Promise((resolve) => setTimeout(resolve, 1000));


  //       break;
  //     case "rotation-pause":
  //       currentEvent = "rotation-resume";
  //       document.getElementById("thing").setAttribute("animation-mixer", "clip:walk"); 

  //       break;
  //   }




};


