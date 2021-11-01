## Installation

To install or update, you just need to run:  
`npm i`

The gulp file will run automatically as a post-installation script, updating 
atomic to the latest beta (QA) version, copying assets from the package, and 
downloading the latest `index.html` from the ui-kit repo.

To force the latest Alpha (nightly) version, run:
`gulp alpha`

Revert back to Beta (QA) version with:
`gulp beta`

## Start server

Run local server with:  
`npm start`


## Publishing to Heroku

To push changes to Heroku, commit any change and push to git. No need to change 
the atomic version, gulp will handle installing the lastest beta.

If there is no change to push, you can use this command to trigger redeployment 
with an empty commit:  
`git commit -am 'redeploy' --allow-empty`


