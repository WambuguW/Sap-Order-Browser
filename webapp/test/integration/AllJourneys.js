/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderCollection in the list
// * All 3 SalesOrderCollection have at least one salesorderlineitems

sap.ui.require([
	"sap/ui/test/Opa5",
	"saplike/saplike/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"saplike/saplike/test/integration/pages/App",
	"saplike/saplike/test/integration/pages/Browser",
	"saplike/saplike/test/integration/pages/Master",
	"saplike/saplike/test/integration/pages/Detail",
	"saplike/saplike/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "saplike.saplike.view."
	});

	sap.ui.require([
		"saplike/saplike/test/integration/MasterJourney",
		"saplike/saplike/test/integration/NavigationJourney",
		"saplike/saplike/test/integration/NotFoundJourney",
		"saplike/saplike/test/integration/BusyJourney",
		"saplike/saplike/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});