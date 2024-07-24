module.exports = {
	meta: {
		docs: {
			description:
				"Encourage the use of uncontrolled components when applicable.",
			category: "Best Practices",
			recommended: true,
		},
		fixable: null,
	},
	create: function (context) {
		return {
			JSXAttribute(node) {
				if (
					node.name.type === "JSXIdentifier" &&
					(node.name.name === "value" || node.name.name === "checked") &&
					node.value === null
				) {
					context.report({
						node,
						message:
							"Consider using uncontrolled components with default values.",
					});
				}
			},
		};
	},
};
