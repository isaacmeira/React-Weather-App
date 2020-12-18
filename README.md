# React-Weather-App

React app to view the weather on the spot and at the exact time based on geolocation using OpenWeather Api.


# Folder architecture

all of our config files we have in root.

in Src, we have our app files, i will explain bellow what you will find in each folder:

Assets : The images and vector files of our project.

Components : The application dummy components, these componets only receive the data, we dont use any business rule in it. We Have an Button, one Information Box and one component for LoCotaion error.

Helpers : We use some tools to help us to improve our coding style and avoiding repetition, in this project we have helpers to capitalize the fisrt letter in one string, and another to convert date-times to more 'normal'.

Hooks: Here we going to put our context´s or mobx or any state-manager that we gonna use, in this project, is unecessay because the size.

Pages : Here we have the pages of our App, in this app we have only one page/route, but, if were had more, we would put it here.

Services : In the services we have our API calls.

Styles : Here we have a Global style, basically one CSS resetter.

Index : Our Main file.

Routes > Here we have our routers.

In Each folder, in components and pages, you will see the SCSS files, i used SASS for the whole project, using localScoped Style technique.



# How To install : 

First of all you need Yarn and NodeJs , you can install at `https://yarnpkg.com/` and `https://nodejs.org/en/`.

After That, clone this repo, navigate to the main folder, and put a `yarn` command in your terminal to install the projects dependencies.

Now, we nedd to get our API credential, rename the file `.env.exemple` to `.env` and get your api key at `https://openweathermap.org/api`.

And, it´s done ! Now, just run our project, typing `yarn start` in your terminal, after that, your browser will change to `localhost:3000`

# Welcome page

![Welcome](https://github.com/isaacmeira/React-Weather-App/blob/main/src/Assets/Exemples/1.png?raw=true)

At this moment you need to allow your location access in your browser, we need the location to show to you the weather in your location.

# Weather Page

![Main](https://github.com/isaacmeira/React-Weather-App/blob/main/src/Assets/Exemples/2.png?raw=true)

At this page, you can see many informations about your weather such as the termic sensation, the minimun temperature, the temperature, also, we have a button that you can update the informations anytime you want.

The license of this software is MIT, so, fell free to use wharever you want.

Best Regards
