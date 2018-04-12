export class ConstantsService {

    env() {
        const env = {
            DOMAIN: 'http://localhost:3000',
            // DOMAIN: 'http://200.55.199.132/must12/api/public',
            ENDPOINT_API: '/api',
            API_PATH: '/api/',
            BASE_PATH: '/',
            VERSION: '1.0.0',
        };
        return { env };
    }

}


