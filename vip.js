var inum = 1,
    vipOption = "";
var vipChannl = new Array(
	"https://api.47ks.com/webcloud/?v=", 
	"http://www.wmxz.wang/video.php?url=",
	"https://jiexi.071811.cc/jx.php?url=",
	"https://www.zuixiaopin.com/api/cloudVideo?url=",
	"https://www.yymeier.com/api.php?url=",
	"https://jxapi.nepian.com/ckparse/?url=",
	"https://api.flvsp.com/?url="
	);

for (x in vipChannl) { vipOption = vipOption + '<option value="' + vipChannl[x] + '">💎 VIP解析道' + inum++ + '</option>'; }

function insVIP(emID, rID) { var gemID = document.getElementsByClassName(emID)[0]; var newNode = document.createElement("select");
    newNode.setAttribute("title", "Insert VIPChannl by FUCK.");
    newNode.setAttribute("style", "border:2px solid #0088f5;color:#0088f5;outline:0");
    gemID.appendChild(newNode);
    newNode.setAttribute("onchange", "replacePlayer(this,'" + rID + "')");
    newNode.innerHTML = '<option selected="selected" disabled="disabled">切换VIP通道</option>' + vipOption; }

function replacePlayer(e, rID) { var playerID = document.getElementById(rID); var thisURL = window.location.href.match('http[^\?]*')[0];
    playerID.innerHTML = ''; var newplayerID = document.createElement("iframe");
    playerID.appendChild(newplayerID);
    newplayerID.setAttribute("border", "0");
    newplayerID.setAttribute("frameborder", "no");
    newplayerID.setAttribute("scrolling", "no");
    newplayerID.setAttribute("marginwidth", "0");
    newplayerID.setAttribute("width", "100%");
    newplayerID.setAttribute("height", "100%");
    newplayerID.src = e.value + thisURL; }