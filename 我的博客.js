function hi(){
    alert("Hello,World!")
}

function createXHR(){
    var XHR=[
        function(){return new XMLHttpRequest},
        function(){return new ActiveXObject("Msxml2.XMLHTTP")},
        function(){return new ActiveXObject("Msxml3.XMLHTTP")},
        function(){return new ActiveXObject("Microsoft.XMLHTTP")}
    ];
    var xhr=null;
    for (var i=0;i<XHR.length;i++){
        try{
        xhr=XHR[i]()
        }catch(e){
            continue
        }
        break;
    }
    return xhr;
}


var img4=document.getElementById("music4")
        img4.addEventListener("mouseover",function(){
        img4.setAttribute("style","z-index:1");
        },true)
        
        img4.addEventListener("click",function(){
        img4.setAttribute("style","z-index:3");
        },true)

var img5=document.getElementById("music5")
        img5.addEventListener("mouseover",function(){
        img5.setAttribute("style"," z-index:1");
        },true)
        
        img5.addEventListener("click",function(){
        img5.setAttribute("style","z-index:3");
        },true)

var img6=document.getElementById("music6")
        img6.addEventListener("mouseover",function(){
        img6.setAttribute("style","z-index:1");
        },true)
        
        img6.addEventListener("click",function(){
        img6.setAttribute("style","z-index:3");
        },true)
