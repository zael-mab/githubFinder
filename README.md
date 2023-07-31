# Github Finder

## Description
This is a GitHub User Finder web application built using Tailwind CSS, Daisy UI, and Next.js. It allows you to search for GitHub users, view their profiles, and explore their public repositories.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)


## Installation

1. Clone the repository:
``` git clone <repository_url> ```

3. Navigate to the project directory:
 ``` cd <project_directory> ```

4. After obtaining your GitHub token. Add the following line to the .env file,
   replacing YOUR_GITHUB_TOKEN with the token you generated:
``` NEXT_PUBLIC_GITHUB_TOKEN=YOUR_GITHUB_TOKEN ```

6. Install the dependencies:
   ``` npm install ```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Use

1. Search User: Enter a GitHub username in the search bar provided on the homepage. After entering the username, either click the "Search" button or press "Enter" on your keyboard to initiate the search.

2. View Profile: Once you have searched for a GitHub user, the application will display the user's profile information, including their avatar, name, bio, followers, following, and location. To visit the user's GitHub page and get more details, click the "View Profile" button.

3. Explore Repositories: The user's public repositories will be listed below their profile information. Each repository will show its name and some basic details. To view a specific repository on GitHub, click on its name.

## License

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
