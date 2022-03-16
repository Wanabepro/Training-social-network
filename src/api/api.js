import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '3d907906-464f-45c0-895c-fbccb6dc6e1f'
    }
})

export const usersAPI = {
    getUsers(currentPage, count) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
            .then(response => { return response.data })
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)
        .then(response => {return response.data})
    },
    follow(id) {
        return instance.post(`follow/${id}`)
        .then(response => { return response.data.resultCode })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
        .then(response => { return response.data.resultCode })
    },
}

export const authAPI = {
    getAuthData() {
        return instance.get('auth/me')
    }
}