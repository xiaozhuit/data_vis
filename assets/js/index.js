$(function(){
    /*标准*/
    var radar = echarts.init(document.getElementById('radar'));
    option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data: ['宽窄巷子', '锦里古街','武侯祠','成都大熊猫繁育研究基地','杜甫草堂'],
            x:"center",
            y:'bottom',
            textStyle:{
                color:"#fff"
            }
        },
        color: ['#4c95d9', '#f6731b', '#8cd43f', '#d94c95', '#f39c12'],
        radar: {
            name:{
                textStyle: {
                    //设置颜色
                    color:'#fff'
                }
            },
            indicator: [
                { name: '攻略数量', max: 2500},
                { name: '评论数量', max: 15000},
                { name: '排名', max: 6},
                { name: '游客数量', max: 10000},
                { name: '满意度', max: 5200},
                { name: '参观体验', max: 100}
            ],
            center: ['50%','40%'],
            radius: "60%"
        },
        series: [{
            name: '',
            type: 'radar',
            itemStyle : {
                normal : {
                    splitLine: {
                        lineStyle: {

                        }
                    },
                    label: {
                        show: false,
                        textStyle:{
                        },
                        formatter:function(params) {
                            return params.value;}
                    },
                }
            },
            data : [
                {
                    value : [2142, 12426, 2, 9314, 4166, 80],
                    name : '宽窄巷子'
                },
                {
                    value : [1942, 13124, 3, 8142, 3146, 90],
                    name : '锦里古街'
                },
                {
                    value : [2346, 9122, 5, 8941, 2564, 85],
                    name : '武侯祠'
                }, {
                    value : [2451, 14244, 1, 9630, 4814, 95],
                    name : '成都大熊猫繁育研究基地'
                }, {
                    value : [1542, 10452, 4, 9420, 3542, 88],
                    name : '杜甫草堂'
                }
            ]
        }]
    };
    radar.setOption(option);
   



    /* 左下折线*/
    // var graduateyear = echarts.init(document.getElementById('graduateyear'));
    // option = {
    //     title : {
    //         text:"",
    //         x:'center',
    //         y:'top',
    //         textStyle:
    //         {
    //             color:'#fff',
    //             fontSize:13
    //         }
    //     },
    //     tooltip : {
    //         trigger: 'axis'
    //     },
    //     grid: {
    //         left: '3%',
    //         right: '8%',
    //         bottom: '5%',
    //         top:"13%",
    //         containLabel: true
    //     },
    //     color:["#72b332",'#35a9e0'],
    //     legend: {
    //         data:['test1','test2'],
    //         show:true,

    //         right:'15%',
    //         y:"0",
    //         textStyle:{
    //             color:"#999",
    //             fontSize:'13'
    //         },
    //     },
    //     toolbox: {
    //         show : false,
    //         feature : {
    //             mark : {show: true},
    //             dataView : {show: true, readOnly: false},
    //             magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
    //             restore : {show: true},
    //             saveAsImage : {show: true}
    //         }
    //     },
    //     calculable : true,
    //     xAxis : [
    //         {
    //             type : 'category',
    //             boundaryGap : false,
    //             data : ['2022年','2023年','2024年','2025年','2026年','2027年','2028年'],
    //             splitLine:{
    //                 show:true,
    //                 lineStyle:{
    //                     color: '#2d3b53'
    //                 }
    //             },
    //             axisLabel:{
    //                 textStyle:{
    //                     color:"#fff"
    //                 },
    //                 alignWithLabel: true,
    //                 interval:0,
    //                 rotate:'15'
    //             }
    //         }
    //     ],
    //     yAxis : [
    //         {
    //             type : 'value',
    //             splitLine:{
    //                 show:true,
    //                 lineStyle:{
    //                     color: '#2d3b53'
    //                 }
    //             },
    //             axisLabel:{
    //                 textStyle:{
    //                     color:"#999"
    //                 }
    //             },
    //         }
    //     ],
    //     series : [
    //         {
    //             name:'test1',
    //             type:'line',
    //             smooth:true,
    //             symbol:'roundRect',
    //             data:[1168,1189,1290,1300,1345,1256,1045]
    //         },
    //         {
    //             name:'test2',
    //             type:'line',
    //             smooth:true,
    //             symbol:'roundRect',
    //             data:[1234,1290,1311,1145,1045,900,673]
    //         }
    //     ]
    // };
    // graduateyear.setOption(option);
    var graduateyear = echarts.init(document.getElementById('graduateyear'));
    option = {
        // title: {
        //     text: "毕业生年份统计",
        //     x: 'center',
        //     y: 'top',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 13
        //     }
        // },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            top: "13%",
            containLabel: true
        },
        color: ["#72b332", '#35a9e0'],
        legend: {
            data: ['平均价格', '平均评分(扩大100倍)'],
            show: true,
            left: '15%',
            y: "0",
            textStyle: {
                color: "#fff", // 修改为白色以提高可读性
                fontSize: '13'
            },
        },
        toolbox: {
            show: true, // 显示工具箱
            feature: {
                mark: { show: true },
                // dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['舒适型','五星级','高档型','豪华型','经济型','四星级'],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#2d3b53'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff"
                    },
                    alignWithLabel: true,
                    interval: 0,
                    rotate: '15'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#2d3b53'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff" // 修改为白色以提高可读性
                    }
                },
            }
        ],
        series: [
            {
                name: '平均价格',
                type: 'line',
                smooth: true,
                symbol: 'roundRect',
                data: [238.9,1216.6 ,410.9,865.9,185.6,1014.3]
            },
            {
                name: '平均评分(扩大100倍)',
                type: 'line',
                smooth: true,
                symbol: 'roundRect',
                // data: [4.2,4.8,4.6,4.9,4.0,4.6]
                // 将评分扩大100倍，配合平均价格展示数据
                data: [410,480,460,490,400,470]
            }
        ]
    };
    graduateyear.setOption(option);



    /*左下两个环形图*/
    var sexrate = echarts.init(document.getElementById('sexrate'));
    var total = {
        name: '中低端酒店比例'
    };
    option = {
        title: [{
            text: total.name,
            left: '48%',
            top: '40%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 15
            }
        }, {
            text: total.value,
            left: '48%',
            top: '44%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color:['#70a3ff','#ff7f4e'],
        legend: {
            orient: 'vertical',
            x:'center',
            bottom:'5%',
            selectedMode:false,
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value ;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name + "  "+oa[i].value+"  "+ (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            data: ['100-200元','200-400元'],
            show:true,
            textStyle:{
                color:'#fff',
                fontWeight:'bold'
            },
        },
        series : [
            {
                name: 'PK',
                type: 'pie',
                selectedMode: 'single',
                radius: ['40%', '60%'],
                center: ['50%', '40%'],
                data: [
                    {value: 1249, name: '100-200元'},
                    {value: 336, name: '200-400元'}
                ],
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align:'left',
                        textStyle: {
                            rotate:true
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label:{
                            show: true,
                            formatter: '{b} {c}'
                        }
                    }

                }
            }
        ]
    };
    sexrate.setOption(option);
 
    
    var householdrate = echarts.init(document.getElementById('householdrate'));
    var total = {
        name: '中高端酒店比例'
    };
    option = {
        title: [{
            text: total.name,
            left: '48%',
            top: '40%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 15
            }
        }, {
            text: total.value,
            left: '48%',
            top: '44%',
            textAlign: 'center',
            textBaseline: 'middle',
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 18
            }
        }],
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        color:['#4f9de7','#4acf79'],
        legend: {
            orient: 'vertical',
            x:'center',
            bottom:'5%',
            selectedMode:false,
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value ;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name + "  "+oa[i].value+"  "+ (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            },
            data: ['400-600元','600元以上'],
            show:true,
            textStyle:{
                color:'#fff',
                fontWeight:'bold'
            },
        },
        series : [
            {
                name: 'PK',
                type: 'pie',
                selectedMode: 'single',
                radius: ['40%', '60%'],
                center: ['50%', '40%'],
                data: [
                    {value: 64, name: '400-600元'},
                    {value: 54, name: '600元以上'}
                ],
                label: {
                    normal: {
                        show: false,
                        position: "outer",
                        align:'left',
                        textStyle: {
                            rotate:true
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal: {
                        label:{
                            show: true,
                            formatter: '{b} {c}'
                        }
                    }
                }
            }
        ]
    };
    householdrate.setOption(option);
   
    /*  =====-=*/
    var courserate = echarts.init(document.getElementById('courserate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y:'middle',
            textStyle:{
                color:"#fff"
            },

            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value;
                // var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value+oa[5].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            },
            // data: ['test1','test2','test3','test4','test5','text6']
            data: ['成华区','武侯区','金牛区','青羊区','锦江区']
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '45%',
                color:['#27c2c1','#9ccb63','#fcd85a','#60c1de','#0084c8','#d8514b'],
                center: ['38%', '50%'],
                data:[
                    {value:121, name:'成华区'},
                    {value:386, name:'武侯区'},
                    {value:187, name:'金牛区'},
                    {value:226, name:'青羊区'},
                    {value:225, name:'锦江区'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '{b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    courserate.setOption(option);




    /* =======*/
    var professionrate = echarts.init(document.getElementById('professionrate'));
    option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '0',
            y:'middle',
            textStyle:{
                color:"#fff"
            },
            data: ['双流区','都江堰','龙泉驿区','邛崃','大邑','新都区','崇州','其他'],
            formatter:function(name){
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value + oa[4].value + oa[5].value + oa[6].value + oa[7].value;
                for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                        return name +  ' '+oa[i].value;
                    }
                }
            }
        },
        series : [
            {
                name: 'FK',
                type: 'pie',
                radius : '50%',
                center: ['38%', '50%'],
                data:[
                    { value: 201, name: '双流区' },
                    { value: 124, name: '都江堰' },
                    { value: 64, name: '龙泉驿区' },
                    { value: 61, name: '邛崃' },
                    { value: 59, name: '大邑' },
                    { value: 52, name: '新都区' },
                    { value: 42, name: '崇州' },
                    {value:71, name:'其他'}
                   
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                itemStyle: {
                    normal: {
                        label:{
                            show: true,
                            position:'outside',
                            formatter: '  {b}'
                        }
                    },
                    labelLine :{show:true}
                }
            }
        ]
    };
    professionrate.setOption(option);
 
    /* 比例变化*/
    // 中部折线图
    var changedetail = echarts.init(document.getElementById('changedetail'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['',''],
            show:false
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'8%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['宽窄巷子','锦里古街','武侯祠','成都大熊猫繁育研究基地','杜甫草堂'],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:0
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '攻略数',
                nameTextStyle:{
                    color:'#fff'
                },
                interval: 500,
                max:2500,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            },
            {
                min: 0,
                max: 10,
                interval: 1,
                type: 'value',
                name: '景点排名',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            }
        ],
        color:"yellow",
        series: [
            {
                name:'功略数量',
                type:'bar',
                // data:[749,401,400,384,285],
                data:[2142,1942,2346,2451,1542],
                boundaryGap: '45%',
                barWidth:'40%',

                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#6bc0fb','#7fec9d','#fedd8b','#ffa597','#84e4dd'
                            ];
                            return colorList[params.dataIndex]
                        },label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
                }
            },

            {
                name:'景点排名',
                type:'line',
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color:'#c39705'
                    }
                },
                data:[2,3,5,1,4]
            }
        ]
    };
    changedetail.setOption(option);


    /*右边中间的滑动*/
    var juniorservice = echarts.init(document.getElementById('juniorservice'));
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#eaff00','#22ac38'],
        legend: {
            right:'0',
            data: ['景点数量', '美食数量'],
            textStyle:{
                color:'#00ffff'
            }
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '3%',
            top:'10%',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            splitLine:{
                show:true,
                lineStyle:{
                    color: '#1e2b43'
                }
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                textStyle:{
                    color:"#fff"
                },
                alignWithLabel: true,
                interval:0

            }
        },
        dataZoom: [{
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'empty',
            start: 0,
            x:'0',
            end: 60,
            handleStyle:{
                color:"#519cff",
                backgroundColor:'#519cff'
            },
            textStyle:{
                color:"#fff"},
            borderColor:"#519cff"
        }],
        yAxis: {
            type: 'category',
            // data: ['a','b','c',' d','e','f','g','h','i','j',' k','l','m','n'],
            data: ['武侯区', '青羊区', '锦江区', '双流区', '金牛区', '都江堰', '成华区', '龙泉驿区', '邛崃', '大邑', '新都区', '崇州', '彭州', '简阳', '蒲江', '新津区', '青白江区'],
            splitLine:{
                show:false,
                lineStyle:{
                    color: '#1e2b43'
                }
            },

            axisTick: {
                show: false
            },
            axisLine: {
                show:true,
                lineStyle: {
                    color: '#115372'
                }
            },
            axisLabel:{
                textStyle:{
                    color:"#419aff"
                },
                lineStyle:{
                    color: '#519cff'
                },
                alignWithLabel: true,
                interval:0
            }
        },
        series: [
            {
                name: '景点数量',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        textStyle:{
                            color:'#333'
                        }
                    }

                },
                // data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330,123,123,321,456]
                data: [198, 230, 175, 245, 215, 280, 205, 250, 390, 420, 240, 420, 312,316,410,260,415]
            },
            {
                name: '美食数量',
                type: 'bar',
                stack: '比例',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        textStyle:{
                            color:'#00f0ff'
                        }

                    }
                },
                // data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230,243,123,321,456]
                data: [370, 484, 306, 398, 340, 475, 392, 315, 359, 289, 349, 322, 380, 205, 283, 314, 395]
            }
        ]
    };
    juniorservice.setOption(option);

    /*右边下面的折线图*/
    var edubalance = echarts.init(document.getElementById('edubalance'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}</br>{a2}: {c2}</br>{a3}: {c3}'
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['美食数量','特色菜','人均消费','满意度','美食评分'],
            right:"15%",
            textStyle:{
                color:'#fff'
            }
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'5%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['火锅','面馆','鱼摆摆','烧烤'],
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:0,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',

                nameTextStyle:{
                    color:'#fff'
                },
                interval: 20,
                max:220,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            },
            {
                min: 4.0,
                max: 4.5,
                interval: 0.1,
                type: 'value',
                // name: '所',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            }
        ],
        // data:['美食数量','特色菜品推荐','人均消费','顾客满意度','美食评分'],
        color:"yellow",
        series: [
            {
                name:'美食数量',
                type:'bar',
                data:[214,66,65,45],
                itemStyle: {
                    normal: {
                        color: '#76da91'
                        },label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
            },
            {
                name:'特色菜',
                type:'bar',
                data:[50,28,36,32],
                itemStyle: {
                    normal: {
                        color: '#f8cb7f'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                    }
            },
            {
                name:'人均消费',
                type:'bar',
                data:[101.5,80.5,56.1,88.5],
                itemStyle: {
                    normal: {
                        color: '#f89588'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'

                    }
                }
            },
            {
                name:'满意度',
                type:'bar',
                data:[110,80,95,101,99],
                itemStyle: {
                    normal: {
                        color: '#7cd6cf'},
                    label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}'
                        }
                }
            },
            {
                name:'美食评分',
                type:'line',
                yAxisIndex: 1,
                lineStyle: {
                    normal: {
                        color:'#c39705'
                    }
                },
                data:[4.27,4.22,4.10,4.2]
            }
        ]
    };
    edubalance.setOption(option);

    /* 地图 需要哪个省市的地图直接引用js 将下面的name以及mapType修改为对应省市名称*/
