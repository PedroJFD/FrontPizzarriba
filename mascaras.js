document.addEventListener('DOMContentLoaded', function(){
    MascaraCPF();
    MascaraTel();
    MascaraCNPJ();
});

function MascaraCPF(){
    var cpfMask = IMask(
        document.getElementById("cpf"), {
            mask: '000.000.000-00',
        }
    );
}

function MascaraTel(){
    var cpfMask = IMask(
        document.getElementById("tel"), {
            mask: '(00) 00000-0000',
        }
    );
}

function MascaraCNPJ(){
    var cpfMask = IMask(
        document.getElementById("cnpj"), {
            mask: '00.000.000/0000-00',
        }
    );
}