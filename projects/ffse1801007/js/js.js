
    function expand(index){
      var listitem1=$(".my-item-ex-1");
      var listitem2=$(".my-item-ex-2");
      if(index==1){
        for (var i = 0; i < listitem1.length; i++) {
          listitem1[i].className=listitem1[i].className.replace(" d-none", " d-block");
          listitem1[0].className=listitem1[0].className.replace(" d-block", " d-none");
        }
      }
      if(index==2){
        for (var i = 0; i < listitem2.length; i++) {
          listitem2[i].className=listitem2[i].className.replace(" d-none", " d-block");
          listitem2[0].className=listitem2[0].className.replace(" d-block", " d-none");
        }
      }
    }
    function hide(index){
      var listitem1=$(".my-item-ex-1");
      var listitem2=$(".my-item-ex-2");
      if(index==1){
        for (var i = 0; i < listitem1.length; i++) {
          listitem1[i].className=listitem1[i].className.replace(" d-block", " d-none");
          listitem1[0].className=listitem1[0].className.replace(" d-none", " d-block");
        }
      }
      if(index==2){
        for (var i = 0; i < listitem2.length; i++) {
          listitem2[i].className=listitem2[i].className.replace(" d-block", " d-none");
          listitem2[0].className=listitem2[0].className.replace(" d-none", " d-block");
        }
      }
    }

    function canhbao(){
      alert("Chức năng chỉ chạy tốt ở màn hình 1920");
    }
    
  

