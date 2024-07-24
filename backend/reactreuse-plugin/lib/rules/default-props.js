module.exports = {
	meta: {
		docs: {
			description: "Enforce the declaration of default values for props.",
			category: "Best Practices",
			recommended: true,
		},
		fixable: null,
	},
	create: function (context) {
		return {
			ClassProperty(node) {
				if (
					node.key.type === "Identifier" &&
					node.value &&
					node.value.type === "ObjectExpression" &&
					node.value.properties.length > 0
				) {
					const propNames = node.value.properties.map((prop) => prop.key.name);
					if (!propNames.includes("defaultProps")) {
						context.report({
							node,
							message: "Declare default values for props using defaultProps.",
						});
					}
				}
			},
		};
	},
};
