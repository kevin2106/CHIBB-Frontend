class Auth {
  static isLoggedIn() {
    return !!sessionStorage.accessToken;
  }

  static logOut() {
    sessionStorage.removeItem('accessToken');
  }
}
