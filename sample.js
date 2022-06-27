
       //測る時間
       var a = 180
       var i = a;
       var interval_id;
       var flag = false;
       function count(){
          //timeタグを取得
          document.getElementById('time');
          //秒を分に変換処理
          var timeM = Math.floor(i / 60);
          var timeS = i - (timeM*60);
          //時間を１ずつ減らす
          if(flag === true){
             i = (i-1); 
          }
          //分に変換後のものを表示
          var j  = "";
             if(timeS === 0){
                j = "<p>"+timeM + ":00</p>";
             }else if(timeS<10){
                j = "<p>"+timeM + ":0" + timeS + "</p>";
             }else if(i===0 || i<0){
                j = "<p>TIMEUP</p>"
                time.style.fontSize = '100px';
                stop();
             }else if(timeM === 0){
               j = "<p>0:" + timeS + "</p>";
             }
             else{
               j = "<p>"+timeM + ":" + timeS + "</p>";
             }
             time.innerHTML = j;
       }
       //時間を減らしていく
      function count_time(){
         interval_id = setInterval(count,1000);
         flag = true;
      }
      //ストップ処理
      function stop(){
         clearInterval(interval_id)
         flag = false;
      }
      //リセット処理
      function reset(){
            clearInterval(interval_id)
            time.innerHTML ="3:00";
            i = a ;
      }

      window.onload = function(){
         //スタートボタンを押す
         var start = document.getElementById('start_button');
         start.addEventListener('click',count_time,false);
         //ストップボタンを押す
         var start = document.getElementById('stop_button');
         start.addEventListener('click',stop,false);
         //リセットボタンを押す
         var start = document.getElementById('reset_button');
         start.addEventListener('click',reset,false);


      }   
  