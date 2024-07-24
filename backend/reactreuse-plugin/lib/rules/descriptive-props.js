// In your custom rule file, e.g., eslint-plugin-reactreuse-plugin/lib/rules/descriptive-props.js
module.exports = {
	meta: {
		docs: {
			description: "Enforce the use of descriptive names for component props.",
			category: "Best Practices",
			recommended: true,
		},
		fixable: null,
	},
	create: function (context) {
		return {
			JSXAttribute(node) {
				if (node.name.type === "JSXIdentifier" && node.name.name === "prop") {
					context.report({
						node,
						message:
							'Use a more descriptive name than "prop" for component props.',
					});
				}
			},
		};
	},
};
