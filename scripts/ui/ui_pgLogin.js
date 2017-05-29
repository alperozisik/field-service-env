/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const FlexLayout = require('sf-core/ui/flexlayout');
const ImageView = require('sf-core/ui/imageview');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const Color = require('sf-core/ui/color');
const Label = require('sf-core/ui/label');

const InputField = require("../components/InputField");

const getCombinedStyle = require("library/styler-builder").getCombinedStyle;

const PgLogin_ = extend(Page)(
	//constructor
	function(_super, props) {
		// initalizes super class for this page scope
		_super(this, Object.assign({}, {
			onShow: onShow.bind(this),
			onLoad: onLoad.bind(this)
		}, props || {}));

		var flLeft = new FlexLayout(getCombinedStyle(".flexLayout .flexLayout-layoutSide", {
			height: NaN,
			width: NaN,
			bottom: NaN
		})); 
		this.layout.addChild(flLeft);
		
		var flMiddle = new FlexLayout(getCombinedStyle(".flexLayout .flexLayout-layoutMiddle", {
			height: NaN,
			width: NaN,
			flexGrow: 5,
			justifyContent: FlexLayout.JustifyContent.SPACE_AROUND
		})); 
		this.layout.addChild(flMiddle);
		
		var flRight = new FlexLayout(getCombinedStyle(".flexLayout .flexLayout-layoutMiddle", {
			height: NaN,
			width: NaN
		})); 
		this.layout.addChild(flRight);
		
		var ivLogo = new ImageView(getCombinedStyle(".imageView", {
			image: Image.createFromFile("images://logo.png"),
			width: NaN,
			height: 67.5,
			imageFillType: ImageFillType.ASPECTFIT
		})); 
		flMiddle.addChild(ivLogo);
		
		var flTexts = new FlexLayout(getCombinedStyle(".flexLayout", {
			width: NaN,
			height: 90,
			justifyContent: FlexLayout.JustifyContent.SPACE_BETWEEN
		})); 
		flMiddle.addChild(flTexts);
		
		var inputField = new InputField(getCombinedStyle(".flexLayout", {
			width: 375,
			height: 60,
			name: "inputField",
			visible: true,
			alignSelf: FlexLayout.AlignSelf.AUTO,
			direction: FlexLayout.Direction.INHERIT,
			alignContent: FlexLayout.AlignContent.STRETCH,
			alignItems: FlexLayout.AlignItems.STRETCH,
			justifyContent: FlexLayout.JustifyContent.FLEX_START,
			flexWrap: FlexLayout.FlexWrap.NOWRAP,
			flexDirection: FlexLayout.FlexDirection.COLUMN,
			positionType: FlexLayout.PositionType.RELATIVE,
			right: 0,
			backgroundColor: Color.create(0, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 0, 0, 0),
			borderWidth: 0
		}), "pgLogin");
		flMiddle.addChild(inputField);
		
		var flexlayout4 = new InputField(getCombinedStyle(".flexLayout", {
			width: 375,
			height: 60,
			visible: true,
			alignSelf: FlexLayout.AlignSelf.AUTO,
			direction: FlexLayout.Direction.INHERIT,
			alignContent: FlexLayout.AlignContent.STRETCH,
			alignItems: FlexLayout.AlignItems.STRETCH,
			justifyContent: FlexLayout.JustifyContent.FLEX_START,
			flexWrap: FlexLayout.FlexWrap.NOWRAP,
			flexDirection: FlexLayout.FlexDirection.COLUMN,
			positionType: FlexLayout.PositionType.RELATIVE,
			right: 0,
			backgroundColor: Color.create(0, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 0, 0, 0),
			borderWidth: 0
		}), "pgLogin");
		flMiddle.addChild(flexlayout4);
		
		var lblTitle = new Label(getCombinedStyle(".label .label-title", {
			width: NaN,
			text: "Customer Services",
			height: 37
		})); 
		flTexts.addChild(lblTitle);
		
		var lblSubTitle = new Label(getCombinedStyle(".label .label-subTitle", {
			width: NaN,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			height: 44,
			multiline: true
		})); 
		flTexts.addChild(lblSubTitle);
		
		//assign the children to page 
		this.children = Object.assign({}, {
			flLeft: flLeft,
			flMiddle: flMiddle,
			flRight: flRight
		});
		
		//assign the children of flMiddle
		flMiddle.children = Object.assign({}, {
			ivLogo: ivLogo,
			flTexts: flTexts,
			inputField: inputField,
			flexlayout4: flexlayout4
		});
		
		//assign the children of flTexts
		flTexts.children = Object.assign({}, {
			lblTitle: lblTitle,
			lblSubTitle: lblSubTitle
		});
		
	});

// Page.onShow -> This event is called when a page appears on the screen (everytime).
function onShow() {
  //StatusBar props
	Object.assign(this.statusBar, getCombinedStyle(".statusBar", {}));
  //HeaderBar props
	Object.assign(this.headerBar,	getCombinedStyle(".headerBar", {
		title: "newPage001",
		visible: false
	}));
}

// Page.onLoad -> This event is called once when page is created.
function onLoad() { 
	Object.assign(this.layout, getCombinedStyle(".page", {
		alignItems: FlexLayout.AlignItems.STRETCH,
		justifyContent: FlexLayout.JustifyContent.CENTER,
		flexDirection: FlexLayout.FlexDirection.ROW
	}));
}

module && (module.exports = PgLogin_);