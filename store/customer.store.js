import { getCustomers, createCustomer } from "./../services/customer.service";

const state = {
    customers: []
};

const getters = {
    customers(state) {
        return state.customers;
    }
};

const mutations = {
    updateCustomers(state, customers) {
        state.customers = customers;
    }
};

const actions = {
    async getCustomers({ commit }) {
        console.log("aa");
        const result = await getCustomers();
        if (result.status) {
            commit("updateCustomers", result.data.data);
        }
        return result;
    },
    async createCustomer({ commit }, body) {
        const result = await createCustomer(body);
        if (result.status) {
            commit("updateCustomers", result.data.data);
        }
        return result;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};