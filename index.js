const Jsl_0x167088=Jsl_0x41a5;function Jsl_0x41a5(_0x307c2e,_0x4136d3){const _0x3e1f2f=Jsl_0x3e1f();return Jsl_0x41a5=function(_0x41a530,_0x184223){_0x41a530=_0x41a530-0x188;let _0x2afdf6=_0x3e1f2f[_0x41a530];return _0x2afdf6;},Jsl_0x41a5(_0x307c2e,_0x4136d3);}(function(_0x37ead5,_0x20dfa8){const _0x4d3af8=Jsl_0x41a5,_0x3e706e=_0x37ead5();while(!![]){try{const _0x431e0d=parseInt(_0x4d3af8(0x19d))/0x1*(parseInt(_0x4d3af8(0x1ae))/0x2)+-parseInt(_0x4d3af8(0x195))/0x3+parseInt(_0x4d3af8(0x1b0))/0x4*(parseInt(_0x4d3af8(0x1b9))/0x5)+-parseInt(_0x4d3af8(0x1cb))/0x6*(-parseInt(_0x4d3af8(0x1ba))/0x7)+-parseInt(_0x4d3af8(0x19e))/0x8+-parseInt(_0x4d3af8(0x1ca))/0x9*(parseInt(_0x4d3af8(0x198))/0xa)+parseInt(_0x4d3af8(0x1aa))/0xb*(parseInt(_0x4d3af8(0x1a5))/0xc);if(_0x431e0d===_0x20dfa8)break;else _0x3e706e['push'](_0x3e706e['shift']());}catch(_0x476534){_0x3e706e['push'](_0x3e706e['shift']());}}}(Jsl_0x3e1f,0x9213c));const {default:makeWASocket,useSingleFileAuthState,Browsers}=require(Jsl_0x167088(0x1c1)),fs=require('fs'),{serialize}=require(Jsl_0x167088(0x18d)),{Message,Image,Video}=require('./lib/Base'),pino=require(Jsl_0x167088(0x1ad)),path=require(Jsl_0x167088(0x1b6)),events=require(Jsl_0x167088(0x197)),got=require(Jsl_0x167088(0x1c4)),config=require('./config'),{PluginDB}=require(Jsl_0x167088(0x1b1)),Greetings=require('../lib/Greetings');async function bot(){const _0xfb5ef2=Jsl_0x167088;await config['DATABASE'][_0xfb5ef2(0x19f)]();const {state:_0x108f7d,saveState:_0x4e17ea}=useSingleFileAuthState(_0xfb5ef2(0x18a),pino({'level':_0xfb5ef2(0x18f)}));let _0x7118d2=makeWASocket({'logger':pino({'level':_0xfb5ef2(0x18f)}),'auth':_0x108f7d,'printQRInTerminal':!![],'browser':Browsers[_0xfb5ef2(0x194)]('Desktop'),'downloadHistory':![],'syncFullHistory':![]});_0x7118d2['ev']['on'](_0xfb5ef2(0x1ac),async _0x2c88fe=>{const _0x3a29c1=_0xfb5ef2,{connection:_0x52efd4,lastDisconnect:_0x17a18b}=_0x2c88fe;_0x52efd4===_0x3a29c1(0x1b8)&&console['log'](_0x3a29c1(0x1be));_0x52efd4===_0x3a29c1(0x1af)&&_0x17a18b&&_0x17a18b['error']&&_0x17a18b['error'][_0x3a29c1(0x1bd)][_0x3a29c1(0x1a1)]!=0x191&&(console[_0x3a29c1(0x1a3)](_0x17a18b[_0x3a29c1(0x190)][_0x3a29c1(0x1bd)][_0x3a29c1(0x1c7)]),bot());if(_0x52efd4===_0x3a29c1(0x1c9)){console['log']('Session\x20Restored..✅!'),console[_0x3a29c1(0x1a3)]('Installing\x20Plugins.✅..');let _0x301bdc=await PluginDB[_0x3a29c1(0x193)]();_0x301bdc[_0x3a29c1(0x1a2)](async _0x1188f3=>{const _0x2f0aae=_0x3a29c1;if(!fs[_0x2f0aae(0x189)]('./plugins/'+_0x1188f3[_0x2f0aae(0x1b5)][_0x2f0aae(0x1bf)]+_0x2f0aae(0x1c2))){console[_0x2f0aae(0x1a3)](_0x1188f3['dataValues'][_0x2f0aae(0x1bf)]);var _0x40b8d6=await got(_0x1188f3['dataValues'][_0x2f0aae(0x188)]);_0x40b8d6[_0x2f0aae(0x1a1)]==0xc8&&(fs[_0x2f0aae(0x1ab)](_0x2f0aae(0x18c)+_0x1188f3[_0x2f0aae(0x1b5)][_0x2f0aae(0x1bf)]+_0x2f0aae(0x1c2),_0x40b8d6[_0x2f0aae(0x191)]),require(_0x2f0aae(0x18c)+_0x1188f3[_0x2f0aae(0x1b5)][_0x2f0aae(0x1bf)]+'.js'));}}),fs['readdirSync'](_0x3a29c1(0x192))['forEach'](_0x2473b4=>{const _0x4971e1=_0x3a29c1;path[_0x4971e1(0x1b2)](_0x2473b4)[_0x4971e1(0x19a)]()==_0x4971e1(0x1c2)&&require(_0x4971e1(0x18c)+_0x2473b4);}),console[_0x3a29c1(0x1a3)](_0x3a29c1(0x1a7));try{_0x7118d2['ev']['on'](_0x3a29c1(0x19c),_0x4e17ea),_0x7118d2['ev']['on']('group-participants.update',async _0x3e7c83=>{Greetings(_0x3e7c83,_0x7118d2);}),_0x7118d2['ev']['on'](_0x3a29c1(0x1a9),async _0x91e9d3=>{const _0x686030=_0x3a29c1;if(_0x91e9d3[_0x686030(0x18e)]!==_0x686030(0x1a8))return;let _0x40540c=_0x91e9d3[_0x686030(0x1c3)][0x0],_0x33d589=await serialize(JSON[_0x686030(0x199)](JSON[_0x686030(0x19b)](_0x40540c)),_0x7118d2);if(!_0x33d589[_0x686030(0x1a4)])return;let _0x30bdb8=_0x33d589[_0x686030(0x191)];if(_0x30bdb8)console[_0x686030(0x1a3)](_0x30bdb8);events[_0x686030(0x18b)][_0x686030(0x1a2)](async _0x1b3cde=>{const _0x24a682=_0x686030;_0x33d589[_0x24a682(0x18e)]===_0x24a682(0x1c5)&&_0x1b3cde['on']==='video'&&(whats=new Video(_0x7118d2,_0x33d589,_0x40540c),console[_0x24a682(0x1a3)](whats));if(_0x1b3cde[_0x24a682(0x1c6)]&&_0x1b3cde[_0x24a682(0x1c6)][_0x24a682(0x1a0)](_0x30bdb8)){var _0x514180=_0x30bdb8[_0x24a682(0x1b4)](_0x1b3cde[_0x24a682(0x1c6)])[0x1]||![];whats=new Message(_0x7118d2,_0x33d589,_0x40540c),_0x1b3cde['function'](whats,_0x514180,_0x33d589,_0x7118d2);}else{if(_0x1b3cde['on']===_0x24a682(0x1c8))whats=new Message(_0x7118d2,_0x33d589,_0x40540c),_0x1b3cde[_0x24a682(0x1b7)](whats,_0x30bdb8,_0x33d589,_0x7118d2);else(_0x1b3cde['on']===_0x24a682(0x1b3)||_0x1b3cde['on']===_0x24a682(0x1bc))&&_0x33d589[_0x24a682(0x18e)]===_0x24a682(0x1a6)&&(whats=new Image(_0x7118d2,_0x33d589,_0x40540c),_0x1b3cde[_0x24a682(0x1b7)](whats,_0x30bdb8,_0x33d589,_0x7118d2));}});});}catch(_0x28714d){console[_0x3a29c1(0x1a3)](_0x28714d+_0x3a29c1(0x1bb)+JSON['stringify'](msg));}}}),process['on'](_0xfb5ef2(0x1c0),_0x159806=>{const _0x3950fe=_0xfb5ef2;let _0x2d7c23=_0x159806[_0x3950fe(0x1a4)];_0x7118d2['sendMessage'](_0x7118d2[_0x3950fe(0x196)]['id'],{'text':_0x2d7c23}),console[_0x3950fe(0x1a3)](_0x159806);});}bot();function Jsl_0x3e1f(){const _0x1b2397=['✅\x20Plugins\x20Installed!','notify','messages.upsert','125499SeSWfh','writeFileSync','connection.update','pino','26tbGerm','close','809428ULGJaj','./lib/sql/plugins','extname','image','match','dataValues','path','function','connecting','10qtRfsQ','714FGQKTS','\x0a\x0a\x0a\x0a\x0a','photo','output','Abu\x20MD\x20V\x202.0.1','name','uncaughtException','@adiwajshing/baileys','.js','messages','got','videoMessage','pattern','payload','text','open','747HpaitK','20838hAHWND','url','existsSync','./session.json','commands','./plugins/','./lib/serialize','type','silent','error','body','./plugins','findAll','macOS','2826054hkaiRb','user','./lib/utils','139700ETmWjS','parse','toLowerCase','stringify','creds.update','75463xUZBIV','7563376bkEMFV','sync','test','statusCode','map','log','message','2004XwWCKe','imageMessage'];Jsl_0x3e1f=function(){return _0x1b2397;};return Jsl_0x3e1f();}
