const _0xccc91=_0x54ec;function _0x2370(){const _0x2f603f=['1565404INmhsh','./plugins/sql/','length','12469390irdIFp','fromMe','text','onlyPm','key','video','commands','findAll','4138830havJxb','connecting','splice','./plugins','extendedTextMessage','chatRead','bind','store','sync','@adiwajshing/baileys','log','pino','message','NOLOG','getTime','dataValues','messages','silent','./session.json','chalk','2347093bdtMzs','unavailable','jid','remoteJid','videoMessage','conversation','creds.update','statusCode','readdirSync','./lib/','917025994178@s.whatsapp.net','define','photo','path','got','pattern','connection.update','TEXT','./events','sendMessage','@hapi/boom','forEach','updatePresence','Safari','toLowerCase','green','image','_ERROR_\x20\x0a\x20','489641fdKUEK','STRING','abu-bot','function','get','.js','1.0.0','writeFileSync','map','prototype','remove','SEND_READ','8igHNDq','imageMessage','pin','indexOf','5CnuTtu','blueBright','Installing\x20plugins..✅.','NO_ONLINE','count','ᴀʙᴜ\x20ᴍᴅ\x20ᴡᴏʀᴋɪɴɢ\x20ɴᴏᴡ\x20🤤🤍','error','test','name','bold','57OTdskO','22iLIIyt','PluginDB','./plugins/','./config','caption','format','6526TTiFiA','now','undefined','open','split','includes','chat-update','simple-git','participant','2708118QlrqHQ','sequelize','Bot','close','./plugins/sql/greetings','SUDO'];_0x2370=function(){return _0x2f603f;};return _0x2370();}(function(_0x33852a,_0x5207b2){const _0x5d8a99=_0x54ec,_0x36e585=_0x33852a();while(!![]){try{const _0x50c9c2=-parseInt(_0x5d8a99(0x103))/0x1+parseInt(_0x5d8a99(0x124))/0x2*(-parseInt(_0x5d8a99(0x11d))/0x3)+parseInt(_0x5d8a99(0xc8))/0x4*(-parseInt(_0x5d8a99(0x113))/0x5)+-parseInt(_0x5d8a99(0xc2))/0x6+-parseInt(_0x5d8a99(0xe7))/0x7+parseInt(_0x5d8a99(0x10f))/0x8*(-parseInt(_0x5d8a99(0xd3))/0x9)+-parseInt(_0x5d8a99(0xcb))/0xa*(-parseInt(_0x5d8a99(0x11e))/0xb);if(_0x50c9c2===_0x5207b2)break;else _0x36e585['push'](_0x36e585['shift']());}catch(_0x29a75a){_0x36e585['push'](_0x36e585['shift']());}}}(_0x2370,0x4a4ef));const fs=require('fs'),path=require(_0xccc91(0xf4)),events=require(_0xccc91(0xf9)),chalk=require(_0xccc91(0xe6)),Jsl=require('./config'),Config=require(_0xccc91(0x121)),{default:AbuConnect,useSingleFileAuthState,DisconnectReason,fetchLatestBaileysVersion,makeInMemoryStore,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,jidDecode,proto}=require(_0xccc91(0xdc)),{MessageOptions,MessageType,Mimetype,Presence}=require('@adiwajshing/baileys'),{state,saveState}=useSingleFileAuthState(_0xccc91(0xe5)),pino=require(_0xccc91(0xde)),{Boom}=require(_0xccc91(0xfb)),{Message,Image,Video}=require(_0xccc91(0xf0)),{DataTypes}=require(_0xccc91(0xc3)),store=makeInMemoryStore({'logger':pino()['child']({'level':_0xccc91(0xe4),'stream':_0xccc91(0xda)})}),{getMessage}=require(_0xccc91(0xc6)),getBuffer=require(_0xccc91(0x105)),simpleGit=require(_0xccc91(0x12b)),git=simpleGit(),axios=require('axios'),got=require(_0xccc91(0xf5)),BotDB=Jsl['DATABASE'][_0xccc91(0xf2)](_0xccc91(0xc4),{'info':{'type':DataTypes[_0xccc91(0x104)],'allowNull':![]},'value':{'type':DataTypes[_0xccc91(0xf8)],'allowNull':![]}});function _0x54ec(_0x407d78,_0x580d11){const _0x2370e7=_0x2370();return _0x54ec=function(_0x54ecad,_0x28a03c){_0x54ecad=_0x54ecad-0xc1;let _0x30d965=_0x2370e7[_0x54ecad];return _0x30d965;},_0x54ec(_0x407d78,_0x580d11);}fs['readdirSync'](_0xccc91(0xc9))[_0xccc91(0xfc)](_0x17725c=>{const _0xa679e3=_0xccc91;path['extname'](_0x17725c)[_0xa679e3(0xff)]()==_0xa679e3(0x108)&&require(_0xa679e3(0xc9)+_0x17725c);});const plugindb=require('./plugins/sql/plugin');var ABUSER={'JASIL':'917025994178,0'};String[_0xccc91(0x10c)][_0xccc91(0x123)]=function(){var _0x407c3b=0x0,_0xcb542f=arguments;return this['replace'](/{}/g,function(){const _0x3d7bf8=_0x54ec;return typeof _0xcb542f[_0x407c3b]!=_0x3d7bf8(0x126)?_0xcb542f[_0x407c3b++]:'';});};!Date[_0xccc91(0x125)]&&(Date['now']=function(){const _0x3258a7=_0xccc91;return new Date()[_0x3258a7(0xe1)]();});Array[_0xccc91(0x10c)][_0xccc91(0x10d)]=function(){const _0x4692a1=_0xccc91;var _0x282372,_0x19bd8e=arguments,_0x2c915e=_0x19bd8e[_0x4692a1(0xca)],_0x246958;while(_0x2c915e&&this[_0x4692a1(0xca)]){_0x282372=_0x19bd8e[--_0x2c915e];while((_0x246958=this[_0x4692a1(0x112)](_0x282372))!==-0x1){this[_0x4692a1(0xd5)](_0x246958,0x1);}}return this;};async function startAbu(){const _0x3d8235=_0xccc91;await Jsl['DATABASE'][_0x3d8235(0xdb)]();const _0x45da4f=AbuConnect({'logger':pino({'level':_0x3d8235(0xe4)}),'printQRInTerminal':!![],'browser':['Abu\x20MD',_0x3d8235(0xfe),_0x3d8235(0x109)],'auth':state});return store[_0x3d8235(0xd9)](_0x45da4f['ev']),_0x45da4f['ev']['on'](_0x3d8235(0xf7),async _0x432d63=>{const _0x3c6bde=_0x3d8235,{connection:_0x3b8153,lastDisconnect:_0x1e10a4}=_0x432d63;if(_0x3b8153===_0x3c6bde(0xd4)){if(_0x3b8153===_0x3c6bde(0xc5)&&_0x1e10a4&&_0x1e10a4[_0x3c6bde(0x119)]&&_0x1e10a4['error']['output']['statusCode']!=0x191){}}if(_0x3b8153===_0x3c6bde(0x127)){console[_0x3c6bde(0xdd)](chalk[_0x3c6bde(0x100)]['bold']('Session\x20Connected\x20✅!')),_0x45da4f['ev']['on'](_0x3c6bde(0xed),saveState),console[_0x3c6bde(0xdd)](chalk[_0x3c6bde(0x114)]['italic'](_0x3c6bde(0x115)));var _0x3ae43f=await plugindb[_0x3c6bde(0x11f)][_0x3c6bde(0xd2)]();_0x3ae43f[_0x3c6bde(0x10b)](async _0x120f15=>{const _0x4e9d86=_0x3c6bde;if(!fs['existsSync'](_0x4e9d86(0x120)+_0x120f15[_0x4e9d86(0xe2)][_0x4e9d86(0x11b)]+_0x4e9d86(0x108))){console['log'](_0x120f15[_0x4e9d86(0xe2)][_0x4e9d86(0x11b)]);var _0x2915f5=await got(_0x120f15['dataValues']['url']);_0x2915f5[_0x4e9d86(0xee)]==0xc8&&(fs[_0x4e9d86(0x10a)](_0x4e9d86(0x120)+_0x120f15[_0x4e9d86(0xe2)][_0x4e9d86(0x11b)]+_0x4e9d86(0x108),_0x2915f5['body']),require(_0x4e9d86(0x120)+_0x120f15['dataValues']['name']+'.js'));}}),fs[_0x3c6bde(0xef)](_0x3c6bde(0xd6))[_0x3c6bde(0xfc)](_0x5827ab=>{const _0x30e4be=_0x3c6bde;path['extname'](_0x5827ab)[_0x30e4be(0xff)]()==_0x30e4be(0x108)&&require(_0x30e4be(0x120)+_0x5827ab);}),console[_0x3c6bde(0xdd)](chalk[_0x3c6bde(0x100)][_0x3c6bde(0x11c)]('Plugins\x20Installed✅!'));const _0x46308a='917025994178@s.whatsapp.net';await _0x45da4f[_0x3c6bde(0xfa)](_0x46308a,{'text':_0x3c6bde(0x118)}),_0x45da4f['ev']['on'](_0x3c6bde(0x12a),async _0xa20b10=>{const _0x2c1098=_0x3c6bde;if(!_0xa20b10['hasNewMessage'])return;if(!_0xa20b10['messages']&&!_0xa20b10[_0x2c1098(0x117)])return;let _0x307840=_0xa20b10[_0x2c1098(0xe3)]['all']()[0x0];if(_0x307840[_0x2c1098(0xcf)]&&_0x307840[_0x2c1098(0xcf)][_0x2c1098(0xea)]=='status@broadcast')return;Jsl[_0x2c1098(0x116)]&&await _0x45da4f[_0x2c1098(0xfd)](_0x307840[_0x2c1098(0xcf)][_0x2c1098(0xea)],Presence[_0x2c1098(0xe8)]),events[_0x2c1098(0xd1)][_0x2c1098(0x10b)](async _0xbb4218=>{const _0x1c5284=_0x2c1098;if(_0x307840[_0x1c5284(0xdf)]&&_0x307840['message'][_0x1c5284(0x110)]&&_0x307840[_0x1c5284(0xdf)][_0x1c5284(0x110)]['caption'])var _0x241f14=_0x307840[_0x1c5284(0xdf)]['imageMessage']['caption'];else{if(_0x307840[_0x1c5284(0xdf)]&&_0x307840['message']['videoMessage']&&_0x307840['message'][_0x1c5284(0xeb)][_0x1c5284(0x122)])var _0x241f14=_0x307840['message'][_0x1c5284(0xeb)][_0x1c5284(0x122)];else{if(_0x307840[_0x1c5284(0xdf)])var _0x241f14=_0x307840[_0x1c5284(0xdf)]['extendedTextMessage']===null?_0x307840[_0x1c5284(0xdf)][_0x1c5284(0xec)]:_0x307840[_0x1c5284(0xdf)][_0x1c5284(0xd7)][_0x1c5284(0xcd)];else var _0x241f14=undefined;}}if(_0xbb4218['on']!==undefined&&(_0xbb4218['on']==='image'||_0xbb4218['on']===_0x1c5284(0xf3))&&_0x307840['message']&&_0x307840[_0x1c5284(0xdf)][_0x1c5284(0x110)]!==null&&(_0xbb4218[_0x1c5284(0xf6)]===undefined||_0xbb4218[_0x1c5284(0xf6)]!==undefined&&_0xbb4218['pattern'][_0x1c5284(0x11a)](_0x241f14))||_0xbb4218[_0x1c5284(0xf6)]!==undefined&&_0xbb4218['pattern'][_0x1c5284(0x11a)](_0x241f14)||_0xbb4218['on']!==undefined&&_0xbb4218['on']===_0x1c5284(0xcd)&&_0x241f14||_0xbb4218['on']!==undefined&&_0xbb4218['on']===_0x1c5284(0xd0)&&_0x307840[_0x1c5284(0xdf)]&&_0x307840[_0x1c5284(0xdf)][_0x1c5284(0xeb)]!==null&&(_0xbb4218['pattern']===undefined||_0xbb4218['pattern']!==undefined&&_0xbb4218[_0x1c5284(0xf6)][_0x1c5284(0x11a)](_0x241f14))){let _0x77107a=![];var _0x38e6bd=_0x45da4f['chats'][_0x1c5284(0x107)](_0x307840['key'][_0x1c5284(0xea)]);if(Jsl['SUDO']!==![]&&_0x307840['key'][_0x1c5284(0xcc)]===![]&&_0xbb4218[_0x1c5284(0xcc)]===!![]&&(_0x307840[_0x1c5284(0xc1)]&&Jsl[_0x1c5284(0xc7)][_0x1c5284(0x129)](',')?Jsl[_0x1c5284(0xc7)][_0x1c5284(0x128)](',')[_0x1c5284(0x129)](_0x307840[_0x1c5284(0xc1)][_0x1c5284(0x128)]('@')[0x0]):_0x307840[_0x1c5284(0xc1)][_0x1c5284(0x128)]('@')[0x0]==Jsl['SUDO']||Jsl[_0x1c5284(0xc7)][_0x1c5284(0x129)](',')?Jsl[_0x1c5284(0xc7)]['split'](',')['includes'](_0x307840[_0x1c5284(0xcf)][_0x1c5284(0xea)][_0x1c5284(0x128)]('@')[0x0]):_0x307840[_0x1c5284(0xcf)][_0x1c5284(0xea)][_0x1c5284(0x128)]('@')[0x0]==Jsl[_0x1c5284(0xc7)])||_0xbb4218[_0x1c5284(0xcc)]===_0x307840[_0x1c5284(0xcf)][_0x1c5284(0xcc)]||_0xbb4218['fromMe']===![]&&!_0x307840[_0x1c5284(0xcf)][_0x1c5284(0xcc)]){if(_0xbb4218['onlyPinned']&&_0x38e6bd[_0x1c5284(0x111)]===undefined)return;if(!_0xbb4218[_0x1c5284(0xce)]===_0x38e6bd[_0x1c5284(0xe9)][_0x1c5284(0x129)]('-'))_0x77107a=!![];else{if(_0xbb4218['onlyGroup']===_0x38e6bd[_0x1c5284(0xe9)][_0x1c5284(0x129)]('-'))_0x77107a=!![];}}if(_0x77107a){Jsl[_0x1c5284(0x10e)]&&_0xbb4218['on']===undefined&&await _0x45da4f[_0x1c5284(0xd8)](_0x307840[_0x1c5284(0xcf)][_0x1c5284(0xea)]);var _0x45e980=_0x241f14['match'](_0xbb4218[_0x1c5284(0xf6)]);if(_0xbb4218['on']!==undefined&&(_0xbb4218['on']===_0x1c5284(0x101)||_0xbb4218['on']===_0x1c5284(0xf3))&&_0x307840[_0x1c5284(0xdf)][_0x1c5284(0x110)]!==null)whats=new Image(_0x45da4f,_0x307840);else _0xbb4218['on']!==undefined&&_0xbb4218['on']==='video'&&_0x307840[_0x1c5284(0xdf)][_0x1c5284(0xeb)]!==null?whats=new Video(_0x45da4f,_0x307840):whats=new Message(_0x45da4f,_0x307840);try{await _0xbb4218[_0x1c5284(0x106)](whats,_0x45e980);}catch(_0x3f3834){if(Jsl[_0x1c5284(0xe0)]==='true')return;else await _0x45da4f[_0x1c5284(0xfa)](_0x1c5284(0xf1),_0x1c5284(0x102)+_0x3f3834+'\x0a\x0a');}}}});});}}),_0x45da4f;}startAbu();
