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
- data-bootstrap (defaul é "true", deve setar "false" para formulários que não são bootstrap)

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
var el_teste;
function md5(n) {
    var r, t, u, e, o, f, c, i, a, h, v = function(n, r) {
        return n << r | n >>> 32 - r
    },
    g = function(n, r) {
        var t, u, e, o, f;
        return e = 2147483648 & n, o = 2147483648 & r, t = 1073741824 & n, u = 1073741824 & r, f = (1073741823 & n) + (1073741823 & r), t & u ? 2147483648 ^ f ^ e ^ o : t | u ? 1073741824 & f ? 3221225472 ^ f ^ e ^ o : 1073741824 ^ f ^ e ^ o : f ^ e ^ o
    },
    s = function(n, r, t) {
        return n & r | ~n & t
    },
    d = function(n, r, t) {
        return n & t | r & ~t
    },
    l = function(n, r, t) {
        return n ^ r ^ t
    },
    w = function(n, r, t) {
        return r ^ (n | ~t)
    },
    A = function(n, r, t, u, e, o, f) {
        return n = g(n, g(g(s(r, t, u), e), f)), g(v(n, o), r)
    },
    C = function(n, r, t, u, e, o, f) {
        return n = g(n, g(g(d(r, t, u), e), f)), g(v(n, o), r)
    },
    b = function(n, r, t, u, e, o, f) {
        return n = g(n, g(g(l(r, t, u), e), f)), g(v(n, o), r)
    },
    m = function(n, r, t, u, e, o, f) {
        return n = g(n, g(g(w(r, t, u), e), f)), g(v(n, o), r)
    },
    y = function(n) {
        for (var r, t = n.length, u = t + 8, e = (u - u % 64) / 64, o = 16 * (e + 1), f = new Array(o - 1), c = 0, i = 0; t > i;) r = (i - i % 4) / 4, c = i % 4 * 8, f[r] = f[r] | n.charCodeAt(i) << c, i++;
            return r = (i - i % 4) / 4, c = i % 4 * 8, f[r] = f[r] | 128 << c, f[o - 2] = t << 3, f[o - 1] = t >>> 29, f
    },
    L = function(n) {
        var r, t, u = "",
        e = "";
        for (t = 0; 3 >= t; t++) r = n >>> 8 * t & 255, e = "0" + r.toString(16), u += e.substr(e.length - 2, 2);
            return u
    },
    S = [],
    _ = 7,
    j = 12,
    k = 17,
    p = 22,
    q = 5,
    x = 9,
    z = 14,
    B = 20,
    D = 4,
    E = 11,
    F = 16,
    G = 23,
    H = 6,
    I = 10,
    J = 15,
    K = 21;
    for (n = this.utf8_encode(n), S = y(n), c = 1732584193, i = 4023233417, a = 2562383102, h = 271733878, r = S.length, t = 0; r > t; t += 16) u = c, e = i, o = a, f = h, c = A(c, i, a, h, S[t + 0], _, 3614090360), h = A(h, c, i, a, S[t + 1], j, 3905402710), a = A(a, h, c, i, S[t + 2], k, 606105819), i = A(i, a, h, c, S[t + 3], p, 3250441966), c = A(c, i, a, h, S[t + 4], _, 4118548399), h = A(h, c, i, a, S[t + 5], j, 1200080426), a = A(a, h, c, i, S[t + 6], k, 2821735955), i = A(i, a, h, c, S[t + 7], p, 4249261313), c = A(c, i, a, h, S[t + 8], _, 1770035416), h = A(h, c, i, a, S[t + 9], j, 2336552879), a = A(a, h, c, i, S[t + 10], k, 4294925233), i = A(i, a, h, c, S[t + 11], p, 2304563134), c = A(c, i, a, h, S[t + 12], _, 1804603682), h = A(h, c, i, a, S[t + 13], j, 4254626195), a = A(a, h, c, i, S[t + 14], k, 2792965006), i = A(i, a, h, c, S[t + 15], p, 1236535329), c = C(c, i, a, h, S[t + 1], q, 4129170786), h = C(h, c, i, a, S[t + 6], x, 3225465664), a = C(a, h, c, i, S[t + 11], z, 643717713), i = C(i, a, h, c, S[t + 0], B, 3921069994), c = C(c, i, a, h, S[t + 5], q, 3593408605), h = C(h, c, i, a, S[t + 10], x, 38016083), a = C(a, h, c, i, S[t + 15], z, 3634488961), i = C(i, a, h, c, S[t + 4], B, 3889429448), c = C(c, i, a, h, S[t + 9], q, 568446438), h = C(h, c, i, a, S[t + 14], x, 3275163606), a = C(a, h, c, i, S[t + 3], z, 4107603335), i = C(i, a, h, c, S[t + 8], B, 1163531501), c = C(c, i, a, h, S[t + 13], q, 2850285829), h = C(h, c, i, a, S[t + 2], x, 4243563512), a = C(a, h, c, i, S[t + 7], z, 1735328473), i = C(i, a, h, c, S[t + 12], B, 2368359562), c = b(c, i, a, h, S[t + 5], D, 4294588738), h = b(h, c, i, a, S[t + 8], E, 2272392833), a = b(a, h, c, i, S[t + 11], F, 1839030562), i = b(i, a, h, c, S[t + 14], G, 4259657740), c = b(c, i, a, h, S[t + 1], D, 2763975236), h = b(h, c, i, a, S[t + 4], E, 1272893353), a = b(a, h, c, i, S[t + 7], F, 4139469664), i = b(i, a, h, c, S[t + 10], G, 3200236656), c = b(c, i, a, h, S[t + 13], D, 681279174), h = b(h, c, i, a, S[t + 0], E, 3936430074), a = b(a, h, c, i, S[t + 3], F, 3572445317), i = b(i, a, h, c, S[t + 6], G, 76029189), c = b(c, i, a, h, S[t + 9], D, 3654602809), h = b(h, c, i, a, S[t + 12], E, 3873151461), a = b(a, h, c, i, S[t + 15], F, 530742520), i = b(i, a, h, c, S[t + 2], G, 3299628645), c = m(c, i, a, h, S[t + 0], H, 4096336452), h = m(h, c, i, a, S[t + 7], I, 1126891415), a = m(a, h, c, i, S[t + 14], J, 2878612391), i = m(i, a, h, c, S[t + 5], K, 4237533241), c = m(c, i, a, h, S[t + 12], H, 1700485571), h = m(h, c, i, a, S[t + 3], I, 2399980690), a = m(a, h, c, i, S[t + 10], J, 4293915773), i = m(i, a, h, c, S[t + 1], K, 2240044497), c = m(c, i, a, h, S[t + 8], H, 1873313359), h = m(h, c, i, a, S[t + 15], I, 4264355552), a = m(a, h, c, i, S[t + 6], J, 2734768916), i = m(i, a, h, c, S[t + 13], K, 1309151649), c = m(c, i, a, h, S[t + 4], H, 4149444226), h = m(h, c, i, a, S[t + 11], I, 3174756917), a = m(a, h, c, i, S[t + 2], J, 718787259), i = m(i, a, h, c, S[t + 9], K, 3951481745), c = g(c, u), i = g(i, e), a = g(a, o), h = g(h, f);
        var M = L(c) + L(i) + L(a) + L(h);
    return M.toLowerCase()
}

