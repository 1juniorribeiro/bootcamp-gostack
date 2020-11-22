import { Request, response, Response } from 'express';
import createUser from './services/createUser';

export function helloWorld(request: Request, response:Response) {
    const user = createUser({
        email: 'asuahshomtail.com',
        password: '1234532',
        techs: [
            'node.js',
            'React.js',
            'React Native',
            {title: 'javvaScript', experience: 100}
        ],
    });

    return response.json({ message: 'Hello World'});
}
