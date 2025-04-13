# Food Recipe App: Fetching Recipes from Edamam API

Component Structure
This application features a dedicated component to display food recipes. The recipes are fetched from the Edamam API and stored in a component structure using React hooks, including useState and useEffect.

## Fetching Food Recipes: Setting Up the Edamam API

The Edamam platform provides a reliable Recipe Search API to retrieve food recipes. Below is a step-by-step guide to obtaining the necessary API keys for integration:

### Sign Up on Edamam:-
  - Visit Edamam Developer Portal
  - Create an account by signing up using your email.

#### Access the APIs Section
  - After logging in, navigate to the APIs section in the top navigation bar.
  - Click on Start Now under the Developer section.
  - Go to the Dashboard located at the top-right corner of the page.
  - Select Application from the left-side menu.
  - Locate the Recipe Search API: In the Application section, find the option labeled "Recipe Search API."
  - Click on View to access details for this API.

##### Retrieve Application ID and Key
  - Copy your Application ID and Application Key  from the Recipe Search API section and get the UserID/Username.
  - Store these securely, .env file as they'll be required for API integration within our app.

  - VITE_API_KEY= "Paste your Key"
  - VITE_API_ID= "Paste your Id"
  - VITE_USER_ID= "Paste your user Id"  # Replace with your Edamam user ID


Here's how to include this information in your GitHub project documentation:

---

###### Steps to Run the Application

To launch the Food Recipe Finder application on your local machine, follow these steps:

1. **Install All Dependencies**:
   Run the following command in the terminal from the root directory of your project to install all the required packages:
   ```bash
   npm install
   ```

2. **Start the Application**:
   Use the following command to start the development server:
   ```bash
   npm start
   ```

3. **Access the Application**:
   Once the server is up and running, open your browser and navigate to:
   [http://localhost:3000/](http://localhost:3000/), check for the port number
   
   You'll see the application interface displaying the food recipes fetched from the API.

-
