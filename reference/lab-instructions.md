![cf](http://i.imgur.com/7v5ASc8.png) Assignment Submission Instruction
=======================================================================# s

## Data Structures / Code Challenges
* Create a new repository called `data-structures-and-algorithms`
* At the root of this folder, you'll need a standard testable node setup (config files available in the class repo)
  * package.json
    * jest and eslint as dependencies
  * .travis.yml
  * .eslintrc.json
  * .gitignore

* For each data structure, create a folder for it
  * In this folder you will create your constructor/library module
  * i.e. `data-structures-and-algorithms/linked-lists`
  * Your importable module should be named `index.js`
  * Include JSDoc comments above every function in your implementation
  * Run `jsdoc **/*.js -d ./docs` in the root folder to generate your master documentation
  * Place your tests in a __tests__ folder within the module directory
* For the daily challenges, create a folder called `challenges`
  * For each challenge, create a sub-folder for that challenge along with a __tests__ folder
  * Your files for the challenge should be named appropriately
  * These challenges will generally require you to use a data structure module to solve the challenge. This structure should allow you to easily import those in, like so:
    * i.e. `let sll = require('../linked-lists');`

**To Submit Your DSA Lab or Challenge**

* Work in a new branch of the DSA repository
* Follow the assignment instructions
* Create a PR with your work
* Ensure that your PR is picked up by `travis-ci.com` and that your tests are visibly running and passing.
* Submit to canvas:
  * A photograph of your whiteboard
  * A link to the PR for the branch your code was written to
  * A link to your passing tests from that PR on `travis-ci.com`

Your folder structure should look like this:
```
  data-structures-and-algorithms
    ├── challenges
    │   └── challenge_01
    │       ├── __tests__
    │       │   └── something.test.js
    │       └── something.js
    └── linked-lists
        ├── __tests__
        │   └── linked-lists.test.js
        └── index.js
```

## Labs
* Work in a fork of the class lab repository for each lab
* Work in a branch on your fork for each lab named `lab-##-YOURNAME`
* The folder for each day in the repo contains a README.md with the instructions and possibly a 'starter-code' folder.
* If there is a `starter-code` folder for the lab, move it's contents into your working directory
* Create a PR to **your** master from your working branch.
* Ensure that your repository/branch is connected to travis-ci.com
* Ensure that your repository/branch is connected to a dyno at heroku.com
* Create a README.md that includes:
  * travis badge
  * a summary of the requirements
  * any setup instructions
  * any usage notes
  * ways to test & prove all of the lab requirements
    * postman/API usage instuctions and expectations for backend services
    * step by step intsructions for REACT apps.
* Submit on canvas:
  * a question and observation
  * how long you spent (relative to your estimate)
  * link to your pull request
  * link to your build at travis-ci URL
  * Heroku Server URL

## Configuration
Configure the root of your code folder with the following files and directories. Thoughfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.env** - contains env variables (should be git ignored)
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file 
* **.eslintrc** - contains the course linter configuratoin
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint (eslint **/*.js)
  * create a `test` script for running tests
  * create a `start` script for running your server
* **index.js** - the entry point for your application
* **src/** - contains your core application files and folders
* **src/app.js** - (or main.js) contains your core application bootstrap
* **src/lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## For ReactJS Applications
To deploy a React App on Heroku, you need to do the following
* Deploy a static express application pointed to your "public" folder
* Add a postinstall build script in your package.json that will build your react app
 * `"postinstall": "npm run build"`
