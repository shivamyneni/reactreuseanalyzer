module.exports = {
  meta: {
    docs: {
      description:
        "Enforce a consistent naming convention for function components.",
      category: "Naming",
      recommended: true,
    },
    fixable: null,
  },
  create: function (context) {
    return {
      FunctionDeclaration(node) {
        if (
          node.id &&
          node.id.type === "Identifier" &&
          !node.id.name.startsWith("use") &&
          !node.id.name.match(/^[A-Z]/)
        ) {
          context.report({
            node,
            message:
              "Function components should start with an uppercase letter.",
          });
        }
      },
    };
  },
};
