export default {
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                sourceMaps: true,
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: true,
                    },
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    testEnvironment: 'jsdom',
};