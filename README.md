# Getting Started with Create React App

# NAME:  UserConnect

## Description
  In this project, I  will build a web application using ReactJS that allows users to manage a list of users. The application's main features include fetching and displaying a list of users from an API, along with basic user management functionalities such as adding, deleting, and updating user information.


## Project Structure

This project follows a structured  layout to keep the code organized and maintainable. Below is an overview of the main directories and their purposes:

- **src/**
  - **Components/**: Contains React components used throughout the application.
  - **Users/**: It contains components related to user management and styling.
     - **UserList.js**: It used to display a list of users fetched from the API. It handles the rendering and presentation of user data.
     - **style.css**: The CSS file associated with the UserList component, responsible for styling the appearance of the user list and its elements.

  - **Utilities/**: Houses utility functions and API-related logic.
    - **utils.js**: Includes functions for API communication and data manipulation.
  - **App.js**: The main application component that manages routing and global state.
  - **index.js**: Entry point for rendering the React application.
  - 

## Getting Started

To get started with the project, follow these steps:

### Clone the Repository

git clone  https://github.com/MariaGKimani/Users_Connect

cd  `Users_Connect`

### `npm install`
This will install the necessary packages as specified in the package.json file.

 ## Install Axios
You'll need Axios to make HTTP requests
### `npm install axios`


In the project directory, you can run.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.




## Contributions
If you'd like to contribute to the project, please follow these steps:

## Fork the repository.

Create a new branch: git checkout -b feature/your-feature-name
Make your changes and commit them: git commit -m 'Add some feature'
Push to the branch: git push origin feature/your-feature-name
Create a pull request.


## License
This project is licensed under the MIT License.