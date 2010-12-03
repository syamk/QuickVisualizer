(function(){ 
	// find the parent table 
	var find_table_parent=function(e){ 
		try{ 
			var nn = e.parentNode;
			if(nn.nodeName!=='TABLE'){
				return find_table_parent(nn);
			}else{
				return nn;
			}
		}catch(e) {
			return false;
		}
	},d=document,elem=d.createElement('link'),msg_div=d.createElement('div'),script_elem;
	// create a link tag and inject styles to the page. 
	//TODO:CB(crossbrowser): datauri fails in IE 
	elem.id='__g__';elem.rel='stylesheet';elem.setAttribute('href','data:text/css;,body{cursor:crosshair;}#__g__message{text-align: center;font-size:16px;background-color: lightblue; border: 1px solid black;padding:5px;width:500px;position:fixed;top:0px;left:50%;margin-left:-250px;}');
	d.body.appendChild(elem);
	// create the floating message div 
	msg_div.id='__g__message';msg_div.appendChild(d.createTextNode('Click on a table to start visualizing data.')) ;	
	d.body.appendChild(msg_div);
	//attach document click handler 
	d.onclick = function(e){
		e = e ? e : event; t = e.target ? e.target : e.srcElement;
		// qv is the global namespace for quickvis code, here setting the selected table element to a property of qv
		window.qv ={'tbelem':find_table_parent(t)};
		if(window.qv.tbelem==false){
			alert('Couldnt find the table!');
		}else {
			// attaching main payload 
			script_elem=document.createElement('script');script_elem.setAttribute('src','https://github.com/syamk/QuickVisualizer/raw/master/chart.js');d.body.appendChild(script_elem);
			d.getElementById('__g__message').innerHTML='Loading..';
		}
		// cleanup 
		d.body.style.cursor='default';
		d.onclick  = null;
		//TODO:CB handle IE 
		e.preventDefault();
	}
})();