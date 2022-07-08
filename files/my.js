//const turn="Hey there!"
function yet(){
    //alert(document.getElementById('hey1').style)
    //alert(turn)
    document.getElementById("hey1").style.color='red';
    document.getElementById("hey1").style.backgroundColor='black';
}

function seek(){

    let check = document.getElementsByTagName('p')
    for(var hi=0;hi<check.length;hi++){
        check[hi].style.backgroundColor='grey'    
        check[hi].style.color='brown'
    }

    document.getElementById('fine').style.border='4px';
    document.getElementById('fine').style.borderStyle='dashed';
    document.getElementById('fine').style.borderColor='pink';
    //document.getElementById('fine').style.backgroundColor='pink';
}