function init(){
    function bin2Dec(bin){
        var decimal=0;
        for(var index=bin.length-1; index >=0; index--){
            decimal += parseInt(bin[index])*Math.pow(2,bin.length-1-index);
        }
        return decimal;
    }

    var var1 = "111";

    console.log("The binary:", var1," is:", bin2Dec(var1));
}
window.addEventListener('load',init,false);