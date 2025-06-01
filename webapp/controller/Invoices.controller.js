sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/base/Log"
], (MessageToast, Controller, Device, Log) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.Invoices", {
        onInit() {
        },

		onInvoiceSelect: function (oEvent) {
			const oSelectedItem = oEvent.getParameter("listItem");
			const oContext = oSelectedItem.getBindingContext();
			const sPath = oContext.getPath();

			const oSplitApp = this.byId("SplitAppDemo");
			const oDetailView = this.byId("invoiceDetail");

			oDetailView.bindElement(sPath); // bind the selected invoice data to the view
			oSplitApp.toDetail(oDetailView);
		},
		
		onPressGoToMaster: function (oEvent) {
			const oSplitApp = this.byId("SplitAppDemo");

			const oContext = oEvent.getSource().getBindingContext();
			const sPath = oContext.getPath();

			// Pass the selected context to the detail view
			const oDetailView = this.byId("invoiceDetail");
			oDetailView.bindElement(sPath);

			// Navigate to the detail view
			oSplitApp.toDetail(oDetailView);
		},


    });
});