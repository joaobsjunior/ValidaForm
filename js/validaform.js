/*!
 * validaform v1.0
 * Autor: J'JUNIOR
 * Site do Autor: jjunior.net.br
 * Copyright 2014 validaform
 * Publicação: 01/08/2014
 * Licensed under the MIT license
 */

/*
================== ESTRUTURA HTML BOOTSTRAP ==================


<div class="row">
<div class="form-group">
<div class="col-md-6">
<input type="text" name="nome1"></input>
</div>
<div class="col-md-6">
<input type="text" name="nome1"></input>
</div>
</div>
</div>


============== ATRIBUTOS DO FORM PARA VALIDAÇÃO ==============


FORM
- method (informar o método da requisição do form)
- class (adiconar a class "ajax" se quiser enviar a requisição via ajax)
- data-elsend (somente para form com class "ajax")
- data-elsuccess (somente para from com class "ajax")
- data-elvalidate (somente para form_bootstrap "true" e from com class "ajax")

INPUT
- data-msgvalidate
- data-msgequals (somente para validação de campos idênticos de senha ou e-mail, sendo adiconado apenas no último campo)
- data-msgrequired
- data-minlength (não sendo para telefone, cpf, cnpj e data)
- required

INPUT-FILE
- data-extencoes
- data-maxsize


====================== INFORMAÇÕES ÚTEIS ======================


SELECT PERSONALIZADO
- funciona com o plugin bootstrap-select - http://silviomoreto.github.io/bootstrap-select/


===============================================================
*/

jQuery.extend({
    form_bootstrap: function() {
        return true; /*TRUE para formulários bootstrap*/
    }
})


jQuery.fn.serializeObject = function() {
    "use strict";
    var a = {},
    b = function(b, c) {
        var d = a[c.name];
        "undefined" != typeof d && d !== null ? $.isArray(d) ? d.push(c.value) : a[c.name] = [d, c.value] : a[c.name] = c.value
    };
    return jQuery.each(this.serializeArray(), b), a
};

function mascara(o, f) {
    v_obj = o;
    v_func = f;
    setTimeout("exec()", 1);
}

function exec() {
    v_obj.value = v_func(v_obj.value);
}

function telefone(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    return v;
}

function cep(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d\d)(\d)/g, "$1 $2");
    v = v.replace(/(\d{3})(\d)/, "$1-$2");
    return v;
}

function timer(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d\d)(\d)/g, "$1:$2");
    if (v.length == 1 && !(/([0-2])/).test(v)) {
        v = "";
    }
    if (v.length == 2 && !(/([0-1][0-9]|2[0-3])/).test(v)) {
        v = v.substring(0, 1);
    }
    if (v.length == 4 && !(/([0-1][0-9]|2[0-3]):[0-5]/).test(v)) {
        v = v.substring(0, 3);
    }
    if (v.length == 5 && !(/([0-1][0-9]|2[0-3]):[0-5][0-9]/).test(v)) {
        v = v.substring(0, 4);
    }
    if ((/([0-1][0-9]|2[0-3]):[0-5][0-9]/).test(v)) {
        v += " h";
    }
    return v;
}

function data(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/^(\d\d)(\d)/g, "$1/$2");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    return v;
}

function cnpj(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d\d)(\d)/, "$1.$2");
    v = v.replace(/(\d\d\d)(\d)/, "$1.$2");
    v = v.replace(/(\d\d\d)(\d)/, "$1/$2");
    v = v.replace(/(\d\d\d\d)(\d)/, "$1-$2");
    return v;
}

function cpf(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d\d\d)(\d)/, "$1.$2");
    v = v.replace(/(\d\d\d)(\d)/, "$1.$2");
    v = v.replace(/(\d\d\d)(\d)/, "$1-$2");
    return v;
}

function so_numeros(v) {
    v = v.replace(/\D/g, "");
    return v;
}

function so_texto(v) {
    v = v.replace(/\d/g, "");
    return v;
}

var campo;

jQuery('input.timer').attr('maxlength', 5);
jQuery('input.timer').data('minlength', 5);
campo = jQuery('input.timer');
campo.keypress(function() {
    mascara(this, timer);
});
campo.change(function() {
    mascara(this, timer);
});

