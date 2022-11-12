import axios from 'axios';


export default class Client {

    static BASE_URL = 'http://localhost:1337';

    static securityConfig() {
        const token = localStorage.getItem('token');

        return {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
    }

    static async GET(url) {
        return await (await axios.get(this.BASE_URL + url, this.securityConfig())).data;
    }
    static async POST(url, body) {
        return await (await axios.post(this.BASE_URL + url,body, this.securityConfig())).data;
    }
    static async DELETE(url, body) {
        return await (await axios.delete(this.BASE_URL + url,this.securityConfig()));
    }

}