// 初始化四川省地图
var map = echarts.init(document.getElementById('mapadd'));
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    series: [{
        name: '四川',
        type: 'map',
        zoom: 1.2,
        mapType: '四川',
        roam: true,
        label: {
            show: true, // 确保标签显示
            textStyle: {
                color: "#231816",
                fontSize: 10 // 调整字体大小以适应地图
            }
        },
        itemStyle: {
            normal: {
                areaStyle: {color: '#B1D0EC'},
                borderColor: '#dadfde'
            },
            emphasis: { // 鼠标hover样式
                label: {
                    show: true,
                    textStyle: {
                        color: '#fa4f04'
                    }
                },
                areaStyle: {color: 'red'}
            }
        },
        data: [
            {name: '成都市', itemStyle: {normal: {areaColor: '#ff7f50', borderColor: '#edce00'}}},
            {name: '绵阳市', itemStyle: {normal: {areaColor: '#87cefa', borderColor: '#0abcee'}}},
            {name: '德阳市', itemStyle: {normal: {areaColor: '#da70d6', borderColor: '#1ca9f2'}}},
            {name: '南充市', itemStyle: {normal: {areaColor: '#32cd32', borderColor: '#88ddf5'}}},
            {name: '宜宾市', itemStyle: {normal: {areaColor: '#6495ed', borderColor: '#45b5ef'}}},
            {name: '自贡市', itemStyle: {normal: {areaColor: '#ff69b4', borderColor: '#45b5ef'}}},
            {name: '泸州市', itemStyle: {normal: {areaColor: '#ba55d3', borderColor: '#45b5ef'}}},
            {name: '达州市', itemStyle: {normal: {areaColor: '#cd5c5c', borderColor: '#45b5ef'}}},
            {name: '遂宁市', itemStyle: {normal: {areaColor: '#ffa500', borderColor: '#45b5ef'}}},
            {name: '广安市', itemStyle: {normal: {areaColor: '#40e0d0', borderColor: '#1ca9f2'}}},
            {name: '巴中市', itemStyle: {normal: {areaColor: '#1e90ff', borderColor: '#88ddf5'}}},
            {name: '雅安市', itemStyle: {normal: {areaColor: '#ff6347', borderColor: '#45b5ef'}}},
            {name: '眉山市', itemStyle: {normal: {areaColor: '#7b68ee', borderColor: '#45b5ef'}}},
            {name: '资阳市', itemStyle: {normal: {areaColor: '#00fa9a', borderColor: '#45b5ef'}}},
            {name: '阿坝藏族羌族自治州', itemStyle: {normal: {areaColor: '#3cb371', borderColor: '#45b5ef'}}},
            {name: '甘孜藏族自治州', itemStyle: {normal: {areaColor: '#b8860b', borderColor: '#45b5ef'}}},
            {name: '凉山彝族自治州', itemStyle: {normal: {areaColor: '#ff00ff', borderColor: '#45b5ef'}}},
            {name: '广元市', itemStyle: {normal: {areaColor: '#20b2aa', borderColor: '#45b5ef'}}},
            {name: '内江市', itemStyle: {normal: {areaColor: '#ffc107', borderColor: '#45b5ef'}}},
            {name: '乐山市', itemStyle: {normal: {areaColor: '#4169e1', borderColor: '#45b5ef'}}},
            {name: '攀枝花市', itemStyle: {normal: {areaColor: '#8b519', borderColor: '#45b5ef'}}},
        ]
    }]
};
map.setOption(option);

