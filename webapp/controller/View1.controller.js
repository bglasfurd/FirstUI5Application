sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.View1", {
        onInit() {
        },

        onCustomerPress: function (oEvent) {
            
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();

            // Get Customer ID (or any key property you need)
            var sCustomerId = oContext.getProperty("CustomerID");

            // Navigate using the router
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("customerDetail", {
                customerID: sCustomerId
            });
        }
    });
});