# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## QA part:
A. The most challenging part is deploy part. Cause I have not used heroku before. 

Solution: I just watch some videos teaching how to deploy application on heroku and follow the steps to deploy the app. However, I got some issues when I do deployment. As I use npm to install dependencies, I have two locakfile (package-lock.json and yarn.lock) in my project. just delete one of them.

B. If taken again. do investgation before use. 


## Demo link:

You can view the project thr: `https://round2-task.herokuapp.com/`

This project deploy on heroku platform.


Tips:

Before you deploy your project on the heroku, please make sure there is only one lockfile in your project.

If you use `npm` to install dependencies, please remove yarn.lock file. for the yarn installation ,please remove package-lock.json file.

Because heroku cannot decide which lockfile would be used to deploy, can it will return an error when you run deploy command on heroku.


## Available Scripts


Before running your project, please run `npm install` command.

Besides, please create a new file named `.env` under the root directory and add below data in the .env file.

`REACT_APP_APIKEY= your apikey number`

Your apikey numer can be get from the AlphaVantage, you can claim your free api key through `https://www.alphavantage.co/support/#api-key`


After install dependencies and add your own apikey, you can run the project.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.





## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# round2-task
# round2-task
