"use strict";
var Validations;
(function (Validations) {
    Validations.validaText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validaText("Francisco"));
//# sourceMappingURL=main.js.map