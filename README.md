# Weather_Website

After learning concepts of NodeJs, I have made this Weather Website which can be used to know the weather of perticular city and make plan your trip accordingly.

Features
- This website consist of 3 pages - Home, AboutMe & Weather Page.
- In Home page some images are inserted to show carousel effect
- In weather page, current weather of any city can be searched. 
- If one enters invalid city then error will be thrown.
- If one keeps city name empty and press on search then alert message will be shownn.
- In about page, one can see details about me and can go to my LinkedIn profile.
- If one tries to search any invalid page then 404 Error page will be shown.

Used Technologies - NodeJs, ExpressJs, Handlebars & CSS

To fetch weather data, API provided by OpenWeather.
With Async wait, Data is collected and reflected on website.

Instead of writing repeatative code, I have made components partially and then showed it into Website.

In buttons, I have set Event listners to do perticular task. (i.e. - After user enters city name,it performs validations and reflects data on website)

I have deployed this project on heroku, To visit Website please click here - https://weahter-website.herokuapp.com/
