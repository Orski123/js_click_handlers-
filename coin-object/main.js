let bodyElement = document.querySelector ('body')
let mainElement = document.createElement ('main')
bodyElement.appendChild(mainElement)    

let coin = {
    state: 0,
    
    flip: function() {
        
        this.state = Math.round(Math.random() ) 
        return this.state;
        
        /* 1. Randomly set your coin object's "state" property to be either 
        0 or 1: use "this.state" to access the "state" property on this object.*/ 
    }
    ,
    
    toString: function() {
        let result
        if (this.state== 0) {
            result = "heads"
        }
        else {
            result = "tails"
        }
        
        return result
        /* 2. Return the string "Heads" or "Tails", depending on whether
        "this.state" is 0 or 1. */
    },
     
    toHTML: function() {
           
      
        let image = document.createElement('img');
        let image1=document.createElement('img')
        image1.src="./images/head.jpg"
        let image2=document.createElement('img')
        image2.src="./images/tail.jpg"
     
        
        if (this.state== 0) {
           image = image1
            mainElement.appendChild(image1)
            
         }
        else {
         image = image2
          mainElement.appendChild(image2)
              
         }
         return image;
          
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
               
    }
       
}

          
console.log (coin.flip(this.state))
console.log (coin.toString(this.state))
console.log (coin.toHTML(this.state))

let newDiv = document.createElement ('div')
mainElement.append(newDiv)
newDiv.append(display20Flips(this.state))

function display20Flips (){
    for (let i=0; i<20; i++){
     return coin.toString (this.state)
     
        }
       
    }
  
function display20images (){
    for (let i=0; i<20; i++){
        
         return coin.toHTML (this.state)
        }
    }

    
