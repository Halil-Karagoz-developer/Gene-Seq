const inputTextbox = document.querySelector("#input--dna");
const showData = document.querySelector("#show-data");
const button_send = document.querySelector("#send-data");
const key = ["F","L","I","M","V","S","P","T","A","Y","H","Q","N","K","D","E","C","W","R","G"]
const val = ["UUU","CUG","AUC","AUG","GUC","UCG","CCG","ACC","GCG","UAC","CAU","CAG","AAC","AAG","GAU","GAG","UGC","UGG","CGC","GGC"]




button_send.addEventListener("click", (e) => {
    e.preventDefault();
    showData.textContent = " "
    for(let i = 0; i < inputTextbox.value.length;i++){
        for(let k = 0; k <key.length;k++){
            if( key[k] == inputTextbox.value[i]){
                showData.textContent += val[k] + " ";
            }
        }
    }
console.log("output: ",showData.textContent)
    
    
    // showData.append()
})



     
     
      
   
     
     
     
     
   
    
   
   
   
    
    
    
    
   
                                                    
                                                    