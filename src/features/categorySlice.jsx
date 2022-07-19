import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",

  initialState: {
    
    categories: [
      {
        id: 1,
        name: "Новости нашего города",
      },
      {
        id: 2,
        name: "Хорошие новости",
      },
      {
        id: 3,
        name: "Отличные новости",
      },
    ],
  },
  reducers: {},
  extraReducers: (builder) => {},
});

export default categorySlice.reducer;
