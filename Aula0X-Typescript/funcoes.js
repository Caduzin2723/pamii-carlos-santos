//Funcão que retorna tipos
function saudacao(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudacao('Leandro'));
//Utilizar a interface usuário fica assim:
function exibirUsuario(usuario) {
    console.log("Nome: ".concat(usuario.nome));
    console.log("Idade: ".concat(usuario.idade));
}
exibirUsuario({ nome: 'Marcos', idade: 22 });
//Exemplo de uma fução que retorna arrays e tem pareamento opcionais
function listarNome(nomes) {
    nomes.forEach(function (nome) { return console.log(nome); });
}
listarNome(['Ana', 'Bruno', 'Carlos']);
