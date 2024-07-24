module.exports = {
  meta: {
    docs: {
      description: "Enforce a consistent naming convention for prop names.",
      category: "Naming",
      recommended: true,
    },
    fixable: null,
  },
  create: function (context) {
    return {
      JSXAttribute(node) {
        if (
          node.name.type === "JSXIdentifier" &&
          !node.name.name.match(/^[a-z]/)
        ) {
          context.report({
            node,
            message: "Props should start with a lowercase letter.",
          });
        }
      },
    };
  },
};
