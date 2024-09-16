export class CreateUserDto {
    name: string;
    email: string;
    password: string;
    role: string;

    constructor(name: string, email: string, password: string, role: string = 'Aluno') {
        
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
