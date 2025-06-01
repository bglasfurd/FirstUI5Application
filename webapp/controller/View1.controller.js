sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.View1", {
        onInit() {
        },

        goToCustomers: function(oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("customers");
        },

        goToProducts: function(oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("products");
        },

        goToEmployees: function(oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("employees");
        },

        goToMockJSON: function(oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("mockJSON");
        },

        goToInvoices: function(oEvent) {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("invoices");
        }
    });
});