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
function moveUp(){
 $('div.row').each(function(index, row){
    $(row).find('.box').each(function(index, box){
        if ($(box).text().length > 0){
            moveBoxUp($(box))
        }
    })
})
}
function moveRight(){
 $('div.row').each(function(index, row){
    $(row).find('.box').each(function(index, box){
        if ($(box).text().length > 0){
            moveBoxRight($(box))
        }
    })
})
}
function moveDown(){
 $('div.row').each(function(index, row){
    $(row).find('.box').each(function(index, box){
        if ($(box).text().length > 0){
            moveBoxDown($(box))
        }
    })
})
}

$(window).keydown(function(event){
  if (event.which == 37){
    moveLeft()
  }
  else if(event.which == 38){
    moveUp()
  }
  else if(event.which == 39){
    moveRight()
  }
  else if(event.which == 40){
    moveDown()
  }
})

function moveBoxLeft(box){
    //key down left = 37 up = 38 right = 39 down = 40
    //if box is beginning of row return nothing
    //if box to left has content return nothing
    //else copy content of box to left handside
    //call moveBoxLeft on left hadside box
    if (box.parent().children[0]){
        return
    }
    else if (box.parent().children.prev){

    }
}

function moveBoxUp(box){
    if (box.parent().children[0]){
        return
    }
    else if (box.parent().children.prev){
    }
}

function moveBoxRight(box){
    if (box.parent().children[0]){
        return
    }
    else if (box.parent().children.prev){
    }
}

function moveBoxDown(box){
    if (box.parent().children[0]){
        return
    }
    else if (box.parent().children.prev){
    }
}
