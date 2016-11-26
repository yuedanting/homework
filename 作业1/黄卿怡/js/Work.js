window.onload=function(){
	var en =document.querySelector('#lag-english');
	var ch =document.querySelector('#lag-chinese');
	var sp =document.querySelector('#lag-spanish');
	var sel=document.querySelector('#select');
	var buttons=document.querySelectorAll('.index-banner-Button.clearfloat>span')
	var list = document.querySelector('#index-ban');
	var container = document.querySelector('.index-banner-bg');
    var index = 1;
    var len = 3;
    var animated = false;
    var interval = 3000;
    var timer;
    var prev = document.querySelector('#prev');
    var next = document.querySelector('#next'); 
    
     function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -1910 * len + 'px';
                        }
                        if(left<(-1910 * len)) {
                            list.style.left = '-1910px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){

                        buttons[i].className = 'banner-button btn'+(i+1);
                        break;
                    }
                }
                
                {buttons[index - 1].className = 'banner-button btn'+index+' on';
            	buttons[0].id='';
            	buttons[1].id='';
            	buttons[2].id='';
            	buttons[index - 1].id='btn_'+index;
            	}
            }
//定时器绑定在右边的按键
            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
//清除定时器
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1910);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 3;
                }
                else {
                    index -= 1;
                }
                animate(1910);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -1910 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();


		function showselect(){
			ch.style.display="block";
			sp.style.display="block";
		}
		function hidselect(){
			ch.style.display="none";
			sp.style.display="none";
		}


		en.onmouseover=function(){
			showselect();
		};
		en.onmouseout=function(){
			hidselect();
		};
		sel.onclick=function(){
			showselect();
		};
		sel.onmouseout=function(){
			hidselect();
		};
		ch.onmouseover=function(){
			showselect();
		};
		ch.onmouseout=function(){
			hidselect();
		};
		sp.onmouseover=function(){
			showselect();
		};
		sp.onmouseout=function(){
			hidselect();
		};

};