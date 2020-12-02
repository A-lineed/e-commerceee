// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/student-registration$0.0.1/templates/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>UseVibe - Início</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js integrity=sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx crossorigin=anonymous></script><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.4/css/simple-line-icons.min.css><link rel=stylesheet href=styles/style.css><style>\r\n        body {\r\n            color: #fff;\r\n        }\r\n    </style></head><body><nav><div class=mini><p class=products>Empty</p><p class=names></p><p class=miniprice></p></div><ul><li><a href=/ >Home</a></li><li><a href=/login>Login</a></li><li><a href=/cadastro>Cadastro</a></li><li><a href=/feminino>Feminino</a></li><li><a href=/masculino>Masculino</a></li><li><a href=/infantil>Infantil</a></li><li>Contato</li></ul><span style=margin-left:150px;>bem vindo - " +
    marko_escapeXml(data.nome) +
    "</span><div class=\"cart icon-basket\"><span class=number>1</span></div></nav><div class=container><h1> cadastrar </h1> <form action=/save method=post> <input name=id" +
    marko_attr("value", "" + data.id) +
    " type=hidden> <div class=col><label for=nome>nome: </label><div class=input-group-prepend><input" +
    marko_attr("value", data.nome) +
    " class=form-control name=nome placeholder=\"coloque seu nome\" required></div> </div> <div class=col><label for=email>email: </label><div class=input-group><div class=input-group-prepend><span class=input-group-text id=inputGroupPrepend2>@</span></div><input class=form-control" +
    marko_attr("value", data.email) +
    " name=email placeholder=\"coloque seu email\" required></div> </div> <div class=col><label for=senha class>senha: </label> <div class=input-group-prepend><input type=password class=form-control name=senha value placeholder=\"coloque sua senha\" required></div></div><div class=col><label for=numero class>Numero-celular: </label> <div class=input-group-prepend><input type=text name=numero class=form-control value placeholder=\"coloque seu numero\" required></div></div><div class=col></div><label for=endereco class>Endereço: </label> <div class=from-group><label for=cep>CEP</label><input name=cep class=form-control type=text id=cep maxlength=9 required><small>00000-000</small></div><div class=from-group><label for=logradoro>logradoro</label><input name=logradouro class=form-control type=text id=logradoro><small>logradouro</small></div><div class=from-group><label for=bairro>bairro</label><input name=bairro class=form-control type=text id=bairro required><small></small></div><div class=from-group><label for=localidade>localidade</label><input name=localidade class=form-control type=text id=localidade><small>localidade</small></div><div class=from-group><label for=uf>UF</label><select class name=uf required><option" +
    marko_attr("value", data.nome) +
    "></option></select><small>estado</small></div><button type=submit class=\"btn btn-light\">inserir</button><a class=\"btn btn-danger\" href=/ >cancelar</a></form></div><script>\r\n           /* const cep = document.querySelector(\"#cep\");\r\n\r\n            cep.addEventListener('blur',(e)=>{\r\n                console.log(e)\r\n                let search = cep.value.replace('-', '');\r\n                const options ={\r\n                    method: 'GET',\r\n                    mode:'cors',\r\n                    cache:'default'\r\n                }\r\n            \r\n                fetch(`viacep.com.br/ws/${search}/json/`, options)\r\n                .then( res=>{  return res.json().then( data =>{ console.log(data)})\r\n                    \r\n                })\r\n                .catch(e => console.log('algo errado' , e))\r\n            })\r\n*/\r\n\r\n            function estados(){\r\n\r\n                const ufSelect = document.querySelector('select[name=uf]')\r\n\r\n                fetch(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados\")\r\n                .then((res)=>{\r\n                    return res.json()\r\n                }).then((data)=>{\r\n                    for(const state of data){\r\n                        ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}<option>`\r\n                    }\r\n                })\r\n\r\n\r\n                }\r\n             \r\n            estados() \r\n              \r\n    \r\n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "79");

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
