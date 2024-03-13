class AuthService {
  constructor() {
    this.isAuthenticated = false;
    this.tokenKey = "authToken";
  }

  login(email, password) {
    // Perform authentication logic, e.g., send login request to server
    // For simplicity, we'll just check if the username is 'user' and password is 'password'
    if (email === "user@gmail.com" && password === "password") {
      this.isAuthenticated = true;
      localStorage.setItem(this.tokenKey, "some-auth-token");
      return true;
    }
    return false;
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
