const postcssNested = require('postcss-nested');
const tailwindcssNesting = require('tailwindcss/nesting');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		postcssNested(),
		tailwindcssNesting(),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer,
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': false,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		})
	]
};
