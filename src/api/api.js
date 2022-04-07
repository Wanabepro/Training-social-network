import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '36876364-7d12-4d60-a8d1-2eeed392409b'
    }
})

export const usersAPI = {
    getUsers(currentPage, count) {
        return instance.get(`users?page=${currentPage}&count=${count}`)
            .then(response => { return response.data })
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

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => { return response.data })
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => { return response.data })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(response => { return response.data.resultCode })
    },
    updateProfile(data) {
        return instance.put('/profile', data)
            .then(response => { return response.data})
    }
}

export const authAPI = {
    getAuthData() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe, captcha) {
        return instance.post('auth/login', { email, password, rememberMe, captcha })
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => { return response.data.resultCode })
    },
    getUserPhoto(id) {
        return instance.get(`profile/${id}`)
            .then(response => { return response.data.photos.small })
    },
    getCaptchaURL() {
        return instance.get('security/get-captcha-url')
            .then(response => { return response.data.url })
    }
}