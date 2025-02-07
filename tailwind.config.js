const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [
                    "proxima-nova",
                    "verdana",
                    "Nunito",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
