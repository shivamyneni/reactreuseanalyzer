// my-eslint-plugin/rules/jsx-no-duplicate-props.js
module.exports = {
  create: function (context) {
    const props = new Set();

    return {
      JSXAttribute: function (node) {
        const { name } = node.name;
        if (props.has(name)) {
          context.report({
            node,
            message: `Duplicate prop: ${name.name}`,
          });
        } else {
          props.add(name);
        }
      },
    };
  },
};
