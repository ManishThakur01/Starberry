import './FilterSection.css';

const FilterSection = () => {
    const dropdowndata = [
        {
            id : "bedroom",
            val : "All Bedroom",
            val1 : "north-facing",
            val2 : "east-facing",
            val3 : "west-facing",
            val4 : "south-facing"
        },
        {
            id : "neighbourhood",
            val : "Any Neighbourhood",
            val1 : "north",
            val2 : "east",
            val3 : "west",
            val4 : "south",
        },
        {
            id : "minPrice",
            val : "Min Price",
            val1 : "1CR",
            val2 : "1.25CR",
            val3 : "1.5CR",
            val4 : "2CR",
        },
        {
            id : "maxPrice",
            val : "Max Price",
            val1 : "3CR",
            val2 : "5CR",
            val3 : "10CR",
            val4 : "15CR",
        },
        {
            id : "sort",
            val : "Sort by",
            val1 : "lowerToHigh",
            val2 : "highToLow",
            val3 : "Medium",
            val4 : "Luxurious",
        }
    ]
    return (
        <>
            <div className='border-sec'>
                {dropdowndata.map((data) => {
                    return (
                    <div className='dropdown-sec'>
                        <select name={data.id} id={data.id}>
                            <option value="">{data.val}</option>
                            <option value={data.val1}>{data.val1}</option>
                            <option value={data.val2}>{data.val2}</option>
                            <option value={data.val3}>{data.val3}</option>
                            <option value={data.val4}>{data.val4}</option>
                        </select>
                    </div>
                    );
                })}
                
            </div>
        </>
    )
}

export default FilterSection;