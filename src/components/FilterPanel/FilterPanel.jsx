import './FilterPanel.css';

const FilterPanel = ({
    filterOptions,
    activeFilters,
    onFilterChange
}) => {
    return (
        <div className='filters__container'>
            <div className='filter-section'>
                <h3>Filters</h3>
            </div>
            
            <div className='filter__group'>
                <h4>Website</h4>
                <div className='checkbox__container'>
                    {filterOptions.websites.map(website => (
                        <label 
                            key={website} 
                            className='checkbox__item'>
                            <p>{website}</p>
                            <input
                                className='filter__checkbox'
                                type='checkbox'
                                checked={activeFilters.website.includes(website)}
                                onChange={() => onFilterChange('website', website)}
                            />
                            <span className='custom__checkbox'></span>
                        </label>
                    ))}
                </div>
            </div>

            <div className='filter__group'>
                <h4>City</h4>
                <div className='checkbox__container'>
                    {filterOptions.cities.map(city => (
                        <label 
                            key={city} 
                            className='checkbox__item'>
                            <p>{city}</p>
                            <input
                                className='filter__checkbox'
                                type='checkbox'
                                checked={activeFilters.website.includes(city)}
                                onChange={() => onFilterChange('city', city)}
                            />
                            <span className='custom__checkbox'></span>
                        </label>
                    ))}
                </div>
            </div>

            <div className='filter__group'>
                <h4>Company</h4>
                <div className='checkbox__container'>
                    {filterOptions.companies.map(company => (
                        <label 
                            key={company} 
                            className='checkbox__item'>
                            <p>{company}</p>
                            <input
                                className='filter__checkbox'
                                type='checkbox'
                                checked={activeFilters.company.includes(company)}
                                onChange={() => onFilterChange('company', company)}
                            />
                            <span className='custom__checkbox'></span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;