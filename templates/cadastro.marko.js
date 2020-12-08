// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/student-registration$0.0.1/templates/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>UseVibe - Início</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css> <link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.4/css/simple-line-icons.min.css><link rel=stylesheet href=styles/style.css><style>\n        body {\n            color: #fff;\n        }\n        .cad{\n            width:30%;\n            margin-left:35%;\n        }\n        .cad1{\n            width:60%;\n            margin-left:20%;\n        }\n    </style></head><body><div class=container><h1> cadastrar </h1> <form action=/save method=post> <input name=id" +
    marko_attr("value", "" + data.id) +
    " type=hidden> <div class=col><label for=nome>nome: </label><div class=input-group-prepend><input" +
    marko_attr("value", data.nome) +
    " class=\"form-control cad\" name=nome placeholder=nome required></div> </div> <div class=col><label for=email>email: </label><div class=input-group><div class=input-group-prepend><span style=\"position:absolute; right:61%;\" class=\"input-group-text \" id=inputGroupPrepend2>@</span></div><input class=\"input-group-text cad\"" +
    marko_attr("value", data.email) +
    " name=email placeholder=email required></div> </div> <div class=col><label for=senha class>senha: </label> <div class=input-group-prepend><input type=password class=\"form-control cad\" name=senha value placeholder=senha required></div></div><div class=col><label for=numero class>Numero-celular: </label> <div class=input-group-prepend><input type=text name=numero class=\"form-control cad\" value placeholder=telefone required></div></div><div class=col></div><label for=endereco class>Endereço: </label> <div class=from-group><label for=cep>CEP</label><input name=cep class=\"form-control cad1\" type=text id=cep maxlength=9 required><small>00000-000</small></div><div class=from-group><label for=logradoro>logradoro</label><input name=logradouro class=\"form-control cad1\" type=text id=logradoro><small></small></div><div class=from-group><label for=bairro>bairro</label><input name=bairro class=\"form-control cad1\" type=text id=bairro required><small></small></div><div class=from-group><label for=cidade>cidade</label><input name=localidade class=\"form-control cad1\" type=text id=localidade></div><div class=from-group><label for=uf>UF</label><select style=\"margin-top:20px; margin-bottom: 5px;\" class name=uf required><option" +
    marko_attr("value", data.nome) +
    "></option></select><small>estado</small></div><button type=submit class=\"btn btn-light\">inserir</button><a class=\"btn btn-danger\" href=/ >cancelar</a></form></div><div class=toast role=alert aria-live=assertive aria-atomic=true style=\"position: absolute;top:10px; right:50px;\"><div class=toast-header><img src=... class=\"rounded mr-2\" alt=...><strong class=mr-auto>alerta</strong><small>now</small><button type=button class=\"ml-2 mb-1 close  btn btn-danger\" data-dismiss=toast aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=toast-body>" +
    marko_escapeXml(data.error_messages) +
    marko_escapeXml(data.success_messages) +
    "</div></div>");

  marko_forOf(data.error_messages, function(message, index) {
    out.w("<script> \n                \n                $(document).ready(function(){\n                    $('.toast').toast('show',)\n                })\n                console.log(message)\n                </script>");
  });

  marko_forOf(data.success_messages, function(message, index) {
    out.w("<script> \n        \n        $(document).ready(function(){\n            $('.toast').toast('show')\n        })\n    \n    </script>");
  });

  out.w("<script>\n           /* const cep = document.querySelector(\"#cep\");\n\n            cep.addEventListener('blur',(e)=>{\n                console.log(e)\n                let search = cep.value.replace('-', '');\n                const options ={\n                    method: 'GET',\n                    mode:'cors',\n                    cache:'default'\n                }\n            \n                fetch(`viacep.com.br/ws/${search}/json/`, options)\n                .then( res=>{  return res.json().then( data =>{ console.log(data)})\n                    \n                })\n                .catch(e => console.log('algo errado' , e))\n            })\n*/\n\n            function estados(){\n\n                const ufSelect = document.querySelector('select[name=uf]')\n\n                fetch(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados\")\n                .then((res)=>{\n                    return res.json()\n                }).then((data)=>{\n                    for(const state of data){\n                        ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}<option>`\n                    }\n                })\n\n\n                }\n             \n            estados() \n              \n    \n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "64");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/student-registration$0.0.1/templates/cadastro.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
