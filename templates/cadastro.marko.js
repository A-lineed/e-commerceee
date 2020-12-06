// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/student-registration$0.0.1/templates/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>UseVibe - Cadastro</title><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js integrity=sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js integrity=sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s crossorigin=anonymous></script></head><body><div class=container><h1> cadastrar </h1> <form action=/save method=post> <input name=id" +
    marko_attr("value", "" + data.id) +
    " type=hidden> <div class=col><label for=nome>nome: </label><div class=input-group-prepend><input" +
    marko_attr("value", data.nome) +
    " name=nome placeholder=\"coloque seu nome\" required></div> </div> <div class=col><label for=email>email: </label><div class=input-group><div class=input-group-prepend><span class=input-group-text id=inputGroupPrepend2>@</span></div><input class=input-group-text" +
    marko_attr("value", data.email) +
    " name=email placeholder=\"coloque seu email\" required></div> </div> <div class=col><label for=senha class>senha: </label> <div class=input-group-prepend><input type=password name=senha value placeholder=\"coloque sua senha\" required></div></div><div class=col><label for=numero class>Numero-celular: </label> <div class=input-group-prepend><input type=text name=numero value placeholder=\"coloque seu numero\" required></div></div><div class=col></div><label for=endereco class>Endereço: </label> <div class=from-group><label for=cep>CEP</label><input name=cep class=form-control type=text id=cep maxlength=9 required><small>00000-000</small></div><div class=from-group><label for=logradoro>logradoro</label><input name=logradouro class=form-control type=text id=logradoro><small>logradouro</small></div><div class=from-group><label for=bairro>bairro</label><input name=bairro class=form-control type=text id=bairro required><small></small></div><div class=from-group><label for=localidade>localidade</label><input name=localidade class=form-control type=text id=localidade><small>localidade</small></div><div class=from-group><label for=uf>UF</label><select class name=uf required><option" +
    marko_attr("value", data.nome) +
    "></option></select><small>estado</small></div><button class=\"btn btn-dark\">inserir</button> <a class=\"btn btn-danger\" href=/ >cancelar</a></form></div><script>\n           /* const cep = document.querySelector(\"#cep\");\n\n            cep.addEventListener('blur',(e)=>{\n                console.log(e)\n                let search = cep.value.replace('-', '');\n                const options ={\n                    method: 'GET',\n                    mode:'cors',\n                    cache:'default'\n                }\n            \n                fetch(`viacep.com.br/ws/${search}/json/`, options)\n                .then( res=>{  return res.json().then( data =>{ console.log(data)})\n                    \n                })\n                .catch(e => console.log('algo errado' , e))\n            })\n*/\n\n            function estados(){\n\n                const ufSelect = document.querySelector('select[name=uf]')\n\n                fetch(\"https://servicodados.ibge.gov.br/api/v1/localidades/estados\")\n                .then((res)=>{\n                    return res.json()\n                }).then((data)=>{\n                    for(const state of data){\n                        ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}<option>`\n                    }\n                })\n\n\n                }\n             \n            estados() \n              \n    \n</script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "54");

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
