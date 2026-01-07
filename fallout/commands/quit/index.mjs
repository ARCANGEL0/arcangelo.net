import { off } from "../../util/power.js";

const output = [
    "ROBCO TERMLINK",
    "",
    "STATUS: SHUTTING DOWN",
    "",
    "WARNING: SYSTEM INITIATED SHUTDOWN SEQUENCE.",
    "",
    "All operations will cease in T-minus 60 seconds.",
    "Please ensure that all data has been saved and all activities are concluded.",
    "",
    "NOTE: Unauthorized access during shutdown may result in data corruption.",
    "",
    "Thank you for using the ROBCO TERMLINK. Your connection has been appreciated.",
    "",
    "SYSTEM POWERING DOWN..."
];

export default () => {
	return off();
};
export { output };
