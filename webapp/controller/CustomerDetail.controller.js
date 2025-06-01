sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/IconPool",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Text",
    "sap/ui/core/Fragment",
    "assignmentweek2/utils/formatter"
], (Controller, JSONModel, IconPool, Dialog, Button, mobileLibrary, List, StandardListItem, Text ,Fragment, formatter) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.CustomerDetail", {
        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("customerDetail").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            var sCustomerId = oEvent.getParameter("arguments").customerID;
            var sPath = "/Customers('" + sCustomerId + "')";

            // Bind the view to this specific customer
            this.getView().bindElement({
                path: sPath
            });
        },

        onDefaultDialogPress: function (oEvent) {
            const sOrderId = oEvent.getSource().getBindingContext().getProperty("OrderID");
            const sPath = "/Orders(" + sOrderId + ")/Order_Details";

            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "assignmentweek2.view.fragments.orderFragment",
                    controller: this
                });
            }

            this.pDialog.then(function (oDialog) {
                const oList = Fragment.byId(this.getView().getId(), "orderDetailsList");

                if (!oList) {
                    console.error("List not found in fragment.");
                    return;
                }

                oList.bindItems({
                    path: sPath,
                    template: this.getView().byId("orderDetailsList").getItems()[0].clone()
                });

                oDialog.open();
            }.bind(this));
        },




        onDialogClose: function () {
            const oDialog = Fragment.byId(this.getView().getId(), "orderDialog");

            if (oDialog) {
                oDialog.close();
            } else {
                console.error("Dialog not found in fragment.");
            }
        }


    });
});