function sha1(r) {
    var e, o, a, t, c, h, n, f, s, u = function(r, e) {
        var o = r << e | r >>> 32 - e;
        return o
    },
    C = function(r) {
        var e, o, a = "";
        for (e = 7; e >= 0; e--) o = r >>> 4 * e & 15, a += o.toString(16);
            return a
    },
    d = new Array(80),
    A = 1732584193,
    p = 4023233417,
    i = 2562383102,
    g = 271733878,
    v = 3285377520;
    r = unescape(encodeURIComponent(r));
    var b = r.length,
    k = [];
    for (o = 0; b - 3 > o; o += 4) a = r.charCodeAt(o) << 24 | r.charCodeAt(o + 1) << 16 | r.charCodeAt(o + 2) << 8 | r.charCodeAt(o + 3), k.push(a);
        switch (b % 4) {
            case 0:
            o = 2147483648;
            break;
            case 1:
            o = r.charCodeAt(b - 1) << 24 | 8388608;
            break;
            case 2:
            o = r.charCodeAt(b - 2) << 24 | r.charCodeAt(b - 1) << 16 | 32768;
            break;
            case 3:
            o = r.charCodeAt(b - 3) << 24 | r.charCodeAt(b - 2) << 16 | r.charCodeAt(b - 1) << 8 | 128
        }
        for (k.push(o); k.length % 16 != 14;) k.push(0);
            for (k.push(b >>> 29), k.push(b << 3 & 4294967295), e = 0; e < k.length; e += 16) {
                for (o = 0; 16 > o; o++) d[o] = k[e + o];
                    for (o = 16; 79 >= o; o++) d[o] = u(d[o - 3] ^ d[o - 8] ^ d[o - 14] ^ d[o - 16], 1);
                        for (t = A, c = p, h = i, n = g, f = v, o = 0; 19 >= o; o++) s = u(t, 5) + (c & h | ~c & n) + f + d[o] + 1518500249 & 4294967295, f = n, n = h, h = u(c, 30), c = t, t = s;
                            for (o = 20; 39 >= o; o++) s = u(t, 5) + (c ^ h ^ n) + f + d[o] + 1859775393 & 4294967295, f = n, n = h, h = u(c, 30), c = t, t = s;
                                for (o = 40; 59 >= o; o++) s = u(t, 5) + (c & h | c & n | h & n) + f + d[o] + 2400959708 & 4294967295, f = n, n = h, h = u(c, 30), c = t, t = s;
                                    for (o = 60; 79 >= o; o++) s = u(t, 5) + (c ^ h ^ n) + f + d[o] + 3395469782 & 4294967295, f = n, n = h, h = u(c, 30), c = t, t = s;
                                        A = A + t & 4294967295, p = p + c & 4294967295, i = i + h & 4294967295, g = g + n & 4294967295, v = v + f & 4294967295
                                }
                                return s = C(A) + C(p) + C(i) + C(g) + C(v), s.toLowerCase()
                            }

                            jQuery.extend({
                                form_bootstrap: function() {
                                    return true;
                                }
                            });

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

                            jQuery('input:not(.no-blocked)').on('keydown', function(event) {
                                var tecla = String.fromCharCode(event.keyCode).toLowerCase();
                                if ((event.ctrlKey || event.metaKey) && (tecla == "c" || tecla == "v")) {
                                    window.event ? event.returnValue = false : event.preventDefault();
                                    return false
                                }
                            }).on('contextmenu', function() {
                                return false;
                            });

                            jQuery('form').attr('novalidate', 'novalidate');
                            jQuery('form').submit(function(ev) {
                                ev.preventDefault();
                                var _self = jQuery(this);
                                jQuery.extend({
                                    form_bootstrap: function() {
                                        return Boolean(_self.data('bootstrap'));
                                    }
                                });
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
if (_self.hasClass('md5') || _self.hasClass('sha1')) {
    jQuery.each(_self.find('[type=password]'), function(indice, el) {
        console.log(el);
        console.log(el.val());
        console.log(jQuery(el).val());
    });
}

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
    el_teste = campo_atual;
    console.log(campo_atual);
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
