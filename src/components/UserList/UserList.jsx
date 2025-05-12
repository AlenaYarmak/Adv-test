import { useEffect, useState } from 'react';
import { userService } from '../../services/userService';
import UserCard from '../UserCard/UserCard';
import './UserList.css';

const UserList = ({ users }) => {
    return (
        <div className='card__container'>
            {users.map((user) => (
                <UserCard 
                    key={user.id}
                    name={user.name}
                    company={user.company.name}
                    phone={user.phone}
                    email={user.email}
                    website={user.website}
                    city={user.address.city}
                    street={user.address.street}
                    suite={user.address.suite}/>
            ))}
        </div>
    )
}

export default UserList;