jQuery('input.phone').attr('maxlength', 15);
jQuery('input.phone').data('minlength', 14);
campo = jQuery('input.phone');
campo.keypress(function() {
    mascara(this, telefone);
});
campo.change(function() {
    mascara(this, telefone);
});

jQuery('input.cnpj').attr('maxlength', 18);
jQuery('input.cnpj').data('minlength', 18);
campo = jQuery('input.cnpj');
campo.keypress(function() {
    mascara(this, cnpj);
});
campo.change(function() {
    mascara(this, cnpj);
});

jQuery('input.cpf').attr('maxlength', 14);
jQuery('input.cpf').data('minlength', 14);
campo = jQuery('input.cpf');
campo.keypress(function() {
    mascara(this, cpf);
});
campo.change(function() {
    mascara(this, cpf);
});

jQuery('input.data').attr('maxlength', 10);
jQuery('input.data').data('minlength', 10);
campo = jQuery('input.data');
campo.keypress(function() {
    mascara(this, data);
});
campo.change(function() {
    mascara(this, data);
});

jQuery('input.cep').attr('maxlength', 10);
jQuery('input.cep').data('minlength', 10);
campo = jQuery('input.cep');
campo.keypress(function() {
    mascara(this, cep);
});
campo.change(function() {
    mascara(this, cep);
});

campo = jQuery('input.so-numero');
campo.keypress(function() {
    mascara(this, so_numeros);
});
campo.change(function() {
    mascara(this, so_numeros);
});

campo = jQuery('input.so-texto');
campo.keypress(function() {
    mascara(this, so_texto);
});
campo.change(function() {
    mascara(this, so_texto);
});

jQuery('input').on('keydown', function(event) {
    var tecla = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(event);
    if ( (event.ctrlKey || event.metaKey) && (tecla == "c" || tecla == "v")) {
        window.event ? event.returnValue = false : event.preventDefault();
        return false
    }
}).on('contextmenu', function(){
    return false;
});

