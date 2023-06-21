### What I have done so far

1. Create a microservice for todo list.
2. Connection to the MongoDB using mongoose.
3. Add a Todo schema and model.
4. Add a full CRUD operations.
5. Add a new notification document (another microservice) while adding a new todo.
6. Using with axios package to call to notification service.
7. using with express-async-handler package which is a middleware for error handling for express.
8. Using dotenv package to store a .env file variables to process.env object.
9. Using nodemon for auto compile when saving.

### What I have not done yet

1. Using a message broker (style RabbitMQ) for communication between the notification microservice and more services if would have.
2. I know it is not a requirement but no users authentication so todo is a generic for everyone.

### Guidelines

1. Add .env file and set:
   - PORT - for running the api.
   - CONNECTION_STRING - for mongoDB.
   - NOTIFICATION_ENDPOINT - the endpoint for the notification service.
2. Run "npm install"
3. Run "npm run start:dev"
