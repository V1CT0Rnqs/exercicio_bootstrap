$(document).ready(function () {
    // Aplicar máscara ao telefone no formato (00) 00000-0000
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
});