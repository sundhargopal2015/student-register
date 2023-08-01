import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCreateInProcess: false,
  isUpdateInProcess: false,
  isDeleteInProcess: false,
  students: [],
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    createStudentBegin: (state) => {
      state.isCreateInProcess = true;
    },
    completeStudentCreate: (state) => {
      state.isCreateInProcess = false;
    },
    fetchStudentsStart: () => {},
    storeStudents: (state, { payload }) => {
      state.students = payload;
    },
    updateStudentBegin: (state) => {
      state.isUpdateInProcess = true;
    },
    completeStudentUpdate: (state) => {
      state.isUpdateInProcess = false;
    },
    deleteStudentBegin: (state) => {
      state.isDeleteInProcess = true;
    },
    completeStudentDelete: (state) => {
      state.isDeleteInProcess = false;
    },
  },
});

export const {
  createStudentBegin,
  completeStudentCreate,
  fetchStudentsStart,
  storeStudents,
  updateStudentBegin,
  completeStudentUpdate,
  deleteStudentBegin,
  completeStudentDelete,
} = appSlice.actions;
export default appSlice.reducer;
