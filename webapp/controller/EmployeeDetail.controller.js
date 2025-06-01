sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.EmployeeDetail", {
        onInit() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("employeeDetail").attachPatternMatched(this._onObjectMatched, this);
		},

        _onObjectMatched: function (oEvent) {
            var sEmployeeId = oEvent.getParameter("arguments").EmployeeID;
            var sPath = "/Employees(" + sEmployeeId + ")";

            // Bind the view to this specific customer
            this.getView().bindElement({
                path: sPath
            });
        },
    });
});