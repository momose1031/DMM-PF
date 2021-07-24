// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets

//= require rails-ujs
//= require activestorage
//= require turbolinks
// require_tree JSの読み込みを各viewごとに設定

// topページローディング
$(window).on('turbolinks:load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash_logo").delay(1500).fadeOut('slow');
});

// ヘッダーハンバーガーメニュー
$(function(){
  $(".humburger").hide();
  $(".fas").click(function(){//メニューボタンをクリックしたとき
    $(".humburger").toggle(300);//0.3秒で表示したり非表示にしたりする
  });
});