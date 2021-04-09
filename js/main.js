(function(){
  "use strict";

  console.log('JS is linked!');

  let developer_w = document.querySelector('.developer_w'),
    designer_w = document.querySelector('.designer_w'),

    develop_info2 = document.querySelector('.develop_info2'),
    develop_info = document.querySelector('.develop_info'),

    close2 = document.querySelector('.close2'),
    close1 = document.querySelector('.close1');



  function OpenDesigner() {
    designer_w.classList.add("OpenDesigner");
  }
  function hideDesigner() {
    designer_w.classList.remove("OpenDesigner");
  }

  function OpenDeveloper() {
    developer_w.classList.add("OpenDeveloper");
  }
  function hideDeveloper() {
    developer_w.classList.remove("OpenDeveloper");
}


  develop_info2.addEventListener('click', OpenDeveloper);
  close2.addEventListener('click', hideDeveloper);



  develop_info.addEventListener('click', OpenDesigner);
  close1.addEventListener('click', hideDesigner);


})();