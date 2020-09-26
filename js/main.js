document.addEventListener("DOMContentLoaded", function () {
  const project = document.querySelectorAll('.portfolio .project');
  const li = document.querySelectorAll('.tabs li');
  const detail = document.querySelectorAll('.portfolio .project .details');
  // console.log(...tab);
  //   console.log(...project);
  const toggle = document.querySelector('.toggle');
  const link = document.querySelectorAll('.link');
  toggle.onclick = () => {
    if (link[0].style.display == 'block') {
      for (let i = 0; i < link.length; i++) {
        link[i].style.display = 'none';
      }
    } else {
      for (let i = 0; i < link.length; i++) {
        link[i].style.display = 'block';
      }
    }
  }
 (function () {
   for (let i = 0; i < li.length; ++i) {
     li[i].onclick = () => {
       var c = 0;
       while (c < li.length) {
         // tabColor[c].classList.contains('activeTap') ? tabColor.classList.remove('activeTap') : '';
         if (li[c].classList.contains('active')) {
           li[c].classList.remove('active');
         }
         c++;
       }
       li[i].classList.add('active');
     }
   }
 }());
 /*css in js */
//  var detailsClass=`display:block;background: #fff;
//  position: absolute;
//  bottom: 0;
//  left: 0;
//  right: 0;
//  // display: flex;
//  justify-content: space-around;
//  padding: 10px 5px;`;
 (function() {
  for (let i = 0; i < li.length; ++i) {
    li[i].onclick = () => {
      var id=li[i].getAttribute("id");
      console.log(id,detail.length);
      for (let j = 0; j < detail.length; j++) {
        console.log(detail[j].classList.contains(`${id}`));
        if(detail[j].classList.contains(`${id}`)){
          console.log(detail[j]);
            detail[j].style.display='flex';
            //css in js
            //detail[j].style.cssText=detailsClass;
        }else{
          detail[j].style.display='none';
        }
      }
    }
  }
 }());
 
  for (let index = 0; index < project.length; index++) {
    // project[index].style.backgroundImage=`url(../imgaes/projects/${index}.jpg)`;
    project[index].setAttribute('style', `background: url(imgaes/projects/${index+1}.jpg) center center no-repeat;
    background-size: cover;`);
    // console.log(project[index]);
  }
  // window.scroll({
  //   top: 0, 
  //   left: 0, 
  //   behavior: 'smooth'
  // });

});
new Vue({
  el: '#app',
  data: {

  },
  methods: {

  },

});