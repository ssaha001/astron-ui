import { resetemployee } from "../redux/slices/employeeSlice";
import { resetproject } from "../redux/slices/projectSlice";
import { resetuser } from "../redux/slices/userSlice";
import { useDispatch } from "../redux/store";

class AuthService {
  constructor() {
    this.isAuthenticated = false;
    this.tokenKey = "token";
  }

  setToken(token) {
    // Perform authentication logic, e.g., send login request to server
    // For simplicity, we'll just check if the username is 'user' and password is 'password'
    this.isAuthenticated = true;
    localStorage.setItem(this.tokenKey, token);
    return true;
  }

  logout() {
    this.isAuthenticated = false;

    localStorage.removeItem(this.tokenKey);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isUserAuthenticated() {
    if (localStorage.getItem(this.tokenKey) !== null) {
      return true;
    }
    return false;
  }
}

const authServiceInstance = new AuthService(); // Assign instance to a variable

export default authServiceInstance; // Export the variable as default
