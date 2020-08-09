import Filter from  "./filter.js";
export default class yearFilter extends Filter
{
   constructor()
   {
       super();
       this.filter = "launchYear";  
   }
   endPoint()
   {
      return "launch_year=";
   }
}
Window.yearFilter = yearFilter;