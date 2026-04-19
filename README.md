# News-Donkey

## Overview
News-Donkey is a lightweight React application that displays current top headlines using the NewsAPI. It's built for quick browsing of news by category and country, with simple pagination and a clean UI.

## Demo
- Live demo: (add your deployed URL here) ## working on this

## Features
- Top headlines by country and category
- Pagination with next/previous controls
- Responsive layout with article cards
- Loading spinner while fetching data

## Built With
- React
- Bootstrap (for layout & buttons)
- NewsAPI (data source)

## Getting Started
These instructions will get you a copy of the project running on your local machine for development and testing purposes.

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn

### Installation
Clone the repo and install dependencies:

```bash
git clone <repo-url>
cd newsapp
npm install
```

### Configure API Key
This project uses NewsAPI. Create a free API key at https://newsapi.org and set it as an environment variable used by the app. Create a `.env` file in the project root with:

```env
REACT_APP_NEWS_API_KEY=your_api_key_here
```

Restart the dev server after adding the key.

### Run Locally

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Usage
The app exposes settings in the UI for navigating pages, selecting news categories, and changing country filters. In the code, the `News` component accepts the following props:

- `country` (string): two-letter country code, default `us`
- `pageSize` (number): articles per page, default `8`
- `category` (string): news category, default `general`

## Contributing
Contributions are welcome. Please open an issue for bugs or feature requests, then submit a pull request with a clear description of changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
Project maintained by the repository owner — open issues or pull requests for questions.