$(document).ready(function () {
  let currentFloor = 2
  let floorPath=$(".home-image path")
  let counterUp=$(".counter-up")
  let counterDown=$(".counter-down")
  //console.log("ready")
  floorPath.on("mouseover",function(){
       floorPath.removeClass("current-floor")
    currentFloor=$(this).attr("data-floor")
    $(".counter").text(currentFloor)
    //console.log()
  })

  counterUp.on("click",function(){
    //console.log("click button up")
    if(currentFloor<18){
      currentFloor++;
    usCurrentFloor= currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrupping: false})
    $(".counter").text(usCurrentFloor)
    floorPath.removeClass("current-floor")
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
    }    
  })

   counterDown.on("click",function(){
    //console.log("click button up")
    if(currentFloor>2){
      currentFloor--;
    usCurrentFloor= currentFloor.toLocaleString('en-US',{minimumIntegerDigits:2,useGrupping: false})
    $(".counter").text(usCurrentFloor)
    floorPath.removeClass("current-floor")
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor")
    }    
  })
});