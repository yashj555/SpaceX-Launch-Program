import Filter from "./filter.js";
export default class landFilter extends Filter
{
    constructor()
    {
        super();
        this.filter="landSuccess";
    }
    endPoint()
    {
        return "land_success=";
    }
}

Window.landFilter = landFilter;