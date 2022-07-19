import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",

  initialState: {
    news: [
      {
        id: 1,
        categoryId: 1,
        title: "Новости1",
        text: "loram ipsum",
      },
      {
        id: 2,
        categoryId: 2,
        title: "Новости2",

        text: "loram ipsum",
      },
      {
        id: 3,
        categoryId: 3,
        title: "Новости3",
        text: "loram ipsum",
      },
      {
        id: 4,
        categoryId: 4,
        title: "Новости4",
        text: "loram ipsum",
      },
      {
        id: 2,
        categoryId: 2,
        title: "Новости2",

        text: "loram ipsum",
      },
      {
        id: 3,
        categoryId: 3,
        title: "Новости3",
        text: "loram ipsum",
      },
      {
        id: 4,
        categoryId: 4,
        title: "Новости4",
        text: "loram ipsum",
      },
    ],
  },
  reducer: {},
  extraReducers: (builder) => {},
});

export default newsSlice.reducer;
