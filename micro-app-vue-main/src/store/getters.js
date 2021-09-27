const getters = {
  count: (state) => state.test.count,
  token: () =>
    localStorage.getItem('token') ||
    '1f429c65169fefc181899718e8183726938a8f3b6e4c3a8e86b49a9fec73e9604f9a909dc284c3ae97f0f7982e9bfdc6f60fae98059004f5e92185e6b498cfad4f9388adfce07284fb3113db202d75851a0a2cf8fe347187918eb7cb9e7db6e8b3b45863ee39986299e4741067a3ed8915d4a44b1f82d35df254b39223e2b7e2966f040ad424dde7',
};
export default getters;
