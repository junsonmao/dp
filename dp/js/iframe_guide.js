$(function(){
	 // 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('main1'));
		  

        // 指定图表的配置项和数据
        var option = {
			legend: {
				orient: 'vertical',
				x: 'right',
				y:"45%",
				data:['停止接单','空闲','正在出团'],
				textStyle:{
					color:'#fff',
				},
			},
			series: [
				{
					type:'pie',
					radius: ['50%', '70%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							formatter: '{d}%',
						},
					},
					data:[
						{value:10, name:'停止接单'},
						{value:20, name:'空闲'},
						{value:70, name:'正在出团'}
					]
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option);
});