// Custom Alpine TUI Sandbox config
// The root filesystem location - will be replaced by build
export const diskImageUrl = "IMAGE_URL";
// The root filesystem backend type
export const diskImageType = "split";
// Print an introduction message about the technology
export const printIntro = false;
// Is a graphical display needed
export const needsDisplay = false;
// Executable full path (Required)
export const cmd = CMD;
// Arguments, as an array (Required)
export const args = ARGS;
// Environment variables
export const env = ENV;
// Current working directory
export const cwd = CWD;
// Optional extra parameters
export const opts = {
	uid: 1000,
	gid: 1000
};
