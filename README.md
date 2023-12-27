# thesis-project
*setup tasks**:

- [ ] Run `npm install` inside the `react-client` directory to install dependencies for your frontend.
- [ ] Run `npm install` inside the `backEnd` directory to install dependencies for your backend.
- [ ] Ensure that the MongoDB process is running on your computer (`mongod`) if you are going to use mongoDb.
- [ ] Ensure that the Mysql process is running on your computer if you are going to use MYSQL.
- [ ] If you chose to use the MongoDB:
   
   - run this command inside the `backEnd` directory: ` npm install mongoose `

   - Create the database by running `npm run db:setup` from inside the `backEnd` directory. Make sure you check if the database was successfully seeded using MongoDBCompass or any tool of your choice. It should contain the 6 products in the `data.json` file.

    in the index.js uncomment the appropriate database you are using.
  - start your application with two commands, `npm start` from inside the `react-client` directory and `npm start` from inside the `backEnd` directory , in two separate terminal tabs.
  - If you are wondering your application has two package.json files and seperate node modules.
  - If successfully the react client will be opened automatically in your browser and you server should be listening on port 5000
  - first thing you need to do is to explore all the files in both react-client and backend directories and explore the application on your browser.

## Available Resources

* [ReactJS Docs](https://facebook.github.io/react/)
* [Webpack Docs](https://webpack.github.io/docs/)
* [Babel Docs](https://babeljs.io/docs/setup/)
* [NodeJS Docs](https://nodejs.org/)
* [ExpressJS Docs](https://expressjs.com/)
* [MongoDB docs](https://docs.mongodb.com/)
* [Mongoose docs](http://mongoosejs.com/)
* Docs for any npm packages you might use
* [MDN](https://developer.mozilla.org/)
* [Stack Overflow](http://stackoverflow.com/)
* [Google Search](https://google.com) to search for the correct page on any of the documentation above


# .env file :

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
JWT_SECRET=mysecret

# Email credentials for Nodemailer
EMAIL_USER= your @ email
EMAIL_PASS= your password APP
RECEIVING_EMAIL= your @ reiciving email 




