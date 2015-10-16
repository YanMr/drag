/**
 * Created by 严明  on 2015/10/16.
 */
//参数配饰
loca(g("ui_main"),g("ui_title"));
window.onresize=function(){
	loca(g("ui_main"),g("ui_title"));
 }
function loca(main,area){//main拖动的文件，area点击拖动区域
	var mov=null;
    var w=main.offsetWidth;
    var h=main.offsetHeight;
    var bodyH=document.documentElement.clientHeight;
    var bodyW=document.documentElement.clientWidth;
	main.style.top=(bodyH-h)/2+"px";
	main.style.left=(bodyW-w)/2+"px";
	area.addEventListener("mousedown",function(e){
		e=e||window.event;
		var x=e.pageX;
		var y=e.pageY;
		var yiX=x-main.offsetLeft;
		var yiY=y-main.offsetTop;
		mov=true;
		document.onmousemove=function(e){
				e=e||window.event;
				var x=e.pageX;
				var y=e.pageY;
				var mouseX=0;
				var mouseY=0;
				if(mov===true){
				mouseX=x-yiX;
				mouseY=y-yiY;
				var markW=bodyW-w;
				var markH=bodyH-h;
                mouseX=Math.min(markW,(Math.max(0,mouseX)));
				mouseY=Math.min(markH,(Math.max(0,mouseY)))
				main.style.left=mouseX+"px";
				main.style.top=mouseY+"px";
							
				       
				}
			}
		document.onmouseup=function(){
			mov=false
			}
	  })
	}
function g(id){
	return document.getElementById(id);
	}
