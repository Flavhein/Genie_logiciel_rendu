import Math;

function chooseRandIn2(){
	//return a uniform random chosen number between 0 and 1
	return Math.random() < 0.5 ? 0 : 1;
}

const nom = ["foo","bar"][chooseRandIn2()];
const nombre = [1,2][chooseRandIn2()];
const path = [{path: "/foo"}, {path: "/bar"}][chooseRandIn2()];

