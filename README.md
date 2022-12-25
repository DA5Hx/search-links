# Search-Links

## Link to deployed site: [Site](https://search-links.netlify.app)

## Setting up Locally:

* Clone or download the repository and then run the following command in the terminal to install the dependencies

```console
npm install
```

* Go to the following link to setup the Docker file for Meilisearch on the railwayapp: [Railway](https://railway.app/new/template/TXxa09?referralCode=YltNo3)
* Remember to change the api key to something secure and update the same in the App.js file
* Now, run the following command to host the site locally:

```console
npm run dev
```

And the site will now be live on port 5000 to test

## Implementation

* Meilisearch, an Open Source software, is used to query the searches on given data
* The Docker file for Meilisearch is setup using railway.app on port 7700
* React framework is used to create the Frontend UI of the app
* Material UI and Tailwind CSS is mainly used for styling the components
* If the data is not indexed on the Meilisearch, it is indexed when the app is launched
* Once the data is indexed, we can search whatever user inputs and display using Meilisearch 'search' function

