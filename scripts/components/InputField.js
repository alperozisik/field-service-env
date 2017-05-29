/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Image = require('sf-core/ui/image');
const InputFieldDesign = require('library/InputField');

const InputField = extend(InputFieldDesign)(
	//constructor
	function(_super, props, pageName) {
		// initalizes super class for this scope
		_super(this, props || InputFieldDesign.defaults);
		this.pageName = pageName;
		const inputField = this;
		inputField.tbInput.onEditBegins = function() {
			toggleFocusMode(true);
		};
		inputField.tbInput.onEditEnds = function() {
			toggleFocusMode(false);
		};

		//to set the defaults
		toggleFocusMode(false);

		function toggleFocusMode(focussed) {
			var imageName = focussed ? "input_active_line.png" : "input_inactive_line.png";
			inputField.imgLine.image = Image.createFromFile("images://" + imageName);
		}

	}


);

Object.assign(InputField.prototype, {
	get text() {
		return this.tbInput.text;
	},
	set text(value) {
		return this.tbInput.text = value;
	}
});

module && (module.exports = InputField);
