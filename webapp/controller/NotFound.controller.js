sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("assignmentweek2.controller.NotFound", {
        onNavBack: function () {
            const oHistory = sap.ui.core.routing.History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash) {
                window.history.go(-1);
            } else {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteView1", {}, true);
            }
        }
    });
});
