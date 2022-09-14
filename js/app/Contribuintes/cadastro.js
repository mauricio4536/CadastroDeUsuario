//window.alert('Minha primeira mensagem')
//confirm('este site ultiliza coockies voce aceita ?')

function toSave(url) {
    if (IsvalidForm()) $("#passenger-form").submit();
}

function IsvalidForm() {
    var valid = true;

    if ($("#cpf").val() == "") {
        $(".valid-cpf").html("CPF é requerido.");
        valid = false;
    }

    if ($("#nome").val() == "") {
        $(".valid-nome").html("Nome é requerido.");
        valid = false;
    }

    if ($("#renda_mensal").val() == "") {
        $(".valid-renda-mensal").html("Renda mensal é requerido.");
        valid = false;
    }

    if ($("#numero_dependentes").val() == "") {
        $(".valid-numero-dependentes").html("Número de dependentes é requerido.");
        valid = false;
    }

    return valid;
}

$('#cpf').on('keypress', function (event) {
    if ($('#cpf').val() != "") {
        $(".valid-cpf").html("");
    }
});

$('#nome').on('keypress', function (event) {
    if ($('#nome').val() != "") {
        $(".valid-nome").html("");
    }
});

$("#renda_mensal").on('keypress', function (event) {
    if ($("#renda_mensal").val() != "") {
        $(".valid-renda-mensal").html("");
    }
});

$("#numero_dependentes").on('keypress', function (event) {
    if ($("#numero_dependentes").val() != "") {
        $(".valid-numero-dependentes").html("");
    }
});

$(".mask_cpf").mask("999.999.999-99");