// 点击显示成都地图
map.on('click', function (params) {
    if (params.name === '成都市') {
        // 点击了成都市，加载成都市地图
        fetch('https://geo.datav.aliyun.com/areas_v3/bound/510100_full.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // 注册成都市区地图
            echarts.registerMap('成都', data);

            // 配置 ECharts 选项
            var chengduOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}'
                },
                series: [{
                    name: '成都',
                    type: 'map',
                    zoom: 1.25,
                    mapType: '成都', // 使用注册的成都市区地图
                    roam: true,
                    label: {
                        show: true,
                        textStyle: {
                            color: "#231816",
                            fontSize: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaStyle: {color: '#B1D0EC'},
                            borderColor: '#dadfde'
                        },
                        emphasis: { // 鼠标hover样式
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fa4f04'
                                }
                            },
                            areaStyle: {color: 'red'}
                        }
                    },
                    data: [
                        {name: '锦江区', itemStyle: {normal: {areaColor: '#ff7f50'}}},
                        {name: '青羊区', itemStyle: {normal: {areaColor: '#87cefa'}}},
                        {name: '金牛区', itemStyle: {normal: {areaColor: '#da70d6'}}},
                        {name: '武侯区', itemStyle: {normal: {areaColor: '#32cd32'}}},
                        {name: '成华区', itemStyle: {normal: {areaColor: '#6495ed'}}},
                        {name: '龙泉驿区', itemStyle: {normal: {areaColor: '#ff69b4'}}},
                        {name: '青白江区', itemStyle: {normal: {areaColor: '#ba55d3'}}},
                        {name: '新都区', itemStyle: {normal: {areaColor: '#cd5c5c'}}},
                        {name: '温江区', itemStyle: {normal: {areaColor: '#ffa500'}}},
                        {name: '双流区', itemStyle: {normal: {areaColor: '#40e0d0'}}},
                        {name: '郫都区', itemStyle: {normal: {areaColor: '#1e90ff'}}},
                        {name: '金堂县', itemStyle: {normal: {areaColor: '#ff6347'}}},
                        {name: '大邑县', itemStyle: {normal: {areaColor: '#7b68ee'}}},
                        {name: '蒲江县', itemStyle: {normal: {areaColor: '#00fa9a'}}},
                        {name: '新津区', itemStyle: {normal: {areaColor: '#3cb371'}}},
                        {name: '都江堰市', itemStyle: {normal: {areaColor: '#b8860b'}}},
                        {name: '简阳市', itemStyle: {normal: {areaColor: '#87ceeb'}}}, // 更新颜色
                        {name: '彭州市', itemStyle: {normal: {areaColor: '#556b2f'}}}, // 更新颜色
                        {name: '邛崃市', itemStyle: {normal: {areaColor: '#ffc0cb'}}},
                        {name: '崇州市', itemStyle: {normal: {areaColor: '#add8e6'}}},
                        // 更多区域可以继续添加
                    ] // 成都市区的数据，如果有的话
                }]
            };

            // 应用配置项
            map.clear(); // 清除之前的地图
            map.setOption(chengduOption);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }
});
// 显示成都市地图的函数
    // var maps = echarts.init(document.getElementById('mapadd'));
    // option = {
    //     tooltip : {
    //         trigger: 'item',
    //         formatter: '{b}'
    //     },
    //     series : [{
    //         name: '四川',
    //         type: 'map',
    //         mapType: '四川',
    //         roam: false,
    //         top:'8%',
    //         zoom:1.2,
    //         x:'25%',
    //         selectedMode : 'single',//multiple多选
    //         itemStyle:{
    //             normal:{
    //                 label:{
    //                     show:true,
    //                     textStyle: {
    //                         color: "#231816"
    //                     }
    //                 },
    //                 areaStyle:{color:'#B1D0EC'},
    //                 color:'#B1D0EC',
    //                 borderColor:'#dadfde'//区块的边框颜色
    //             },
    //             emphasis:{//鼠标hover样式
    //                 label:{
    //                     show:true,
    //                     textStyle:{
    //                         color:'#fa4f04'
    //                     }
    //                 },
    //                 areaStyle:{color:'red'}
    //             }
    //         },
    //         data: [
    //             {name: '成都市', itemStyle: {normal: {areaColor: '#ff7f50', borderColor: '#edce00'}}},
    //             {name: '绵阳市', itemStyle: {normal: {areaColor: '#87cefa', borderColor: '#0abcee'}}},
    //             {name: '德阳市', itemStyle: {normal: {areaColor: '#da70d6', borderColor: '#1ca9f2'}}},
    //             {name: '南充市', itemStyle: {normal: {areaColor: '#32cd32', borderColor: '#88ddf5'}}},
    //             {name: '宜宾市', itemStyle: {normal: {areaColor: '#6495ed', borderColor: '#45b5ef'}}},
    //             {name: '自贡市', itemStyle: {normal: {areaColor: '#ff69b4', borderColor: '#45b5ef'}}},
    //             {name: '泸州市', itemStyle: {normal: {areaColor: '#ba55d3', borderColor: '#45b5ef'}}},
    //             {name: '达州市', itemStyle: {normal: {areaColor: '#cd5c5c', borderColor: '#45b5ef'}}},
    //             {name: '遂宁市', itemStyle: {normal: {areaColor: '#ffa500', borderColor: '#45b5ef'}}},
    //             {name: '广安市', itemStyle: {normal: {areaColor: '#40e0d0', borderColor: '#1ca9f2'}}},
    //             {name: '巴中市', itemStyle: {normal: {areaColor: '#1e90ff', borderColor: '#88ddf5'}}},
    //             {name: '雅安市', itemStyle: {normal: {areaColor: '#ff6347', borderColor: '#45b5ef'}}},
    //             {name: '眉山市', itemStyle: {normal: {areaColor: '#7b68ee', borderColor: '#45b5ef'}}},
    //             {name: '资阳市', itemStyle: {normal: {areaColor: '#00fa9a', borderColor: '#45b5ef'}}},
    //             {name: '阿坝藏族羌族自治州', itemStyle: {normal: {areaColor: '#3cb371', borderColor: '#45b5ef'}}},
    //             {name: '甘孜藏族自治州', itemStyle: {normal: {areaColor: '#b8860b', borderColor: '#45b5ef'}}},
    //             {name: '凉山彝族自治州', itemStyle: {normal: {areaColor: '#ff00ff', borderColor: '#45b5ef'}}},
    //         ]
})



