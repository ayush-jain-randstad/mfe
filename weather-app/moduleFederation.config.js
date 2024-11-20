const { dependencies } = require("./package.json");
module.exports = {
  name: "weatherPage",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./Weather": "./src/App",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: "react",
      shareScope: "default",
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "react-router-dom":{
      singleton: true,
      requiredVersion: dependencies["react-router-dom"],
    }
  },
};
