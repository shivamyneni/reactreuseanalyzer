module.exports = {
	meta: {
		docs: {
			description: "Encourage the use of inline styles with the style prop.",
			category: "Best Practices",
			recommended: true,
		},
		fixable: "code",
	},
	create: function (context) {
		return {
			JSXAttribute(node) {
				if (
					node.name.type === "JSXIdentifier" &&
					node.name.name === "className" &&
					node.value.type === "Literal" &&
					typeof node.value.value === "string"
				) {
					context.report({
						node,
						message:
							"Consider using inline styles with the style prop instead of className.",
						fix: function (fixer) {
							return fixer.replaceText(node, `style={{${node.value.value}}}`);
						},
					});
				}
			},
		};
	},
};
