# To-Do List App

A simple To-Do List application built with React and a mock API.

## Architecture and Technologies Used

### Frontend
- **React**: JavaScript library for building user interfaces.
- **CSS**: Styling for the application.
- **HTML**: Markup language for the structure of the web pages.

### Backend (Mock API)
- **JSON Server**: A simple mock API used for development and testing.

### Deployment
- **GitHub Pages**: Hosting the application for easy access and demonstration.

## Development Setup

### Prerequisites
- **Node.js**: Ensure you have Node.js installed.
- **npm**: Node package manager.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/HamO001/To-Do-List.app.git
    cd To-Do-List.app/my-todo-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Start the mock API server:
    ```bash
    npm run server
    ```

### Deployment to GitHub Pages
1. Ensure the `homepage` field in `package.json` is set to `"https://HamO001.github.io/To-Do-List.app"`.

2. Add the following scripts to `package.json`:
    ```json
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
    ```

3. Deploy the application:
    ```bash
    npm run deploy
    ```

## Usage
1. Open the application in your browser: `http://localhost:3000`
2. The mock API is available at: `http://localhost:5000`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