jQuery('form').attr('novalidate', 'novalidate');
jQuery('form').submit(function(ev) {
    ev.preventDefault();
    var _self = jQuery(this);
    var aprovado = true;
    jQuery(_self.data('elsuccess')).hide();
    if (!jQuery.form_bootstrap()) {
        jQuery(_self.data('elvalidate')).html('');
    }
    _self.find('input, textarea, select').each(function() {
        var atual = jQuery(this);
        if (atual.val() == atual.attr('placeholder')) {
            atual.val("");
        }
        if (atual.is('[required]')) {
            if (jQuery.form_bootstrap()) {
                atual.parent().addClass('has-feedback');
                atual.parent().removeClass('has-error');
                if (atual.parent().find('.help-block').length) {
                    atual.parent().find('.help-block').html('');
                } else {
                    atual.parent().append('<small class="help-block"></small>');
                }
            }
            if ((atual.val() == atual.attr('placeholder') || atual.val().trim() == "" && !atual.is('select')) || (atual.is('select') && atual.find('option:selected').text() == atual.find('option').eq(0).text())) {
                anima_validacao(atual, atual.data('msgrequired'));
                aprovado = false;
                return false;
            } else {
                if (atual.attr('type') == 'checkbox') {
                    if (!atual.prop('checked')) {
                        anima_validacao(atual, atual.data('msgrequired'));
                        aprovado = false;
                        return false;
                    }
                }
                if (atual.attr('type') == 'email' && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(atual.val()))) {
                    anima_validacao(atual, atual.data('msgvalidate'));
                    aprovado = false;
                    return false;
                }
                if (atual.data('minlength') && atual.val().length < atual.data('minlength')) {
                    anima_validacao(atual, atual.data('msgvalidate'));
                    aprovado = false;
                    return false;
                }

                if (atual.hasClass('cpf')) {
                    if (!valida_cpf(atual.val())) {
                        anima_validacao(atual, atual.data('msgvalidate'));
                        aprovado = false;
                        return false;
                    }
                }
                if (atual.hasClass('cnpj')) {
                    if (!valida_cnpj(atual.val())) {
                        anima_validacao(atual, atual.data('msgvalidate'));
                        aprovado = false;
                        return false;
                    }
                }
                if (atual.attr('type') == 'file' && atual.data('extencoes')) {
                    var extensoes = atual.data('extencoes');
                    extensoes = extensoes.trim().replace(/,/g, '').replace(/^\s\s*/, '').replace(/\s\s*$/, '').replace(/[\s,]+/g, ',');
                    extensoes = extensoes.split(",");
                    var extensoesValidas = extensoes;
                    var caminho = atual.val();
                    var extensao = caminho.substr(caminho.lastIndexOf("."), caminho.length - caminho.lastIndexOf("."));
                    var ocorrencia = false;
                    var tamanhoMaximo = parseInt(atual.data('maxsize')) * 1024 * 1024;
                    var tamanhoArquivo = parseInt(atual.attr("data-filesize"));
                    for (var i = 0; i < extensoesValidas.length; i++) {
                        if (extensoesValidas[i].toUpperCase() == extensao.toUpperCase()) {
                            ocorrencia = true;
                            break;
                        }
                    }
                    if (ocorrencia == false || tamanhoArquivo > tamanhoMaximo) {
                        if (ocorrencia == false) {
                            anima_validacao(atual, atual.data('msgvalidate'));
                            aprovado = false;
                            return false;
                        } else {
                            anima_validacao(atual, atual.data('msgrequired'));
                            aprovado = false;
                            return false;
                        }
                    }
                }
                if (atual.attr('type') == 'password' || atual.attr('type') == 'email') {
                    var total = _self.find('[name=' + atual.attr('name') + ']').length,
                    senhas = [],
                    senha;
                    if (total > 1) {
                        for (var i = 0; i < total; i++) {
                            senha = _self.find('[name=' + atual.attr('name') + ']').eq(i).val();
                            if (senhas.indexOf(senha) == -1) {
                                senhas.push(senha);
                            }
                            _self.find('[name=' + atual.attr('name') + ']').eq(i).data('index', i);
                        };
                        if (atual.data('index') == total - 1 && senhas.length > 1) {
                            anima_validacao(atual, atual.data('msgequals'));
                            aprovado = false;
                            return false;
                        }
                    }
                }
            }
        }
    })

if (aprovado && _self.hasClass('ajax')) {
    jQuery('.loading').fadeIn('slow');
    var url = _self.attr('action'),
    params = _self.serializeObject(),
    sendmail = jQuery(_self.data('elsend')),
    msgsuccess = jQuery(_self.data('elsuccess'));
    jQuery.ajax({
        type: _self.attr('method'),
        url: url,
        async: true,
        cache: false,
        data: params,
        beforeSend: function() {
            if (sendmail) {
                sendmail.fadeIn('slow');
            }
        },
        success: function(data) {
            if (msgsuccess) {
                msgsuccess.html(data);
                msgsuccess.fadeIn('slow');
                setTimeout(function() {
                    msgsuccess.fadeOut('slow');
                }, 10000);
            }
        },
        complete: function() {
            if (sendmail) {
                sendmail.fadeOut('slow');
            }
        },
        error: function(xhr, textStatus, errorThrown) {

        }
    });
} else if (aprovado) {
    _self.unbind('submit').submit();
}

});

jQuery('input[type=file]').change(function() {
    var f = this.files[0];
    jQuery(this).attr("data-filesize", (f.size || f.fileSize));
})

