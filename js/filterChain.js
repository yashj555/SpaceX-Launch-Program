
export default class filterChain  
{   
    constructor()
    {
        this.filters = [];
        this.target;
    } 
    addFilter(filter) 
    { 
        this.filters.push(filter); 
    } 
    execute(request) 
    {   
        console.log(request);
        var url = "https://api.spacexdata.com/v3/launches?limit=100";
        var flag = 0;
        for(var i=0;i<this.filters.length;i++)
        {    
             console.log(request[this.filters[i].filter]);
             if(request[this.filters[i].filter]===true && request[this.filters[i].filter]!==null)
             {  
                url = url+"&"+this.filters[i].endPoint()+request[this.filters[i].filter];
             }
             else if(request[this.filters[i].filter]!==false && request[this.filters[i].filter]!==null)
             {
                url = url+"&"+this.filters[i].endPoint()+request[this.filters[i].filter];
             }
             
                
        }
        
        console.log(url);
        this.target.fetching(url);

    }
    setTarget(target)
    {
        this.target=target;
    }
}
     
  