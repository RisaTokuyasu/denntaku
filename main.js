    
    let is_calc = false;
    let result = "";
    
    result = document.getElementById("result");
    
    //cキー
    function c_click(){
   　 result.value= "0";
   　 is_calc = false;
    　}
    
    //数字キー
    function num_click(val){
        if(is_calc){
     　 result.value = "0";
     　 is_calc = false;
   　  　 }
    
   　   if(result.value == "0" && val =="0"|| val=="00"){
          result.value = "0"
    
           }else if(result.value == "0" && val == "."){
             result.value = "0.";
        
             }else if(result.value == "0"){
               result.value = val;
                
                 }else{
                   result.value += val;
                 }
    }
    
    //演算子キー
    function ope_click(val){
        
        if(is_calc){
            is_calc = false;
         }
         
        if(is_ope_last()){
            result.value = result.value.slice(0,-1) + val;
            
             } else if(result.value == "0"){
                 result.value = "0"
             }
             else{
                 result.value += val;
             }
    }
    
    //＝ボタン
    function equal_click(){
     
        let temp = eval(result.value);
        result.value = temp;
        is_calc = true;
    }
    
    //入力されている値が演算子かどうか
    function is_ope_last(){
     return ["+","-","*","/"].includes(result.value.toString().slice(-1));
    }