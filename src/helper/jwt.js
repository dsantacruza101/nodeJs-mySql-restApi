import jwt from 'jsonwebtoken';

export const generateToken = ( id, userName ) => {
    return new Promise( ( res, rej ) => {
        const payload = { id, userName }
        jwt.sign( payload, '@dm1n', {
            expiresIn: '1h'
        }, ( err, token) => {
            if ( err ) {
                console.log( err );
                rej('Error al generar el token')
            }
            res( token );
        });
    });
};

