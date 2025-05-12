import { useEffect, useState, useMemo } from 'react';
import UserList from '../components/UserList/UserList';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import { userService } from '../services/userService';

const Main = () => {
    const [users, setUsers] = useState([]);
    const [activeFilters, setActiveFilters] = useState({
        website: [],
        city: [],
        company: []
    });

    /* set categories for example */
    const [filterOptions, setFilterOptions] = useState({
        websites: [],
        cities: [],
        companies: []
    });

    /* fetch users */
    useEffect(() => {
        const loadUsers = async () => {
            const data = await userService.fetchUsers();
            setUsers(data);
        };
        loadUsers();
    }, []);

    /* filter unique values */
    useEffect(() => {
        if (users.length > 0) {
            const websites = [...new Set(users.map(user => user.website))].sort();
            const cities = [...new Set(users.map(user => user.address.city))].sort();
            const companies = [...new Set(users.map(user => user.company.name))].sort();

            setFilterOptions({
                websites,
                cities,
                companies
            });
        }
    }, [users]);

    /* filter users */
    const handleFilterChange = (filterType, value) => {
        setActiveFilters(prev => {
            const updatedFilters = { ...prev };

            if (updatedFilters[filterType].includes(value)) {
                updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
            } else {
                updatedFilters[filterType] = [...updatedFilters[filterType], value];
            }
            
            return updatedFilters;
        });
    };

    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            const websiteMatch = activeFilters.website.length === 0 || 
                activeFilters.website.includes(user.website);
            
            const cityMatch = activeFilters.city.length === 0 || 
                activeFilters.city.includes(user.address.city);
            
            const companyMatch = activeFilters.company.length === 0 || 
                activeFilters.company.includes(user.company.name);
            
            return websiteMatch && cityMatch && companyMatch;
        });
    }, [users, activeFilters]);

    return (
        <>
            <h1 className='main__title'>AdversterX test task</h1>
            <div className='content__container'>
                <FilterPanel 
                    filterOptions={filterOptions}
                    activeFilters={activeFilters}
                    onFilterChange={handleFilterChange}/>
                <UserList 
                    users={filteredUsers}/>
            </div>
        </>
    )
}

export default Main;