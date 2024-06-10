# wanderwise
## Description

LINK TO LIVE SITE: https://wanderwise-project.vercel.app/

Established in 2024, WanderWise is designed for those who love to travel and want to have an application to make the planning process a little bit easier! When you sign up for the app, you will have the ability to "create a trip", where you can input your destination city, desired travel dates, travel budgets, and more, in order to get the planning process going. Then, utilizing the search engines provided by Yelp, Trip Advisor, and Amadeus, you will be able to search for restaurants, activities, hotels, and even flights all in one centralized place! Plan your dream vacation and indulge in all your wanderlust fantasies, now easier than ever! You can also add trip notes to further personalize and strategize your planning!

## Screenshots
<img width="1288" alt="Screenshot 2024-06-09 at 10 06 55 PM" src="https://github.com/psantos2107/wanderwise/assets/146752384/cbb73e39-4b53-458f-a7ee-0d732c46fd51">
<img width="1289" alt="Screenshot 2024-06-09 at 10 08 49 PM" src="https://github.com/psantos2107/wanderwise/assets/146752384/98df0154-8837-4ea5-a1fa-53990751dca0">
<img width="1305" alt="Screenshot 2024-06-09 at 10 08 11 PM" src="https://github.com/psantos2107/wanderwise/assets/146752384/34a5064d-62d3-459d-a5a8-ed00bce22abb">
<img width="1286" alt="Screenshot 2024-06-09 at 10 07 39 PM" src="https://github.com/psantos2107/wanderwise/assets/146752384/53bab0bb-1e8e-46ec-82fe-7f192019b929">

## Trello Board

Link: https://trello.com/b/v8qebKwf/wanderwise

## Installation Instructions:

1. SET UP DATABASE AND OBTAIN EXTERNAL API KEYS
- Obtain an account with Supabase (via this link: https://supabase.com/), and obtain a supabase URL and supbase key, both of which are to be stored in your env.local file as SUPABASE_URL and SUPABASE_KEY, respectively.
- Navigate to (https://docs.developer.yelp.com/) and follow the steps to obtain a Yelp Developer API key. Store the Yelp developer API key into a variable in your env.local file called YELP_API_KEY.
- Navigate to (https://www.tripadvisor.com/developers) and follow the steps to obtain a Trip Advisor API Key. Store the TripAdvisor Key into a variable in env.local called TRIP_ADVISOR_KEY
- Navigate to (https://developers.amadeus.com/) and follow the steps to obtain an Amadeus API key and an Amadeus Secret key. Store both into variables in env.local called AMADEUS_API_KEY and AMADEUS_API_SECRET respectively.

2. CODE SET-UP
- After obtaining your API keys and setting up your DB, please fork and clone this repo.
- Run 'npm install' in the command line for this repo to install all necessary node modules. Make sure all environment variables mentioned above are placed in the .env.local file 
```
npm install
```
- Read through these docs in the Auth.js website (aka NextAuth v5) -> https://authjs.dev/getting-started/authentication/oauth) in order to set up Google OAuth for your project. In order to set up, you will also need an account with google in order to access their developer console (https://console.developers.google.com/).
- From the Google developer console, if you follow the proper steps to allow for OAuth, you will obtain a Client ID and Client secret key. Please store these in your .env.local file as AUTH_GOOGLE_ID and AUTH_GOOGLE_SECRET, respectively.
- In order for Authjs/NextAuth and other auth middleware to be implemented in your project, you must also include a NEXTAUTH_URL environment variable. This environment variable should be the hostname for your project. If you are in developer mode, it will likely be localhost. If you're in production, this will change based on your domain name.
- Lastly, you must include an NEXTAUTH_SECRET key. This key is used to encrypt the NextAuth.js JWT, and to hash email verification tokens. You may set it to whatever you'd like. Just ensure that is secure.

Once you have these steps down, you should be ready to go.
  
## Technologies Used
- Front-End: NextJS (app router) with React
- Back-End: NextJS (app router) with React
- Auth: NextAuth.js v5, implementing both OAuth (via Google) and credential-based authorization and authentication.
- Database: Supabase (SQL Database)
- Deployment: Vercel
- TailwindCSS (for styling)

## External APIs and other Dependencies
- Yelp Developer API: To obtain information on attractions/activities and restaurants
- TripAdvisor API: To obtain information on hotels
- Amadeus API: To obtain information on flights
- Heroicons: To obtain home icon in the header
- Aircodes: To extract airline information and IATA code information based on city
- BCrypt: For password hashing for credential-based authorization
- Countries-List: To obtain information on the world's countries
- React-Day-Picker: To display a calendar for when the user picks dates for their trips

## Other Features:
- Implementation of Google OAuth and credential-based authentication/authorization system utilizing the latest version (version 5) of NextAuth (soon to be Auth.js)
- Successul use of image optimizations via NextJS' Image component
- Utilization of NextJS file conventions (such as page.js, layout.js, error.js, loading.js, etc) in order to streamline loading states during page transitions, create error boundaries when errors are thrown, and more
- Use of three external APIs that users can query right from the app in order to add on to a user's trip plan
- Skillful use of NextJS' server components, server actions, and client components in order to implement full CRUD for user trips

## View My Previous Projects!
POKEMON TRIVIA (Trivia game based on Pokemon knowledge)
- Live Site: https://psantos2107.github.io/pokemon-trivia-game
- Github Repo: https://github.com/psantos2107/pokemon-trivia-game)
  
SWEATSHARE (Fitness Application)
- Live Site: https://sweatshare-6d68a7df5043.herokuapp.com
- Github Repo: https://github.com/psantos2107/sweat-share)
  
ORDER EATZ (Mobile Food Ordering Application) - Group Project
- Live Site: https://order-eatz.netlify.app/
- Github Repo: https://github.com/psantos2107/order-eatz-frontend

## Contact
- Email: paul.santos2107@gmail.com
- LinkedIn: https://www.linkedin.com/in/paulsantos2107/

Feel free to reach out if you have questions, suggestions, or just want to chat!

## Acknowledgements
- Jonas Schmedtmann: Creator of "The Ultimate React Course 2024: React, Next.js, Redux & More", for creating the absolute best tutorial I could have ever asked for about NextJS (and about React in general)
- ChatGPT: for debugging purposes
- StackOverflow- For helping me answer those debugging/deployment questions that chatGPT couldn't

