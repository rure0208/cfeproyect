import axios from 'axios';


export default class Client {

    static BASE_URL = 'http://localhost:1337';

    static async GET (url) {
        return await (await axios.get(this.BASE_URL + url)).data;
    }

}