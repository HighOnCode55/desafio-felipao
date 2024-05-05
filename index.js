//cria função para facilitar vida
function mensagem(rank) {
    console.log (heroi + " é " + rank);
}

//cria a matriz para referenciar os dados para o herói, experiência, etc
let matrix = [
    ["Goku", "9055"],
    ["Vegeta", "8100"]
]

//seleciona o herói
let heroi = matrix[0][0]

//disponibiliza a exp para consulta
let exp = matrix[0][1]

switch (true) {
    case exp <1000:
        mensagem("FERRO")
        break;
    case exp >=1000 && exp <2000:
        mensagem("BRONZE")
        break;
    case exp >=2000 && exp <5000:
        mensagem("PRATA")
        break;
    case exp >=5000 && exp <7000:
        mensagem("OURO")
        break;
    case exp >=7000 && exp <8000:
        mensagem("PLATINA")
        break;
    case exp >=8000 && exp <9000:
        mensagem("ASCENDENTE")
        break;
    case exp >=9000 && exp <10000:
        mensagem("IMORTAL")
        break;
    case exp >=10000:
        mensagem("RADIANTE")
        break;
}