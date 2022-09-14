function toSave(url) {
    if (IsvalidForm()) $("#passenger-form").submit();
}

function IsvalidForm() {
    var valid = true;

    if ($("#cpf").val() == "") {
        $(".valid-cpf").html("CPF é requerido.");
        valid = false;
    }

    if ($("#nomeCompleto").val() == "") {
        $(".valid-nome-completo").html("Nome completo é requerido.");
        valid = false;
    }
    return valid;
}
$('#cpf').on('keypress', function (event) {
    if ($('#cpf').val() != "") {
        $(".valid-cpf").html("");
    }
});

$('#nomeCompleto').on('keypress', function (event) {
    if ($('#nomeCompleto').val() != "") {
        $(".valid-nome-completo").html("");
    }
});

$(".mask_cpf").mask("999.999.999-99");