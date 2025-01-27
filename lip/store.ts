import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import studentReducer from "./user/studentSlice";
import applicantReducer from "./user/applicantSlice";
export const store = configureStore({
  reducer: {
    studentId: studentReducer,
    applicantData: applicantReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["student/addFile"], // Ignore specific action
        ignoredPaths: ["student.value.files"], // Ignore files in the state
      },
    }),
});
export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
