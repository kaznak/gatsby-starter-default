# Setup: generate graphql type definition before build

To write gatsby-node.js in TypeScript, it requires GraphQL type definition.
The code generator works in Gatsby's onPostBootstrap phase, which is after the createPage phase
(refer: "[Feature request: gatsby-node codegen](https://github.com/d4rekanguok/gatsby-typescript/issues/29)").
Therefore, the createPage phase fails because of the lack of the GraphQL type definition.
This problem is now under fixing. To avoid this problem temporarily, run the following code:

```bash
mv gatsby-node.js{,.back}
pnpm run build
mv gatsby-node.js{.back,}
```
