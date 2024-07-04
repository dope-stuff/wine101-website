import Axios from 'axios'

const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

const token = '73d4100a77183ebcaa3f63ef48e59a5207b570199f272940d9689d5a5cd335808f1b0a6146b7565ef19a07413cc06c05c8414781d0766e70fc34bc66a76fc6ba94ec9c878269447cc48e66ec7b2e25c38564536cfddc12813ad4c98e7fa97b1152bad0ddca62e9018a5be5cc73ea6d7aa851575e8e167c32367e73d5036c00f9'

export const axios = Axios.create({baseURL: `${NEXT_PUBLIC_BACKEND_URL}/api`,  headers: {
    Authorization: `Bearer ${token}`,
  },})
