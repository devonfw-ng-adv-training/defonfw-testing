## Getting started

### Install prerequisites

#### Git
Check if you have a Git client already installed:

```
git --version
```

If your OS can not recognize this command, install Git. For details please refer to [this page](http://git-scm.com).
When installing under Windows, please make sure you check the following option:

* Use git from Windows command prompt

#### Node.js

All examples have been implemented using [Node.js](https://nodejs.org/) `12.13.0`. 

It is highly recommended to install the [Node Version Manager](https://github.com/creationix/nvm) which manages multiple active
[Node.js](https://nodejs.org/) versions on your machine. The latest windows version of nvm can be downloaded [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.6/nvm-setup.zip).

Having the [Node Version Manager](https://github.com/creationix/nvm) installed, install Node.js:

```
nvm install 12.13.0
```

and set it to be used:

```
nvm use 12.13.0
```

### Clone, install dependencies and run

Clone this repository and go to the `0-start` branch:
```
git clone https://github.com/xxx -b 0-start
```

Install dependencies using [npm](https://www.npmjs.com/):
```
cd pwa
npm install
```
This may take several minutes...

Start the application:
```
npm start
```

This npm script starts the backend server on port `9000` and the frontend development server on port `4200`
which proxies all REST calls to the backend server. Go to [http://localhost:4200](http://localhost:4200)  
