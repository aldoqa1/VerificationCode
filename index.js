const inputs = document.querySelectorAll(".codes input");

inputs.forEach((input, idx)=>{

    input.addEventListener("keydown", (event)=>{
        if(event.key=="Backspace"){
            input.value = "";
            setTimeout(() => {
                if(idx!=0){
                    inputs[idx-1].focus();
                }
            }, );
        }
        if(event.key>=0 && event.key<=9){
            input.value = event.key;
            setTimeout(() => {
                if(idx==5){
                    input.blur();
                }else{
                    inputs[idx+1].focus()        
                }
            }, 0);
        }
     
    });
 
})