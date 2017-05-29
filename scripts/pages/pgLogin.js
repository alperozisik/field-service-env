const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");

// Get generetad UI code
var PgLoginDesign = require("../ui/ui_pgLogin");

const PgLogin = extend(PgLoginDesign)(
    function(_super) {
        console.log("PgLogin");
        const page = this;
        _super(page);
        const baseEvents = {
            onLoad: page.onLoad,
            onShow: page.onShow
        };
        page.onLoad = function pgLogin_onLoad() {
            console.log("PgLogin_onLoad");
            baseEvents.onLoad && baseEvents.onLoad();
        };

        page.onShow = function pgLogin_onShow(data) {
            console.log("PgLogin_onShow");
            baseEvents.onShow && baseEvents.onShow(data);

        };



    });

module && (module.exports = PgLogin);
