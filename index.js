var Hr = 0;
var Min = 0;
var Sec = 0;
var Ms = 0;
 
var timer = false;

function Start(){
    timer = true;
    Watch();
    
}
function Pause (){
    timer = false;

}
function Reset(){
    timer = false;
    Hr=0;
    Min=0;
    Sec=0;
    Ms=0;

    document.getElementById("Min").innerHTML="00";
    document.getElementById("Sec").innerHTML="00";
    document.getElementById("Ms").innerHTML="00";
    document.getElementById("Hr").innerHTML="00";
}

function Watch(){
    if(timer == true){
        Ms = Ms + 1 ; 

        if(Ms == 100){
            Sec = Sec + 1;
            Ms = 0;

        }      
        if(Sec == 60){
            Min = Min + 1;
            Sec = 0;

        }      
    if(Min == 60){
            Hr = Hr + 1;
            Min =0;
            Sec=0;
            Ms = 0;

        }     
        var Hrstring = Hr;
        var Minstring =Min;
        var Secstring = Sec;
        var Msstring = Ms;


        document.getElementById("Hr").innerHTML = Hr; 
        document.getElementById("Min").innerHTML = Min; 
        document.getElementById("Sec").innerHTML = Sec; 
        document.getElementById("Ms").innerHTML = Ms; 
       setTimeout("Watch()",10); 
} 
}

