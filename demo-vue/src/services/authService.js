export default class AuthService {
    keycloakInstance = null;

    constructor(keycloak) {
        this.keycloakInstance = keycloak;
    }

    userInfo(){
        return this.keycloakInstance.loadUserProfile();
    }

    getInstance(){
        return this.keycloakInstance;
    }

    getTokens(){
        return{
            token: this.keycloakInstance.token,
            refreshToken: this.keycloakInstance.refreshToken
        };
    }

    logout() {
        return this.keycloakInstance.logout();
    }
}