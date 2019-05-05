# Boilerplate for creating node.js express based application. With Test Infrastructure using Mocha.
[![Codeship Status for kjonathante/nodejs-express-mocha-boilerplate](https://app.codeship.com/projects/6b8ebff0-5104-0137-5a7e-3689c7fabad4/status?branch=master)](https://app.codeship.com/projects/340065)
- Configuration Infrastructure (dotenv)
- Debugging (vscode)
- Linting (eslint)
- Logging Infrastructure (bunyan)
- Security Audits (snyk)
- CI/CD (Codeship)
- Testing Infrastructure (mocha should nyc supertest)

#### Reference:
#### [Node.js: Extend and Maintain Applications by Daniel Khan ](https://www.lynda.com/Node-js-tutorials/Architecting-Enterprise-Scale-Node-js-Applications/569191-2.html?org=sfpl.org)

### ESLint
```
npm install -g --save-dev eslint
# starts the configuration interface, select config in js
eslint --init 
# which will result into this file: .eslintrc.js
```
### Snyk
```
npm install -g snyk
snyk test
```
### Codeship
1. Go to codeship.
2. Create new project & connect it to a GitHub repo.
3. Go to snyk's account settings to retrieve auth key.
4. Add the following to the project settings / setup commands
```
npm install -g eslint snyk
snyk auth xxxxxxxxxxxxxxxxxxxx
npm install
```
5. Add the following to the project settings / test commands
```
npm test
```
6. Setup Deploy (Heroku/Custom)
