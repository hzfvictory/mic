const test = {
    state: {
        count: 15
    },
    mutations: {
        add(state, payload) {
            console.log(payload);
            state.count++
        },
    },
    actions: {
        syncAdd(context) {
            setTimeout(() => {
                context.commit('add', 11)
            }, 1000)
        },
        asyncAdd(context, val) {
            console.log(val);
            context.commit('add')
        },
    },
    getters: { // 跟在外面单独声明是一样的
        getCount(state) {
            return state.count
        }
    }
};

export default test
