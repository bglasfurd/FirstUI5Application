sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("assignmentweek2.controller.InvoiceDetail", {
        onInit: function () {
            // optional: additional logic
        },

        onNavBack: function () {
            const oSplitApp = this.getView().getParent().getParent(); // access SplitApp from detail
            oSplitApp.backDetail();
        }
    });
});
