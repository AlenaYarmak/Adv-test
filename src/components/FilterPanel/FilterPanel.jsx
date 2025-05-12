import './FilterPanel.css';

const FilterPanel = () => {
    return (
        <div className='filters__container'>
            <div className='filter-section'>
                <h3>Filters</h3>
            </div>
            
            <div className='filter__group'>
                <h4>Website length</h4>
                <div className='checkbox__container'>
                    <label className='checkbox__item'>
                            <p>website</p>
                            <input
                                className='filter__checkbox'
                                type='checkbox'
                            />
                        </label>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;