import{r as t,h as e}from"./p-b2c9c8a2.js";const o={url:"http://localhost:8080/auth",realm:"imaginemos",clientId:"demo-microfrontend"},n={onLoad:"check-sso",silentCheckSsoRedirectUri:window.location.origin+"/silent-check-sso.html"},c=class{constructor(e){t(this,e)}async connectedCallback(){this.authenticated=await function(t,e){const c=Object.assign(Object.assign({},n),{token:t,refreshToken:e});return console.log("keyCloakConfig",c),new Keycloak(o).init(c).then((t=>(console.log("result: ",t),console.log(t?"authenticated":"not authenticated"),t))).catch((()=>!1))}(this.token,this.refreshToken)}render(){return e("div",null,this.authenticated?"Hello, World! I'm authenticated":e("b",null," `You are not authenticated` "))}};c.style=":host{display:block}";export{c as demo_microfrontent_auth}