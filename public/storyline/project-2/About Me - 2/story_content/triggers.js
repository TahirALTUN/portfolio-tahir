function ExecuteScript(strId)
{
  switch (strId)
  {
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
};
function getActor() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    const email = urlParams.get('email');
    console.log("deneme log output: ", userId);
      return {
        "mbox": email,
        "objectType": "Agent",
        "name": userId
      };
    }


