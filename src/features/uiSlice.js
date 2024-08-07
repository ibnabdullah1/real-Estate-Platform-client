import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropdownOpen: false,
  position: null,
  currentLink: {},
  isSidebarOpen: false,
  isFilterMenuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    closeDropdown: (state) => {
      state.isDropdownOpen = false;
    },
    toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },

    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    openFilterMenu: (state) => {
      state.isFilterMenuOpen = true;
    },
    closeFilterMenu: (state) => {
      state.isFilterMenuOpen = false;
    },
  },
});

export default uiSlice.reducer;

export const uiStore = (state) => state.ui;

export const {
  openDropdown,
  closeDropdown,
  toggleDropdown,
  openSidebar,
  closeSidebar,
  toggleSidebar,
  openFilterMenu,
  closeFilterMenu,
  toggleDarkMode,
} = uiSlice.actions;
