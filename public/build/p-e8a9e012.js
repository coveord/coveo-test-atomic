import{c as e}from"./p-e9c4f463.js";import{a as n}from"./p-2431fb41.js";var t={exports:{}};(function(t,r){!function(e,r){t.exports=r(n.exports)}(e,(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=n(e);function r(e){return e>1&&e<5&&1!=~~(e/10)}function s(e,n,t,s){var o=e+" ";switch(t){case"s":return n||s?"pár sekund":"pár sekundami";case"m":return n?"minuta":s?"minutu":"minutou";case"mm":return n||s?o+(r(e)?"minuty":"minut"):o+"minutami";case"h":return n?"hodina":s?"hodinu":"hodinou";case"hh":return n||s?o+(r(e)?"hodiny":"hodin"):o+"hodinami";case"d":return n||s?"den":"dnem";case"dd":return n||s?o+(r(e)?"dny":"dní"):o+"dny";case"M":return n||s?"měsíc":"měsícem";case"MM":return n||s?o+(r(e)?"měsíce":"měsíců"):o+"měsíci";case"y":return n||s?"rok":"rokem";case"yy":return n||s?o+(r(e)?"roky":"let"):o+"lety"}}var o={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s,m:s,mm:s,h:s,hh:s,d:s,dd:s,M:s,MM:s,y:s,yy:s}};return t.default.locale(o,null,!0),o}))})(t);const r=t.exports;const s=Object.freeze(Object.assign(Object.create(null),t.exports,{default:r}));export{s as c};
//# sourceMappingURL=p-e8a9e012.js.map