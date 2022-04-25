import * as axios from 'axios'
import avatar from './../Icons/User-avatar.png'

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
            .then(response => response.data)
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data.resultCode)
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode)
    },
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },

    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status })
            .then(response => response.data.resultCode)
    },

    updateProfile(data) {
        return instance.put('/profile', data)
            .then(response => response.data)
    },

    putPhoto() {
        return instance.put('/profile/photo')
    },

    getPosts(id, photo, name) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response => {
                return response.data.map(post => ({
                    id: post.id, 
                    name,
                    avatarLink: photo ? photo : avatar,
                    text: post.body,
                    likesCount: post.id })
                )
            })
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
            .then(response => response.data.resultCode)
    },

    getUserPhoto(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data.photos.small)
    },

    getCaptchaURL() {
        return instance.get('security/get-captcha-url')
            .then(response => response.data.url)
    },
}

export const imagesAPI = {
    getImages() {
        return axios.get(`https://jsonplaceholder.typicode.com/images`)
    },
}

export const newsAPI = {
    getNews() {

    },
}