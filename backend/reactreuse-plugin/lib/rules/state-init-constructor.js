module.exports = {
  meta: {
    docs: {
      description:
        "Enforce initializing state in the constructor for class components.",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
  },
  create: function (context) {
    return {
      ClassDeclaration(node) {
        const stateProperty = node.body.body.find(
          (property) =>
            property.type === "ClassProperty" &&
            property.key.type === "Identifier" &&
            property.key.name === "state"
        );

        if (stateProperty) {
          const hasConstructor = node.body.body.some(
            (method) =>
              method.type === "MethodDefinition" &&
              method.kind === "constructor" &&
              method.value.body.body.some(
                (stmt) =>
                  stmt.type === "ExpressionStatement" &&
                  stmt.expression.type === "AssignmentExpression" &&
                  stmt.expression.left.type === "MemberExpression" &&
                  stmt.expression.left.object.type === "ThisExpression" &&
                  stmt.expression.left.property.type === "Identifier" &&
                  stmt.expression.left.property.name === "state"
              )
          );

          if (!hasConstructor) {
            context.report({
              node,
              message:
                "Initialize state in the constructor for class components.",
            });
          }
        }
      },
    };
  },
};
