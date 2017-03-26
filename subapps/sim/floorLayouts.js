var floorLayouts = {}

floorLayouts.threefloors = [
 ["#.#.#.#.#.#.#.#.#.#.#.#.#.#",
	"#. . . . . . . . . . . . .#",
	"#. . .A. . . . . . . . . .#",
	"#. . .A.A. . . . . . . . .#",
	"#. . .A. . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#.#.#.#.#.#.#.#. . . .#. .#",
	"-.-.-.-.-.-.-.-.-.-.-.-.-.-"],
 ["#.#.#.#.#.#.#.#.-.-.-.-.-.-",
  "#. . . . . .#.#.#.#.#.#.#.#",
  "#. . . . . .#. . . . . . .#",
  "#. . . . . .#. . . . . . .#",
  "#. . . . . .#. . . . . . .#",
  "#. . . . . .#. . . .#.#.#.#",
  "#. . . . . . . . . .#. . .#",
  "#. . . . . . . . . .#.#.#.#",
  "#. . . . . .#. . . . .#. .#",
  "#.#.#.#. .#.#. . . . .#.#.#",
  "#. . . . . .#. . . . . . .#",
  "#. . .#. . .#. . . . . . .#",
  "#.#.#.#.#.#.#.-.#.#.#.#.#.#",
  "-.-.-.-.-.-. . .-.-.-.-.-.-"],
 ["-.-.-.-.-.-.-.-.-.-.-.-.-.-",
  "-.-.-.-.-.-.-.-.-.-.-.-.-.-",
  "-.-.-.-.-.-.-.-.-.-.-.-.-.-",
  "-.-.-.-.-.-.-.-.-.-.-.-.-.-",
  "-.-.-.-.-.-.-.-.-.-.-.-.-.-",
  "#.#.#.#.#.#.#.-.-.-.-.-.-.-",
  "#. . .#. . .#.-.-.-.-.-.-.-",
  "#. . . . . .#.-.-.-.-.-.-.-",
  "#.#.#.#. . .#.-.-.-.-.-.-.-",
  "#. . .#.#. .#.-.-.-.-.-.-.-",
  "#. . . . . .#.-.-.-.-.-.-.-",
  "#. . .#. . .#.-.-.-.-.-.-.-",
  "#.#.#.#.#.#.#.-.-.-.-.-.-.-",
  "-.-.-.-.-.-.-.-.-.-.-.-.-.-"]
];
floorLayouts.onesmallfloor = [
 ["#.#.#.#.#.#.#.#.#.#.#.#.#.#",
	"#. . . . . . . . . . . . .#",
	"#. . .A. . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#. . . . . . . . . . . . .#",
	"#.#.#.#.#.#.#.#. . . .#. .#",
	"-.-.-.-.-.-.-.-.-.-.-.-.-.-"]
];

floorLayouts.onelargefloor = [
[
"#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#",
"#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .A. .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . .#.#. . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . .#.#. . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#.P. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#.D. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"-.-. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"-.-. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"-.-. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"-.-. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"-.-. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"-.-. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
"#.#.#.#.#.#.#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . .B. . . .C. . . . . . . .#.#",
"#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .#.#",
" . . . . . . .#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#",
" . . . . . . . . . . . . . . . .#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#.#"]
];

export default floorLayouts;

