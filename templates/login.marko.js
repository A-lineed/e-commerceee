// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/student-registration$0.0.1/templates/login.marko",
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

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Document</title><link rel=stylesheet href=styles/style.css><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js integrity=sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js integrity=sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s crossorigin=anonymous></script></head><body><div class=login><h1> entrar </h1> <form action=/into method=post> <div class=col><label for=email>email: </label><div class=input-group><div class=input-group-prepend><span class=input-group-text id=inputGroupPrepend2>@</span></div><input class=input-group-text" +
    marko_attr("value", data.email) +
    " name=email placeholder=\"coloque seu email\" required></div> </div> <div class=col><label for=senha class>senha: </label> <div class=input-group-prepend><input style=\"margin-bottom: 20px;\" type=password name=senha value placeholder=\"coloque sua senha\" required></div><button class=\"btn btn-dark\">inserir</button> <a class=\"btn btn-danger\" href=/ >cancelar</a></div></form><div class=toast role=alert aria-live=assertive aria-atomic=true style=\"position: absolute;top:10px; right:50px;\"><div class=toast-header><img src=... class=\"rounded mr-2\" alt=...><strong class=mr-auto>alerta</strong><small>now</small><button type=button class=\"ml-2 mb-1 close  btn btn-danger\" data-dismiss=toast aria-label=Close><span aria-hidden=true>&times;</span></button></div><div class=toast-body>" +
    marko_escapeXml(data.error_messages) +
    marko_escapeXml(data.success_messages) +
    "</div></div>");

  marko_forOf(data.error_messages, function(message, index) {
    out.w("<script> \n                    \n                    $(document).ready(function(){\n                        $('.toast').toast('show',)\n                    })\n                    console.log(message)\n                    </script>");
  });

  marko_forOf(data.success_messages, function(message, index) {
    out.w("<script> \n            \n            $(document).ready(function(){\n                $('.toast').toast('show')\n            })\n        \n        </script>");
  });

  out.w("</div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "31");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/student-registration$0.0.1/templates/login.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
