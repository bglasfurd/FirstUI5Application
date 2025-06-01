sap.ui.define([], function () {
    "use strict";

    console.log("Formatter loaded ✅");

    return {
        formatUnitPrice: function (fValue) {
            if (fValue === undefined || fValue === null) {
                return "";
            }
            return parseFloat(fValue).toFixed(2) + " USD";
        },

        formatDate: function (oDate) {
            if (!oDate) return "";

            // oDate is a JavaScript Date object
            const options = { day: "2-digit", month: "short", year: "numeric" };
            return oDate.toLocaleDateString("en-GB", options); 
        }
    };

    
});