function valida_cpf(cpf) {
    cpf = so_numeros(cpf);
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
        if (!digitos_iguais) {
            numeros = cpf.substring(0, 9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            numeros = cpf.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        } else
        return false;
    }

    function valida_cnpj(cnpj) {
        cnpj = so_numeros(cnpj);
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

}

function anima_validacao(campo_atual, msg) {
    var campo_duracao = 50,
    msgValidate, campo_prev;
    if (jQuery.form_bootstrap()) {
        msgValidate = campo_atual.parent().find('.help-block');
        campo_atual.parent().addClass('has-error');
    } else {
        msgValidate = campo_atual.parents('form').data('elvalidate');
        msgValidate = jQuery(msgValidate);
        campo_atual.addClass('has-error');
    }
    msgValidate.text("");
    msgValidate.text(msg);
    msgValidate.fadeIn("fast");
    campo_atual.trigger('focus');
    if (campo_atual.is('select')) {
        if (jQuery.form_bootstrap() && (typeof jQuery.fn.selectpicker == 'function')) {
            campo_atual = campo_atual.parent().children('.bootstrap-select');
            campo_atual.click(function() {
                setTimeout(function() {
                    campo_atual.removeAttr('style');
                    msgValidate.fadeOut("fast");
                    campo_atual.parent().removeClass('has-error');
                }, 600);
            });
        } else {
            campo_atual.change(function() {
                setTimeout(function() {
                    campo_atual.removeAttr('style');
                    msgValidate.fadeOut("fast");
                    campo_atual.parent().removeClass('has-error');
                }, 600);
            });
        }
    }
    if (campo_atual.attr("type") == "file") {
        campo_prev = campo_atual;
        nomeCampo = campo_atual.attr("name");
        campo_atual = jQuery("input[name='" + nomeCampo + "txt']");

        campo_prev.keypress(function() {
            setTimeout(function() {
                campo_atual.removeAttr('style');
                msgValidate.fadeOut("fast");
                campo_atual.parent().removeClass('has-error');
            }, 600);
        });
    }
    if (campo_atual.attr("type") == "radio") {
        campo_prev = campo_atual;
        campo_atual = campo_prev.parent();
        campo_prev.keypress(function() {
            setTimeout(function() {
                campo_atual.removeAttr('style');
                msgValidate.fadeOut("fast");
                campo_atual.parent().removeClass('has-error');
            }, 600);
        });
    }

    jQuery('html,body').animate({
        scrollTop: (campo_atual.offset().top - 100) + 'px'
    }, 'fast');
    borderTopW = campo_atual.css('border-top-width');
    borderRightW = campo_atual.css('border-right-width');
    borderBottomW = campo_atual.css('border-bottom-width');
    borderLeftW = campo_atual.css('border-left-width');

    if (campo_atual.parent().css('float') == 'right') {

        campo_atual.animate({
            marginRight: "-=4px"
        }, campo_duracao).animate({
            marginRight: "+=4px"
        }, campo_duracao);
        campo_atual.animate({
            marginRight: "-=2px"
        }, campo_duracao).animate({
            marginRight: "+=2px"
        }, campo_duracao);
        campo_atual.animate({
            marginRight: "-=1px"
        }, campo_duracao).animate({
            marginRight: "0px"
        }, campo_duracao);

    } else {

        campo_atual.animate({
            marginLeft: "-=4px"
        }, campo_duracao).animate({
            marginLeft: "+=4px"
        }, campo_duracao);
        campo_atual.animate({
            marginLeft: "-=2px"
        }, campo_duracao).animate({
            marginLeft: "+=2px"
        }, campo_duracao);
        campo_atual.animate({
            marginLeft: "-=1px"
        }, campo_duracao).animate({
            marginLeft: "0px"
        }, campo_duracao);

    }

    campo_atual.keypress(function() {
        setTimeout(function() {
            campo_atual.removeAttr('style');
            msgValidate.fadeOut("fast");
            campo_atual.parent().removeClass('has-error');
        }, 600);
    });

};

jQuery('input[type=password]').addClass('password');

/*--- START PLACEHOLDER ---*/

function add() {
    if (jQuery(this).val() === '') {
        jQuery(this).val(jQuery(this).attr('placeholder')).addClass('placeholder');
        if (jQuery(this).hasClass('password')) {
            jQuery(this).attr('type', 'text');
        }
    } else {
        if (jQuery(this).hasClass('password')) {
            jQuery(this).attr('type', 'password');
        }
    }
}

function remove() {
    if (jQuery(this).val() === jQuery(this).attr('placeholder')) {
        jQuery(this).val('').removeClass('placeholder');
        if (jQuery(this).hasClass('password')) {
            jQuery(this).attr('type', 'password');
        }
    }
}
jQuery('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add);
/*--- END PLACEHOLDER ---*/