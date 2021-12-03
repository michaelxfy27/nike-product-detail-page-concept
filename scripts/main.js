const thumbImg = document.querySelector(".thumb-img").children;
    function changeImage(event){
      document.querySelector(".default-image").src=event.children[0].src
      for(let i=0; i<thumbImg.length; i++){
        thumbImg[i].classList.remove("active");
      }
      event.classList.add("active");
    }

    function changeTurquoise(event){
      document.getElementById('imgDef').src='assets/img1-turquoise.png';
      document.getElementById('img-src-1').src='assets/img1-turquoise.png';

    }

   
    $(document).ready(function($){
      $('.red-button').on({
        'click': function(){
          $('#imgDef').attr('src', 'assets/img1-red.png');
          $('#img-src-1').attr('src', 'assets/img1-red.png');
          $('#img-src-2').attr('src', 'assets/img2-red.png');
          $('#img-src-3').attr('src', 'assets/img3-red.png');
          $('#img-src-4').attr('src', 'assets/img4-red.png');
        }
      });

      $('.turquoise-button').on({
        'click': function(){
          $('#imgDef').attr('src', 'assets/img1-turquoise.png');
          $('#img-src-1').attr('src', 'assets/img1-turquoise.png');
          $('#img-src-2').attr('src', 'assets/img2-turquoise.png');
          $('#img-src-3').attr('src', 'assets/img3-turquoise.png');
          $('#img-src-4').attr('src', 'assets/img4-turquoise.png');
        }
      });
    });