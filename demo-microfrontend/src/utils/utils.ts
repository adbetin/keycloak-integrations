declare var Keycloak;

const KEYCLOAK_CONFIG = {
  url: 'http://localhost:8080/auth',
  realm: 'imaginemos',
  clientId: 'demo-microfrontend',
}

const KEYCLOAK_INIT_CONFIG = {
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
}

export function authenticate(token: string, refreshToken: string): Promise<any> {
  const keyCloakConfig = { ...KEYCLOAK_INIT_CONFIG, token, refreshToken }
  console.log('keyCloakConfig', keyCloakConfig);
  let keycloak = new Keycloak(KEYCLOAK_CONFIG);
  return keycloak.init(keyCloakConfig).then((authenticated: boolean) => {
    console.log('result: ', authenticated);
    console.log(authenticated ? 'authenticated' : 'not authenticated');
    return authenticated ? keycloak : false;
  }).catch(() => false);
}
