//Makes array of div ids for box and assigns random location
function initialize(){
  var boxes = []
  $('div.box').each(function(index, box){
    boxes.push($(box).attr('id'));
});
  appendNumbers()
  appendNumbers()

  function random(){
    return(boxes[Math.floor(Math.random() * boxes.length)])
}
function appendNumbers(){
    $('#'+random()).append('<p>2</p>')
}
}

//move numbers
function moveLeft(){
 $('div.row').each(function(index, row){
    $(row).find('.box').each(function(index, box){
        if ($(box).text().length > 0){
            moveBoxLeft($(box))
        }
    })
})
}

function moveBoxLeft(box){
    //if box is beginning of row return nothing
    //if box to left has content return nothing
    //else copy content of box to left handside
    //call moveBoxLeft on left hadside box
    console.log(box)
    if (box.parent().children[0]){
        return
    }
    else if (box.parent().children.prev){}
}
