# Desafio do Felipão

Esse repositório tem meu projeto para o curso de lógica de programação do professor @felipeAguiarCode da DIO.

## Qual o desafio?

O desafio consiste em criar um sistema que define ranks baseado em pontuação.
<details>
  <summary>Desafio completo</summary>
  
  #### Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

- Se XP for menor do que 1.000 = Ferro
- Se XP for entre 1.001 e 2.000 = Bronze
- Se XP for entre 2.001 e 5.000 = Prata
- Se XP for entre 5.001 e 7.000 = Ouro
- Se XP for entre 7.001 e 8.000 = Platina
- Se XP for entre 8.001 e 9.000 = Ascendente
- Se XP for entre 9.001 e 10.000= Imortal
- Se XP for maior ou igual a 10.001 = Radiante

#### Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
  
</details>

## Minha ideia

Antes de começar o desafio assisti, por acaso, um video sobre como _"switch-case"_ performa de melhor forma do que _"if-else"_ em C.[^1]
[^1]: [why are switch statements so HECKIN fast?](https://youtu.be/fjUG_y5ZaL4?si=Y7uBxzHBD2QlSMj5)

Com a intenção de sempre manter um código com boa performance pelo interesse em trabalhar com games, me joguei no desafio de fazer esse código utilizando **Switch-case**

## O processo

Como um bom curioso e devorador de forums, sei que geralmente alguém já passou por um problema como o meu e provavelmente encontraria a resposta da minha pergunta com facilidade **(esqueça que o prof fez uma incrivel pagina com exemplos de como utilizar a ferramenta para complementar as aulas)**

Com diversos problemas parecidos com o meu e muitos resolvidos utilizando ****if-else****, finalmente encontrei um que parecia ser um bom match para o meu problema, ele estava criando um game para web e precisava de um sistema de ranks:
<details>
  <summary>Imagem</summary> 
  
![problema](https://github.com/git-comrade/desafio-felipao/assets/87396745/1e70989f-f548-497c-873e-2d2bb76074f9)

</details>

A resolução utilizava ****switch-case****
<details>
  <summary>Imagem</summary> 
  
![solucao](https://github.com/git-comrade/desafio-felipao/assets/87396745/3e819ec7-3f8b-4b40-882d-2367bbb632b4)

</details>

Como eu não me lembrava muito bem como o código funcionava, fiz como o professor sugeriu durante as aulas e utilizei o **ChatGPT** para entender para que exatamente servia o comando break no código:
<details>
  <summary>Imagem</summary> 
  
![chatgpt1](https://github.com/git-comrade/desafio-felipao/assets/87396745/f11efc5a-8ec9-4c88-a84d-04b6d7b2f4d6)

</details>

Pra minha surpresa esse foi o retorno que eu tive:
<details>
  <summary>Imagem</summary> 
  
![chatgpt2](https://github.com/git-comrade/desafio-felipao/assets/87396745/c65139c6-a5fb-4774-94d6-6a92f5dd3d9e)

</details>

Para encurtar a história, direi aqui que depois disso continuei tirando algumas outras dúvidas com o **chatgpt**, que achei muito útil, porém o problema é que a resposta inicial dele é que eu não poderia procurar por uma faixa de números utilizando **switch-case**.

Pra minha sorte, minha curiosidade não me deixou contente com essa resposta e descobri que podemos utilizar **booleans** em conjunto com **switch-case** para atingir o que eu estava tentando alcançar. 

Isso faz o código buscar se é verdade que tal faixa de números que eu busco aparece no local especificado. 

Eu também aproveitei pra apontar isso ao **chatgpt**, levando em conta a informação que eu tinha sobre **switch** performar melhor em C. 

A resposta foi que javascript utiliza um método de otimização de códigos que pode não funcionar de maneira satisfatória, até pior do que **if-else** se não fosse buscando somente por **floats**. 

É também ponderado pelo **chatgpt**, que geralmente não há grande diferença entre os dois métodos nessa linguagem, levando em conta sua otimização e aplicações onde a linguagem é geralmente utilizada.

## Finalização

Pra começar, criei uma matriz para referenciar os campeões. Nesse exemplo só iremos utilizar um campeão, mas serviria pra mais opções:

```
//cria a matriz para referenciar os dados para o herói, experiência, etc
let matrix = [
    ["Goku", "9055"],
    ["Vegeta", "8100"]
]
```

Depois criei duas funções, uma para selecionar o campeão dentro da matriz e outra para referenciar o valor de ****exp**** dentro da mesma:
```
//seleciona o herói
let heroi = matrix[0][0]

//disponibiliza a exp para consulta
let exp = matrix[0][1]
```
O terceiro passo foi criar a operação **switch**:
```
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
```

Por ultimo criei uma função para automatizar a criação da mensagem (foi no meio do processo de criar a operação **switch**)
Tomei algumas liberdades criativas ao criar a mensagem final para deixar mais interessante ao herói que escolhi.
Quando vi fotos do prof com roupa de *Dragon Ball* achei que seria engraçado referenciar a cena *"Mais de 8000"*.[^2]
Acabei adaptando à *versão em inglês*[^3] para fazer duas piadas em uma linha só.

O código para essa função ficou assim:
```
//cria função para facilitar vida
function mensagem(rank) {
    console.log (heroi + " é " + rank);
}
```

Quando o código é executado retorna a seguinte mensagem:

> Goku é IMORTAL

##### Considerações finais
Me diverti estudando esse conteúdo, espero que o resto do curso seja tão frutífero e divertido como esse módulo foi!

[^3]: [It's Over 9000](https://youtu.be/ce3ThKWilI8?si=Mq-NUua4AFe44jWw)
[^2]: [Mais de 8000!](https://youtu.be/S8IL1JJuJiE?si=iSYs_pXzmb69quzs)

