// In your custom rule file, e.g., eslint-plugin-reactreuse-plugin/lib/rules/hooks-usage.js
module.exports = {
	meta: {
		docs: {
			description: "Enforce the use of React hooks for state and side effects.",
			category: "Best Practices",
			recommended: true,
		},
		fixable: null,
	},
	create: function (context) {
		return {
			ImportDeclaration(node) {
				const source = node.source.value;
				if (source === "react" || source === "react-dom") {
					const specifiers = node.specifiers.map(
						(specifier) => specifier.local.name
					);
					if (
						specifiers.includes("useState") ||
						specifiers.includes("useEffect")
					) {
						return;
					}

					context.report({
						node,
						message:
							"Use React hooks like useState and useEffect for state and side effects.",
					});
				}
			},
		};
	},
};
