# Jhon Vitor Next.js Portfolio Project

This is a [Next.js](https://nextjs.org/) project created for John's [Portfolio](https://portfolio-kallarari.vercel.app/).

## Getting Started

If you have [git](https://git-scm.com/downloads) installed, open your command prompt or terminal.

    1-Clone the project:
    git clone https://github.com/Kallarari/portfolio.git

    2-Navigate to the project directory:
   cd portfolio

    3-Install project dependencies:
    npm install

    4-Start the development server:
    npm run dev

    5-Open the Website:
    Open http://localhost:3000 in your web browser.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you encounter any issues or have difficulties, please send an email to joaovitorminosso@yahoo.com.br.


## Project Architeture
This project consists of page files that render components. These components are implemented using TSX and CSS files.
*The metadata information are in 
--src
    --app
        --layout.tsx

*Sitemap file in 
--src
    --app
        --sitemap.ts

# Global styles
The theme is controlled in the global.css file under the #theme-switch:not(:checked) selector, which sets the color attributed to var(--color) in CSS files.
--src
    --app
        --globals.css


# Pages
-- src
    --app
        (pages)

The root file for pages is layout.tsx, which includes the Provider for translation, Footer, and Header.

# Components 
--src
    --components
        --
            --index.tsx
            --styles.module.css

In the index.tsx file, you will find the HTML and JS code. The styles.module.css file contains styles for the index.tsx component.
Some components may have child components located within their respective folders and are used by the parent component. If a component is in the folder of another component, it is intended to be used by the parent component.

# Translation
Text for the two translations can be found in the locales folder. 
-- locales
    --en.json
    --pt.json
Configuration is located in the i18nify.js file in the source folder and the Provider is in the provider.tsx file. 
Translation is handled using the i18nify library, which simplifies the process. In the i18nify.js file, you can see the code that detects the user's language preference and applies it to the website.

## Deploy

The deploy is in the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details on deploying a Next.js application, please refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.