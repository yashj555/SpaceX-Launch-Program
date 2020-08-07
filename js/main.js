var launchSuccess ;
var landSuccess;
var launchYear;
var launchYearState; 
var Data ;
$(document).ready(function(){
    // just for 100 data

    fetch("https://api.spacexdata.com/v3/launches?limit=100") 
    .then(function(result) {
        console.log("result"+result);
        return result.json();
    }).then(function(data){
        console.log(data);
        Data = data;
        insertData(data);
        launchSuccess=false;
        landSuccess = false;
        launchYear = null;
        $('#filter_launch_false').addClass('disabled');
        $('#filter_landing_false').addClass('disabled'); 

        attachListener();
        
    })
    .catch(function(err) {
        // This is where you run code if its returns any errors
        console.log("error occured "+err);
    }); 

    // added listener to the filters
    function attachListener(){
       // added listener to the filters

        $("a").click(function(){
           var id = $(this)[0].id; 
           console.log(id);
           if(id=="filter_launch_true")
           { 
           
            if(launchSuccess==true)
              return ;
              $('#filter_launch_false').removeClass("disabled");
              $('#filter_launch_true').addClass("disabled"); 

              launchSuccess = true;    
              let  url;
              if(launchSuccess==true && landSuccess==true && launchYear==null)
              {
                  url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
              }
              else if(launchSuccess==true && landSuccess==true && launchYear!=null)
              {
                  url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year="+launchYear+"";
              }
              else if(launchSuccess==true && landSuccess==false && launchYear==null)
              {
                  url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true";
              } 
              else if(launchSuccess==true && landSuccess==false && launchYear!=null)
              {
                 url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&launch_year="+launchYear+""; 
              }

              
              
               fetching(url);
             



           }
           else if(id=="filter_launch_false")
           { 
             if(launchSuccess==false)
                return ;
                $('#filter_launch_true').removeClass("disabled");
                $('#filter_launch_false').addClass("disabled"); 
                launchSuccess=false;
                let url ;
                if(landSuccess==true && launchYear!=null)
                {
                  url = "https://api.spacexdata.com/v3/launches?limit=100&land_success=true&launch_year="+launchYear+"";
                }
                else if(landSuccess==true)
                {
                   url = "https://api.spacexdata.com/v3/launches?limit=100&land_success=true"
                }
                else if(launchYear!=null)
                {
                   url = "https://api.spacexdata.com/v3/launches?limit=100&launch_year"+launchYear+"";
                }
                else 
                {
                  url = "https://api.spacexdata.com/v3/launches?limit=100"
                }
                
                fetching(url);
             // filterdata       
      
           }
           else if(id=="filter_landing_true")
           {
               if(landSuccess==true)
                 return ;
                 $('#filter_landing_false').removeClass("disabled");
                 $('#filter_landing_true').addClass("disabled"); 

                landSuccess=true;

              let  url;
              if(launchSuccess==true && landSuccess==true && launchYear==null)
              {
                  url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
              }
              else if(launchSuccess==true && landSuccess==true && launchYear!=null)
              {
                  url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year="+launchYear+"";
              }
              else if(landSuccess==true && launchSuccess==false && launchYear!=null)
              { 
                 url = "https://api.spacexdata.com/v3/launches?limit=100&land_success=true&launch_year="+launchYear+"";   
              }
              else if(landSuccess==true && launchSuccess==false && launchYear==null)
              {
                 url = "https://api.spacexdata.com/v3/launches?limit=100&land_success=true";
              }

              fetching(url);


               // filter data  
           }
           else if(id == "filter_landing_false")
           {
                if(landSuccess==false)
                    return ;
                    $('#filter_landing_true').removeClass("disabled");
                    $('#filter_landing_false').addClass("disabled");  
                  landSuccess=false;  
                  if(launchSuccess==true && launchYear!=null)
                  {
                    url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&launch_year="+launchYear+"";
                  }
                  else if(launchSuccess==true)
                  {
                     url = "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true"
                  }
                  else if(launchYear!=null)
                  {
                     url = "https://api.spacexdata.com/v3/launches?limit=100&launch_year"+launchYear+"";
                  }
                  else 
                  {
                    url = "https://api.spacexdata.com/v3/launches?limit=100"
                  } 

                 fetching(url);

           }
           else
           {  

              let arr = id.split("_");
              if(launchYear==arr[1])
                 return;
              if(launchYear == null)
                {
                  launchYearState = $(this);
                  launchYearState.addClass("disabled");
                } 
              else
                 {
                    launchYearState.removeClass("disabled");
                    launchYearState = $(this);
                    launchYearState.addClass("disabled");

                 }   
              launchYear=arr[1];
            
              let url;
               if(launchSuccess==false && landSuccess==false)
               {
                  url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+launchYear+"";
               } 
               else if(launchSuccess==true && landSuccess==true)
               {
                 url =  "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year="+launchYear+"";   
               }
               else if(launchSuccess==true)
               {
                  url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&launch_year="+launchYear+"";
               }
               else
               {
                  url = "https://api.spaceXdata.com/v3/launches?limit=100&land_success=true&launch_year="+launchYear+"";   
               }

            //   url =  "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year="+launchYear+"";
             fetching(url);
            }     
        });
    }


    function fetching(url)
    {
      fetch(url).then(function(response){
         return response.json();
      }).then(function(data){
         console.log(data);
         Data = data;
         insertData(data);
      }).catch(function(err)
      {
         console.log(err);
      })
    }
    
    
    // to insert the data
    function insertData(data)
    {   
        $("#data_inserted").empty();
        for(var i=0;i<data.length;i++)
        { 
          var mission_id = data[i].mission_id;
          var land_succ ;
          var img=null;
          if(mission_id==undefined)
             mission_id="Not Decided Yet"; 

          if(data[i].rocket && data[i].rocket.first_stage.cores[0].land_success)
             land_succ = data[i].rocket.first_stage.cores[0].land_success;
          else
             land_succ="Not Known";
          
         if(data[i].links.mission_patch_small!=null)
            img = data[i].links.mission_patch_small;
         else
            img = "img/download.jpg";   
             
                  

          var str = '<div class="col-md-3 col-sm-6 mb-2">'+
                      '<div class="card mb-4" style="height:510px">'+
                        '<img class="card-img-top" src="'+img+'"alt="img/download.jpg">'+
                        '<div class="card-body">'+
                            '<h6 style="color:blue" class="card-title" style="text-decoration-color: lightskyblue">'+data[i].mission_name+" #"+data[i].flight_number+'</h6>'+
                        '<p class="card-text"><strong>Mission ids:</strong><span>'+mission_id+'</span></p>'+
                        '<p class="card-text"><strong>Launch year:</strong><span>'+data[i].launch_year+'</span></p>'+
                        '<p class="card-text"><strong>Successful launch:</strong><span>'+data[i].launch_success+'</span></p>'+
                        '<p class="card-text"><strong>Successful landing:</strong><span>'+land_succ+'</span></p>'+   
                       '</div>'+
                      '</div>'+ 
                    '</div>';
                    $("#data_inserted").append(str);          
        }
    }
   
  
  });

//   mission_patch_small