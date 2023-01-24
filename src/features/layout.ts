import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface LayoutState {
	sideNavOpen: boolean;
}

// Define the initial state using that type
const initialState: LayoutState = {
	sideNavOpen: false,
};

export const layoutSlice = createSlice({
	name: "layout",
	initialState,
	reducers: {
		switchSideNav: (state) => {
			state.sideNavOpen = !state.sideNavOpen;
		},
	},
});

//* Actions
export const { switchSideNav } = layoutSlice.actions;

//* Selectors
export const selectSideNavOpen = (state: RootState) => state.layout.sideNavOpen;

export default layoutSlice.reducer;
