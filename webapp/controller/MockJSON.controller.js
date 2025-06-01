sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("assignmentweek2.controller.MockJSON", {
        onInit() {
            const oData = {
                formData: {
                    name: "",
                    age: ""
                },
                entries: []
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "formModel");
        },

        onSubmit: function () {
            const oModel = this.getView().getModel("formModel");
            const oData = oModel.getData();
            const name = oData.formData.name;
            const age = parseInt(oData.formData.age);

            if (!name || name.length < 1) {
                MessageToast.show("Please enter at least 1 character for the name.");
                return;
            }

            if (isNaN(age) || age < 18) {
                MessageToast.show("You are too young to be in this table :)");
                return;
            }

            const newEntry = { ...oData.formData };
            oData.entries.push(newEntry);

            // Reset input fields
            oData.formData.name = "";
            oData.formData.age = "";

            oModel.setData(oData);
        },

        onReset: function () {
            const oModel = this.getView().getModel("formModel");
            const oData = oModel.getData();

            oData.entries = []; // Clear table data
            oModel.setData(oData);
        },

        onDeleteEntry: function (oEvent) {
            const oItem = oEvent.getSource().getParent();
            const oContext = oItem.getBindingContext("formModel");

            const sPath = oContext.getPath(); // e.g. /entries/2
            const aPathParts = sPath.split("/");

            if (aPathParts.length === 3 && aPathParts[1] === "entries") {
                const iIndex = parseInt(aPathParts[2]);

                const oModel = this.getView().getModel("formModel");
                const oData = oModel.getData();

                oData.entries.splice(iIndex, 1); // Remove entry
                oModel.setData(oData);

                MessageToast.show("Entry deleted.");
            }
        }
    });
});
