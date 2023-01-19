import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "loading",
  priceValue: {
    firstValue: '',
    secondValue: '',
  },
   brandValue: [],
};

export const fetchItems = createAsyncThunk("item/fetchItems", async ({searchValue, brandValue}) => {
  
  const response = await fetch(
    `https://getlens-master.s.dev.family/api/pages/obektivy?${brandValue.map(item => `&brands[]=${item.index}`).join('')}${
      searchValue.firstValue || searchValue.secondValue
        ? "&price[min]=" +
          searchValue.firstValue +
          "&price[max]=" +
          searchValue.secondValue
        : ""
    }`,
    {
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa("admin:Wj3g4W")
      }
    }
  ).then((res) => res.json());
    
  return response;
});

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setPriceValue: (state, action) => {
        state.priceValue = action.payload;
    },
    setBrandValue: (state, action) => {
      if (!state.brandValue.find(item => item.index === action.payload.index)) {
        state.brandValue = [...state.brandValue, action.payload]
        } else {
          state.brandValue = [...state.brandValue.filter(item => item.index !== action.payload.index)];
        }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload.products;
    });
    builder.addCase(fetchItems.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = "error";
    });
  }
});

export const { setPriceValue, setBrandValue } = itemSlice.actions;
export default itemSlice.reducer;