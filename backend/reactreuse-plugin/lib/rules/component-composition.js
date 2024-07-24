// In your custom rule file, e.g., eslint-plugin-reactreuse-plugin/lib/rules/component-composition.js
module.exports = {
	meta: {
		docs: {
			description: "Enforce component composition over inheritance.",
			category: "Best Practices",
			recommended: true,
		},
		fixable: null, // or "code" if an autofix is possible
	},
	create: function (context) {
		return {
			ClassDeclaration(node) {
				if (
					node.superClass &&
					(node.superClass.name === "React.Component" ||
						node.superClass.name === "Component")
				) {
					context.report({
						node,
						message: "Prefer component composition over inheritance.",
					});
				}
			},
		};
	},
};
