
# Farida's Blog Web App

Farida's Blog Web App is a dynamic blog platform built with Node.js, Express.js, and EJS. It allows users to create, read, update, and delete (CRUD) blog posts, providing a seamless and responsive user experience.

## Features

- **Post Creation**: Users can create new blog posts with a title, content, and an image URL.
- **Post Viewing**: All blog posts are displayed on the homepage.
- **Post Editing**: Users can update existing blog posts.
- **Post Deletion**: Users can delete posts they no longer need.
- **Responsive Design**: The app is styled for optimal viewing on both desktop and mobile devices.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Frontend**: HTML, CSS (with Bootstrap for the footer), JavaScript
- **Styling**: Custom CSS for the navbar, forms, and blog layout
- **Middleware**: Method-Override for handling PUT and DELETE requests

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:justshfarida/Blog-Web-App.git
   cd Blog-Web-App
   ```

2. **Install Dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the server with:
   ```bash
   npm start
   ```
   or, if using `nodemon`:
   ```bash
   npx nodemon index.js
   ```

4. **Access the App**:
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
Blog-Web-App/
│
├── views/                  # EJS templates
│   ├── partials/           # Reusable partials (e.g., navbar, footer)
│   ├── about.ejs           # About page
│   ├── contact.ejs         # Contact page
│   ├── index.ejs           # Homepage
│   ├── update.ejs          # Update page
│
├── public/                 # Static files
│   ├── styles/             # CSS files
│       ├── navbar.css      # Navbar styling
│       ├── styles.css      # General styling
│       ├── footer.css      # Footer styling
│   ├── images/             # Static images (if any)
│
├── node_modules/           # Node.js dependencies
│
├── index.js                # Main server file
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
├── README.md               # Project documentation
```

## Routes

| HTTP Method | Route          | Description                  |
|-------------|----------------|------------------------------|
| `GET`       | `/`            | Displays the homepage with all blog posts. |
| `GET`       | `/about`       | Displays the About page.     |
| `GET`       | `/contact`     | Displays the Contact page.   |
| `GET`       | `/form`        | Displays the form to create a new blog. |
| `POST`      | `/create`      | Handles blog creation.       |
| `GET`       | `/update/:id`  | Displays the form to edit a specific blog. |
| `PUT`       | `/update/:id`  | Handles blog updates.        |
| `GET`       | `/delete/:id`  | Handles blog deletion.       |

## Deployment

To deploy the app on a platform like [Render](https://render.com/) or [Heroku](https://www.heroku.com/), ensure you have the following setup:

1. **Create a Procfile**:
   Add this line to a file named `Procfile` in the root directory:
   ```
   web: node index.js
   ```

2. **Set the Start Script**:
   Ensure your `package.json` has a `start` script:
   ```json
   "scripts": {
     "start": "node index.js"
   }
   ```

3. **Push to the Deployment Platform**.

## Future Enhancements

- Add user authentication for secure blog management.
- Implement a database (e.g., MongoDB) to persist blog posts.
- Add support for categories and tags.
- Allow users to upload images instead of providing URLs.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request with your improvements.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to contact me:

- **GitHub**: [justshfarida](https://github.com/justshfarida)
- **Email**: shakikhanlifarida@gmail.com
