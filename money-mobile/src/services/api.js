import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://192.168.15.8:3000/',
	//headers: { Authorization: `Bearer ${token}` }
})