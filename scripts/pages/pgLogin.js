/* globals lang */
const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");
const ActionKeyType = require('sf-core/ui/actionkeytype');

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
            
            page.ifUserName.tbInput.hint = lang.userName;
            page.ifUserName.tbInput.actionKeyType = ActionKeyType.NEXT;
            page.ifUserName.tbInput.onActionButtonPres = function userName_onActionButtonPres(e) {
                page.ifPassword.tbInput.focus();
            };
            
            page.ifPassword.tbInput.hint = lang.password;
            page.ifPassword.tbInput.isPassword = true;
            page.ifPassword.tbInput.actionKeyType = ActionKeyType.GO;
            page.ifPassword.tbInput.onActionButtonPres = function password_onActionButtonPres(e) {
                doLogin();
            };
            
        };

        page.onShow = function pgLogin_onShow(data) {
            console.log("PgLogin_onShow");
            baseEvents.onShow && baseEvents.onShow(data);
        };



    });
    
function doLogin() {
    console.log("doLogin");
}

module && (module.exports = PgLogin);
