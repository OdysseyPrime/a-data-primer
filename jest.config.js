module.exports = {
    clearMocks: true,
    coverageDirectory: "tests/coverage",
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/setup/file.js",
        "\\.(css|less)$": "<rootDir>/tests/setup/style.js"
    },
    setupFiles: ["<rootDir>/tests/setup/fetch.js", "<rootDir>/tests/setup/store.js"],
    "setupFilesAfterEnv": ["<rootDir>/tests/setup/enzyme.js", "<rootDir>/tests/setup/jest.js"],
    testPathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ]
};
