const _0x394d9d=_0x1f69;(function(_0x62a802,_0x171566){const _0x5f564f=_0x1f69,_0x413d1d=_0x62a802();while(!![]){try{const _0x4d0b84=parseInt(_0x5f564f(0xfb))/0x1*(-parseInt(_0x5f564f(0x11a))/0x2)+-parseInt(_0x5f564f(0xd8))/0x3+-parseInt(_0x5f564f(0xbf))/0x4*(parseInt(_0x5f564f(0xc0))/0x5)+-parseInt(_0x5f564f(0xe7))/0x6+-parseInt(_0x5f564f(0xc1))/0x7*(-parseInt(_0x5f564f(0xb6))/0x8)+-parseInt(_0x5f564f(0xc8))/0x9+parseInt(_0x5f564f(0xde))/0xa*(parseInt(_0x5f564f(0xca))/0xb);if(_0x4d0b84===_0x171566)break;else _0x413d1d['push'](_0x413d1d['shift']());}catch(_0x36d7c6){_0x413d1d['push'](_0x413d1d['shift']());}}}(_0x38c6,0x45c83),require('./main'));const {default:WASocket,DisconnectReason,useSingleFileAuthState,fetchLatestBaileysVersion,jidNormalizedUser,makeInMemoryStore,DEFAULT_CONNECTION_CONFIG,DEFAULT_LEGACY_CONNECTION_CONFIG}=require(_0x394d9d(0xf2)),fs=require('fs'),chalk=require(_0x394d9d(0xed)),pino=require('pino'),path=require(_0x394d9d(0xf6)),{Boom}=require(_0x394d9d(0x105)),{Simple,upsert,JslFunc}=require('./lib'),Welcome=require(_0x394d9d(0xb4)),jsoConfig=JSON['parse'](fs[_0x394d9d(0xe2)](_0x394d9d(0x10c))),Jsl=require(_0x394d9d(0xcc)),{chatting}=JslFunc,{serialize,WAConnection}=Simple;function _0x1f69(_0x2ae707,_0x5bbecc){const _0x38c6f2=_0x38c6();return _0x1f69=function(_0x1f69db,_0x1d1d4d){_0x1f69db=_0x1f69db-0xb1;let _0x3f1f68=_0x38c6f2[_0x1f69db];return _0x3f1f68;},_0x1f69(_0x2ae707,_0x5bbecc);}global[_0x394d9d(0xe4)]={},global[_0x394d9d(0xe4)][_0x394d9d(0x10a)]=new Array(),global[_0x394d9d(0xe4)][_0x394d9d(0xe5)]=new Number(),global['isInCmd']=![],global[_0x394d9d(0x112)]=![];const {state,saveState}=useSingleFileAuthState(_0x394d9d(0xba),pino({'level':'silent'})),store=makeInMemoryStore({'logger':pino()[_0x394d9d(0x104)]({'level':_0x394d9d(0x11d),'stream':_0x394d9d(0x109)})});function _0x38c6(){const _0x5e1e72=['loggedOut','child','@hapi/boom','text','entries','indexOf','store','users','ERROR','./lib/database/config.json','presence','startsWith','writeToFile','sendReact','toLocaleDateString','catchError','setting','timedOut','📅\x20','sucReact','badSession','👩\x20Offine.','toLowerCase','6AbMNPD','key','toLocaleString','silent','message','status@broadcast','output','split','./lib/store','👩\x20Not\x20New\x20Login.','6472yYouui','messages.upsert','value','./plugins/','./session.json','💥\x20Connection\x20Lost\x20from\x20Server,\x20reconnecting...','open','messages','BAE5','8bSOPdk','911195RTkZHR','1253oILbDS','Safari','end','blockchat','updateProfileStatus','green','readdirSync','2698569lNeIIj','long','275XFCATq','function','./utils','close','.js','extname','red','available','command','connectionLost','config','isInCmd','yellow','error','484830AHcoBt','Ai\x20Dark\x20Jsl','👩\x20Not\x20Received\x20Pending\x20Notifications.','logger','bind','👩\x20Connection...','510590HOSNLf','reactArry','💥\x20Restart\x20Required,\x20Restarting...','numeric','readFileSync','blue','mydb','hits','💥\x20Unknown\x20DisconnectReason:\x20','654096PgHEuR','commands','user','./plugins','log','group-participants.update','chalk','INFO','👩\x20Online.','type','\x0a\x0a💗\x20Auto\x20Bio\x20Powered\x20By\x20Whats\x20Bot...💬\x0a\x0a👨🏼‍💻\x20Created\x20By\x20Abu','Wa-Web','APIs','from','logout','path','forEach','💥\x20Bad\x20Session\x20File,\x20Please\x20Delete\x20Session\x20and\x20Scan\x20Again','length','map','66838GFeIyk','💥\x20Connection\x20closed,\x20reconnecting....','includes','connectionReplaced','statusCode','pattern','remoteJid','sender'];_0x38c6=function(){return _0x5e1e72;};return _0x38c6();}store['readFromFile']('./database/baileys/store_multi.json'),setInterval(()=>{const _0x408d47=_0x394d9d;store[_0x408d47(0x10f)]('./database/baileys/store_multi.json');},0x1e*0x3e8),fs[_0x394d9d(0xc7)](_0x394d9d(0xea))[_0x394d9d(0xf7)](_0x25eacf=>{const _0x3d4d8c=_0x394d9d;path[_0x3d4d8c(0xcf)](_0x25eacf)[_0x3d4d8c(0x119)]()==_0x3d4d8c(0xce)&&require(_0x3d4d8c(0xb9)+_0x25eacf);}),global['api']=(_0x40bd68,_0x5deba3='/',_0xd0fa86={},_0x11a00b)=>(_0x40bd68 in jsoConfig[_0x394d9d(0xf3)]?jsoConfig[_0x394d9d(0xf3)][_0x40bd68]:_0x40bd68)+_0x5deba3+(_0xd0fa86||_0x11a00b?'?'+new URLSearchParams(Object[_0x394d9d(0x107)]({..._0xd0fa86,..._0x11a00b?{[_0x11a00b]:jsoConfig[_0x394d9d(0xf3)]['apikey']}:{}})):'');const WhatsBotConnect=async()=>{const _0x2e97aa=_0x394d9d;let {version:_0xf9c08b,isLatest:_0x3529e0}=await fetchLatestBaileysVersion(),_0x51eb72={'markOnlineOnConnect':!![],'linkPreviewImageThumbnailWidth':0x1f4,'printQRInTerminal':!![],'browser':[_0x2e97aa(0xd9),_0x2e97aa(0xc2),'4.0.0'],'logger':pino({'level':_0x2e97aa(0x11d)}),'auth':state,'version':_0xf9c08b},_0x11e849=WASocket(_0x51eb72);_0x11e849=new WAConnection(_0x11e849),store[_0x2e97aa(0xdc)](_0x11e849['ev']),_0x11e849['ev']['on']('creds.update',saveState),_0x11e849['ev']['on']('connection.update',async _0x31a58c=>{const _0x48dba5=_0x2e97aa,{lastDisconnect:_0x1166f4,connection:_0x77e7c6,isNewLogin:_0x53033f,isOnline:_0x545128,qr:_0xf12e32,receivedPendingNotifications:_0x411f91}=_0x31a58c;if(_0x77e7c6=='connecting')console[_0x48dba5(0xeb)](chalk[_0x48dba5(0xd6)]('👩\x20Connecting\x20to\x20WhatsApp...▶'));else{if(_0x77e7c6==_0x48dba5(0xbc))console[_0x48dba5(0xeb)](chalk[_0x48dba5(0xc6)]('👩\x20Login\x20successful!\x20▶'));else{if(_0x77e7c6==_0x48dba5(0xcd)){let _0x7b73a3=new Boom(_0x1166f4?.[_0x48dba5(0xd7)])?.[_0x48dba5(0xb2)][_0x48dba5(0xff)];if(_0x7b73a3===DisconnectReason[_0x48dba5(0x117)])console[_0x48dba5(0xeb)](chalk['red'](_0x48dba5(0xf8))),_0x11e849[_0x48dba5(0xf5)]();else{if(_0x7b73a3===DisconnectReason['connectionClosed'])console['log'](chalk[_0x48dba5(0xd0)](_0x48dba5(0xfc))),WhatsBotConnect();else{if(_0x7b73a3===DisconnectReason[_0x48dba5(0xd3)])console['log'](chalk[_0x48dba5(0xd0)](_0x48dba5(0xbb))),WhatsBotConnect();else{if(_0x7b73a3===DisconnectReason[_0x48dba5(0xfe)])console[_0x48dba5(0xeb)](chalk[_0x48dba5(0xd0)]('💥\x20Connection\x20Replaced,\x20Another\x20New\x20Session\x20Opened,\x20Please\x20Close\x20Current\x20Session\x20First')),_0x11e849[_0x48dba5(0xf5)]();else{if(_0x7b73a3===DisconnectReason[_0x48dba5(0x103)])console[_0x48dba5(0xeb)](chalk['red']('💥\x20Device\x20Logged\x20Out,\x20Please\x20Scan\x20Again\x20And\x20Run.')),process['exit'](0x0);else{if(_0x7b73a3===DisconnectReason['restartRequired'])console[_0x48dba5(0xeb)](chalk[_0x48dba5(0xd0)](_0x48dba5(0xe0))),WhatsBotConnect();else{if(_0x7b73a3===DisconnectReason[_0x48dba5(0x114)])console[_0x48dba5(0xeb)](chalk[_0x48dba5(0xd0)]('💥\x20Connection\x20TimedOut,\x20Reconnecting...')),WhatsBotConnect();else _0x11e849[_0x48dba5(0xc3)](chalk[_0x48dba5(0xd0)](_0x48dba5(0xe6)+_0x7b73a3+'|'+_0x77e7c6));}}}}}}}else{if(_0x545128===!![])console[_0x48dba5(0xeb)](chalk[_0x48dba5(0xe3)](_0x48dba5(0xef)));else{if(_0x545128===![])console[_0x48dba5(0xeb)](chalk['red'](_0x48dba5(0x118)));else{if(_0x411f91===!![])console[_0x48dba5(0xeb)](chalk['blue']('👩\x20Received\x20Pending\x20Notifications.'));else{if(_0x411f91===![])console['log'](chalk['red'](_0x48dba5(0xda)));else{if(_0x53033f===!![])console[_0x48dba5(0xeb)](chalk[_0x48dba5(0xe3)]('👩\x20New\x20Login.'));else{if(_0x53033f===![])console[_0x48dba5(0xeb)](chalk[_0x48dba5(0xd0)](_0x48dba5(0xb5)));else{if(_0xf12e32)console[_0x48dba5(0xeb)](chalk['magenta']('Qr:\x20'),chalk['magentaBright'](_0xf12e32));else console[_0x48dba5(0xeb)](_0x48dba5(0xdd),_0x31a58c);}}}}}}}}}}),_0x11e849['ev']['on'](_0x2e97aa(0xec),async _0x185e69=>{const _0x1fccba=_0x2e97aa;if(Jsl[_0x1fccba(0xd4)]['setting'][_0x1fccba(0xc4)][_0x1fccba(0xfd)](_0x185e69['id']))return;else Welcome(_0x11e849,_0x185e69);}),_0x11e849['ev']['on'](_0x2e97aa(0xb7),async _0xc8e322=>{const _0x5ab0d3=_0x2e97aa;global[_0x5ab0d3(0xd5)]=![];let _0x397620=new serialize(_0x11e849,_0xc8e322[_0x5ab0d3(0xbd)][0x0]);if(Jsl[_0x5ab0d3(0xd4)][_0x5ab0d3(0x113)]['blockchat'][_0x5ab0d3(0xfd)](_0x397620[_0x5ab0d3(0xf4)])||!_0x397620[_0x5ab0d3(0x11e)]||_0x397620[_0x5ab0d3(0x11b)]&&_0x397620[_0x5ab0d3(0x11b)][_0x5ab0d3(0x101)]==_0x5ab0d3(0xb1)||_0x397620['key']['id'][_0x5ab0d3(0x10e)](_0x5ab0d3(0xbe))&&_0x397620['key']['id'][_0x5ab0d3(0xf9)]==0x10)return;if(global[_0x5ab0d3(0xe4)][_0x5ab0d3(0x10a)][_0x5ab0d3(0x108)](_0x397620[_0x5ab0d3(0x102)])==-0x1)global['mydb'][_0x5ab0d3(0x10a)]['push'](_0x397620[_0x5ab0d3(0x102)]);await upsert(_0x11e849,_0x397620),await chatting(_0x397620,_0x11e849);try{Jsl[_0x5ab0d3(0xe8)][_0x5ab0d3(0xfa)](async _0x48ac92=>{const _0x103600=_0x5ab0d3;for(let _0x380735 in _0x48ac92[_0x103600(0x100)]){if(_0x48ac92[_0x103600(0x100)][_0x380735]==_0x397620['client'][_0x103600(0xd2)]||_0x48ac92['on']==_0x103600(0x106)){global[_0x103600(0xd5)]=!![],global[_0x103600(0xe4)][_0x103600(0xe5)]+=0x1,global[_0x103600(0x112)]=![],await _0x11e849['sendReact'](_0x397620[_0x103600(0xf4)],await Jsl[_0x103600(0xdf)](_0x103600(0xee)),_0x397620['key']),await _0x11e849['sendPresenceUpdate'](Jsl[_0x103600(0xd4)]['auto'][_0x103600(0x10d)][_0x103600(0xb8)],_0x397620[_0x103600(0xf4)]);try{await _0x48ac92[_0x103600(0xcb)](_0x397620,_0x11e849);}catch(_0x1e5fe6){global['catchError']=!![],console[_0x103600(0xeb)](_0x1e5fe6);}global['catchError']?await _0x11e849[_0x103600(0x110)](_0x397620[_0x103600(0xf4)],await Jsl[_0x103600(0xdf)](_0x103600(0x10b)),_0x397620[_0x103600(0x11b)]):await _0x11e849['sendReact'](_0x397620['from'],_0x48ac92[_0x103600(0x116)],_0x397620[_0x103600(0x11b)]),await _0x11e849['sendPresenceUpdate'](_0x103600(0xd1),_0x397620[_0x103600(0xf4)]);}}});}catch(_0x9fc0ea){console[_0x5ab0d3(0xeb)](_0x9fc0ea),sendErrorMessage(_0x397620['from'],_0x9fc0ea,_0x397620['key'],_0x397620,[],![]);}}),setInterval(async()=>{const _0x590fd1=_0x2e97aa;var _0x5ce5c2=new Date()[_0x590fd1(0x111)]('EN',{'weekday':_0x590fd1(0xc9),'year':'numeric','month':_0x590fd1(0xc9),'day':_0x590fd1(0xe1)}),_0x19f1d5=new Date()[_0x590fd1(0x11c)]('LK',{'timeZone':'Asia/Colombo'})[_0x590fd1(0xb3)]('\x20')[0x1];const _0x4f436b=_0x590fd1(0x115)+_0x5ce5c2+'\x0a⌚\x20'+_0x19f1d5+_0x590fd1(0xf1);await _0x11e849[_0x590fd1(0xc5)](_0x4f436b);},0x3e8*0xa);if(_0x11e849['user']&&_0x11e849['user']?.['id'])_0x11e849[_0x2e97aa(0xe9)]['jid']=jidNormalizedUser(_0x11e849[_0x2e97aa(0xe9)]?.['id']);_0x11e849[_0x2e97aa(0xdb)]=_0x11e849[_0x2e97aa(0xf0)]=='legacy'?DEFAULT_LEGACY_CONNECTION_CONFIG[_0x2e97aa(0xdb)]['child']({}):DEFAULT_CONNECTION_CONFIG['logger'][_0x2e97aa(0x104)]({});};WhatsBotConnect();
