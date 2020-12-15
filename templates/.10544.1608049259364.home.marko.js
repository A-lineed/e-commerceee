// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/student-registration$0.0.1/templates/home.marko",
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

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><title>UseVibe - Início</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.2.4/css/simple-line-icons.min.css><link rel=stylesheet href=styles/style.css></head><body><nav><div class=mini><p class=products>Empty</p><p class=names></p><p class=miniprice></p><form" +
    marko_attr("action", "/comprar") +
    " method=post><input type=hidden name=id" +
    marko_attr("value", "" + (data.results.id = "4")) +
    "><input type=hidden name=nome" +
    marko_attr("value", "" + (data.results.nome = "blusa4")) +
    "><input type=submit value=\"comprar agora\"></form></div><ul><li><a href=/ >Home</a></li><li><a href=/login>Login</a></li><li><a href=/cadastro>Cadastro</a></li><li><a href=/feminino>Feminino</a></li><li><a href=/masculino>Masculino</a></li><li><a href=/infantil>Infantil</a></li></ul><span style=margin-left:150px;>Bem-vindo(a) - " +
    marko_escapeXml(data.nomeusu) +
    "</span><div class=\"cart icon-basket\"><span class=number>1</span></div></nav><div class=container>");

  var $for$0 = 0;

  marko_forOf(data.results, function(produto, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=product><img" +
      marko_attr("src", "images/" + (produto.foto == null ? "" : produto.foto)) +
      " width=130 height=130><h2 class=header>" +
      marko_escapeXml(produto.nome) +
      "</h2><p class=price>" +
      marko_escapeXml(produto.preco) +
      "</p><div class=btn>add carrinho</div><form" +
      marko_attr("action", "/comprar") +
      " method=post><input type=hidden name=id" +
      marko_attr("value", "" + produto.id) +
      "><input type=hidden name=nome" +
      marko_attr("value", "" + produto.nome) +
      "><input style=\"text-align:center; border-radius: 10px;margin: 10px 90px 70px 0px;width:80px; height:40px; background-color:black; color:white;\" class=btn-outline-primary type=submit value=comprar></form></div>");
  });

  out.w("</div><div class=quickviewContainer><div class=close></div><h2 class=headline></h2><p class=description></p><img src=https://placeimg.com/100/100><img src=https://placeimg.com/100/100><img src=https://placeimg.com/100/100></div><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js></script><script src=scripts/script.js></script><div class=toast role=alert aria-live=assertive aria-atomic=true style=\"position: absolute;top:10px; right:50px;\"><div class=toast-header><img src=... class=\"rounded mr-2\" alt=...><strong class=mr-auto>alerta</strong><small>now</small><button type=button class=\"ml-2 mb-1 close  btn btn-danger\" data-dismiss=toast aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=toast-body>" +
    marko_escapeXml(data.error_messages) +
    marko_escapeXml(data.success_messages) +
    "</div></div>");

  marko_forOf(data.error_messages, function(message, index) {
    out.w("<script> \r\n        \r\n        $(document).ready(function(){\r\n            $('.toast').toast('show',)\r\n        })\r\n        console.log(message)\r\n        </script>");
  });

  marko_forOf(data.success_messages, function(message, index) {
    out.w("<script> \r\n\r\n$(document).ready(function(){\r\n    $('.toast').toast('show')\r\n})\r\n\r\n</script>");
  });

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "58");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/student-registration$0.0.1/templates/home.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
