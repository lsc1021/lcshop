         if(sessionStorage.usercode==0){
				$("#lian").hide();
				$("#yonghu").show();
				$("#username").text(sessionStorage.username);
				$("#userlog img").attr("src","img/baozou.jpg");
			}
            $("#backuser").click(function(){
            	sessionStorage.clear();
            	location.href= "index.html";
            })
//          回车搜索
            $(document).keyup(function(event){ 
			    if(event.keyCode ==13){ 
			      $("#seekbtn").trigger("click"); 
			    } 
		    });
//			导航栏信息js
			var arr=["趣物","数码","汽车","文化","时尚","美食","建筑","空间","圈子","清单","活动","视频"];
				for (var i=0;i<arr.length;i++) {
					var li=document.createElement("li");
					li.className= "magezine"+i;
					li.innerHTML=arr[i];
					$("#magazine").append(li);
				}
            var arr1=["男士","家居","数码","工具","玩具","美容","孩子","宠物","饮食","文化","运动","女士"];
				for (var i=0;i<arr1.length;i++) {
					var li=document.createElement("li");
					li.className= "share"+i;
					li.innerHTML=arr1[i];
					$("#share").append(li);
				}
				//三级菜单
		$(".shop-li").mouseover(function(){
			var kk = $(this).index();
			   $(".shop-li-no").eq(kk/2).show();
				})
		$(".shop-li").mouseout(function(){
			var kk = $(this).index();
			   $(".shop-li-no").eq(kk/2).hide();
				})
		 $(".shop-li-no").mouseover(function () {
		 	$(this).show();
		 })
		 $(".shop-li-no").mouseout(function () {
		 $(this).hide();
		})
		//三级菜单数组
      $arr1= [
            	["装饰摆件","生活用品","香薰香氛","空气净化","收纳整理","床品布艺 ","儿童家居","钟表灯具"," 其它"],
              ["卧室","客厅","餐厅","书房","办公室","儿童房"],
            	["办公用品","本子","笔具","书签","卡片","日历","其它"],
            	["耳机","音箱","相机","存储设备","手机配件","移动电源", "其他"],
            	["儿童玩具","玩偶","益智","其他玩具"],
            	["杯子","便当盒","饮食餐具","烹饪工具","酒具","茶具","清洁","毛巾","其它"],
            	["美酒","进口食品","零食","巧克力","果汁","咖啡茶饮","糖果糕点","其它"],
            ]
      $arr2 = [
                ["上衣","T恤","裤装","外套","衬衫","套装","家居睡袍","内衣","春夏系列","秋冬系列","针织"],
                ["上衣","T恤","裤装","外套","半裙","连衣裙","套装","针织","家居睡袍","内衣","春夏系列","秋冬系列"],
                ["婴儿服","幼儿服","学童服"],
                ["男鞋","女鞋","双肩包","单肩包","钱包","手提包","行李箱","手拿包","皮质包","布质包","其它"],
                ["项链","戒指","耳饰","手链手镯","胸针徽章","手表","眼镜","丝巾围巾","领带领结","帽子","袜子","其它","手套"],
                ["牙膏","洗发护发","身体护理","香水精油","唇部护理","手工皂","指甲油","面膜面霜","男士系列","婴儿专用","其它"],
                ["旅行装备","户外运动","雨具","自行车","其他","滑板"],
            ]
		    $arr3 = [
		        ["鲜花","永生花","花瓶花器","其它"],
		        ["文学","艺术","生活方式","杂志","儿童读物","其它"],
		        ["艺术品","装饰画","雕塑","摄影","装置模型","衍生品"],
		        ["送她 ","送他","送儿童","送父母","送闺蜜","送同事","送自己"],
		        ["新品","热销","优惠","限量","合作款","独家"],
		    ]
				//第一个三级菜单
					$(".shop_1 li").mouseover(function () {
						$("#li1").children().remove();
						$.each($arr1[$(this).index()],function (index,value) {
							 var span=document.createElement("span");
							 	span.className="shop_li_"+index;
								span.append(value);
								$("#li1").append(span);
						})
						var div=document.createElement("div");
						div.className="clear";
						$("#li1").append(div);
					})
			//第二个三级菜单
			$(".shop_2 li").mouseover(function () {
				$("#li2").children().remove();
				$.each($arr2[$(this).index()],function (index,value) {
					 var span=document.createElement("span");
						span.className="shop_li_"+index;
						span.append(value);
						$("#li2").append(span);
				})
				var div=document.createElement("div");
				div.className="clear";
				$("#li2").append(div);
			})
			//第三个三级菜单
			$(".shop_3 li").mouseover(function () {
				$("#li3").children().remove();
				$.each($arr3[$(this).index()],function (index,value) {
					 var span=document.createElement("span");
						span.className="shop_li_"+index;
						span.append(value);
						$("#li3").append(span);
				})
				var div=document.createElement("div");
				div.className="clear";
				$("#li3").append(div);
			})
			//搜索js部分
			var x = 1;
			$("#seekbtn").click(function() {
				$seektxt = $("#seektxt").val();

				if($("#seek").is(":animated")) {
					return;
				}
				if(x) {
					$("#seek").animate({
						"right": 0
					}, 200);
					x = 0;
				} else if(x == 0 && $seektxt == "") {
					$("#seek").animate({
						"right": -250
					}, 500);
					x = 1;
				} else {
					 $search=encodeURI($seektxt);
						window.location.href="search.html?search="+$search;
						$("#seektxt").val("");

				}
			})
			
			//吸顶效果
			$(window).scroll(function(){
				var foot=$(window).scrollTop();
				if(foot>56){
					$("#nav").css({"position":"fixed","top":"0","left": "12.8%"});
					$("#backtop").show();
				}else{
					$("#nav").css({"position":"relative","top":"0","left": "12.95%"});
					$("#backtop").hide();
				}
			})
           //返回顶部样式特效
        	$(window).scroll(function(){
        		var foot=$(window).scrollTop();
        		 $("#backtop").click(function(){
					$(window).scrollTop(0);
			    })
            })
        	$("#backtop").mouseover(function(){
        		$("#backtop").css("background","#e0d5d5")
        	})
        	$("#backtop").mouseout(function(){
        		$("#backtop").css("background","#696969")
        	})
        	
//      	刷新购物车
            var jinum;
            function carlie(){
				$.ajax({
					type:"get",
					url: "http://lc.shudong.wang/api_cart.php",
					dataType: "json",
					 beforeSend: function(request) {
							request.setRequestHeader("token", sessionStorage.token);
					},
					success:function(data){
						var moban = $("#moban").html();
						var playing = _.template(moban);
						$(".shopcar-li").text("购物车空空的，快去抢购吧！");
						$("#tiaozhuan").attr("href","shopping.html");
						$.each(data.data,function(index,value){
							var jieguo = playing(value);
							$(".zhanshi").prepend(jieguo);
							jinum = index;
							if(index==3){
								$(".zhanshi").css({"height":"270px","overflow":"hidden"})
							}else if(index>=0){
								$(".shopcar-li").text("查看我的购物车");
								$("#tiaozhuan").attr("href","car.html");
							}
						})
						if(jinum==undefined){
							$(".jinum").hide();
						}else{
							$(".jinum").show();
							 $(".jinum").text(jinum+1);
						}
				       
					}
				    });
				    
		   }
            
         