// 山东
    // var maps = echarts.init(document.getElementById('mapadd'));
    // option = {
    //     tooltip : {
    //         trigger: 'item',
    //         formatter: '{b}'
    //     },
    //     series : [{
    //         name: '四川',
    //         type: 'map',
    //         mapType: '四川',
    //         roam: false,
    //         top:'8%',
    //         zoom:1.2,
    //         x:'25%',
    //         selectedMode : 'single',//multiple多选
    //         itemStyle:{
    //             normal:{
    //                 label:{
    //                     show:true,
    //                     textStyle: {
    //                         color: "#231816"
    //                     }
    //                 },
    //                 areaStyle:{color:'#B1D0EC'},
    //                 color:'#B1D0EC',
    //                 borderColor:'#dadfde'//区块的边框颜色
    //             },
    //             emphasis:{//鼠标hover样式
    //                 label:{
    //                     show:true,
    //                     textStyle:{
    //                         color:'#fa4f04'
    //                     }
    //                 },
    //                 areaStyle:{color:'red'}
    //             }
    //         },
    //         data:[
    //             {name:'济南市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#13d5ff',
    //                         borderColor: '#edce00'
    //                     }
    //                 }
    //             },
    //             {name:'德州市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#13d5ff',
    //                         borderColor: '#0abcee'
    //                     }
    //                 }
    //             }, 
    //             {name:'聊城市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#92d050',
    //                         borderColor: '#1ca9f2'
    //                     }
    //                 }
    //             },
    //             {name:'泰安市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#88ddf5',
    //                         borderColor: '#88ddf5',
    //                     }
    //                 }
    //             },
    //             {name:'莱芜市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#13d5ff',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //             {name:'菏泽市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#13d5ff',
    //                         borderColor: '#45b5ef'
    //                     }
    //                 }
    //             },
    //             {name:'枣庄市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#45b5ef',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //             {name:'济宁市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#ffd811',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //             {name:'临沂市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#ffa312',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //             {name:'青岛市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#92d050',
    //                         borderColor: '#1ca9f2'
    //                     }
    //                 }
    //             },
    //             {name:'烟台市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#88ddf5',
    //                         borderColor: '#88ddf5',
    //                     }
    //                 }
    //             },
    //             {name:'威海市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#13d5ff',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //             {name:'潍坊市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#13d5ff',
    //                         borderColor: '#45b5ef'
    //                     }
    //                 }
    //             },
    //             {name:'淄博市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#45b5ef',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //             {name:'滨州市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: '#13d5ff',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //             {name:'东营市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: 'red',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //             {name:'日照市',
    //                 itemStyle: {
    //                     normal: {
    //                         areaColor: 'red',
    //                         borderColor: '#45b5ef',
    //                     }
    //                 }
    //             },
    //         ]
    //     }]
    // };
    // maps.setOption(option);