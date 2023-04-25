var _loadedImages=0,
    _tl = new TimelineMax({delay:0}),
    _isiText = document.getElementById('innerMostDiv'),
    _container = document.getElementById('outerMostDiv'),
    _isiControls = document.getElementById('isi-controls'),
    _scrollForMore = document.getElementById('scrollForMore'),
    _scrollerBeingDragged = false,
    _scroller,_scrollerbg,_scrollerline,_arrowUp,_arrowDown,
    _normalizedPosition,
    _topPosition,
    _contentPosition = 0,
    _percentY,
    autoScroll,//Interval
    autoScrollSpeed = 80,//
    scrollStep = 5,//Arrow click seek
    _textScrollHeight,
    intervalRewind;

function init2(){
    //***** Start - Scroll creation and events registering
    createScroll(false, true);
}

function actionsButton(){
    _btnExit.addEventListener('mouseover', function(){ TweenMax.to('#ctaBg',.5,{ backgroundColor:"#3f8242" })});
    _btnExit.addEventListener('mouseout', function(){ TweenMax.to('#ctaBg',.5,{ backgroundColor:'#6cc04a' })});
}

//***** Scrolling functions *****//
function createScroll(hasArrows,hasScroller){//***** Scrolling function - Creation(init)
    hasArrows = typeof hasArrows !== 'undefined' ? hasArrows: true;
    hasScroller = typeof hasScroller !== 'undefined' ? hasScroller: true;
    if (hasArrows){
        _arrowUp= document.createElement("div");
        _arrowUp.id = 'arrowUp';
        _arrowUp.className = 'retina';
        _isiControls.appendChild(_arrowUp);
    }

    if (hasScroller){
        console.log("has scroller");
        _scrollerline= document.createElement("div");
        _scrollerline.className = hasArrows? 'isiLineWithArrows': 'isiLineNoArrows';
        _isiControls.appendChild(_scrollerline);

        _scroller = document.createElement("div");
        _scrollerbg = document.createElement("div");
        _scroller.className = 'scroller';
        _scrollerbg.className = 'scrollerbg';
        _scrollerline.appendChild(_scroller);
        _scrollerline.appendChild(_scrollerbg);
    }

    if (hasArrows){
        console.log("has arrows");
        _arrowDown= document.createElement("div");
        _arrowDown.id = 'arrowDown';
        _arrowDown.className = 'retina';
        _isiControls.appendChild(_arrowDown);
    }

    //Listeners
    if (hasScroller){
        console.log("has scroller listener");
        _isiText.addEventListener('scroll',moveScroller);

        _scroller.addEventListener('mousedown',startDrag);
        _scrollerbg.addEventListener('mousedown',startDrag);
        _scrollerline.addEventListener('click',seekTo);

        window.addEventListener('mousemove',scrollBarScroll);
    }

    if (hasArrows){
        _arrowUp.addEventListener('mousedown',scrollUp);
        _arrowDown.addEventListener('mousedown',scrollDown);
        _arrowUp.addEventListener('mouseup',scrollStop);
        _arrowDown.addEventListener('mouseup',scrollStop);

    }

    _isiText.addEventListener('wheel',isiWheel);
    window.addEventListener('mouseup',stopDrag);

}

function seekTo(evt){//***** Scrolling function - Seeks to an specific point
    var normalPosition = (evt.pageY - _isiControls.offsetParent.offsetTop - _scrollerline.offsetTop) / _scrollerline.clientHeight;
    _textScrollHeight = _isiText.scrollHeight - _container.offsetHeight;//gets the text height(offset) to scroll
    _isiText.scrollTop = normalPosition * _textScrollHeight;
    clearIntervalFunct();
}

function startDrag(evt) {//***** Scrolling function - Starts dragging when holds scroller button
    _normalizedPosition = evt.pageY - _scrollerline.scrollTop;
    _contentPosition = _isiText.scrollTop;
    _scrollerBeingDragged = true;
    clearIntervalFunct();
}

function stopDrag(evt) {//***** Scrolling function - Stops dragging when releases scroller button
    if (typeof buttonPress != 'undefined' && buttonPress)
        clearInterval(buttonPress);
    _scrollerBeingDragged = false;
}

function scrollBarScroll(evt) {//***** Scrolling function - Moves text up/down
    evt.preventDefault();
    if (_scrollerBeingDragged === true) {
        var mouseDifferential = evt.pageY - _normalizedPosition;
        var scrollEquivalent = mouseDifferential * (_isiText.scrollHeight / _scrollerline.clientHeight);
        _isiText.scrollTop = _contentPosition + scrollEquivalent;
    }
}

function moveScroller(evt) {//***** Scrolling function - Moves scroller button up/down
    evt.preventDefault();
    _textScrollHeight = _isiText.scrollHeight - _container.offsetHeight;//gets the text height(offset) to scroll
    var remainOffsetHieght = _textScrollHeight - _isiText.scrollTop;//when scrolling,it gets the remaining height(top offset)
    var percentHeigh = 1 - remainOffsetHieght/_textScrollHeight;//transform to a percentage
    _scroller.style.top = Math.abs((_scrollerline.offsetHeight -_scroller.offsetHeight) * percentHeigh) + 'px';//To equivalent scroller line height
    _scrollerbg.style.top = Math.abs((_scrollerline.offsetHeight -_scrollerbg.offsetHeight) * percentHeigh) + 'px';//To equivalent scroller line height
    //console.log(_textScrollHeight);
}

function isiWheel(evt){//***** Scrolling function - Clears autoscroll interval when mouse wheel scrolling
    clearIntervalFunct();
}

function scrollUp(){//***** Scrolling function - Sets text a step up
    //console.log("up");
    clearIntervalFunct();
    buttonPress = setInterval(function(){_isiText.scrollTop-=scrollStep},100);
}

function scrollDown(){//***** Scrolling function - Sets text a step down
    //console.log("down")
    clearIntervalFunct();
    buttonPress = setInterval(function(){_isiText.scrollTop+=scrollStep},100);
}

function scrollStop(){//***** Scrolling function - Clears buttons interval
    _tl.kill(null,_isiText);
}
function clearIntervalFunct(){
    _tl.kill(null,_isiText);
}

$(document).ready(function() {
    console.log('init2')
    init2();
});