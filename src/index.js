/* eslint-disable eqeqeq */
/* eslint-disable no-useless-concat */
import "./index.css";
import $ from "jquery";
var flowchat = 0;
var nome = "";
var choose = "";
var choose2 = "";

document.getElementById("btn1").disabled = true;
document.getElementById("btn1").style.visibility = "hidden";
document.getElementById("btn2").disabled = true;
document.getElementById("btn2").style.visibility = "hidden";

$(".message-submit").ready(function () {
  $('<div class="message new">' + "Olá, qual seu nome?" + "</div>")
    .appendTo($(".messages"))
    .addClass("new");
});

$("#btn1").click(function () {
  //--------------WHATSAPP PART--------------------

  if (flowchat == 2) {
    //WHATSAPP

    $('<div class="message message-personal">' + "Whatsapp" + "</div>")
      .appendTo($(".messages"))
      .addClass("new");

    flowchat++;
    choose = "whatsapp";
    Flowchat();
    return;
  }

  if (choose == "whatsapp") {
    if (flowchat == 3) {
      //FOTOS
      $('<div class="message message-personal">' + "Enviar fotos" + "</div>")
        .appendTo($(".messages"))
        .addClass("new");

      flowchat++;
      choose2 = "fotos";
      Flowchat();
      return;
    }
  }

  //------------------- WHASTAPP PART END ---------------------------

  //-------------------- G-MAIL PART -------------------------

  if (choose == "gmail") {
    if (flowchat == 3) {
      //ENVIAR EMAILS

      $('<div class="message message-personal">' + "Enviar emails" + "</div>")
        .appendTo($(".messages"))
        .addClass("new");

      flowchat++;
      choose2 = "enviarmail";
      Flowchat();
      return;
    }
  }

  //----------------------- G-MAIL PART END ---------------------
});

$("#btn2").click(function () {
  // ----------------- WHATSAPP PART ------------------

  if (choose == "whatsapp") {
    if (flowchat == 3) {
      //CONTATOS
      $(
        '<div class="message message-personal">' +
          "Compartilhar contatos" +
          "</div>"
      )
        .appendTo($(".messages"))
        .addClass("new");

      flowchat++;
      choose2 = "contatos";
      Flowchat();
      return;
    }
  }

  // ------------------ WHATSAPP PART END ----------------

  // ------------------ G-MAIL PART ---------------

  if (flowchat == 2) {
    //GMAIL

    $('<div class="message message-personal">' + "G-Mail" + "</div>")
      .appendTo($(".messages"))
      .addClass("new");

    flowchat++;
    choose = "gmail";
    Flowchat();
    return;
  }

  if (choose == "gmail") {
    if (flowchat == 3) {
      $('<div class="message message-personal">' + "Anexar Arquivos" + "</div>")
        .appendTo($(".messages"))
        .addClass("new");

      flowchat++;
      choose2 = "anexo";
      Flowchat();
      return;
    }
  }

  // -------------- G-MAIL PART END ------------
});

// --- NOT WORKING
$("#typesend").keypress(function (event) {
  if (event.which == 13) Send();
});

//--- OLD ONE
/*
$('.message-submit').click(function() {
    Send();
});
*/

$("#typesend").click(function () {
  Send();
});

/*
function Send()
{
  mensage = $('.message-input').val();
  nome = mensage;
  $('<div class="message message-personal">' + mensage + '</div>').appendTo($('.messages')).addClass('new');
  flowchat ++;
  Flowchat();
}
*/

function Send() {
  var mensage = $("#inputtype").val();
  nome = mensage;
  if ($.trim(mensage) == '') {
    return false;
  }
  $('<div class="message message-personal">' + mensage + "</div>")
    .appendTo($(".messages"))
    .addClass("new");
  flowchat++;
  document.getElementById("inputtype").value = '';
  Flowchat();
}

