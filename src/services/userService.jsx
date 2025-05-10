import { apiService } from './apiService';

const fetchUsers = async () => {
    return apiService.fetchData('/users');
}

export const userService = {
    fetchUsers
};