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

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>UseVibe - Início</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css> <link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.4/css/simple-line-icons.min.css><link rel=stylesheet href=styles/style.css><style>\r\n        body {\r\n            color: #fff;\r\n        }\r\n        .cad{\r\n            width:30%;\r\n            margin-left:35%;\r\n        }\r\n        .cad1{\r\n            width:60%;\r\n            margin-left:20%;\r\n        }\r\n    </style></head><body><div class=container><h1> Cadastre-se </h1> <form action=/save method=post> <input name=id" +
    marko_attr("value", "" + data.id) +
    " type=hidden> <div class=col><label for=nome>Nome: </label><div class=input-group-prepend><input" +
    marko_attr("value", data.nome) +
    " class=\"form-control cad\" name=nome placeholder=\"Digite seu nome\" required></div> </div> <div class=col><label for=email>Email: </label><div class=input-group><div class=input-group-prepend><span style=\"position:absolute; right:61%;\" class=\"input-group-text \" id=inputGroupPrepend2>@</span></div><input class=\"input-group-text cad\"" +
    marko_attr("value", data.email) +
    " name=email placeholder=\"Digite o email\" required></div> </div> <div class=col><label for=senha class>Senha: </label> <div class=input-group-prepend><input type=password class=\"form-control cad\" name=senha value placeholder=\"Digite uma senha\" required></div></div><div class=col><label for=numero class>Telefone para contao: </label> <div class=input-group-prepend><input type=text name=numero class=\"form-control cad\" value placeholder=\"Digite seu telefone\" required></div></div><div class=col></div><label for=endereco class>Endereço: </label> <div class=from-group><label for=cep>CEP</label><input name=cep class=\"form-control cad1\" type=text id=cep maxlength=9 required><small>00000-000</small></div><div class=from-group><label for=logradoro>Logradouro</label><input name=logradouro class=\"form-control cad1\" type=text id=Logradouro><small></small></div><div class=from-group><label for=bairro>Bairro</label><input name=bairro class=\"form-control cad1\" type=text id=Bairro required><small></small></div><div class=from-group><label for=cidade>Cidade</label><input name=localidade class=\"form-control cad1\" type=text id=Localidade></div><div class=from-group><label for=uf>UF</label><select style=\"margin-top:20px; margin-bottom: 5px;\" class name=uf required><option" +
    marko_attr("value", data.nome) +
    "></option></select><small>estado</small></div><button type=submit class=\"btn btn-light\">Inserir</button><a class=\"btn btn-danger\" href=/ >Cancelar</a></form></div><div class=toast role=alert aria-live=assertive aria-atomic=true style=\"position: absolute;top:10px; right:50px;\"><div class=toast-header><img src=... class=\"rounded mr-2\" alt=...><strong class=mr-auto>alerta</strong><small>now</small><button type=button class=\"ml-2 mb-1 close  btn btn-danger\" data-dismiss=toast aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=toast-body>" +
    marko_escapeXml(data.error_messages) +
    marko_escapeXml(data.success_messages) +
    "</div></div>");

  marko_forOf(data.error_messages, function(message, index) {
    out.w("<script> \r\n                \r\n                $(document).ready(function(){\r\n                    $('.toast').toast('show',)\r\n                })\r\n                console.log(message)\r\n                </script>");
  });

  marko_forOf(data.success_messages, function(message, index) {
    out.w("<script> \r\n        \r\n        $(document).ready(function(){\r\n            $('.toast').toast('show')\r\n        })\r\n    \r\n    </script>");
  });

  out.w("<script>\r\n           /* const cep = document.querySelector(\"#cep\");\r\n\r\n            cep.addEventListener('blur',(e)=>{\r\n                console.log(e)\r\n                let search = cep.value.replace('-', '');\r\n                const options ={\r\n                    method: 'GET',\r\n                    mode:'cors',\r\n                    cache:'default'\r\n                }\r\n            \r\n                fetch(`viacep.com.br/ws/${search}/json/`, options)\r\n                .then( res=>{  return res.json().then( data =>{ console.log(data)})\r\n                    \r\n                })\r\n                .catch(e => console.log('algo errado' , e))\r\n            })\r\n*/\r\n\r\n            function estados(){\r\n\r\n                const ufSelect = document.querySelector('select[name=uf]')\r\n\r\n                fetch(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados\")\r\n                .then((res)=>{\r\n                    return res.json()\r\n                }).then((data)=>{\r\n                    for(const state of data){\r\n                        ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}<option>`\r\n                    }\r\n                })\r\n\r\n\r\n                }\r\n             \r\n            estados() \r\n              \r\n    \r\n</script>");

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
