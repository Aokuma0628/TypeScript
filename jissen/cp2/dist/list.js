"use strict";
var List;
(function (List) {
    List[List["a"] = 1] = "a";
    List[List["b"] = 2] = "b";
    List[List["c"] = 3] = "c";
})(List || (List = {}));
;
console.log(List);
console.log(List.c);
var Ports;
(function (Ports) {
    Ports["A"] = "aaa";
    Ports["B"] = "bbb";
    Ports["C"] = "ccc";
})(Ports || (Ports = {}));
;
(function (Ports) {
    Ports["D"] = "ddd";
})(Ports || (Ports = {}));
console.log(Ports);
console.log(Ports.D);
