var e={DkS1:"darksouls1",DkS2:"darksouls2"};String.prototype.capitalize=function(){return this,this.charAt(0).toUpperCase()+this.slice(1)};var t=new Firebase("https://darksoulscomparator.firebaseIO.com");var r={armors:[],shields:[],weapons:[],pieces:{head:[],chest:[],hands:[],legs:[]}};var i=null;var s={1:null,2:null};var a=e.DkS1;n();function n(){t.child(a+"/indexes").on("value",function(e){data=e.val();r.weapons=data.weapons[w(data.weapons)];r.armors=data.armors[w(data.armors)];r.shields=data.shields[w(data.shields)];r.pieces=data.pieces[w(data.pieces)];console.log("indexes",r);d();$("#type").removeAttr("disabled");$("#type").selectpicker("refresh");$("select.basic-comparator").on("change",function(e){var t=unescape($(this).val());var i=$(this).attr("data-item");var s=$("#type").val();var a=r[s].filter(function(e){return w(e)===t})[0][t];u(i,a)});$("select.detailed-comparator").on("change",function(e){var t=unescape($(this).val());var i=$(this).attr("data-item");var s=$(this).attr("data-piece");var a=0;if(t!=="naked"&&t){a=r.pieces[s].filter(function(e){return w(e)===t})[0][t]}m(i,s,a)})})}function o(){$("#comparison").html("");$("#by-widgets").hide();$("#by").selectpicker("val",null);$("#detailed-widgets").hide();$("#basic-widgets").hide();x();S()}$(document).ready(function(){x();$("#game").on("change",function(e){a=$(this).val();o();$("#type").attr("disabled","");$("#type").selectpicker("val",null);n()});$("#type").on("change",function(e){i=$(this).val();o();if(i==="armors"){c()}else{l()}});$(".set-comparator").on("change",function(e){var t=$(this).val();var i=$(this).attr("data-item");if(t==="custom"){A(i)}else{t=unescape(t);var s=r.armors.filter(function(e){return w(e)===t})[0][t];x(i);h(i,s)}var a=unescape($('.set-comparator[data-item="1"]').selectpicker("val"));var n=unescape($('.set-comparator[data-item="2"]').selectpicker("val"));if(a==="custom"||n==="custom"){$("#detailed-widgets").show()}else{$("#detailed-widgets").hide()}});$("button#compare").on("click",function(t){k();var r=unescape($(this).val());if(i==="armors"){var s=g().then(function(t){if(a===e.DkS1){var r=new P({el:"#comparison"}).render(t[0],t[1])}else if(a===e.DkS2){var r=new N({el:"#comparison"}).render(t[0],t[1])}y()}).catch(function(e){alert(e);y()})}else{var s=p().then(function(t){var r=i==="shields";if(a===e.DkS1){var s=new B({el:"#comparison"}).render(t[0],t[1],r)}else if(a===e.DkS2){var s=new F({el:"#comparison"}).render(t[0],t[1],r)}y()}).catch(function(e){alert(e);y()})}})});Handlebars.registerHelper("toTitleCase",function(e){return e.split("_").map(function(e){return e[0].toUpperCase()+e.slice(1,e.length)}).join(" ")});function l(){var e="";r[i].map(function(e){return w(e)}).sort().forEach(function(t){e+='<option value="'+escape(t)+'">'+t+"</option>"});$("select.basic-comparator").html(e);$("select.basic-comparator").selectpicker("refresh");$("#basic-widgets").show()}function c(){var e='<option value="custom">Custom</option>';e+='<optgroup label="Sets">';r[i].map(function(e){return w(e)}).sort().forEach(function(t){e+='<option value="'+escape(t)+'">'+t+"</option>"});e+="</optgroup>";$("select.set-comparator").html(e);$("select.set-comparator").selectpicker("refresh");$("#by-widgets").show()}function d(){Object.keys(r.pieces).forEach(function(e){var t='<option value="naked">Naked</option>';t+='<option data-divider="true"></option>';var i=r.pieces[e].map(function(e){return w(e)}).sort();i.forEach(function(e){t+='<option value="'+escape(e)+'">'+e+"</option>"});var s=$('select.detailed-comparator[data-piece="'+e+'"]');s.html(t);s.selectpicker("refresh")})}function u(e,t){var r='<option value="0" selected>0</option>';for(var i=1;i<=t;i++){r+='<option value="'+i+'">+'+i+"</option>"}var s=$('select.basic-level[data-level="'+e+'"]');s.html(r);s.selectpicker("refresh")}function m(e,t,r){var i='<option value="0" selected>0</option>';for(var s=1;s<=r;s++){i+='<option value="'+s+'">+'+s+"</option>"}var a=$('select.detailed-level[data-level="'+e+'"][data-piece="'+t+'"]');a.html(i);a.selectpicker("refresh")}function h(e,t){var r='<option value="0" selected>0</option>';for(var i=1;i<=t;i++){r+='<option value="'+i+'">+'+i+"</option>"}var s=$('select.set-level[data-level="'+e+'"]');s.html(r);s.selectpicker("refresh")}function p(){var e=unescape($('.basic-comparator[data-item="1"]').selectpicker("val"));var r=unescape($('.basic-comparator[data-item="2"]').selectpicker("val"));var s=unescape($('.basic-level[data-level="1"]').selectpicker("val"));var n=unescape($('.basic-level[data-level="2"]').selectpicker("val"));return new Promise(function(o,l){var c,d;var u=s!=="0"?e+" +"+s:e;var m=n!=="0"?r+" +"+n:r;t.child(a+"/"+i).orderByChild("name").equalTo(u).once("value",function(e){var t=e.val();c=t[Object.keys(t)[0]];if(c&&d)o([c,d])});t.child(a+"/"+i).orderByChild("name").equalTo(m).once("value",function(e){var t=e.val();d=t[Object.keys(t)[0]];if(c&&d)o([c,d])})})}function g(){var e=unescape($('.set-comparator[data-item="1"]').selectpicker("val"));var t=unescape($('.set-comparator[data-item="2"]').selectpicker("val"));return new Promise(function(r,i){var s,a;if(e==="custom"){var n=b(v(1))}else{var o=$('select.set-level[data-level="1"]').selectpicker("val");var l=o!=="0"?e+" +"+o:e;var n=f(l)}n.then(function(e){s=e;if(s&&a)r([s,a])});if(t==="custom"){var c=b(v(2))}else{var o=$('select.set-level[data-level="2"]').selectpicker("val");var d=o!=="0"?t+" +"+o:t;var c=f(d)}c.then(function(e){a=e;if(s&&a)r([s,a])})})}function f(e){return new Promise(function(r,i){t.child(a+"/armors").orderByChild("set").equalTo(e).once("value",function(e){var t=e.val();var i={pieces:[]};Object.keys(t).forEach(function(e){i.pieces.push(t[e])});r(i)})})}function b(e){return new Promise(function(i,s){var n={pieces:[]};Object.keys(r.pieces).forEach(function(r){if(e[r]){var s=unescape(e[r]);var o=new Promise(function(e,i){if(s!=="naked"){t.child(a+"/armors").orderByChild("name").equalTo(s).once("value",function(t){var i=t.val();var s=null;if(i===null){s=new T("Error fetching "+r.capitalize(),r)}else{s=i[Object.keys(i)[0]]}e(s)})}else{var n=new T("Naked "+r.capitalize(),r);e(n)}});o.then(function(t){n.pieces.push(t);if(n.pieces.length===Object.keys(e).length){i(n)}})}})})}function v(e){var t={};Object.keys(r.pieces).forEach(function(r){var i=$('select.detailed-comparator[data-item="'+e+'"][data-piece="'+r+'"]').selectpicker("val");var s=$('select.detailed-level[data-level="'+e+'"][data-piece="'+r+'"]').selectpicker("val");t[r]=s!=="0"?i+" +"+s:i});return t}function y(){$("button#compare").removeAttr("disabled")}function k(e){$("button#compare").attr("disabled","")}function A(e){var t=e?'[data-item="'+e+'"]':"";var r=$("select.detailed-comparator"+t);r.removeAttr("disabled");r.selectpicker("refresh");var i=e?'[data-level="'+e+'"]':"";r=$("select.detailed-level"+i);r.removeAttr("disabled");r.selectpicker("refresh");var s=$("select.set-level"+i);s.attr("disabled","");s.selectpicker("refresh")}function x(e){var t=e?'[data-item="'+e+'"]':"";var r=$("select.detailed-comparator"+t);r.attr("disabled","");r.selectpicker("refresh");var i=e?'[data-level="'+e+'"]':"";r=$("select.detailed-level"+i);r.attr("disabled","");r.selectpicker("refresh");var s=$("select.set-level"+i);s.removeAttr("disabled");s.selectpicker("refresh")}function S(){$("select.detailed-comparator").selectpicker("deselectAll");$("select.detailed-level").selectpicker("deselectAll")}function w(e){return Object.keys(e)[0]}var D=function(){var e=Handlebars.compile($("#attribute-template").html());var t=Handlebars.compile($("#image-template").html());var r=["-","–","S","A","B","C","D","E"];var i=function(e,t){if(e!==t){if(e==="S"){return 1}else if(t==="S"){return-1}else if(e==="-"||t==="-"){return 0}else{if(e>t)return 1;if(e<t)return-1}}else{return 0}};return{renderAttribute:function(t,s,a,n,o){o=o||{};var l=color2="",c="=";if(o.isNegative){goodColor="red";badColor="blue"}else{goodColor="blue";badColor="red"}if(o.invertSymbols){biggerThanSymbol="<";lesserThanSymbol=">"}else{biggerThanSymbol=">";lesserThanSymbol="<"}if(!o.isString){a=a==="–"||a==="-"||a===""?0:parseFloat(a);n=n==="–"||n==="-"||n===""?0:parseFloat(n)}if(i(a,n)>0){l=goodColor;color2=badColor;c=biggerThanSymbol}else if(i(a,n)<0){l=badColor;color2=goodColor;c=lesserThanSymbol}if(!o.isInteger&&!o.isPercentage){a=r.indexOf(a)>=0?a:a.toFixed(1);n=r.indexOf(n)>=0?n:n.toFixed(1)}if(o.isPercentage){a=a+"%";n=n+"%"}var d={key:s,icon:{icon:t,caption:s},color1:l,color2:color2,value1:a,value2:n,symbol:c};if(o.notIcon)delete d.icon;return e(d)},renderImage:function(e,r,i){var s=e[r];var a=e[i];return t({name:unescape(e.name),source:e.wiki_image,title1:r,title2:i,type1:s,type2:a})},unescape:function(e){e=unescape(e);return e}}}();var P=Backbone.View.extend({initialize:function(){this.isArmor=true;this.contentTemplate=Handlebars.compile($("#content-template").html());this.statsBoxTemplate=Handlebars.compile($("#stats-box-template").html())},calculateSetStats:function(e){var t=new T;for(var r=0;r<e.pieces.length;r++){var i=e.pieces[r];t.elemental_defense.fire+=parseFloat(i.elemental_defense.fire);t.elemental_defense.lightning+=parseFloat(i.elemental_defense.lightning);t.elemental_defense.magic+=parseFloat(i.elemental_defense.magic);t.physical_defense.regular+=parseFloat(i.physical_defense.regular);t.physical_defense.strike+=parseFloat(i.physical_defense.strike);t.physical_defense.slash+=parseFloat(i.physical_defense.slash);t.physical_defense.thrust+=parseFloat(i.physical_defense.thrust);t.resistances.bleed+=parseFloat(i.resistances.bleed);t.resistances.poison+=parseFloat(i.resistances.poison);t.resistances.curse+=parseFloat(i.resistances.curse);t.weight+=parseFloat(i.weight);t.poise+=parseFloat(i.poise);t.durability+=parseInt(i.durability);if(t.name===""){t.name=i.set}else if(i.set!==t.name){t.name="Custom Set"}t.type=i.type}return t},renderChart:function(e,t){var r={chart:{renderTo:"chart",polar:true,type:"line"},title:{text:e.name+" vs "+t.name,x:-80},xAxis:{categories:["Regular Def","Strike Def","Slash Def","Thrust Def","Fire Def","Magic Def","Lightning Def","Bleed Res","Poison Res","Curse Res","Poise","Weight"],lineWidth:0},yAxis:{gridLineInterpolation:"polygon",lineWidth:0,min:0},legend:{align:"right",verticalAlign:"bottom",layout:"vertical"},series:[{name:e.name,data:[e.physical_defense.regular,e.physical_defense.strike,e.physical_defense.slash,e.physical_defense.thrust,e.elemental_defense.fire,e.elemental_defense.magic,e.elemental_defense.lightning,e.resistances.bleed,e.resistances.poison,e.resistances.curse,e.poise,e.weight],pointPlacement:"on"},{name:t.name,data:[t.physical_defense.regular,t.physical_defense.strike,t.physical_defense.slash,t.physical_defense.thrust,t.elemental_defense.fire,t.elemental_defense.magic,t.elemental_defense.lightning,t.resistances.bleed,t.resistances.poison,t.resistances.curse,t.poise,t.weight],pointPlacement:"on"}]};var i=new Highcharts.Chart(r)},renderSets:function(e,t){var r=D.renderImage(e,"type");var i=D.renderImage(t,"type");var s="";s+=this.renderPhysicalDefense(e,t);s+=this.renderElementalDefense(e,t);s+=this.renderResistances(e,t);s+=this.renderOthers(e,t);return this.contentTemplate({body:s,description1:r,description2:i})},renderPiece:function(e){var t="";var r=_.find(this.armor1.pieces,{piece:e})||{};var i=_.find(this.armor2.pieces,{piece:e})||{};var s=D.renderImage(r,"type");var a=D.renderImage(i,"type");var t="";t+=this.renderPhysicalDefense(r,i);t+=this.renderElementalDefense(r,i);t+=this.renderResistances(r,i);t+=this.renderOthers(r,i);return this.contentTemplate({body:t,description1:s,description2:a})},renderPhysicalDefense:function(e,t){var r="",i=e.physical_defense||{},s=t.physical_defense||{};r+=D.renderAttribute("regular_defense","Regular",i.regular,s.regular);r+=D.renderAttribute("strike_defense","Strike",i.strike,s.strike);r+=D.renderAttribute("slash_defense","Slashsh",i.slash,s.slash);r+=D.renderAttribute("thrust_defense","Thrust",i.thrust,s.thrust);return this.statsBoxTemplate({title:"Physical Defense",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderElementalDefense:function(e,t){var r="",i=e.elemental_defense||{},s=t.elemental_defense||{};r+=D.renderAttribute("fire_defense","Fire",i.fire,s.fire);r+=D.renderAttribute("magic_defense","Magic",i.magic,s.magic);r+=D.renderAttribute("lightning_defense","Lightning",i.lightning,s.lightning);return this.statsBoxTemplate({title:"Elemental Defense",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderResistances:function(e,t){var r="",i=e.resistances||{},s=t.resistances||{};r+=D.renderAttribute("bleed","Bleed",i.bleed,s.bleed);r+=D.renderAttribute("poison","Poison",i.poison,s.poison);r+=D.renderAttribute("curse","Curse",i.curse,s.curse);return this.statsBoxTemplate({title:"Resistances",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderOthers:function(e,t){var r="";r+=D.renderAttribute("poise","Poise",e.poise,t.poise);r+=D.renderAttribute("weight","Weight",e.weight,t.weight,{isNegative:true});r+=D.renderAttribute("durability","Durability",e.durability,t.durability,{isInteger:true});return this.statsBoxTemplate({title:"Others",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},render:function(e,t){this.armor1=e;this.armor2=t;this.set1=this.calculateSetStats(this.armor1);this.set2=this.calculateSetStats(this.armor2);var r=this.renderSets(this.set1,this.set2);r+=this.renderPiece("Head");r+=this.renderPiece("Chest");r+=this.renderPiece("Hands");r+=this.renderPiece("Legs");this.$el.html(r)}});var T=function(e,t){this.elemental_defense={fire:0,lightning:0,magic:0};this.physical_defense={regular:0,strike:0,slash:0,thrust:0};this.resistances={bleed:0,poison:0,curse:0};this.weight=0;this.poise=0;this.durability=0;this.name=e?e:"";this.type="N/A";if(t){this.piece=t.capitalize()}};T.constructor.prototype=T;var B=Backbone.View.extend({initialize:function(){this.isArmor=false;this.contentTemplate=Handlebars.compile($("#content-template").html());this.statsBoxTemplate=Handlebars.compile($("#stats-box-template").html())},parseNumber:function(e){if(e==="-"){return 0}else if(e==="S"){return 6}else if(e==="A"){return 5}else if(e==="B"){return 4}else if(e==="C"){return 3}else if(e==="D"){return 2}else if(e==="E"){return 1}else{attempt=parseFloat(e);if(isNaN(attempt)){return 0}return attempt}},convertForChart:function(e){return[this.parseNumber(e.stats.physical_damage),this.parseNumber(e.stats.magic_damage),this.parseNumber(e.stats.fire_damage),this.parseNumber(e.stats.lightning_damage),this.parseNumber(e.stats.critical),this.parseNumber(e.param_bonus.strength),this.parseNumber(e.param_bonus.dexterity),this.parseNumber(e.param_bonus.intelligence),this.parseNumber(e.param_bonus.faith),this.parseNumber(e.req_param.strength),this.parseNumber(e.req_param.dexterity),this.parseNumber(e.req_param.intelligence),this.parseNumber(e.req_param.faith),this.parseNumber(e.aux_effect.bleed),this.parseNumber(e.aux_effect.toxic),this.parseNumber(e.aux_effect.occult),this.parseNumber(e.aux_effect.divine),this.parseNumber(e.weight)]},renderChart:function(e,t){var r={chart:{renderTo:"chart",type:"bar"},title:{text:null},credits:{enabled:false},xAxis:{categories:["Physical Dmg","Magic Dmg","Fire Dmg","Lightning Dmg","Critical","Bonus Strengh","Bonus Dexterity","Bonus Intelligence","Bonus Faith","Req Strength","Req Dexterity","Req Intelligence","Req Faith","Bleed","Toxic","Occult","Divine","Weight"]},legend:{align:"center",verticalAlign:"top",layout:"vertical"},series:[{name:e.name,data:this.convertForChart(e)},{name:t.name,data:this.convertForChart(t)}]};console.log("opts",r);var i=new Highcharts.Chart(r)},renderDamageStats:function(e,t){var r="",i=e.stats,s=t.stats;r+=D.renderAttribute("darksouls1/icon_physical_damage","Regular",i.physical_damage,s.physical_damage);r+=D.renderAttribute("darksouls1/icon_magic_damage","Magic",i.magic_damage,s.magic_damage);r+=D.renderAttribute("darksouls1/icon_fire_damage","Fire",i.fire_damage,s.fire_damage);r+=D.renderAttribute("darksouls1/icon_lightning_damage","Lightning",i.lightning_damage,s.lightning_damage);r+=D.renderAttribute("darksouls1/icon_critical","Critical",i.critical,s.critical);return this.statsBoxTemplate({title:"Damage",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderReductionStats:function(e,t){var r="",i=e.stats,s=t.stats;r+=D.renderAttribute("darksouls1/icon_physical_reduction","Physical",i.physical_reduction,s.physical_reduction);r+=D.renderAttribute("darksouls1/icon_magic_reduction","Magic",i.magic_reduction,s.magic_reduction);r+=D.renderAttribute("darksouls1/icon_fire_reduction","Fire",i.fire_reduction,s.fire_reduction);r+=D.renderAttribute("darksouls1/icon_lightning_reduction","Lightning",i.lightning_reduction,s.lightning_reduction);r+=D.renderAttribute("darksouls1/icon_stability","Stability",i.stability,s.stability);return this.statsBoxTemplate({title:"Reduction",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderParamBonus:function(e,t){var r="",i=e.param_bonus,s=t.param_bonus;r+=D.renderAttribute("darksouls1/icon_strength","Strength",i.strength,s.strength,{isNegative:true,isString:true,invertSymbols:true});r+=D.renderAttribute("darksouls1/icon_dexterity","Dexterity",i.dexterity,s.dexterity,{isNegative:true,isString:true,invertSymbols:true});r+=D.renderAttribute("darksouls1/icon_intelligence","Intelligence",i.intelligence,s.intelligence,{isNegative:true,isString:true,invertSymbols:true});r+=D.renderAttribute("darksouls1/icon_faith","Faith",i.faith,s.faith,{isNegative:true,isString:true,invertSymbols:true});return this.statsBoxTemplate({title:"Param Bonus",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderReqParams:function(e,t){var r="",i=e.req_param,s=t.req_param;r+=D.renderAttribute("darksouls1/icon_strength","Strength",i.strength,s.strength,{isNegative:true,isInteger:true});r+=D.renderAttribute("darksouls1/icon_dexterity","Dexterity",i.dexterity,s.dexterity,{isNegative:true,isInteger:true});r+=D.renderAttribute("darksouls1/icon_intelligence","Intelligence",i.intelligence,s.intelligence,{isNegative:true,isInteger:true});r+=D.renderAttribute("darksouls1/icon_faith","Faith",i.faith,s.faith,{isNegative:true,isInteger:true});return this.statsBoxTemplate({title:"Req Params",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderAuxEffects:function(e,t){var r="",i=e.aux_effect,s=t.aux_effect;r+=D.renderAttribute("darksouls1/icon_bleed","Bleed",i.bleed,s.bleed,{isInteger:true});r+=D.renderAttribute("darksouls1/icon_toxic","Toxic",i.toxic,s.toxic,{isInteger:true});r+=D.renderAttribute("darksouls1/icon_occult","Occult",i.occult,s.occult,{isInteger:true});r+=D.renderAttribute("darksouls1/icon_divine","Divine",i.divine,s.divine,{isInteger:true});return this.statsBoxTemplate({title:"Aux Effects",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderResistances:function(e,t){var r="",i=e.resistances,s=t.resistances;r+=D.renderAttribute("darksouls1/icon_bleed","Bleed",i.bleed,s.bleed,{isPercentage:true});r+=D.renderAttribute("darksouls1/icon_poison","Poison",i.poison,s.poison,{isPercentage:true});r+=D.renderAttribute("darksouls1/icon_toxic","Toxic",i.toxic,s.toxic,{isPercentage:true});r+=D.renderAttribute("darksouls1/icon_curse","Curse",i.curse,s.curse,{isPercentage:true});return this.statsBoxTemplate({title:"Resistances",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderOthers:function(e,t){var r="";r+=D.renderAttribute("darksouls1/icon_weight","Weight",e.weight,t.weight,{isNegative:true});r+=D.renderAttribute("darksouls1/icon_durability","Durability",e.durability,t.durability,{isInteger:true});if(e.magic_adjust||t.magic_adjust){r+=D.renderAttribute("darksouls1/icon_magic_adjust","Magic Adjust",e.magic_adjust,t.magic_adjust,{isInteger:true})}return this.statsBoxTemplate({title:"Others",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},render:function(e,t,r){var i=D.renderImage(e,"attack_type","weapon_type");var s=D.renderImage(t,"attack_type","weapon_type");var a="";a+=this.renderDamageStats(e,t);a+=this.renderReductionStats(e,t);a+=this.renderParamBonus(e,t);a+=this.renderReqParams(e,t);if(r){a+=this.renderResistances(e,t)}else{a+=this.renderAuxEffects(e,t)}a+=this.renderOthers(e,t);content=this.contentTemplate({body:a,description1:i,description2:s});this.$el.html(content)}});var N=Backbone.View.extend({initialize:function(){this.isArmor=true;this.contentTemplate=Handlebars.compile($("#content-template").html());this.statsBoxTemplate=Handlebars.compile($("#stats-box-template").html())},calculateSetStats:function(e){var t=new T;for(var r=0;r<e.pieces.length;r++){var i=e.pieces[r];t.stats.physical_defense+=parseFloat(i.stats.physical_defense);t.stats.strike_defense+=parseFloat(i.stats.strike_defense);t.stats.slash_defense+=parseFloat(i.stats.slash_defense);t.stats.thrust_defense+=parseFloat(i.stats.thrust_defense);t.stats.fire_defense+=parseFloat(i.stats.fire_defense);t.stats.lightning_defense+=parseFloat(i.stats.lightning_defense);t.stats.magic_defense+=parseFloat(i.stats.magic_defense);t.stats.dark_defense+=parseFloat(i.stats.dark_defense);t.stats.bleed_resist+=parseFloat(i.stats.bleed_resist);t.stats.poison_resist+=parseFloat(i.stats.poison_resist);t.stats.curse_resist+=parseFloat(i.stats.curse_resist);t.stats.dark_resist+=parseFloat(i.stats.dark_resist);t.stats.weight+=parseFloat(i.stats.weight);t.stats.poise+=parseFloat(i.stats.poise);t.stats.durability+=parseInt(i.stats.durability);if(t.name===""){t.name=i.set}else if(i.set!==t.name){t.name="Custom Set"}t.type=i.type}return t},renderSets:function(e,t){var r=D.renderImage(e,"type");var i=D.renderImage(t,"type");var s="";s+=this.renderPhysicalDefense(e,t);s+=this.renderElementalDefense(e,t);s+=this.renderResistances(e,t);s+=this.renderOthers(e,t);return this.contentTemplate({body:s,description1:r,description2:i})},renderPiece:function(e){var t="";var r=_.find(this.armor1.pieces,{piece:e});var i=_.find(this.armor2.pieces,{piece:e});console.log("render piece",e,r,i);if(r===undefined&&i===undefined){return""}else if(r===undefined&&i){r=new T(null,e)}else if(i===undefined&&r){i=new T(null,e)}var s=D.renderImage(r,"type");var a=D.renderImage(i,"type");var t="";t+=this.renderPhysicalDefense(r,i);t+=this.renderElementalDefense(r,i);t+=this.renderResistances(r,i);t+=this.renderOthers(r,i);return this.contentTemplate({body:t,description1:s,description2:a})},renderPhysicalDefense:function(e,t){var r="",i=e.stats||{},s=t.stats||{};r+=D.renderAttribute("darksouls2/icon_physical_reduction","Physical",i.physical_defense,s.physical_defense);r+=D.renderAttribute("darksouls2/icon_strike_reduction","Strike",i.strike_defense,s.strike_defense);r+=D.renderAttribute("darksouls2/icon_slash_reduction","Slashsh",i.slash_defense,s.slash_defense);r+=D.renderAttribute("darksouls2/icon_thrust_reduction","Thrust",i.thrust_defense,s.thrust_defense);return this.statsBoxTemplate({title:"Physical Defense",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderElementalDefense:function(e,t){var r="",i=e.stats||{},s=t.stats||{};r+=D.renderAttribute("darksouls2/icon_fire_reduction","Fire",i.fire_defense,s.fire_defense);r+=D.renderAttribute("darksouls2/icon_magic_reduction","Magic",i.magic_defense,s.magic_defense);r+=D.renderAttribute("darksouls2/icon_lightning_reduction","Lightning",i.lightning_defense,s.lightning_defense);r+=D.renderAttribute("darksouls2/icon_dark_reduction","Dark",i.dark_defense,s.dark_defense);return this.statsBoxTemplate({title:"Elemental Defense",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderResistances:function(e,t){var r="",i=e.stats||{},s=t.stats||{};r+=D.renderAttribute("darksouls2/icon_bleed_reduction","Bleed",i.bleed_resist,s.bleed_resist);r+=D.renderAttribute("darksouls2/icon_poison_reduction","Poison",i.poison_resist,s.poison_resist);r+=D.renderAttribute("darksouls2/icon_curse_reduction","Curse",i.curse_resist,s.curse_resist);r+=D.renderAttribute("darksouls2/icon_petrify_reduction","Petrify",i.petrify_resist,s.petrify_resist);return this.statsBoxTemplate({title:"Resistances",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderReqParams:function(e,t){var r="",i=e.req_param||{},s=t.req_param||{};r+=D.renderAttribute("darksouls2/icon_strength","Strength",i.strength,s.strength);r+=D.renderAttribute("darksouls2/icon_dexterity","Dexterity",i.dexterity,s.dexterity);r+=D.renderAttribute("darksouls2/icon_intelligence","Intelligence",i.intelligence,s.intelligence);r+=D.renderAttribute("darksouls2/icon_faith","Faith",i.faith,s.faith);return this.statsBoxTemplate({title:"Req Param",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},renderOthers:function(e,t){var r="",i=e.stats||{},s=t.stats||{};r+=D.renderAttribute("darksouls2/icon_poise","Poise",i.poise,s.poise);r+=D.renderAttribute("darksouls2/icon_weight","Weight",i.weight,s.weight,{isNegative:true});r+=D.renderAttribute("darksouls2/icon_durability","Durability",i.durability,s.durability,{isInteger:true});return this.statsBoxTemplate({title:"Others",name1:e.name,name2:t.name,stats:r,isArmor:this.isArmor})},render:function(e,t){this.armor1=e;this.armor2=t;this.set1=this.calculateSetStats(this.armor1);this.set2=this.calculateSetStats(this.armor2);var r=this.renderSets(this.set1,this.set2);r+=this.renderPiece("Head");r+=this.renderPiece("Chest");r+=this.renderPiece("Hands");r+=this.renderPiece("Legs");this.$el.html(r)}});var T=function(e,t){this.stats={fire_defense:0,lightning_defense:0,magic_defense:0,dark_defense:0,physical_defense:0,strike_defense:0,slash_defense:0,thrust_defense:0,bleed_resist:0,poison_resist:0,curse_resist:0,petrify_resist:0,weight:0,poise:0,durability:0};this.req_param={strength:0,dexterity:0,intelligence:0,faith:0};this.physical_defense_bonus="-";this.name=e?e:t?"Naked "+t:"";this.type="N/A";if(t){this.piece=t.capitalize()}};T.constructor.prototype=T;var F=Backbone.View.extend({initialize:function(){this.isArmor=false;this.game="darksouls2";this.contentTemplate=Handlebars.compile($("#content-template").html());this.statsBoxTemplate=Handlebars.compile($("#stats-box-template").html())},renderDamageStats:function(e,t){var r="",i=e.stats,s=t.stats;r+=D.renderAttribute("darksouls2/icon_physical_damage","Physical",i.physical_damage,s.physical_damage);r+=D.renderAttribute("darksouls2/icon_magic_damage","Magic",i.magic_damage,s.magic_damage);r+=D.renderAttribute("darksouls2/icon_fire_damage","Fire",i.fire_damage,s.fire_damage);r+=D.renderAttribute("darksouls2/icon_lightning_damage","Lightning",i.lightning_damage,s.lightning_damage);r+=D.renderAttribute("darksouls2/icon_dark_damage","Dark",i.dark_damage,s.dark_damage);return this.statsBoxTemplate({title:"Damage",name1:e.name,name2:t.name,stats:r,game:this.game,isArmor:this.isArmor})},renderAuxDamageStats:function(e,t){var r="",i=e.stats,s=t.stats;r+=D.renderAttribute("darksouls2/icon_poison_damage","Poison",i.poison_damage,s.poison_damage);r+=D.renderAttribute("darksouls2/icon_bleed_damage","Bleed",i.bleed_damage,s.bleed_damage);r+=D.renderAttribute("darksouls2/icon_counter_damage","Counter",i.counter_damage,s.counter_damage);r+=D.renderAttribute("darksouls2/icon_poise_damage","Poise",i.poise_damage,s.poise_damage);return this.statsBoxTemplate({title:"Aux. Damage",name1:e.name,name2:t.name,stats:r,game:this.game,isArmor:this.isArmor})},renderReductionStats:function(e,t){var r="",i=e.stats,s=t.stats;r+=D.renderAttribute("darksouls2/icon_physical_reduction","Physical",i.physical_reduction,s.physical_reduction);r+=D.renderAttribute("darksouls2/icon_magic_reduction","Magic",i.magic_reduction,s.magic_reduction);r+=D.renderAttribute("darksouls2/icon_fire_reduction","Fire",i.fire_reduction,s.fire_reduction);r+=D.renderAttribute("darksouls2/icon_lightning_reduction","Lightning",i.lightning_reduction,s.lightning_reduction);r+=D.renderAttribute("darksouls2/icon_dark_reduction","Dark",i.dark_reduction,s.dark_reduction);return this.statsBoxTemplate({title:"Reduction",name1:e.name,name2:t.name,stats:r,game:this.game,isArmor:this.isArmor})},renderAuxReductionStats:function(e,t){var r="",i=e.stats,s=t.stats;r+=D.renderAttribute("darksouls2/icon_poison_reduction","Poison",i.poison_reduction,s.poison_reduction);r+=D.renderAttribute("darksouls2/icon_bleed_reduction","Bleed",i.bleed_reduction,s.bleed_reduction);r+=D.renderAttribute("darksouls2/icon_petrify_reduction","Petrify",i.petrify_reduction,s.petrify_reduction);r+=D.renderAttribute("darksouls2/icon_curse_reduction","Curse",i.curse_reduction,s.curse_reduction);return this.statsBoxTemplate({title:"Aux. Reduction",name1:e.name,name2:t.name,stats:r,game:this.game,isArmor:this.isArmor})},renderParamBonus:function(e,t){var r="",i=e.param_bonus,s=t.param_bonus;r+=D.renderAttribute("darksouls2/icon_strength_bonus","Strength",i.strength,s.strength,{isNegative:true,isString:true,invertSymbols:true});r+=D.renderAttribute("darksouls2/icon_dexterity_bonus","Dexterity",i.dexterity,s.dexterity,{isNegative:true,isString:true,invertSymbols:true});r+=D.renderAttribute("darksouls2/icon_magic_bonus","Magic",i.magic,s.magic,{isNegative:true,isString:true,invertSymbols:true});r+=D.renderAttribute("darksouls2/icon_fire_bonus","Fire",i.fire,s.fire,{isNegative:true,isString:true,invertSymbols:true});r+=D.renderAttribute("darksouls2/icon_lightning_bonus","Lightning",i.lightning,s.lightning,{isNegative:true,isString:true,invertSymbols:true});r+=D.renderAttribute("darksouls2/icon_dark_bonus","Dark",i.dark,s.dark,{isNegative:true,isString:true,invertSymbols:true});return this.statsBoxTemplate({title:"Param Bonus",name1:e.name,name2:t.name,stats:r,game:this.game,isArmor:this.isArmor})},renderReqParams:function(e,t){var r="",i=e.req_param,s=t.req_param;r+=D.renderAttribute("darksouls2/icon_strength","Strength",i.strength,s.strength,{isNegative:true,isInteger:true});r+=D.renderAttribute("darksouls2/icon_dexterity","Dexterity",i.dexterity,s.dexterity,{isNegative:true,isInteger:true});r+=D.renderAttribute("darksouls2/icon_intelligence","Intelligence",i.intelligence,s.intelligence,{isNegative:true,isInteger:true});r+=D.renderAttribute("darksouls2/icon_faith","Faith",i.faith,s.faith,{isNegative:true,isInteger:true});return this.statsBoxTemplate({title:"Req Params",name1:e.name,name2:t.name,stats:r,game:this.game,isArmor:this.isArmor})},renderOthers:function(e,t){var r="";r+=D.renderAttribute("darksouls2/icon_shot_range","Shot Range",e.stats.shot_range,t.stats.shot_range,{isNegative:true});r+=D.renderAttribute("darksouls2/icon_stability","Stability",e.stats.stability,t.stats.stability,{isNegative:true});r+=D.renderAttribute("darksouls2/icon_casting_speed","Casting Speed",e.stats.casting_speed,t.stats.casting_speed,{isNegative:true});r+=D.renderAttribute("darksouls2/icon_weight","Weight",e.stats.weight,t.stats.weight,{isNegative:true});r+=D.renderAttribute("darksouls2/icon_durability","Durability",e.stats.durability,t.stats.durability,{isInteger:true});return this.statsBoxTemplate({title:"Others",name1:e.name,name2:t.name,stats:r,game:this.game,isArmor:this.isArmor})},render:function(e,t,r){var i=D.renderImage(e,"attack_type","weapon_type");var s=D.renderImage(t,"attack_type","weapon_type");var a="";a+=this.renderDamageStats(e,t);a+=this.renderAuxDamageStats(e,t);a+=this.renderReductionStats(e,t);a+=this.renderParamBonus(e,t);a+=this.renderReqParams(e,t);a+=this.renderOthers(e,t);content=this.contentTemplate({body:a,description1:i,description2:s});this.$el.html(content)}});