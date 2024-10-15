# Grocery App

This project is a web application for managing grocery lists and shopping tasks. It includes features such as user authentication, a dashboard for managing grocery items, and a responsive design using Tailwind CSS.

## Features

- User authentication (login and signup)
- Private routes for authenticated users
- Dashboard for managing grocery items
- Responsive design using Tailwind CSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/grocery-app.git
   cd grocery-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up Tailwind CSS:
   ```
   npx tailwindcss init
   ```


## Usage

To start the development server:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
grocery-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── Login.js
│   │   └── Signup.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## Technologies Used

- React.js
- React Router
- Tailwind CSS
- lucide-react (for icons)

## Troubleshooting

If you encounter any issues with CSS not being applied or warnings related to source maps, try the following:

1. Ensure that Tailwind CSS is properly configured in your `tailwind.config.js` file.
2. Check that the `index.css` file includes the necessary Tailwind directives and is imported in your main JavaScript file.
3. For source map warnings related to lucide-react, try updating the package to the latest version:
   ```
   npm update lucide-react
   ```
