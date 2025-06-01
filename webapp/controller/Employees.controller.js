sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.Employees", {
        onInit() {
        },

        onEmployeePress: function (oEvent) {
            
            var oItem = oEvent.getSource(); 
            var oContext = oItem.getBindingContext();

            // Get Customer ID (or any key property you need)
            var sEmployeeId = oContext.getProperty("EmployeeID");

            // Navigate using the router
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("employeeDetail", {
                EmployeeID: sEmployeeId
            });
        }
    });
});