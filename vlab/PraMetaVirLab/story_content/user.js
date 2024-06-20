function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65ad6ariX1k":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load0;
audio.play0;
audio.volume=0.4;
}

};
