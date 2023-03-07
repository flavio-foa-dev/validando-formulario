# validando-formulario
- formulario conata Corrente;

- Javascript
- css
- html
- Definir type para campos de digitação;
- Controlar a quantidade mínima e maxima de caracteres do input;
- Transformar em campo em obrigatório.
- pattern="[a-zA-Z0-9]" no html
- addEventListener("blur", () =>{})
- Utilizar patterns no HTML;
- expressões regulares;
- documentQuerySelectorAll;
- addenventlistener
- Importar export
- validacao de campos formulario.
- Validar os dígitos verificadores do CPF;
- fórmulas matemáticas em código ;
- Lidar com datas em JavaScript;
- comparações de datas para verificar maioridade.
- ValidityState
- console.log(field.validity)
- campo.addEventListener("invalid", evento => evento.preventDefault())
- valid = false || true
- Encontrar as validações padrões que existem no JavaScript com o Validity State;
- Interpretar cada tipo de erro;
- Criar mensagens customizadas;
- Remover o comportamento padrão de erro do HTML;
- Salvar dados no localStorage.
- Iniciar camêra do usuário no navegador;
- Capturar fotografia;
- Lidar com eventos de click;
- Aplicar um fluxo de navegação escondendo e mostrando elementos;
- Inserir novos dados no localStorage.

type de input

- button	Define um botão clicável
- number	Define um campo para número inteiro
- text	Define um campo para texto string
- date	Define um campo para data
- checkbox	Define uma caixa de seleção para múltiplas opções
- radio	Define uma caixa de seleção para opção única
- password	Define um campo de senha
- submit	Define um botão para enviar os dados
- tel	Define um campo para telefone

- valueMissing = ocorre quando deixamos o campo vazio;
- typeMismatch = ocorre quando erramos o tipo de input no campo, como por exemplo, na inserção de um e-mail sem o símbolo @;
- patternMismatch = ocorre especialmente no campo de CPF que possui um padrão de expressão regular. Se o input não segui-lo, este erro será ativado;
- tooShort está relacionado aos atributos minlength e maxLength que inserimos em diversos pontos do código. Ele serve para acusar quando os padrões de comprimento do input não forem atendidos;
-  customError se refere a erros customizados, como nos casos em que inserimos as lógicas de validação ehUmCPF e ehMaiorDeIdade.

### testando cpf
```
Quando estamos construindo um sistema que requer a criação de contas como o MoniBank, devemos validar os dados em que há essa possibilidade. Usando JavaScript nativamente, sem o uso de bibliotecas, iremos precisar fazer algumas validações manualmente, como a validação do CPF.

Vamos atuar em cima de um CPF base que será: 451.055.040-54. A fórmula do cálculo dos ultimos digitos verificadores de um CPF é dividida em:

Primeiro dígito
Para descobrir o primeiro dígito você precisará recolher os 9 primeiros dígitos do CPF e multiplicar por números de 10 a 2, sequencialmente.

Valor do CPF	4	5	1	0	5	5	0	4	0
Sequência	10	9	8	7	6	5	4	3	2
Resultado	40	45	8	0	30	25	0	12	0
Depois, precisamos somar todos os valores gerados nas multiplicações entre eles. Nesse caso, a soma resultou em 160. Em seguida, será necessário multiplicar essa soma por 10, que gerou o número 1600. Por fim, devemos considerar o módulo da divisão desse número com 11: 5.

Antes de decidirmos que esse é o primeiro dígito verificador, precisamos testar uma condição: Se o resultado for 10 ou 11, precisaremos zera-lo. Como não é o caso, podemos confirmar que 5 realmente é o primeiro dígito verificador do CPF base.

Segundo dígito
Para descobrir o segundo dígito você precisará recolher os 10 primeiros dígitos do CPF e multiplicar por números de 11 a 2, sequencialmente.

Valor do CPF	4	5	1	0	5	5	0	4	0	5
Sequência	11	10	9	8	7	6	5	4	3	2
Resultado	44	50	9	0	35	30	0	16	0	10
Em seguida, será necessário somar todos os valores resultados pela multiplicação novamente, e essa soma resultou em 194. Depois, multiplicamos essa soma por 10, para encontrar o valor 1940. Ao final, chegamos na etapa de encontrar o módulo da divisão por 11: o número 4.

Novamente, precisamos verificar para caso o resultado for 10 ou 11, será necessário zera-lo. Como novamente não foi o caso, o número 4 realmente é o segundo dígito verificador do CPF base.
```