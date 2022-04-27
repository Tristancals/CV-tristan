console.log('coucou');
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM entièrement chargé et analysé");


    let html5=document.getElementsByClassName("html5");
    for(let i=0;i<html5.length;i++){
        html5[i].addEventListener("mouseover",function(event){
            console.log('coucodddu'+[i]);
            for(let i=0;i<html5.length;i++){
                html5[i].style.backgroundImage ="url(\"public/img/images2.png\")";
                html5[i].style.borderRadius="0.5rem";
            }
            
        }, false);
    }
    for(let i=0;i<html5.length;i++){
        html5[i].addEventListener("mouseout",function(event){
            setTimeout(function(event){
                for(let i=0;i<html5.length;i++){
                    html5[i].style.backgroundColor="";
                    html5[i].style.borderRaduis="";
                }
            },1000);
        }, false);
    }
});
