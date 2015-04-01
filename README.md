# Isomorphic react kit
[IN DEVELOPMENT - DOESN'T WORKS YET] Kick of skeleton.

# Getting started

### Clone the repo,
```bash
https://github.com/julianusti/isomorphic-react-kit.git
```

### Install [node.js](https://nodejs.org/),
```bash
$ brew install
```
### Install [nodemon](https://www.npmjs.com/package/nodemon),
```bash
$ npm install -g nodemon
```

### Install project dependencies,
```bash
$ npm install
$ npm test
```

### Start gulp,
```bash
$ gulp serve
```

### Start the app,
```bash
$ nodemon app.js
```

## Directory Layout
```
.
├── /config/                    # configuration file
├── /node_modules/              # 3rd-party libraries and utilities
├── /public/                    # The source code of the web application
│   ├── /build/                 # The folder for compiled *.js output
│   ├── /css/                   # The folder for compiled *.css output
│   ├── /js/                    # java script
│   │   ├── /components/        # React components
│   │   ├── /utils/             # Helpers
│   ├── /main.js                # Client-side startup script
│   ├── /sass/                  # Styles
├── /source/                    # The source code of server applcation
│   ├── /api/                   # REST API
│   ├── /models/                # [Not implemented yet] Documents from MongodDb
│   ├── /static/                # Server-side rendering
│   ├── /utils/                 # Helpers
├── /test/                      # Application tests
├── /views/                     # HTML templates for server-side rendering
│── app.js                      # Server-side startup script
│── gulpfile.js                 # Configuration file for automated builds
│── package.json                # The list of 3rd party libraries and utilities
│── preprocessor.js             # ES6 transpiler settings for Jest
```