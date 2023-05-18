# HumbleNumble 
(Developer:  Deirdre McCarthy, May 2023)

# Table of Contents:
1. [About](#about)
2. [Project Goals: ](#project-goals)
    1. [UX Design - Strategy ](#ux-design-strategy) 
    2. [UX Design - Strategy - Competitor Portals](#ux-design-strategy-analysis-of-competitor-offerings)
    3. [UX Design - Strategy - Target Audience](#ux-design-strategy-target-audience)
3. [UX Design - Scope](#ux-design-scope)
    1. [UX Design - Scope - User Requirements and Expectations](#ux-design-scope-user-requirements-and-expectations)
    2. [UX Design - Scope - Data](#ux-design-scope-data)
    3. [UX Design - Scope - Viewing Device](#ux-design-scope-viewing-device)
4. [User goals/ user stories: ](#user-goals-user-stories)
    1. [Site Owner Goals](#site-owner-goals)
    2. [First-time User Goals](#first-time-user-goals)
    3. [Returning User Goals](#returning-user-goals)
    4. [Other stakeholder Goals](#other-stakeholder-goals)
    5. [Future Site owner and Administrator Goals](#future-site-owner-and-administrator-goals)
5. [Further UX Design: ](#ux-design-decisions)
    1. [Skeleton - Wireframes; ](#wireframes)
    2. [Surface - Fonts; ](#fonts-chosen)
    3. [Surface - Colours](#colour-scheme)
    4. [Surface - Imagery](#design-images)
6. [Features](#features)
    1. [Included](#features-in-scope)
    2. [Future Development](#features-left-to-implement)
    3. [Requirements Tracing](#RTM)
7. [Technology](#technologies)
    1. [Languages](#langugages)
    2. [Frameworks and Tools](#frameworks--tools)
8. [Validation](#validation)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Multi-device Testing](#multi-device-testing)
    6. [Multi-browser Testing](#multi-browser-testing)
    7. [Testing user stories](#testing-user-stories)
    6. [Feature testing(#rtm-proof)]
    6. [Unfixed Bugs](#unfixed-bugs)
9. [Accessibility](#accessibility)
10. [Performance](#performance)
11. [Deployment](#deployment)
12. [Credits](#credits)
    1. [Content](#content)
    2. [Media](#media)
    3. [Code](#code)
    4. [References](#references)
    5. [Acknowledgements](#acknowledgements)

## About
---------
This website offers the user a fun way to learn about how to problem-solve for a particular context, using a game that many are already familiar with.
Many people worldwide take part in the 'Wordle' game, which offers a chance to guess a 5-letter english-language word in 6 tries.  The user is presented with a grid and must choose from a panel showing the letters of the alphabet (26 possible characters), to form a dictionary-recognised english word (ie it is logically consistent).  On pressing ENTER, the user's guess is validated, and each letter of their grid entry is colour coded as 
* grey - this guessed letter doesnt exist within the solution; 
* orange - the guessed letter exists in the solution, but not at the guessed position;
* green - the guessed letter exists in the solution, and was guessed at the correct position.
<br>
The panel of letters is also updated with the appropriate colour (grey, orange, green) for the chosen letter.
(Note that sometimes a word will have a double letter in which case a second guess including this letter will result in a further orange/green for the letter - I think in this case, on the panel it shows green).


So.... Humble Numble is a version of Wordle applied to numbers.  In this case there is an equation on the left hand side, the user is presented with a six-row grid to take guesses, and the user must choose from numbers 1..20 and simple operators +-*/ to arrive at a given target number.  The 'solution' is a predefined equation, e.g. <br>
13+5+6=24 <br>
5+3-6=2 <br>
<br>_
i.e. the format is <num1> <op1> <num2> <op2> <num3> = target
    

Any guessed expression must be 'logically consistent' ie it must evaluate to the target number.  (an error message 'incorrect calc' will pop up if an inconsistent equation is entered)
Evaluation is left-to-right (oh no its not, got to use PEMDAS - well actually MDAS - calculate multiply divide add subtract, therefore <br>
13+6/3 is evaluated as 13+(6/3), equating to 13+2 evaluating to 15. <br>
20+12*6 is evaluated as 20+(12*6)=20+ 72=92 <br>
6*12+20 is evaluated as (6*12)+20 = 72+20 = 92 ie gives the same result <br>
as, of course, will 12*6+20

If an equation contained multiply and divide, the same result is obtained regardless of the sequence of the operations:
6* 10 / 5 = (6 *10) / 5 = 60 / 5 = 12 (actually this results in the same output in either case), because we are limited to only two operators within our equations, so no confusion is caused with subsequent add or subtract.

<ul> Rules:  
    <li> All target results will be integers, ie no decimals or fractions.   This makes it a little easier to guess. </li>
    <li> Each equation contains 3 numbers (operands) and 2 operators and must calculate to the target number.  A guess which doesn't calculate correctly will be accepted (or wjhas been developed ill it - lets wait until the final version to discover!!)</li>
    
    



### Responsive Mockup
https://ui.dev/amiresponsive?url=https://deemccart.github.io/CI_PP2_HumbleNumble/

### Live webpage link
https://deemccart.github.io/CI_PP2_HumbleNumble

## Project Goals
----------------
1. To produce a 6-try numbers-based game. 
2. Using a mobile-first development development approach.  
3. Which uses the capabilities of HTML, CSS and Javascript.
4. And is possible to play with a reasonable chance of success.
  
### UX Design Strategy
The aim of this specific website is develop a Numble game which can be played in simple form

The audience is:<br>
a. People who enjoy puzzle-solving
b. People who already play Wordle and are familiar with the user interface (e.g. grey, orange, green guess-letter evaluation; 6 tries,  grid layout)
c. People who want to have a reliable consistent experience through out the game (in other words, they want an opportunity to finish the game by reaching the end, and they want to be able to trust the process (ie they can understand how they move forward or backwards, and they dont feel it is unfair or impossible to complete).
d. People who like to practice their mathametical skills

### UX Design Strategy Analysis - Existing Numble Games
https://thenumble.app/ 
https://numble.wtf 
https://numble.game 
https://numble.win
https://numble.online
https://numble (wikipedia)

(Comparative analysis (jpg or png) to follow here first impressions are that each of these games is a bit more complex and wider ranging than Humble Numble) 

A competitive analysis of these offerings can be seen here https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/Strategy-competitive-analysis.pdf
<br>
From this analysis, a set of possible requirements was identified for a new portal.
<br><br>
<br>
<br>
<br>

### UX Design Strategy Target Audience
* Game players
* who enjoy mathematical puzzles
* and want to have a bit of fun doing it

## UX Design Scope
----------------

### UX Design Scope User Requirements and Expectations
(To be revisited...)
/The basic requirement for users is to have access to a 'fair' game where they have a possibility of reaching the goal.

* The target audience needs to complete a process/set of tasks
* They have a checklist which contains many activities, there are many things that can go wrong (or right)
* The game helps them to complete their real-life tasks by warning them of potential pitfalls and alerting them to opportunities
* The game is a fun way of applying simple mathematical principles

### UX Design Scope - Data
A set of calculations needed to be pre-loaded which were consistent with game rules (e.g. operator numbers not > 20)

## User Goals/ User Stories
----------------

### Site owner Goals
* SO_01 As site owner I want to provide a fun, satisfying game
* SO_02 As site owner I want to ebmbed a learning experience into this game
* SO_03 As site owner I want to increase the body of knowledge in the area of .....
*
### First-time User Goals
* FTU_01 I am curious about what this does, and may just want to play a game
* FTU_02 As a first time user I would like to be able to navigate the site and quickly learn its functionality
* FTU_03 I might be curious about the 'applied' options (think about what to call these) and wish to explore these
* FTU_04 As a first time user I want to learn about the topic, but in an accessible, fun way.

### Returning User Goals
* RU_01 As a returning user I wish to play the game, just because I enjoy it
* RU_02 As a returning user I want to 'beat the computer'
* RU_02 As a returning user I want to maintain/ improve my winning streak
* RU_03 As a returning user I might wish to suggest questions to add into the databank
*  
### Other stakeholder Goals
* OT_01 As a parent I might wish my child would STOP PLAYING THOSE BLOODY COMPUTER GAMES AND DO YOUR HOMEWORK
* OT_02 As an educator I might recognise the opportunity to build in some learning
* OT_03 As an educator I might wish to design questions and suporting information for the user (maybe along the lines of question - answer - suporting information )

### Future Site owner and Administrator Goals
* FUT_01 NB In the future, the current site owner role may evolve into two roles - Site Owner and Site Administrator.  One or more Site Administrators would take on the roles listed above for specific geographic territories, and a new Site Owner role with overall responsibilities for hosting a bank of trails websites (and possibly for digitising new walks at the site Administrators request)    
* FUT_02 In order to process user feedback, a future rule of site moderator (Administrator) will be needed to review and approve submitted reviews and photos, and add them to the trails website databank.

## UX Design Decisions
----------------

### Wireframes
<details><summary>Landing Page</summary>
The landing page WF is shown here with 4 sceen resolutions as I found when testing that the Motorola G(7) was truncating to the right hand side for 2-column pictures display, therefore I added an additional responsiveness section to cater for 320-400 pixel screen size.   This was really just an issue for the landing page, the remaining screens sized OK for the content.
  
<img src="https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/WF01-landing-page.jpg">
</details>

<details><summary>Walk Details</summary>
<img src="https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/WF02-Walk-Details.jpg">
</details>

<details><summary>Gallery</summary>
<img src="https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/WF03-gallery.jpg">
</details>

<details><summary>Feedback</summary>
<img src="https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/WF04-feedback.jpg">
>
</details>


### Fonts Chosen
The fonts are deliberately selected to reflect the Worldle screen appearance.
In the Worldle application, a proprietary NY Times font is now used for the heading 'Wordle' (NYT Karnak Condensed), with Helventica Sans for the grid and button text. 
A resonably close match to this font, which is widely available on a range of devices, is the the Google bebas Neue font.

(Remove this....)  Libre Franklin and Libre Baskerville are chosen because they are readable on large screens or smaller mobile devices.  This font is recommended for sites that may be content-heavy but which are regarded as fun friendly and approachable/inclusive.  These are identified by Google as good pairing.
Fallback fronts are used in both cases

### Colour Scheme 
The colour combinations will be driven by the Wordle game for consistency and to ease the user learning experience
Note that world includes 3 colour options (choosable from settings)
* Normal mode (dark letters on white background)
* Dark mode (white letters/grid on dark background)
* High-contrast mode - background colours maintained as above however the selection colours are changed as follows:
*   Orange replaced by cyan blue
*   Grey replaced by ??
*   Green replaced by ??
   
The choice of colours for Humble Numble is very much in accordance with user story XX - consistent with World so as to speed the learning process and encourage the focus on the game content, rather than on how to use it.

![Colours - dark mode normal contrast](./docs/readme_images/ux-design-choices-accessing-style-in-google-maps.jpg?raw=true "Humble Numble dark mode normal contrast")
![Colours - dark mode high contrast](./docs/readme_images/ux-design-choices-accessing-style-in-google-maps.jpg?raw=true "Humble Numble dark mode high contrast")


### Design Images
This site has very few images as the focus is on the game content.

### Design Images - Icons and Symbols

Certain icons and symbols used for quicklinks e.g. ? for About page, graphy symbol for Stats page, cog symbol for settings page. 


## Features 
 
### F01 
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F02 
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")


### F03 
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F04 
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F05 
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F06 
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F07
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F08 
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F09 Choose difficulty level
The user can choose difficulty level EASY (all numbers <= 10) or DIFFICULT (numbers <=20 included)
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F10 Responsive Navbar
The navigation bar appears on all pages, and is attractively laid out.  Four links are available - Home - Walks - Gallery - Feedback
The navbar is visible at the top of each screen, and is identical in each page/ screen size combination to allow for easy navigation.
It is fully responsive so will change positioning at 320, 400, 800 pixel screen widths. 
This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button.

![Responsive navbar](./assets/readme_images/F10-Feature-Navbar.jpg?raw=true "Responsive navbar")
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")


### F11 Partner social media links (footer)
As this website is structured to operate more like to a peer-to-peer than a hierarchical structre, the footer bar is not currently used for broadcasting from a single site owner's social links, instead it is a set of 'partner' links to groups or websites which are relevant.    

  The links will open to a new tab to allow easy navigation for the user. 
  The footer is valuable to the user as it encourages them to keep connected via social media and to engage in a deeper way with the community sponsors of this project

![Footer partner links](./assets/readme_images/F11-Feature-Footer-bar.jpg?raw=true "Partner links")
Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")


### F12  User Error Messages
Incomplete entry!
Inconsistent calculation!

Description
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F13 User Stats (needs cookies, and possibly google charts to display)
Winning streak! (user is notified on startup of how many games they have won)
STATISTICS:  X Played; y Win %; z Current Streak; w: Max Streak
GUESS DISTRIBUTION: 1 x; 2 y; 3 z; 4 w; 5 v; 6 u
![Feature description](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F14 Signup for daily reminder email
Ability to signup for daily reminder of the following format
![How to sign up for reminder](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")
![Reminder email content](./docs/readme_images/230418%20Landing%20Page.jpg?raw=true "FeatureDesc")

### F16 ability to choose 'Test' or 'Daily' mode
One of the beautiful features of wordle is its limited-release mode whereby only one puzzle is released daily ... this creates a sense of anticipation and the user wants more, they don't get the chance to become bored or tired with the game.  Similarly the proposed Humble Numble game is best delivered in Daily mode.  For the purpose of site demonstration, the user is currently permitted to enter Test mode (chosen from the settings page) 

### F17 Settings Page
Allow the user to choose:
* Test or Daily modes
* colour contrast


### F18 About page (popup)

### F19 pre-defined data
Data created for the Humble Numble website with Google MyMaps included:
* pre-defined equations to be presented (possibly in random order)

### Features in Scope - refer to excel sheet for details of user stories (requirements) features and RTM.
This website includes X pages and Y features 
Features are as listed in previous section.
The pages - which effectively bring these features together - are:
* Landing Page (image link)
* Settings page (image link)
* About page (image link)
* Signup page

- __Landing Page__
The initial website page shows a 6 row x 7 column grid, where the user can enter their guesses, one per row, in the 5 left most columns.
The 6th column always contains the '=' sign
and the 7th column contains the target figure.

Towards the bottom of the screen a selection panel is shown, this shows 3 rows of possible entries with up to 10 characters in each
1  2  3  4  5  6  7  8  9 10
11 12 13 14 15 16 17 18 19 20
ENTER       +  -  *  /   <-BKSP

Clicking on a selection panel button will place the corresponding character in the next available space within the current grid row.
Clicking on ENTER will submit the current grid row as an entry.

- __Settingss Page__
Ability to choose settings

![Walks Page](./assets/readme_images/P02-Walk_Details.jpg?raw=true "Page with details for each walk")


- __About Page__
- A chance to explain the rules of the game.

![Gallery Page](./assets/readme_images/P03-Walk_Details.jpg?raw=true "Gallery")

- __Contact page__ 
Signup for daily game playing reminder.

![Contact Page](./assets/readme_images/P04-Feedback.jpg?raw=true "Feedback")

### Implementation Decisions
Pre-defined calculations are stored in a multi-dimensional array as follows:
Solution [
[ 3, *,_ 7 * 2, 41_], // ie 3 * 7 * 2 = 41
[2, + , 5 * 7, 41] //ie 2 + 5 * 7 = (7) * 7 = 41
]
Each day's equation can therefore be referenced as Solution[day#]
Each days' elements can be referenced as solution[day#, element#]
This is useful when comparing a user entry for a match.

Daily user entries are stored in an array of 7 x 6 rows as follows:
Attempt [(undef, green, orange), (undef/green/orange), (undef/green/orange), (underf/green/orange), (undef/green/orange), (success)]
Attempt [attempt#, element#} can be compared to each of the entries in solution [day#, element#y] to search for a match - if found then if attempt.element# matches solution.element# then green, else orange.

Break out of loop when success, or when 6 tries reached.



### Features Left to Implement
Some of the user stories could be addressed more directly in the future: 
* Include suitability of various walks for dogs? - this has not really been expanded in the current setup, other than mentioning dogs on the walks details text.
* Include details to access guided walks and walking/running groups in the area?
* Moderation of user feedback - text and photos; and ability to upload this into the site content
* Scaling of site - this is currently implemented for a particular geogrpahic location, however the design and implementation principles followed mean that it would be possible to re-use much of the code, and, by creating fresh Google MyMaps digitised routes and updated walk details, to re-use this solution for a different territory.  This is definitely something i would like to investigate in the near future. 

### RTM
Requirements traceability matrix showing link between user stories and implemented/ future-release features

![stories vs features](./assets/readme_images/user-stories-checked-against-features.jpg?raw=true "Checklist of user stories and the features that implement them")

## Technologies

### Langugages
- HTML 
- CSS

### Frameworks & Tools
* Github
* Git
* Gitpod
* Balsamiq
* Google Fonts
* Font Awesome

## Validation 

### HTML Validation 
- HTML
  - No errors returned on the index html pages when checked in the W3C validator:
  - [W3C validator - index page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdeemccart.github.io%2FCI_PP2_HumbleNumble%2Findex.html) 

  
### CSS Validation
  - No errors returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https://deemccart.github.io/CI_PP2_HumbleNumble/&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Accessibility
The site was tested using the WAVE WebAIM accessibility evaluation tool.
All pages pass with 0 errors (more details...)
- [Accessability: index page](https://wave.webaim.org/report#/https://8000-deemccart-cipp2humblenumble-sigag7qpuok.ws-eu95.gitpod.io/index.html)


Ensure that accessibility is evaluated against both the normal-contrast and high-contrast pages

### Performance
Performance for all pages was tested using the Lighthouse tool within Google Chrome.  After adjusting image sizes, performance was at or above 90% for all pages.

<details><summary>Performance: Index page</summary>
<img src="https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/performance-results-index-page.jpg">
</details>
<details><summary>Performance: Walks page</summary>
<img src="https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/performance-results-settings-page.jpg">
</details>
<details><summary>Performance: Gallery page</summary>
<img src="https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/performance-results-about-page.jpg">
</details>
<details><summary>Performance: Feedback page</summary>
<img src="https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images//performance-results-contact-page.jpg">
</details>

### Device Testing
The website was tested on the following devices:
* HP laptop
* Samsung Galaxy S10 tablet
* Motorola G(7) android phone

### Multi-browser Testing
The website was tested on the following browsers:
* Google Chrome v112.0.5615.138 (HP laptop)
* Google Chrome v112.0.5615.136 (Samsung Galaxy tablet)
* Mozilla Firefox v112.1.0 (Motorola g(7) phone)

### Testing User Stories
![User story testing](./assets/readme_images/user-stories-checked-against-features.jpg?raw=true "testing user stories")



### Feature Testing
User Story Testing
The user feature testing is documented in a pdf file:
 https://deemccart.github.io/CI_PP2_HumbleNumble/docs/readme_images/user-feature-test.pdf

In addition, you should mention in this sectioning how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


Requirements traceability matrix showing link between requirements and features
Provide proofs of successful testing of each user story### Unfixed Bugs
To be completed... mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 


## Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

* The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab - pages 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://deemccart.github.io/CI_PP1_ArklowTrails/index.html


## Credits 
Multiple sources were used in assembling this site.


### Content - Arklow trails
* Text for the Glenart Woods walk was re-used from https://www.coillte.ie/site/glenart-wood/ some text lifted from here also
* Text for Arklow Nature Reserve walk was re-used from https://www.visitarklow.ie/post/4-family-friendly-trails-in-arklow-town-great-for-a-walk-cycle-or-scoot
* Inspiration and content for walks reviews was taken from https://www.alltrails.com/ireland/county-wicklow/arklow 
* The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)


### Media - arklow trails
Images not credited are developer's own.
* Moneylands Farm walk photos came from https://www.moneylandsfarm.com/
* Glenart photos from the following site were re-used https://www.coillte.ie/site/glenart-wood/
 
### Code - Humble Numble
* https://laracasts.com/series/wordle-workshop/episodes/2 for tips on building a wordle-like grid (using HTML or JS)
* https://www.youtube.com/watch?v=j7OhcuZQ-q8 Build a Wordle clone using HTML, CSS & Javascript!

### References
The following topics were researched and better understood as a result: 
* https://stackoverflow.com/questions/13077923/how-can-i-convert-a-string-into-a-math-operator-in-javascript
* https://www.w3schools.com/jsref/jsref_eval.asp Javascript eval() (Recommendation to not use due to security risk)
* https://twitter.com/shannonical/status/1493430545614880771 Wordle Header Font - Shannon Loys, graphic designer
* https://www.reddit.com/r/identifythisfont/comments/sdkxif/what_font_is_the_game_wordle/
* https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_classlist_add2 Extensive use made of the W3Schools.com website
* https://reactgo.com/javascript-find-is-not-a-function/
* https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects Esntesive use made of the stackoverflow.com website

 
### Acknowledgements
* I would like to sincerely thank my mentor, Mo Shami for his patience and support throughout.
* I would also like to thank Derek for his support and keeping everything running at home.
