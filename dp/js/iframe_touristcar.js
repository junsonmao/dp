$(function(){
	      
		 
		  //获取游览车
	      gpsquery();
	  
});

  Date.prototype.Format = function(fmt){
				  var o = {   
					"M+" : this.getMonth()+1,                 //月份   
					"d+" : this.getDate(),                    //日   
					"h+" : this.getHours(),                   //小时   
					"m+" : this.getMinutes(),                 //分   
					"s+" : this.getSeconds(),                 //秒   
					"q+" : Math.floor((this.getMonth()+3)/3), //季度   
					"S"  : this.getMilliseconds()             //毫秒   
				  };   
				  if(/(y+)/.test(fmt))   
					fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
				  for(var k in o)   
					if(new RegExp("("+ k +")").test(fmt))   
				  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
				  return fmt;   
		  }  


 function gpsquery(){
	    var date = new Date();
		  var start_time = date.Format("yyyy-MM-dd");
		  var end_time =  new Date(date.setDate(date.getDate() + 1)).Format("yyyy-MM-dd");
		   $.ajax({
             type: "POST",
             url: "https://mss.tchcn.com/gps/query",
             data: {
				 start_time:start_time,
				 end_time:end_time,
				 currentPage:1,
				 pageSize:5
			 },
             dataType: "json",
             success: function(data){
                 //console.log(data);
				 if(data.code==10001 && data.data.res && data.data.res.dataList){
					 $(".touristcar_table tbody tr").remove();
					  data.data.res.dataList.map(function(v,i){
						 $(".touristcar_table tbody").append("<tr>"+
						   "<td>"+v.deviceID+"</td>"+
						   "<td>"+v.direction+"</td>"+
						   "<td>"+v.speed+"m/h</td>"+
						   "<td>"+v.time+"</td>"+
						   "</tr>");
					 });
					 setTimeout(function(){
						 gpsquery();
					 },3000);
				 }
             }
         });
};