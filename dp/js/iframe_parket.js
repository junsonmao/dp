$(function(){
	 // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('main1'));
		 var myChart2 = echarts.init(document.getElementById('main2'));
		  var myChart3 = echarts.init(document.getElementById('main3'));
		  

        // 指定图表的配置项和数据
        var option = {
			series: [
				{
					type:'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: true,
							position: 'center',
							 textStyle: {
								fontSize: '14',
								fontWeight: 'bold',
								fontFamily: 'digifacewide'
							}
						},
					},
					data:[
						{value:10, name:'10%'},
						{value:90, name:''}
					]
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option);
		myChart2.setOption(option);
		myChart3.setOption(option);
});