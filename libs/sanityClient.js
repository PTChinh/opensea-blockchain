import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'f79kwenw',
    dataset: 'production',
    apiVersion: '2021-10-21',
    token: 'skHndIKnvrfoSkmzf77Q9XhCsSC2bOJZUuX6DYMUzRAx8Nd2JK1UHdP2VhF38g3BNnPSTiH45WV9OE9EE3E3sVME0STFQWYgJ1YkomqM1P9N7Tv3XQfdS9Vj3bQj2wF4Zf1uziDh0aD5Uc9F1FxVe0CXCpkAGE8SYb3lgxemjkMJIRbwFNRR',
    useCdn: false,
});
