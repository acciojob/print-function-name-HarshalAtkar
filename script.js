//your JS code here. If required.
functionName();
AccioJob();
function functionName(){
	alert(arguments.callee.name);
};
function AccioJob(){
	alert(arguments.callee.name);
}
