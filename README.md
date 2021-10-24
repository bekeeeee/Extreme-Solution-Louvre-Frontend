# Online Louvre

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bekeeeee/Extreme-Solution-Louvre-Backend)

# Description

- Create login screen.
- Create admin dashboard.
- Create gallery available to login users

# Table of Contents

- [Installation](#installation)

- [Getting started](#gettinStarted)

- [Tests](#tests)

- [Updates](#updates)

- [License](#license)

# Installation

The following necessary dependencies must be installed to run the application properly: nodejs and typescript

# Getting started

- Clone the repository

```
git clone  https://github.com/bekeeeee/Extreme-Solution-Louvre-Frontend
```

- Install dependencies

```
npm install
```

- Build and run the project

```
npm start
```

Navigate to `http://localhost:3000`

- Screens Document

http://localhost:3000/login

- ![alt text](https://github.com/bekeeeee/Extreme-Solution-Louvre-Frontend/src/Assets/gallery/Login.png?raw=true)

post `http://localhost:5000/api/v1/user` to signup

post `http://localhost:5000/api/v1/user/login` to login

get `http://localhost:5000/api/v1/user` to get all users

get `http://localhost:5000/api/v1/user/currentUser` to get currentUser

get `http://localhost:5000/api/v1/user/signout` to signout

http://localhost:5000/api/v1/art

post `http://localhost:5000/api/v1/art` to create an art

get `http://localhost:5000/api/v1/art` to get all arts

patch `http://localhost:5000/api/v1/art/:id` to edit an art

delete `http://localhost:5000/api/v1/art/:id` to delete an art

## Testing

The tests are written in Jest.

- Run tests files

```
npm run test

```

## Updates

In the next version we implement forgot password, reset password and using nodemailer.

# License

This project is license under the MIT license.
