var getCells = function(){
    var cellsArray = []

    $(".container").children().each(function(i){
      $('#'+i).children().each(function(c){
        cellsArray.push(c)
        console.log($('#'+c))
      })
    })
  }();

var boxes = []

$('div.box').each(function(box){
boxes.push($(box).id)
});


$("#box00").append("hello");


