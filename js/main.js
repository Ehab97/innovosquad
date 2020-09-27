document.addEventListener("DOMContentLoaded", function () {


  const project = document.querySelectorAll('.portfolio .project');
  const li = document.querySelectorAll('.tabs li');
  const detail = document.querySelectorAll('.portfolio .project .details');
  const toggle = document.querySelector('.toggle');
  const link = document.querySelectorAll('.link');
  const data=document.querySelectorAll('.data');
  const p=document.querySelectorAll('.data p');

  //toggle the nave icon
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
  };
  
  
  /*css in js */
  //  var detailsClass=`display:block;background: #fff;
  //  position: absolute;
  //  bottom: 0;
  //  left: 0;
  //  right: 0;
  //  // display: flex;
  //  justify-content: space-around;
  //  padding: 10px 5px;`;
 (function(){
    for (let i = 0; i < li.length; ++i) {
      li[i].onclick = () => {
        //change tab active class
        var id = li[i].getAttribute("id");
        var c = 0;
        // console.log(li[i]);
        while (c < li.length) {
          li[c].classList.contains('active') ? li[c].classList.remove('active') : '';
          // if (li[c].classList.contains('active')) {
          //   li[c].classList.remove('active');
          // }
          c++;
        }
        li[i].classList.add('active');
        // console.log(id,detail.length);
        //change cards details dispaly
        for (let j = 0; j < detail.length; j++) {
          // console.log(detail[j].classList.contains(`${id}`));
          if (detail[j].classList.contains(`${id}`)) {
            // console.log(detail[j]);
            detail[j].style.display = 'flex';
            //css in js //detail[j].style.cssText=detailsClass;
          } else {
            detail[j].style.display = 'none';
          }
        }
      }
    }
  }());

  for (let index = 0; index < project.length; index++) {
    project[index].setAttribute('style', `background: 
    url(imgaes/projects/${index+1}.jpg) 
    center center no-repeat;
    background-size: cover;`);
    // console.log(project[index]);
  }

  for (let i = 0; i < data.length; i++) {
    data[i].onclick=(e)=>{
      for (let j = 0; j < p.length; j++) {
        let id=p[j].getAttribute('id');
        if(data[i].classList.contains(`${id}`)){
          console.log(id);
          // Select the email link anchor text  
          var copied = document.querySelector(`#${id}`);
          console.log(copied,copied.textContent);
          // copied.select();
          // copied.setSelectionRange(0, 99999)
          // document.execCommand("copy");
          navigator.clipboard.writeText().then(
            (clipText) => {
              clipText+=copied.innerText ;
              console.log(clipText)
            });
            console.log(copied.innerText);
         
        }
      }
    }
    
  }
 

  // window.scroll({
  //   top: 0, 
  //   left: 0, 
  //   behavior: 'smooth'
  // });

  //lazy loading images
  // if ('loading' in HTMLImageElement.prototype) {
  //   const images = document.querySelectorAll('img[loading="lazy"]');
  //   images.forEach(img => {
  //     img.src = img.dataset.src;
  //   });
  // } else {
  //   // Dynamically import the LazySizes library
  //   const script = document.createElement('script');
  //   script.src =
  //     'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  //   document.body.appendChild(script);
  // }

});
