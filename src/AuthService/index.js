import {EventEmitter} from 'events'
import Auth0Lock from 'auth0-lock'

import {isTokenExpired} from './jwtHelper'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        responseType: 'token',
      }
    })
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.lock.on('authorization_error', this._authorizationError.bind(this))
  }

  _doAuthentication(authResult) {
    this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
      if (! error) {
        this.setToken(authResult.idToken)
        this.setProfile(profile)
        this.emit('logged_in')
      } else {
        console.log(error)
      }
    })
  }

  displayPrompt() {
    this.lock.show()
  }

  _authorizationError(error) {
    console.log('Authorization error', error)
  }

  isLoggedIn() {
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  getProfile() {
    const profile = localStorage.getItem('profile')
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setProfile(profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
    this.emit('profile_updated', profile)
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  logout() {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    this.lock.logout({returnTo: process.env.BASE_URL})
  }
}
