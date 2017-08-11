function extend(defaultSetting,userSetting){
	//创建一个空对象
	var obj={};

	for(var p in defaultSetting){
		if(userSetting.hasOwnProperty(p)){ //(1)
			obj[p] = userSetting[p];
		}
		else{							   //(2)
			obj[p] = defaultSetting[p];
		}
	}
	
	return obj;
}