sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.CustomerDetail", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("customerDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        onOrderPress: function (oEvent) {
            
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();
            console.log(oContext);

            // Get Customer ID (or any key property you need)
            var sOrderId = oContext.getProperty("orderID");

            // Navigate using the router
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("orderDetail", {
                orderID: sOrderId
            });
        },

        _onObjectMatched: function (oEvent) {
            var sCustomerId = oEvent.getParameter("arguments").customerID;
            var sPath = "/Customers('" + sCustomerId + "')";

            // Bind the view to this specific customer
            this.getView().bindElement({
                path: sPath
            });
        }
    });
});