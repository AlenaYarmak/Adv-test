import UserList from '../components/UserList/UserList';
import FilterPanel from '../components/FilterPanel/FilterPanel';

const Main = () => {
    return (
        <>
            <h1>ADV test title</h1>
            <div className='content__container'>
                <FilterPanel />
                <UserList />
            </div>
        </>
    )
}

export default Main;