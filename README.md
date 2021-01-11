<h1 align="center">Github Commit Finder 🐱‍🏍</h1>
<h3 align="center">Find repo's commits more easily with Gihub Commit Finder</h3>

# About

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.javascript.com/) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://git-scm.com/) [![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://en.wikipedia.org/wiki/HTML5) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://en.wikipedia.org/wiki/CSS)

Github Commit Finder is a website that helps you find commits of a repository with date and time filter. The result will be a list of commits in the form of commit cards and it contains enough information for you to checkout that specific commit and see what's changed.

This project was developed primarily on **React.js** (with Vanilla JS), **Bootstrap 5**, a little bit of **CSS5** and **HTML**.

# Features
🔵 You can search for specific commits of a repo of a user, both public and private (for private repositories I must be a collborator of that repo).

![search-with-username-and-repo's-name](https://github.com/lindstorm75/github-commit-finder/blob/main/images/landing-page.PNG)

🔵 The list of filtered commits will be shown as commit cards.

 ![search-result](https://github.com/lindstorm75/github-commit-finder/blob/main/images/commits-result.PNG)
 
🔵 Each commit card contains the following information of that commit

   ▶ Date and time
   
   ▶ Latest commit badge
   
   ▶ Commit sha256
   
   ▶ Commit message
   
   ▶ A button that redirects you to the commit page
   
 ![commit-card](https://github.com/lindstorm75/github-commit-finder/blob/main/images/commit-card.PNG)
 
 🔵 The commands card that provides you ```clone``` and ```checkout``` commands for the current repository and the commit you clicked on
 
 ![commands]( https://github.com/lindstorm75/github-commit-finder/blob/main/images/commands.PNG)

🔵 The site is fully responsive, you can use it on mobile

 <image src="https://github.com/lindstorm75/github-commit-finder/blob/main/images/mobile-landing-page.PNG" alt="mobile-landing-page" height="700" > <image src="https://github.com/lindstorm75/github-commit-finder/blob/main/images/mobile-search-result.PNG" alt="mobile-search-result" height="700" >
 
## Hosting

The project is hosted via [Vercel](https://vercel.com/) as it is a static site.

[github-commit-finder.vercel.app](https://github-commit-finder.vercel.app)

[https://github-commit-finder.lindstorm75.vercel.app](https://github-commit-finder.lindstorm75.vercel.app/)

[https://github-commit-finder-git-main.lindstorm75.vercel.app](https://github-commit-finder-git-main.lindstorm75.vercel.app/)


## Local installation

Use Node.js package manager [npm](https://nodejs.org/en/) to install modules needed for the project.

```bash
npm install
```
Run the project locally via npm or [yarn](https://yarnpkg.com/)
```bash
npm start
// or
yarn start
```

### Made with ❤ by Thanapong Angkha
