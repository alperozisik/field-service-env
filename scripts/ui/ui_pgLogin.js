/* 
		WARNING 
		Auto generated file. 
		Do not modify its contents.
*/

const extend = require('js-base/core/extend');
const Page = require('sf-core/ui/page');
const Image = require('sf-core/ui/image');
const ImageFillType = require('sf-core/ui/imagefilltype');
const FlexLayout = require('sf-core/ui/flexlayout');
const Color = require('sf-core/ui/color');
const Font = require('sf-core/ui/font');
const ImageView = require('sf-core/ui/imageview');
const Label = require('sf-core/ui/label');

const Imageview1 = require("../components/Imageview1");
const Textbox1 = require("../components/Textbox1");
const ImgLine = require("../components/ImgLine");
const TbInput = require("../components/TbInput");
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

		var imageview1 = new Imageview1(getCombinedStyle(".imageView", {
			width: NaN,
			height: 2,
			left: 0,
			image: Image.createFromFile("images://input_active_line.png"),
			imageFillType: ImageFillType.STRETCH,
			positionType: FlexLayout.PositionType.ABSOLUTE,
			right: 0,
			bottom: 0,
			backgroundColor: Color.create(0, 255, 255, 255)
		}), "pgLogin");
		ifPassword.addChild(imageview1);
		this.imageview1 = imageview1;

		var textbox1 = new Textbox1(getCombinedStyle(".textBox", {
			left: 0,
			top: 0,
			width: NaN,
			height: NaN,
			text: "Input",
			right: 0,
			bottom: 0,
			positionType: FlexLayout.PositionType.ABSOLUTE,
			backgroundColor: Color.create(0, 255, 255, 255),
			font: Font.create("Arial", 32, Font.NORMAL)
		}), "pgLogin");
		ifPassword.addChild(textbox1);
		this.textbox1 = textbox1;

		var imgLine = new ImgLine(getCombinedStyle(".imageView", {
			width: NaN,
			height: 2,
			left: 0,
			image: Image.createFromFile("images://input_active_line.png"),
			imageFillType: ImageFillType.STRETCH,
			positionType: FlexLayout.PositionType.ABSOLUTE,
			right: 0,
			bottom: 0,
			backgroundColor: Color.create(0, 255, 255, 255)
		}), "pgLogin");
		ifUsername.addChild(imgLine);
		this.imgLine = imgLine;

		var tbInput = new TbInput(getCombinedStyle(".textBox", {
			left: 0,
			top: 0,
			width: NaN,
			height: NaN,
			text: "Input",
			right: 0,
			bottom: 0,
			positionType: FlexLayout.PositionType.ABSOLUTE,
			backgroundColor: Color.create(0, 255, 255, 255),
			font: Font.create("Arial", 32, Font.NORMAL)
		}), "pgLogin");
		ifUsername.addChild(tbInput);
		this.tbInput = tbInput;

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
		
		var flInputs = new FlexLayout(getCombinedStyle(".flexLayout", {
			width: NaN,
			height: 90,
			justifyContent: FlexLayout.JustifyContent.SPACE_BETWEEN
		})); 
		flMiddle.addChild(flInputs);
		
		var inputField = new InputField(getCombinedStyle(".flexLayout", {
			width: NaN,
			height: 30,
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
			right: NaN,
			backgroundColor: Color.create(0, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 0, 0, 0),
			borderWidth: 0
		}), "pgLogin");
		flInputs.addChild(inputField);
		this.inputField = inputField;

		var inputField = new InputField(getCombinedStyle(".flexLayout", {
			width: NaN,
			height: 30,
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
			right: NaN,
			backgroundColor: Color.create(0, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 0, 0, 0),
			borderWidth: 0
		}), "pgLogin");
		flInputs.addChild(inputField);
		this.inputField = inputField;

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
			flInputs: flInputs
		});
		
		//assign the children of flTexts
		flTexts.children = Object.assign({}, {
			lblTitle: lblTitle,
			lblSubTitle: lblSubTitle
		});
		
		//assign the children of flInputs
		flInputs.children = Object.assign({}, {
			ifUsername: ifUsername,
			ifPassword: ifPassword
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