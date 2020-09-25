document.addEventListener("DOMContentLoaded", function() {
  var project=document.querySelectorAll('.portfolio .project');
  var tab=document.querySelectorAll('.tabs li');
  var detail=document.querySelectorAll('.tabs li .details');
  // console.log(...tab);
//   console.log(...project);
var toggle = document.querySelector('.toggle');
    var link = document.querySelectorAll('.link');
    // const styleSetter = (ele) => {
    //     return (prop, value) => {
    //         ele.style[prop] = value;
    //     }
    // }

    // function toggle_visibility(ele) {
    //     var e = document.getElementsByClassName('ele');
    //     if (e.style.display == 'block')
    //         e.style.display = 'none';
    //     else
    //         e.style.display = 'block';
    // }
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
 for (let index = 0; index < tab.length; index++) {
  tab[index].onclick=(e)=>{
    console.log(e.getAttribyte());
    detail.forEach(element => {
     console.log(element);
   });
}
   
 }
  for (let index = 0; index < project.length; index++) {
    // project[index].style.backgroundImage=`url(../imgaes/projects/${index}.jpg)`;
    project[index].setAttribute('style',`background: url(imgaes/projects/${index+1}.jpg) center center no-repeat;
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