/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");
const Router = require("sf-core/ui/router");
const stylerBuilder = require("library/styler-builder");
const settings = require("./.settings.json");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};

stylerBuilder.registerThemes(settings.config.theme || "Defaults");
stylerBuilder.setActiveTheme(settings.config.theme);

// Define routes and go to initial page of application
Router.add("pgLogin", require("./pages/pgLogin"));
Router.go("pgLogin");
