import axios from 'axios';
import BaseService from "./baseService";

let baseURL = 'http://localhost:1337'

class EventService extends BaseService {
    async getEvents() {
        const response = await axios.get(`${baseURL}/events`);
        super.validateResponse(response);
        return response.data
    }
}

export default new EventService();
