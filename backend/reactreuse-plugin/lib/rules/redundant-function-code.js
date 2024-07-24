module.exports = {
  meta: {
    docs: {
      description: "Check for redundant code within a function",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
  },
  create: function (context) {
    return {
      FunctionDeclaration(node) {
        const codeBlocks = new Set(); // Store unique code blocks

        // Traverse through the function's body
        node.body.body.forEach((statement) => {
          const code = context.getSourceCode().getText(statement);

          // Check if the code block has already occurred
          if (codeBlocks.has(code)) {
            context.report({
              node: statement,
              message: "Redundant code found within the function.",
            });
          } else {
            codeBlocks.add(code); // Add code block to set
          }
        });
      },
    };
  },
};
