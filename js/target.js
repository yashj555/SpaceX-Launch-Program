 export default class target
{
    constructor()
    {

    }
    insertData(data)
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
                        '<p class="card-text"><strong>Mission ids: </strong><span>'+mission_id+'</span></p>'+
                        '<p class="card-text"><strong>Launch year: </strong><span>'+data[i].launch_year+'</span></p>'+
                        '<p class="card-text"><strong>Successful launch: </strong><span>'+data[i].launch_success+'</span></p>'+
                        '<p class="card-text"><strong>Successful landing: </strong><span>'+land_succ+'</span></p>'+   
                       '</div>'+
                      '</div>'+ 
                    '</div>';
                    $("#data_inserted").append(str);          
        }
    }
    fetching(url)
    {  
      var self = this; 
      $("#loader").show();  
      fetch(url).then(function(response){
         return response.json();
      }).then(function(data){
         console.log(data);
         $("#loader").hide(); 
         self.insertData(data);
      }).catch(function(err)
      {
         console.log(err);
      })
    }
}

Window.target = target; 
