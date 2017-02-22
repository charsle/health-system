 (function() {
     //右边栏目
     var rightTemplate = {
             template: '#rightTemplate',
             mounted: function() {}
         }
         //基础资料
     var baseTemplate = {
             template: '#baseTemplate',
             mounted: function() {
                 this.getUserInfo(this.$route.params.c_id);
             },
             watch: {
                 '$route' (to, from) {
                     var cid = to.params.c_id;
                     this.getUserInfo(cid);
                 }
             },
             methods: {
                 getUserInfo: function(c_id) {
                     //console.log(c_id);
                 }
             }
         }
         //就诊记录
     var clinicreRecord = {
             template: '#clinicreRecordTemplate',
         }
         //用药记录
     var userRecord = {
             template: '#userRecordTemplate',
         }
         //专项慢病管理记录
     var onlyRecord = {
             template: '#onlyRecordTemplate',
         }
         //运动记录
     var moveRecord = {
             template: '#moveRecordTemplate',
         }
         // 健康影像库
     var imageRecord = {
             template: '#imageRecordTemplate',
             data: function() {
                 return {
                     showImg: ''
                 }
             },
             mounted: function() {
                 $('#beginTime').datetimepicker({
                     lang: "ch", //语言选择中文 注：旧版本 新版方法：$.datetimepicker.setLocale('ch');
                     format: "Y-m-d", //格式化日期
                     timepicker: false, //关闭时间选项

                 });
             },
             methods: {
                 showImage: function(img) {
                     this.showImg = 'images/' + img + '.jpg';
                 }
             }
         }
         //统计分析
     var countRecord = {
         template: '#countRecordTemplate',
         mounted: function() {
             $('#datetimepicker').datetimepicker({
                 lang: "ch", //语言选择中文 注：旧版本 新版方法：$.datetimepicker.setLocale('ch');
                 format: "Y-m-d", //格式化日期
                 timepicker: false, //关闭时间选项

             });
             this.getCommonPie('main', {})
             this.getCommonPie('main1', {})
             this.getMoreBar();
         },
         methods: {
             getCommonPie: function(id, data) {
                 var myChart = echarts.init(document.getElementById(id));
                 var option = {
                     title: {
                         // text: '基础雷达图'
                     },
                     tooltip: {},
                     legend: {
                         // data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                     },
                     radar: {
                         // shape: 'circle',
                         indicator: [{
                             name: '躯干部(20.4kg)',
                             max: 6500
                         }, {
                             name: '左下肢(1.3kg)',
                             max: 16000
                         }, {
                             name: '右下肢(1.3kg)',
                             max: 30000
                         }, {
                             name: '左上肢(1.3kg)',
                             max: 38000
                         }, {
                             name: '右下肢(1.3kg)',
                             max: 52000
                         }]
                     },
                     series: [{
                         name: '预算 vs 开销（Budget vs spending）',
                         type: 'radar',
                         // areaStyle: {normal: {}},
                         data: [{
                                 value: [4300, 10000, 28000, 35000, 50000, 19000],
                                 name: '预算分配（Allocated Budget）'
                             }

                         ]
                     }]
                 };
                 myChart.setOption(option);

             },
             getMoreBar: function() {
                 var myChart2 = echarts.init(document.getElementById('main2'));
                 var option1 = {
                     // legend: {
                     //     data: []
                     // },
                     tooltip: {
                         trigger: 'axis',
                         formatter: "Temperature : <br/>{b}km : {c}"
                     },
                     grid: {
                         left: '3%',
                         right: '4%',
                         bottom: '3%',
                         containLabel: true
                     },
                     xAxis: {
                         type: 'value',
                         axisLabel: {
                             formatter: '{value}'
                         }
                     },
                     yAxis: {
                         type: 'category',
                         axisLine: {
                             onZero: false
                         },
                         axisLabel: {
                             formatter: '{value}'
                         },
                         boundaryGap: false,
                         data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
                     },
                     series: [{
                         name: '高度(km)与气温(°C)变化关系',
                         type: 'line',
                         smooth: true,
                         lineStyle: {
                             normal: {
                                 width: 3,
                                 shadowColor: 'rgba(0,0,0,0.4)',
                                 shadowBlur: 10,
                                 shadowOffsetY: 10
                             }
                         },
                         data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
                     }]
                 };
                 myChart2.setOption(option1);
             }
         }
     }








     var router = new VueRouter({
         routes: [{
             path: '/',
             redirect: {
                 path: '/base',
             }
         }, {
             path: '/base',
             name: 'base',
             component: rightTemplate,
             children: [{
                 name: 'base',
                 path: 'user/:c_id',
                 component: baseTemplate
             }]
         }, {
             path: '/clinicreRecord',
             name: 'clinicreRecord',
             component: rightTemplate,
             children: [{
                 name: 'clinicreRecord',
                 path: 'user/:c_id',
                 component: clinicreRecord
             }]
         }, {
             path: '/userRecord',
             name: 'userRecord',
             component: rightTemplate,
             children: [{
                 name: 'userRecord',
                 path: 'user/:c_id',
                 component: userRecord
             }]
         }, {
             path: '/onlyRecord',
             name: 'onlyRecord',
             component: rightTemplate,
             children: [{
                 name: 'onlyRecord',
                 path: 'user/:c_id',
                 component: onlyRecord
             }]
         }, {
             path: '/moveRecord',
             name: 'moveRecord',
             component: rightTemplate,
             children: [{
                 name: 'moveRecord',
                 path: 'user/:c_id',
                 component: moveRecord
             }]
         }, {
             path: '/imageRecord',
             name: 'imageRecord',
             component: rightTemplate,
             children: [{
                 name: 'imageRecord',
                 path: 'user/:c_id',
                 component: imageRecord
             }]
         }, {
             path: '/countRecord',
             name: 'countRecord',
             component: rightTemplate,
             children: [{
                 name: 'countRecord',
                 path: 'user/:c_id',
                 component: countRecord
             }]
         }]
     })
     var app = new Vue({
         el: '#app',
         router: router
     })
 })()