import filterChain from "./filterChain.js";

 export default class filterManager  
{   
    constructor(target)
    {
        this.filterChain = new filterChain(); 
        this.filterChain.setTarget(target); 
    }

   setFilter(filter) 
   { 
       this.filterChain.addFilter(filter); 
   } 
   filterRequest(request) 
   { 
       this.filterChain.execute(request); 
   } 
  
} 

Window.filterManager=filterManager;
