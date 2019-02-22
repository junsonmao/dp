$(function(){
	var windowW = $(window).width();
	var mydate = new Date();
	//console.log(time);
	
	$(".pserson_duty_logo").width(Math.ceil(windowW/3*0.9));

	//得到时间
	function time(mydate){
		var hours = mydate.getHours().toString();
		var minutes = mydate.getMinutes().toString();
		var calender = mydate.getFullYear().toString();
		var month = (mydate.getMonth()+1).toString();
		var date = mydate.getDate().toString();
		var day = mydate.getDay();

		if(hours<10){
			hours = '0'+hours;
		} else{}

		if(minutes<10){
			minutes = '0'+minutes;
		} else{}

		switch(day){
			case 1: 
				day = "周一"; 
				break;
			case 2: 
				day = "周二"; 
				break;
			case 3: 
				day = "周三"; 
				break;
			case 4: 
				day = "周四"; 
				break;
			case 5: 
				day = "周五"; 
				break;
			case 6: 
				day = "周六"; 
				break;
			case 0: 
				day = "周日"; 
				break;
			//dedault: console.log("未获得日期");
		}
		//console.log(day);
		
		return {
			time: hours+":"+minutes,
			calendar: calender+"/"+month+"/"+date,
			day: day,
		};
		
	}
	//挂载时间
	function calenderTime(){
		$(".time").text(time(mydate).time);
		$(".calendar_time").text(time(mydate).calendar);
		$(".day").text(time(mydate).day);
	}
	setInterval(calenderTime(),1000);
});