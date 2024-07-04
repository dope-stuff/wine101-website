import Axios from 'axios'

const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
const NEXT_API_TOKEN = process.env.NEXT_API_TOKEN

export const axios = Axios.create({
    baseURL: `${NEXT_PUBLIC_BACKEND_URL}/api`,
    headers: {
        Authorization: `Bearer ${NEXT_API_TOKEN}`
    }
})
