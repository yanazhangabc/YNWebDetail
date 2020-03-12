(function (obj) {
 
	window.jump = function(type, id){
 
		console.log("DaLong"+type+"    "+id)
		/**
		 * 原生UI跳转
		 * @param type:article(帖子)  goods(商品) groups(圈子) video(视频)
		 * @param id
		 * @constructor
		 */
		bridge.callhandler("nativeui.jump",{
		    type: type,
		    data: {
		        id: id
		    }
		});
		}
	
	window.picture = function(){
//		alert('图片浏览器')
	}
	
	window.playVideo = function(event, elm){
//		alert('播放视频')
		
		let p = elm.parentNode,
		  width = p.getAttribute('srcwidth'),
		  height = p.getAttribute('srcheight'),
		  tp = p.getElementsByClassName("tcplayer")[0],
		  poster = p.getElementsByClassName("poster")[0],
		  posterBox = p.getElementsByClassName("poster-box")[0];
		  
		var data = {
			video: p.dataset.video,
			poster: poster.currentSrc,
			width: width,
			height: height
		  };
		/**
		 * 原生UI播放视频
		 * @param id
		 * @constructor
		 */
		bridge.callhandler("play.video", {
		    data: data
		});
	}
})({});
