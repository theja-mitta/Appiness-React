export const validate = (values) =>  {
    const input = values.input, password = values.password;
    return {
        type: 'VALIDATE',
        payload: {
            input,
            password
        }
    };
};