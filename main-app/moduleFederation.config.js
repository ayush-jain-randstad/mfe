const { dependencies } = require("./package.json");
module.exports = {
  name: "mainApp",
  filename: "remoteEntry.js",
  remotes: {
    homePage: "homePage@http://localhost:3010/remoteEntry.js",
    weatherPage: "weatherPage@http://localhost:3009/remoteEntry.js",
  },
  exposes: {},
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
