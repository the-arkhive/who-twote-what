# Who Twote What (working title)

## Requirements
- USE TWITTER API
### Part 1 - Home page
- takes two twitter handles as input
- generates unique URL
- goes to game for entered handles
### Part 2 - The Game
- selects 10 random tweets from combined pool
- displays tweet
- provides buttons with names and profile pic
- checks for correct tracks score
- displays answer
### Part 3 - End Screen
- personal score
- share score on twitter button
- play again


## NOTES
- unique, sharable url for each set of usernames
- check for private profile
- get only text tweets
- ignore photo+link+retweets



## Data Flow
- get names from input
- store names
- use names with Twitter API search
- get all text tweets (Might want to select 10 at this point incase users have many tweets)
- get 10 random tweets store + rm extra (would make playing again easier if we kept all until the page was closed)
- store score



## Work Flow Plan
- learn React.js <del>and sort of JS to begin with</del>
- outline JS needs
- <del>learn to integrate AirTable base with React.js</del>
- learn URL params control
- Twitter API integration
- Tweet filtering
- Tweet randomization


## Reach Goals
- Copy to clipboard button
- harder modes
  - more than 2 users
  - more than 10 tweets
  - AIRTABLE for more tweets
- tweet history