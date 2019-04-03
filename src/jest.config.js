module.exports = {
    preset: 'jest-preset-angular',
    roots: ['src'],
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    coverageReporters: ['html', 'text', 'text-summary'],
    moduleNameMapper: {
        '@app/(.*)': '<rootDir>/src/app/$1',
        '@env': '<rootDir>/src/environments/environment'
    }
};
