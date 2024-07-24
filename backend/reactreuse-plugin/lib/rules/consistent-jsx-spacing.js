module.exports = {
	meta: {
		docs: {
			description: "Enforce consistent spacing around JSX elements.",
			category: "Stylistic Issues",
			recommended: true,
		},
		fixable: "whitespace",
	},
	create: function (context) {
		return {
			JSXElement(node) {
				const openingBracket = context.getSourceCode().getFirstToken(node);
				const closingBracket = context.getSourceCode().getLastToken(node);
				const hasSpaceBefore = openingBracket.loc.start.column > 1;
				const hasSpaceAfter = closingBracket.loc.start.column > 1;

				if (!hasSpaceBefore) {
					context.report({
						node,
						message:
							"Add a space before the opening bracket of the JSX element.",
						fix: function (fixer) {
							return fixer.insertTextBefore(openingBracket, " ");
						},
					});
				}

				if (!hasSpaceAfter) {
					context.report({
						node,
						message:
							"Add a space after the closing bracket of the JSX element.",
						fix: function (fixer) {
							return fixer.insertTextAfter(closingBracket, " ");
						},
					});
				}
			},
		};
	},
};
