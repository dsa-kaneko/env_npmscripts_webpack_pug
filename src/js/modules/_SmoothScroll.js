// import $ from 'jquery';

export default class SmoothScroll {
  constructor() {
    $('a[href^="#"]').click(function() {
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({
        scrollTop: position - headerH
      }, 600, "swing");
      return false;
    });
  }
}
