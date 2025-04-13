# Food Recipe App: Fetching Recipes from Edamam API

Component Structure
This application features a dedicated component to display food recipes. The recipes are fetched from the Edamam API and stored in a component structure using React hooks, including useState and useEffect.

## Fetching Food Recipes: Setting Up the Edamam API

The Edamam platform provides a reliable Recipe Search API to retrieve food recipes. Below is a step-by-step guide to obtaining the necessary API keys for integration:

1. Sign Up on Edamam:-
  1.1 Visit Edamam Developer Portal
  1.2 Create an account by signing up using your email.

2. Access the APIs Section
  --After logging in, navigate to the APIs section in the top navigation bar.
  --Click on Start Now under the Developer section.
  --Go to the Dashboard located at the top-right corner of the page.
  --Select Application from the left-side menu.
  --Locate the Recipe Search API: In the Application section, find the option labeled "Recipe Search API."
  --Click on View to access details for this API.

3. Retrieve Application ID and Key
  --Copy your Application ID and Application Key  from the Recipe Search API section and get the UserID/Username.
  --Store these securely, .env file as they'll be required for API integration within our app.

  VITE_API_KEY= "Paste your Key"
  VITE_API_ID= "Paste your Id"
  VITE_USER_ID= "Paste your user Id"  # Replace with your Edamam user ID