function Flowchat() {
  if (flowchat == 1)
    $(
      '<div class="message new">' +
        "Olá " +
        nome +
        ", como posso ajudar?" +
        "</div>"
    )
      .appendTo($(".messages"))
      .addClass("new");

  if (flowchat == 2) {
    $(
      '<div class="message new">' +
        "Bom, que tal alguma dessas opções?" +
        "</div>"
    )
      .appendTo($(".messages"))
      .addClass("new");
    document.getElementById("inputtype").disabled = true;
    document.getElementById("typesend").disabled = true;

    document.getElementById("btn1").style.visibility = "visible";
    document.getElementById("btn2").style.visibility = "visible";

    document.getElementById("btn1").value = "WhatsApp";
    document.getElementById("btn2").value = "G-Mail";

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
  }

  if (choose == "whatsapp") {
    if (flowchat == 3) {
      $(
        '<div class="message new">' +
          "WhatsApp, claro, sobre o que você quer saber?" +
          "</div>"
      )
        .appendTo($(".messages"))
        .addClass("new");

      document.getElementById("btn1").value = "Enviar Fotos";
      document.getElementById("btn2").value = "Compartilhar contatos";
    }

    if (choose2 == "fotos") {
      if (flowchat == 4) {
        $(
          '<div class="message new">' +
            "Como enviar fotos? Claro, é bem simples" +
            "</div>"
        )
          .appendTo($(".messages"))
          .addClass("new");
        $('<div class="message new">' + "Basta XXXXXXXXXXXX" + "</div>")
          .appendTo($(".messages"))
          .addClass("new");
        $('<div class="message new">' + "XXXXXXXXXXXXXXXXXXXXXXXXXX" + "</div>")
          .appendTo($(".messages"))
          .addClass("new");
      }
    }

    if (choose2 == "contatos") {
      if (flowchat == 4) {
        $(
          '<div class="message new">' +
            "Como compartilhar contatos ? Claro, é bem simples" +
            "</div>"
        )
          .appendTo($(".messages"))
          .addClass("new");
        $('<div class="message new">' + "Basta XXXXXXXXXXXX" + "</div>")
          .appendTo($(".messages"))
          .addClass("new");
        $('<div class="message new">' + "XXXXXXXXXXXXXXXXXXXXXXXXXX" + "</div>")
          .appendTo($(".messages"))
          .addClass("new");
      }
    }
  }

  if (choose == "gmail") {
    if (flowchat == 3) {
      $(
        '<div class="message new">' +
          "G-Mail, claro, sobre o que você quer saber ?" +
          "</div>"
      )
        .appendTo($(".messages"))
        .addClass("new");

      document.getElementById("btn1").value = "Enviar e-mails";
      document.getElementById("btn2").value = "Anexar arquivos ao e-mail";
    }

    if (choose2 == "enviarmail") {
      if (flowchat == 4) {
        $(
          '<div class="message new">' +
            "Como enviar e-mail ? Claro, é bem simples" +
            "</div>"
        )
          .appendTo($(".messages"))
          .addClass("new");
        $('<div class="message new">' + "Basta XXXXXXXXXXXX" + "</div>")
          .appendTo($(".messages"))
          .addClass("new");
        $('<div class="message new">' + "XXXXXXXXXXXXXXXXXXXXXXXXXX" + "</div>")
          .appendTo($(".messages"))
          .addClass("new");
      }
    }

    if (choose2 == "anexo") {
      if (flowchat == 4) {
        $(
          '<div class="message new">' +
            "Como anexar arquivos ? Claro, é bem simples" +
            "</div>"
        )
          .appendTo($(".messages"))
          .addClass("new");
        $('<div class="message new">' + "Basta XXXXXXXXXXXX" + "</div>")
          .appendTo($(".messages"))
          .addClass("new");
        $('<div class="message new">' + "XXXXXXXXXXXXXXXXXXXXXXXXXX" + "</div>")
          .appendTo($(".messages"))
          .addClass("new");
      }
    }
  }
}
