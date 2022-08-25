 Cadastro De Usuario
    Cenário

        Digitar o CPF, nome do contribuinte, número de dependentes e renda bruta mensal de. cada contribuinte.
        Após encerrar a entrada dos contribuintes, deve solicitar o valor do Salário Mínimo e então calcular e escrever o IR de cada contribuinte, em ordem crescente de valor de IRe ordem crescente de nome.

        Regras para cálculo do IR do contribuinte:

            Para cada contribuinte será concedido um desconto de 5% do valor Salário Minimo por dependente. Os valores da aliquota para cálculo do imposto são:
            
             [RENDA LIQUIDA ]                       /                   [ALIQUOTA]
             até 2 salários minimos                ->                    isento
             acima de 2 até 4 salários minimos     ->                    7.5%
             acima de 4 até 5 salários mínimos     ->                    15%
             acima de 5 até 7 salários minimos     ->                    22.5%
             acima de 7 salários minimos           ->                    27.5%

        Renda Liquida Renda Bruta - Descontos por Dependente:


        Requisitos
            Os Contribuintes devem ser persistidos em um banco de dados.
            O frontend deve ser escrito em Javascript/html (framework JS fica a critério do desenvolvedor).
            Deve ser utilizado uma interface REST para se comunicar com o frontend (o framework de REST fica a critério do desenvolvedor).
            Para persistência dos dados deve ser utilizado algum framework de ORM, caso o banco escolhido seja NOSql desconsidere este requisito.
            Não é nescessário editar/excluir.

        Observações 
             O Backend deve ser escrito em .NET.
             O Frontend deve ser escrito em HTML/JS.
             Usabilidade, UX do frontend NÃO serão critérios avaliado.
             É obrigatório o uso de REST para resolver o problema.
             Testes unitários, divisão das camadas, modelagem, design pattems são fatores que serão levados em conta.
            

    


