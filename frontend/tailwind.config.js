module.exports = {
    // In your tailwind.config.js file, configure the purge option with the paths to all of your components
    //  so Tailwind can tree-shake unused styles in production builds:
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontSize: {
                icon: '1.2rem',
            },
            custom: ['Urbanist', ''],
        },
    },
    variants: {
        extend: {
            width: ['responsive', 'hover', 'focus'],
            visibility: ['group-hover'],
        },
    },
    plugins: [],
};