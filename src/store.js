import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
	activeColor: '#24cdff'
}

let getters = {
	read: state => prop => {
		return state[prop];
	}
}

let mutations = {
	apply: (state, payload) => {
		state[payload.prop] = payload.data;
	}
}

let actions = {
	set: ({commit}, payload) => {
		commit('apply', payload);
	}
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
