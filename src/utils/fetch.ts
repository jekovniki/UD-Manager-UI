import axios, { AxiosInstance } from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */

class FetchAPI {
	private api: AxiosInstance;
	private baseURL = import.meta.env.API_URL;

	constructor(feature?: string) {
		this.api = axios.create({
			baseURL: `http://localhost:3000/api/v1/${feature}`, // @todo : add variable
		});
	}

	public async get(url: string) {
		try {
			const response = await this.api.get(url);
			return response.data;
		} catch (error) {
			console.error("GET request error : ", error);
			throw error;
		}
	}

	public async post(endpoint: string, data: any) {
		try {
			console.log("baseUrl : ", this.baseURL);

			const response = await this.api.post(endpoint, data);
			return response.data;
		} catch (error) {
			console.error("POST request error : ", error);
			throw error;
		}
	}

	public async put(endpoint: string, data: any) {
		try {
			const response = await this.api.put(endpoint, data);
			return response.data;
		} catch (error) {
			console.error("PUT request error : ", error);
			throw error;
		}
	}

	public async patch(endpoint: string, data: any) {
		try {
			const response = await this.api.patch(endpoint, data);
			return response.data;
		} catch (error) {
			console.error("PATCH request error : ", error);
			throw error;
		}
	}

	public async delete(endpoint: string) {
		try {
			const response = await this.api.delete(endpoint);
			return response.data;
		} catch (error) {
			console.error("DELETE request error : ", error);
			throw error;
		}
	}
}

export default FetchAPI;
