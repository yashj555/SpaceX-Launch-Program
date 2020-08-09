import Filter from "./filter.js";

export default class launchFilter extends Filter
{
    constructor()
    {
        super();
        this.filter="launchSuccess";
    }
    endPoint()
    {
        return "launch_success=";
    }
}

Window.launchFilter = launchFilter;