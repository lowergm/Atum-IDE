var editor = ace.edit(document.getElementById("editor-container"));

editor.setTheme("ace/theme/monokai");

editor.session.setMode("ace/mode/javascript");

function executarCod() {
  eval(editor.getValue());
}
