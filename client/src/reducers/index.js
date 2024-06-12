import { combineReducers } from 'redux';
import patientsSlice from "./patientsSlice";
import usersSlice from "./usersSlice";
import clinicSlice from "./clinicSlice";
import scheduleSlice from "./scheduleSlice";

const rootReducer = combineReducers({
    patient: patientsSlice,
    user: usersSlice,
    clinic: clinicSlice,
    schedule: scheduleSlice
});

export default rootReducer;