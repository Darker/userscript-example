// ==UserScript==
// @name        Name
// @namespace   i_never_figured_out_what_does_this_mean
// @description Description
// @include     https://example.net/*
// @version     1.3
// @grant       none
// @downloadURL https://github.com/Darker/userscript-example/raw/master/example.user.js
// @updateURL https://github.com/Darker/userscript-example/raw/master/example.user.js
// ==/UserScript==

// Note that in most cases, updateURL and downloadURL
// is NOT NECESSARY. Greasemonkey will automatically 
// use the URL you used to download script
// Wiki: https://wiki.greasespot.net/Metadata_Block#.40downloadURL

// Use this to check if your script will update, among other things
// Wiki: https://wiki.greasespot.net/GM_info
console.log("Script will "+(GM_info?"":"not ")+"update.");
  /// code