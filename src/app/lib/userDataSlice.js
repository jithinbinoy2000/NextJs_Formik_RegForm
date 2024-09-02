const { createSlice } = require("@reduxjs/toolkit");
const userDataSlice = createSlice({
  name: 'user',
  initialState: {
    data: {}
  },
  reducers: {
    addData: (state, action) => {
      const { key, value } = action.payload;
      state.data[key] = {...state.data[key],...value};
    }
  }
});
export const {addData} = userDataSlice.actions
export default userDataSlice.reducer
