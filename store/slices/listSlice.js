const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  groceryList: {}
}
const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setGroceryList: (state, action) => {
      state.groceryList = [...action.payload]
    }
  }
})

export const { setGroceryList } = listSlice.actions
export default listSlice.reducer
