
interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData  {
    name?:  string; //o ? significa qnão é obrigatorio
    email: string;
    password: string;
    techs: Array<string | TechObject>;
}

export default function createUser({name, email, password}: CreateUserData) {
    const user = {
        name,
        email,
        password,
    }

    return user;
}