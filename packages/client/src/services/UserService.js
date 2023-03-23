import Axios from '../utils/http.config';

export class UserService {
  static login(user) {
    try {
      return Axios.post(`/user/login`, user).then((response) => response.data);
    } catch (err) {
      throw new Error(
        `Login User Service Error: ${err.response.statusText} - ${err.response.data.message}`
      );
    }
  }
}
