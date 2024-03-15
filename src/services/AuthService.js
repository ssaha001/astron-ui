class AuthService {
  constructor() {
    this.isAuthenticated = false;
    this.tokenKey = "token";
  }

  setToken(token) {
    // Perform authentication logic, e.g., send login request to server
    // For simplicity, we'll just check if the username is 'user' and password is 'password'
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

  isAuthenticated() {
    return this.isAuthenticated;
  }
}

const authServiceInstance = new AuthService(); // Assign instance to a variable

export default authServiceInstance; // Export the variable as default
