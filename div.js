
var script = document.createElement('script');
script.type= "text/javascript"
script.innerHTML = 'var div = document.createElement("div");document.getElementsByTagName("body")[0].appendChild(div);div.style.cssText="background: rgb(180,255,137); border: 2px solid lightgreen; padding: 15px; width: 350px; height: 150px; border-radius: 10px; position: absolute; top: 10px; left: 10px; z-index: 999; ";var input=document.createElement("input");input.type="button";input.value="нажми на меня";input.onclick = function(){start(5)} ;div.appendChild(input);function start(n){if(n<1) return console.log("finish");var elem=document.getElementsByClassName("_bkw5z");var people=document.getElementsByClassName("_4zhc5");setTimeout((function(){return elem[1].click()}),2000);setTimeout((function(){return people[0].click()}),4000);return setTimeout((function(){return start(n-1)}),6000);}';
document.getElementsByTagName('body')[0].appendChild(script);



