window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

// クラス変更
window.onload = function () {
   const spinner = document.getElementById('loading');
   spinner.classList.add('loaded');
}

//safari対策
window.onpageshow = function (event) {
   if (event.persisted) {
       window.location.reload();
   }
};
var time=new Date().getTime();
$(function() {
  var h = $(window).height();

  $('#wrap').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});