import Axios from 'axios'

const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export const axios = Axios.create({baseURL: `${NEXT_PUBLIC_BACKEND_URL}/api`})
