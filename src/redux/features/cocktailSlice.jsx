import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
    const data = await response.json();
    return data;
  }
);

export const fetchSingleCocktails = createAsyncThunk(
  "cocktails/fetchSingleCocktails",
  async ({ idDrink }) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching cocktail data: ${error.message}`);
    }
  }
);

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    loading: false,
    cocktails: [],
    error: null,
    cocktail: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks || [];
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
    builder
      .addCase(fetchSingleCocktails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktail = action.payload.drinks; 
      })
      .addCase(fetchSingleCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cocktailSlice.reducer;
