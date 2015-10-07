/*!
 * validaform v1.1
 * Autor: J'JUNIOR
 * Site do Autor: jjunior.net.br
 * Copyright 2014 validaform
 * Publicação: 06/11/2014
 * Atualização: 28/06/2015
 * Github: https://github.com/joaojuniormail/validaform
 * Licensed under the MIT license
 */

function utf8_encode(argString) {

    if (argString === null || typeof argString === 'undefined') {
        return '';
    }

    var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    var utftext = '',
        start, end, stringl = 0;

    start = end = 0;
    stringl = string.length;
    for (var n = 0; n < stringl; n++) {
        var c1 = string.charCodeAt(n);
        var enc = null;

        if (c1 < 128) {
            end++;
        } else if (c1 > 127 && c1 < 2048) {
            enc = String.fromCharCode(
                (c1 >> 6) | 192, (c1 & 63) | 128
            );
        } else if ((c1 & 0xF800) != 0xD800) {
            enc = String.fromCharCode(
                (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            );
        } else { // surrogate pairs
            if ((c1 & 0xFC00) != 0xD800) {
                throw new RangeError('Unmatched trail surrogate at ' + n);
            }
            var c2 = string.charCodeAt(++n);
            if ((c2 & 0xFC00) != 0xDC00) {
                throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
            }
            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
            enc = String.fromCharCode(
                (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
            );
        }
        if (enc !== null) {
            if (end > start) {
                utftext += string.slice(start, end);
            }
            utftext += enc;
            start = end = n + 1;
        }
    }

    if (end > start) {
        utftext += string.slice(start, stringl);
    }

    return utftext;
}

function md5(str) {

    var xl;

    var rotateLeft = function (lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    };

    var addUnsigned = function (lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    };

    var _F = function (x, y, z) {
        return (x & y) | ((~x) & z);
    };
    var _G = function (x, y, z) {
        return (x & z) | (y & (~z));
    };
    var _H = function (x, y, z) {
        return (x ^ y ^ z);
    };
    var _I = function (x, y, z) {
        return (y ^ (x | (~z)));
    };

    var _FF = function (a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _GG = function (a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _HH = function (a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var _II = function (a, b, c, d, x, s, ac) {
        a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    };

    var convertToWordArray = function (str) {
        var lWordCount;
        var lMessageLength = str.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = new Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    var wordToHex = function (lValue) {
        var wordToHexValue = '',
            wordToHexValue_temp = '',
            lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            wordToHexValue_temp = '0' + lByte.toString(16);
            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
        }
        return wordToHexValue;
    };

    var x = [],
        k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22,
        S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20,
        S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23,
        S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;

    str = this.utf8_encode(str);
    x = convertToWordArray(str);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    xl = x.length;
    for (k = 0; k < xl; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
    }

    var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);

    return temp.toLowerCase();
}

function sha1(r) {
    var e, o, a, t, c, h, n, f, s, u = function (r, e) {
            var o = r << e | r >>> 32 - e;
            return o
        },
        C = function (r) {
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
    form_bootstrap: true,
    form_scroll: true,
    form_scrollbefore: 100
});

jQuery.fn.serializeObject = function () {
    "use strict";
    var a = {},
        b = function (b, c) {
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

function moeda(valor) {
        var valor = valor.replace(/\D/gi, ""),
            valor = (valor) ? parseInt(valor).toString() : "0",
            tamanhoValor = valor.toString().length,
            valorDecimal;
        if (tamanhoValor > 2) {
            valorDecimal = valor.substr(valor.length - 2)
        } else if (valor > 9) {
            valorDecimal = valor
        } else if (valor) {
            valorDecimal = "0" + valor
        } else {
            valorDecimal = "00"
        }
        var valor = (tamanhoValor > 2) ? valor.substring(0, tamanhoValor - 2) : "0",
            sinal = valor < 0 ? "-" : "",
            valorInteiro = parseInt(valor = Math.abs(+valor || 0).toFixed(2)) + "",
            divisaoMilhar = (divisaoMilhar = valorInteiro.length) > 3 ? divisaoMilhar % 3 : 0,
            valor = "R$ "+sinal + (divisaoMilhar ? valorInteiro.substr(0, divisaoMilhar) + "." : "") + valorInteiro.substr(divisaoMilhar).replace(/(\d{3})(?=\d)/g, "$1" + ".") + ("," + valorDecimal);
        return valor;
    }

var campo;

jQuery('input.moeda').attr('data-minlength', 4);
campo = jQuery('input.moeda');
campo.keypress(function () {
    mascara(this, moeda);
});
campo.change(function () {
    mascara(this, moeda);
});

jQuery('input.timer').attr('maxlength', 5);
jQuery('input.timer').attr('data-minlength', 5);
campo = jQuery('input.timer');
campo.keypress(function () {
    mascara(this, timer);
});
campo.change(function () {
    mascara(this, timer);
});

jQuery('input.phone').attr('maxlength', 15);
jQuery('input.phone').attr('data-minlength', 14);
campo = jQuery('input.phone');
campo.keypress(function () {
    mascara(this, telefone);
});
campo.change(function () {
    mascara(this, telefone);
});

jQuery('input.cnpj').attr('maxlength', 18);
jQuery('input.cnpj').attr('data-minlength', 18);
campo = jQuery('input.cnpj');
campo.keypress(function () {
    mascara(this, cnpj);
});
campo.change(function () {
    mascara(this, cnpj);
});

jQuery('input.cpf').attr('maxlength', 14);
jQuery('input.cpf').attr('data-minlength', 14);
campo = jQuery('input.cpf');
campo.keypress(function () {
    mascara(this, cpf);
});
campo.change(function () {
    mascara(this, cpf);
});

jQuery('input.data').attr('maxlength', 10);
jQuery('input.data').attr('data-minlength', 10);
campo = jQuery('input.data');
campo.keypress(function () {
    mascara(this, data);
});
campo.change(function () {
    mascara(this, data);
});

jQuery('input.cep').attr('maxlength', 10);
jQuery('input.cep').attr('data-minlength', 10);
campo = jQuery('input.cep');
campo.keypress(function () {
    mascara(this, cep);
});
campo.change(function () {
    mascara(this, cep);
});

campo = jQuery('input.so-numero');
campo.keypress(function () {
    mascara(this, so_numeros);
});
campo.change(function () {
    mascara(this, so_numeros);
});

campo = jQuery('input.so-texto');
campo.keypress(function () {
    mascara(this, so_texto);
});
campo.change(function () {
    mascara(this, so_texto);
});

jQuery('input:not(.no-blocked)').on('keydown', function (event) {
    var tecla = String.fromCharCode(event.keyCode).toLowerCase();
    if ((event.ctrlKey || event.metaKey) && (tecla == "c" || tecla == "v")) {
        window.event ? event.returnValue = false : event.preventDefault();
        return false
    }
}).on('contextmenu', function () {
    return false;
});

jQuery('form').attr('novalidate', 'novalidate');
jQuery('form').find('input:not([maxlength])').attr('maxlength', 255);
jQuery('form').submit(function (ev) {
    ev.preventDefault();
    var _self = jQuery(this);
    if (_self.attr('data-bootstrap')) {
        if (_self.attr('data-bootstrap').toUpperCase() == "FALSE") {
            jQuery.extend({
                form_bootstrap: false
            });
        } else {
            jQuery.extend({
                form_bootstrap: true
            });
        }
    } else {
        jQuery.extend({
            form_bootstrap: true
        });
    }
    if (_self.attr('data-scroll')) {
        if (_self.attr('data-scroll').toUpperCase() == "FALSE") {
            jQuery.extend({
                form_scroll: false,
                form_scrollbefore: 100
            });
        } else {
            jQuery.extend({
                form_scroll: true,
                form_scrollbefore: 100
            });
        }
    } else {
        jQuery.extend({
            form_scroll: true,
            form_scrollbefore: 100
        });
    }

    var aprovado = true;
    jQuery(_self.attr('data-elsuccess')).hide();
    if (!jQuery.form_bootstrap) {
        jQuery(_self.attr('data-elvalidate')).html('');
    }
    _self.find('input, textarea, select').each(function () {
        var atual = jQuery(this);
        if (atual.val() == atual.attr('placeholder')) {
            atual.val("");
        }
        if (atual.is('[required]')) {
            if (jQuery.form_bootstrap) {
                if (atual.parent().hasClass('input-group')) {
                    atual.parent().parent().addClass('has-feedback');
                    atual.parent().parent().removeClass('has-error');
                    if (atual.parent().parent().find('.help-block').length) {
                        atual.parent().parent().find('.help-block').html('');
                    } else {
                        atual.parent().parent().append('<small class="help-block"></small>');
                    }
                } else {
                    atual.parent().addClass('has-feedback');
                    atual.parent().removeClass('has-error');
                    if (atual.parent().find('.help-block').length) {
                        atual.parent().find('.help-block').html('');
                    } else {
                        atual.parent().append('<small class="help-block"></small>');
                    }
                }
            }
            if ((atual.val() == atual.attr('placeholder') || jQuery.trim(atual.val()) == "" && !atual.is('select')) || (atual.is('select') && atual.find('option:selected').text() == atual.find('option').eq(0).text())) {
                anima_validacao(atual, atual.attr('data-msgrequired'));
                aprovado = false;
                return false;
            } else {
                if (atual.attr('type') == 'checkbox') {
                    if (!atual.prop('checked')) {
                        anima_validacao(atual, atual.attr('data-msgrequired'));
                        aprovado = false;
                        return false;
                    }
                }
                if (atual.attr('type') == 'email' && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(atual.val())) {
                    anima_validacao(atual, atual.attr('data-msgvalidate'));
                    aprovado = false;
                    return false;
                }
                if (atual.attr('data-minlength') && atual.val().length < atual.attr('data-minlength')) {
                    anima_validacao(atual, atual.attr('data-msgvalidate'));
                    aprovado = false;
                    return false;
                }

                if (atual.hasClass('cpf')) {
                    if (!valida_cpf(atual.val())) {
                        anima_validacao(atual, atual.attr('data-msgvalidate'));
                        aprovado = false;
                        return false;
                    }
                }
                if (atual.hasClass('cnpj')) {
                    if (!valida_cnpj(atual.val())) {
                        anima_validacao(atual, atual.attr('data-msgvalidate'));
                        aprovado = false;
                        return false;
                    }
                }
                if (atual.attr('type') == 'file' && atual.attr('data-extencoes')) {
                    var extensoes = atual.attr('data-extencoes');
                    extensoes = extensoes.split(",");
                    for (var i = 0; i < extensoes.length; i++) {
                        extensoes[i] = jQuery.trim(extensoes[i]);
                    }
                    var extensoesValidas = extensoes;
                    var caminho = atual.val();
                    var extensao = caminho.substr(caminho.lastIndexOf("."), caminho.length - caminho.lastIndexOf("."));
                    var ocorrencia = false;
                    var tamanhoMaximo = 0;
                    if (atual.attr('data-maxsize') && atual.attr('data-typesize')) {
                        if (atual.attr('data-typesize').toUpperCase() == 'MB') {
                            tamanhoMaximo = parseInt(atual.attr('data-maxsize')) * 1024 * 1024;
                        } else {
                            /*TAMANHO EM KB POR DEFAULT*/
                            tamanhoMaximo = parseInt(atual.attr('data-maxsize')) * 1024;
                        }
                    }
                    var tamanhoArquivo = parseInt(atual.attr("data-filesize"));
                    console.log(tamanhoArquivo, tamanhoMaximo);
                    for (var i = 0; i < extensoesValidas.length; i++) {
                        if (extensoesValidas[i].toUpperCase() == extensao.toUpperCase()) {
                            ocorrencia = true;
                            break;
                        }
                    }
                    if (ocorrencia == false || (tamanhoArquivo > tamanhoMaximo && tamanhoMaximo > 0)) {
                        anima_validacao(atual, atual.attr('data-msgvalidate'));
                        aprovado = false;
                        return false;
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
                            _self.find('[name=' + atual.attr('name') + ']').eq(i).attr('data-index', i);
                        };
                        if (atual.attr('data-index') == total - 1 && senhas.length > 1) {
                            anima_validacao(atual, atual.attr('data-msgequals'));
                            aprovado = false;
                            return false;
                        }
                    }
                }
            }
        }
    })

    if (aprovado) {
        jQuery.each(_self.find('[type=password]'), function (indice, el) {
            var el = jQuery(el),
                cript, value;
            if (Boolean(el.attr('data-cript'))) {
                value = el.val();
                el.attr('data-valback', value);
                cript = el.attr('data-cript').split(",");
                for (var i = 0; i < cript.length; i++) {
                    cript[i] = jQuery.trim(cript[i]);
                    if (cript[i].toUpperCase() == 'SHA1') {
                        value = sha1(value);
                    }
                    if (cript[i].toUpperCase() == 'MD5') {
                        value = md5(value);
                    }
                }
                el.val(value).trigger('change');
            }
        });
    }

    if (aprovado && _self.hasClass('ajax')) {
        jQuery('.loading').fadeIn('slow');
        var url = _self.attr('action'),
            params,
            sendmail = jQuery(_self.attr('data-elsend')),
            msgsuccess = jQuery(_self.attr('data-elsuccess'));
        if (_self.attr('method').toUpperCase() == "POST" && typeof (FormData) == 'function') {
            params = new FormData(_self[0]);
        } else {
            params = _self.serializeObject();
        }
        jQuery.ajax({
            type: _self.attr('method'),
            url: url,
            cache: false,
            processData: false,
            contentType: false,
            data: params,
            beforeSend: function () {
                if (sendmail) {
                    sendmail.fadeIn('slow');
                }
            },
            success: function (data) {
                if (msgsuccess) {
                    msgsuccess.html(data);
                    msgsuccess.fadeIn('slow');
                    setTimeout(function () {
                        msgsuccess.fadeOut('slow');
                    }, 10000);
                }
                if (_self.attr('data-callback')) {
                    var func = _self.attr('data-callback');
                    func = func.replace('()', '(' + JSON.stringify(data) + ')');
                    func = new Function(func);
                    func();
                }
            },
            complete: function () {
                if (sendmail) {
                    sendmail.fadeOut('slow');
                }
                jQuery.each(_self.find('[type=password]'), function (indice, el) {
                    jQuery(el).val(jQuery(el).attr('data-valback')).trigger('change');
                });
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log(xhr, textStatus, errorThrown);
            }
        });
    } else if (aprovado) {
        _self.unbind('submit').submit();
    }

});

jQuery('input[type=file]').change(function (event) {
    var f = this.files[0],
        el = jQuery(this);
    jQuery(this).attr("data-filesize", (f.size || f.fileSize));
    el.parents('form').find('input[name=' + el.attr('name') + 'txt]').val(el.val());
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
    if (jQuery.form_bootstrap) {
        if(campo_atual.parent().hasClass('input-group')){
            msgValidate = campo_atual.parent().parent().find('.help-block');
            campo_atual.parent().parent().addClass('has-error');
        }else{
            msgValidate = campo_atual.parent().find('.help-block');
            campo_atual.parent().addClass('has-error');
        }
    } else {
        msgValidate = campo_atual.parents('form').attr('data-elvalidate');
        msgValidate = jQuery(msgValidate);
        campo_atual.addClass('has-error');
    }
    msgValidate.text("");
    msgValidate.text(msg);
    msgValidate.fadeIn("fast");
    campo_atual.trigger('focus');
    if (campo_atual.is('select')) {
        if (jQuery.form_bootstrap && (typeof jQuery.fn.selectpicker == 'function')) {
            campo_atual = campo_atual.parent().children('.bootstrap-select');
            campo_atual.click(function () {
                setTimeout(function () {
                    campo_atual.removeAttr('style');
                    msgValidate.fadeOut("fast");
                    campo_atual.parent().removeClass('has-error');
                }, 600);
            });
        } else {
            campo_atual.change(function () {
                setTimeout(function () {
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

        campo_prev.keypress(function () {
            setTimeout(function () {
                campo_atual.removeAttr('style');
                msgValidate.fadeOut("fast");
                campo_atual.parent().removeClass('has-error');
            }, 600);
        });
    }
    if (campo_atual.attr("type") == "radio") {
        campo_prev = campo_atual;
        campo_atual = campo_prev.parent();
        campo_prev.keypress(function () {
            setTimeout(function () {
                campo_atual.removeAttr('style');
                msgValidate.fadeOut("fast");
                campo_atual.parent().removeClass('has-error');
            }, 600);
        });
    }

    if (jQuery.form_scroll) {
        jQuery('html,body').animate({
            scrollTop: (campo_atual.offset().top - jQuery.form_scrollbefore) + 'px'
        }, 'fast');
    }
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

    campo_atual.keypress(function () {
        setTimeout(function () {
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
