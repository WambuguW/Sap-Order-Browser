/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"saplike/saplike/test/integration/NavigationJourneyPhone",
		"saplike/saplike/test/integration/NotFoundJourneyPhone",
		"saplike/saplike/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});