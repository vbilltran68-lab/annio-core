module.exports = {
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.jest.json',
            babelConfig: true,
            diagnostics: false,
        },
    },
    testEnvironment: 'node',
    testRegex: '\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coverageReporters: ["json-summary", "text", "lcov"],
    preset: 'ts-jest',
};
