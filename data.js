function keycom(arr1,arr2){
    let hash={}
    let commkey = []
    for(const key of arr1){
        hash[key] = true;
     }
        for(const key of arr2){
            if(hash[key]) {
                commkey.push(key)
            }
        }
        if(commkey.length === 0){
            console.log( "pas de num commun") ;
        } 
        else {
       console.log(commkey)
     }    }
     console.log("le num répété au dessous")
    console.log(keycom([12,10,0],[0,5,9]))
    var arr1 = [12,10,0]
    var arr2 = [1,5,0]
    let sum = arr1.concat(arr2).reduce((el, el1) => el - el1);
    console.log("la somme  est " , sum)
    
   
     
    


