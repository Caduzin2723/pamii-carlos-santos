//Funcão que retorna tipos
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}


console.log(saudacao('Leandro'));

//Interface paraobjeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opcional
}

//Utilizar a interface usuário fica assim:
function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22});

//Exemplo de uma fução que retorna arrays e tem pareamento opcionais
function listarNome(nomes: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNome(['Ana', 'Bruno', 'Carlos']);