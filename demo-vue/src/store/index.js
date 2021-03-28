import Vue from 'vue'
import Vuex from 'vuex'

import AuthService from "@/services/authService";

Vue.use(Vuex)

export function generateStore(keycloak) {
    let authService = new AuthService(keycloak);
    return new Vuex.Store({
        state: {
            authenticated: false,
            token: "",
            refreshToken: "",
            userInfo: {}
        },
        mutations: {
            SET_AUTHENTICATED(state, authenticated) {
                state.authenticated = authenticated;
            },
            SET_USER_INFO(state, userInfo) {
                state.userInfo = userInfo;
            },
            SET_TOKENS(state, tokens) {
                state.token = tokens.token;
                state.refreshToken = tokens.refreshToken;
            },
        },
        actions: {
            async login(context) {
                const tokens =  authService.getTokens();
                context.commit('SET_TOKENS', tokens);
                const userInfo = await authService.userInfo();
                context.commit('SET_USER_INFO', userInfo);
                context.commit('SET_AUTHENTICATED', true);
            },
            async logout(context) {
                await authService.logout();
                context.commit('SET_AUTHENTICATED', false);
            },
        },
        getters: {
            authStatus(state) {
                return state.authenticated;
            },
            tokens(state) {
                return {
                    token: state.token,
                    refreshToken: state.refreshToken
                };
            },
            userInfo(state) {
                return state.userInfo;
            },
        },
        modules: {
        }
    })
} 