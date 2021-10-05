
shadow.cljs.devtools.client.env.module_loaded('index');

try { mobile.init(); } catch (e) { console.error("An error occurred when calling (mobile/init)"); throw(e); }