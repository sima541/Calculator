function GetData(s){
    var InpTxt=document.getElementById('InpTxt');
    var oldval=InpTxt.value;
    var len=oldval.length;
    var EndChr=oldval[len-1];

    var sym=["+","-","*","/","."];
    if(sym.includes(s)){
        if(sym.includes(EndChr)){

        }
        else{
            InpTxt.value=oldval+s;
        }
    }
    else{
        InpTxt.value=oldval+s;
    }
}
function CalculateData(){
    var InpTxt=document.getElementById('InpTxt');
    var oldval=eval(InpTxt.value);
    InpTxt.value=oldval;
}
function ClearData(){
    document.getElementById('InpTxt').value='';
}