const Jsl_0x3d2fc2=Jsl_0x57a2;(function(_0x36661c,_0x411b99){const _0x1abce4=Jsl_0x57a2,_0x1bd703=_0x36661c();while(!![]){try{const _0xebdb5b=parseInt(_0x1abce4(0x1f1))/0x1+parseInt(_0x1abce4(0x1f6))/0x2*(-parseInt(_0x1abce4(0x20e))/0x3)+-parseInt(_0x1abce4(0x1ff))/0x4+-parseInt(_0x1abce4(0x1e2))/0x5*(parseInt(_0x1abce4(0x1f3))/0x6)+parseInt(_0x1abce4(0x1ef))/0x7*(-parseInt(_0x1abce4(0x210))/0x8)+parseInt(_0x1abce4(0x1e4))/0x9+parseInt(_0x1abce4(0x1fc))/0xa*(parseInt(_0x1abce4(0x1fb))/0xb);if(_0xebdb5b===_0x411b99)break;else _0x1bd703['push'](_0x1bd703['shift']());}catch(_0x4d61e5){_0x1bd703['push'](_0x1bd703['shift']());}}}(Jsl_0x28a4,0x757fd));const fs=require('fs'),path=require(Jsl_0x3d2fc2(0x1f7)),{spawn}=require(Jsl_0x3d2fc2(0x213));function ffmpeg(_0x39b064,_0x57772e=[],_0x5934b7='',_0x35fcb1=''){return new Promise(async(_0x4c80ae,_0xd61180)=>{const _0x5812e0=Jsl_0x57a2;try{let _0x4763c1=path['join'](__dirname,_0x5812e0(0x1f2),+new Date()+'.'+_0x5934b7),_0x589453=_0x4763c1+'.'+_0x35fcb1;await fs[_0x5812e0(0x205)][_0x5812e0(0x1e3)](_0x4763c1,_0x39b064),spawn('ffmpeg',['-y','-i',_0x4763c1,..._0x57772e,_0x589453])['on']('error',_0xd61180)['on']('close',async _0x4f3e37=>{const _0x308c47=_0x5812e0;try{await fs[_0x308c47(0x205)]['unlink'](_0x4763c1);if(_0x4f3e37!==0x0)return _0xd61180(_0x4f3e37);_0x4c80ae(await fs[_0x308c47(0x205)][_0x308c47(0x212)](_0x589453)),await fs[_0x308c47(0x205)][_0x308c47(0x20a)](_0x589453);}catch(_0x1b6148){_0xd61180(_0x1b6148);}});}catch(_0xd1802c){_0xd61180(_0xd1802c);}});}function toAudio(_0x459654,_0x504b0e){const _0xc0501=Jsl_0x3d2fc2;return ffmpeg(_0x459654,[_0xc0501(0x211),_0xc0501(0x207),'2',_0xc0501(0x1f9),_0xc0501(0x1f0),'-ar',_0xc0501(0x1e5),'-f',_0xc0501(0x20d)],_0x504b0e,_0xc0501(0x20d));}function Jsl_0x28a4(){const _0x10434a=['238660YcpoRj','libopus','new-image','3495656YLPOzG','https://ezgif.com/webp-to-mp4','aac','div#output\x20>\x20p.outfile\x20>\x20video\x20>\x20source','https://ezgif.com/webp-to-mp4/','append','promises','-preset','-ac','slow','-ar','unlink','test','string','mp3','3FFVdQn','POST','2248PNvMQm','-vn','readFile','child_process','src','190iHFuKH','writeFile','1927080SXYYwd','44100','text','-c:a','querySelectorAll','opus','window','mp4','libx264','-crf','exports','16289juNTkx','128k','858529KzmNro','../media','2076PEcfWS','file','url','57858eUfcnX','path','-compression_level','-b:a','name','451VCEWtf'];Jsl_0x28a4=function(){return _0x10434a;};return Jsl_0x28a4();}function Jsl_0x57a2(_0x50562d,_0x35a9dd){const _0x28a401=Jsl_0x28a4();return Jsl_0x57a2=function(_0x57a2c0,_0x511d54){_0x57a2c0=_0x57a2c0-0x1e2;let _0x1f1e0c=_0x28a401[_0x57a2c0];return _0x1f1e0c;},Jsl_0x57a2(_0x50562d,_0x35a9dd);}function toPTT(_0x411371,_0x1675c5){const _0xed6609=Jsl_0x3d2fc2;return ffmpeg(_0x411371,[_0xed6609(0x211),_0xed6609(0x1e7),_0xed6609(0x1fd),_0xed6609(0x1f9),_0xed6609(0x1f0),'-vbr','on',_0xed6609(0x1f8),'10'],_0x1675c5,_0xed6609(0x1e9));}function toVideo(_0x593737,_0x20e090){const _0x5420c2=Jsl_0x3d2fc2;return ffmpeg(_0x593737,['-c:v',_0x5420c2(0x1ec),_0x5420c2(0x1e7),_0x5420c2(0x201),'-ab',_0x5420c2(0x1f0),_0x5420c2(0x209),'44100',_0x5420c2(0x1ed),'32',_0x5420c2(0x206),_0x5420c2(0x208)],_0x20e090,_0x5420c2(0x1eb));}module[Jsl_0x3d2fc2(0x1ee)]={'webp2mp4':async _0x2b0710=>{const _0x575538=Jsl_0x3d2fc2;let _0xceb3c5=new FormData(),_0x46d5e4=typeof _0x2b0710===_0x575538(0x20c)&&/https?:\/\//[_0x575538(0x20b)](_0x2b0710);_0xceb3c5[_0x575538(0x204)]('new-image-url',_0x46d5e4?_0x2b0710:''),_0xceb3c5['append'](_0x575538(0x1fe),_0x46d5e4?'':_0x2b0710,'image.webp');let _0x2142bb=await fetch(_0x575538(0x200),{'method':_0x575538(0x20f),'body':_0xceb3c5}),_0x339ee4=await _0x2142bb[_0x575538(0x1e6)](),{document:_0x47f980}=new JSDOM(_0x339ee4)['window'],_0x262bfe=new FormData(),_0x24a32c={};for(let _0x4abf76 of _0x47f980[_0x575538(0x1e8)]('form\x20input[name]')){_0x24a32c[_0x4abf76[_0x575538(0x1fa)]]=_0x4abf76['value'],_0x262bfe['append'](_0x4abf76[_0x575538(0x1fa)],_0x4abf76['value']);}let _0x227b8f=await fetch(_0x575538(0x203)+_0x24a32c[_0x575538(0x1f4)],{'method':_0x575538(0x20f),'body':_0x262bfe}),_0x23ae73=await _0x227b8f[_0x575538(0x1e6)](),{document:_0x2a9297}=new JSDOM(_0x23ae73)[_0x575538(0x1ea)];return new URL(_0x2a9297['querySelector'](_0x575538(0x202))[_0x575538(0x214)],_0x227b8f[_0x575538(0x1f5)])['toString']();},'toAudio':toAudio,'toPTT':toPTT,'toVideo':toVideo,'ffmpeg':ffmpeg};