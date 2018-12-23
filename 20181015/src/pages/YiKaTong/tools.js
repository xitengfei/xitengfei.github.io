class YiKaTongTools{
    static filterItems = (items, filters) => {
        // console.log(items, filters)
        let newItems = [];
        
        if(filters.checkedAreas && filters.checkedAreas.length){
            newItems = items.filter((item)=>{
                return filters.checkedAreas.indexOf(item.area_name) > -1
            })
        }

        return newItems;
    }
}

export default YiKaTongTools