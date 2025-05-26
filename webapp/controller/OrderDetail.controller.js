sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.OrderDetail", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("customerDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sOrderId = oEvent.getParameter("arguments").orderID;
            var sPath = "/Orders('" + sOrderId + "')";

            // Bind the view to this specific customer
            this.getView().bindElement({
                path: sPath
            });
        }
    });
});