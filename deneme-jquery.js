



$(document).ready(function(){
  
      $("#desenFoto1").hide();  
      $("#desenFoto2").hide();  
      $("#arka").hide();

      var h = $(window).height();
//      alert(h);  
      var w = $(window).width(); 
      var cont_h = -2700+h;
      var cont_w = (((2700/1549)*2911)-w)*-1;

      var sehir5_h = $("#sehir5").height();
      var sehir5_w = $("#sehir5").width();
       $("#sehir5").css({"margin-top": '-'+sehir5_h+'px'});
       $("#sehir5").css({"margin-left": '-'+sehir5_w+'px'});

      var sehir8_h = $("#sehir8").height();
       $("#sehir8").css({"margin-top": '-'+sehir8_h+'px'});     

      $( window ).resize(function() {
        var h = $(window).height();  
        var w = $(window).width(); 
        var cont_h = -2700+h;
        var cont_w = (((2700/1549)*2911)-w)*-1;
      });


  $("#draggable").draggable({
  	containment: [cont_w, cont_h,0,0]
  });


  $(".div4").click(function(){
     $(".div1").toggle();
  });
  $("#desenFoto2, #arka").click(function(){$("#desenFoto2").hide();$("#arka").hide();});
  
  $("#desenFoto2k").click(function(){
    $("#arka").show();
    $("#desenFoto2").toggle();
    $("#desenFoto1").hide();   
  });
  $("#desenFoto1, #arka").click(function(){$("#desenFoto1").hide();$("#arka").hide();});

  $("#desenFoto1k").click(function(){
    $("#arka").show();
    $("#desenFoto1").toggle();
    $("#desenFoto2").hide();     
  });

  $("#tackapiDeneme").hide();
  $(".subfilters").hide();

  $(".desenimaj,.desenimaj2").click(function(){
    $(".tackapi").animate({top: '20%'},1000);
    $("#tackapiDeneme").fadeToggle(2500);
    $(".div1").hide();
  }); 

  $("#tackapiButon1").click(function(){$( ".tackapiSayfaicerik" ).scrollTop( 0 );});
  $("#tackapiButon2").click(function(){$( ".tackapiSayfaicerik" ).scrollTop( 800/960*h );});
  $("#tackapiButon3").click(function(){$( ".tackapiSayfaicerik" ).scrollTop( 3000/960*h );});

    $("#tackapiDeneme").click(function(){
      $(".tackapi").animate({top: '100%'},1000);
      $("#tackapiDeneme").fadeToggle(1500);
      $( ".tackapiSayfaicerik" ).scrollTop( 0 );
      delay(1000);
      $("#desenVektorel").attr('src', 'images/desen-ikonlari/bos_desen.png');
      $("#desenAdi").text("yükleniyor..");
      $("#desenYapi").text("yükleniyor..");
      $("#desenFoto1k").attr('src', 'images/desen-ikonlari/bos_desen.png');
      $("#desenFoto2k").attr('src', 'images/desen-ikonlari/bos_desen.png');
      $("#desenFoto1").attr('src', 'images/desen-ikonlari/bos_desen.png');
      $("#desenFoto2").attr('src', 'images/desen-ikonlari/bos_desen.png');
      $("#desenCozum").attr('src', 'images/desen-ikonlari/bos_desen.png');
  }); 


  $("#AMA_DAR_01").hover(function(){$("#AMA_DAR_01t").toggle();});
  $("#AMA_DAR_02").hover(function(){$("#AMA_DAR_02t").toggle();});
  $("#AMA_DAR_03").hover(function(){$("#AMA_DAR_03t").toggle();});
  $("#AMA_DAR_07a").hover(function(){$("#AMA_DAR_07at").toggle();});
  $("#AMA_DAR_07b").hover(function(){$("#AMA_DAR_07bt").toggle();});
  $("#AMA_DAR_07c").hover(function(){$("#AMA_DAR_07ct").toggle();});
  $("#AMA_DAR_07d").hover(function(){$("#AMA_DAR_07dt").toggle();});
  $("#AMA_DAR_09").hover(function(){$("#AMA_DAR_09t").toggle();});
  $("#AMA_DAR_11").hover(function(){$("#AMA_DAR_11t").toggle();});
  $("#AMA_DAR_17").hover(function(){$("#AMA_DAR_17t").toggle();});
  $("#TOK_MAH_02").hover(function(){$("#TOK_MAH_02t").toggle();});
  $("#TOK_HAT_03").hover(function(){$("#TOK_HAT_03t").toggle();});


  $("#filter1").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter1").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r1").rotate({animateTo:90}); 
    $(".subfilters").hide(); 
    $("#subfilter1").show();
  });


  $("#filter2").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter2").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r2").rotate({animateTo:90}); 
    $(".subfilters").hide(); 
    $("#subfilter2").show();
  });
  $("#filter3").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter3").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r3").rotate({animateTo:90}); 
    $(".subfilters").hide(); 
    $("#subfilter3").show();
  });
  $("#filter4").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter4").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r4").rotate({animateTo:90}); 
    $(".subfilters").hide(); 
    $("#subfilter4").show();
  });
  $("#filter5").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter5").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r5").rotate({animateTo:90}); 
    $(".subfilters").hide(); 
    $("#subfilter5").show();
  });
  $("#filter6").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter6").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r6").rotate({animateTo:90}); 
    $(".subfilters").hide(); 
    $("#subfilter6").show();
  });
  $("#filter7").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter7").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r7").rotate({animateTo:90}); 
    $(".subfilters").hide(); 
    $("#subfilter7").show();
  });
  $("#filter8").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter8").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r8").rotate({animateTo:90}); 
    $(".subfilters").hide();  
  });
  $("#filter9").mouseover(function(){
    $(".filterup").css({"color": "rgb(167,169,172)"});
    $("#filter9").css({"color": "rgb(209,211,212)"});
    $(".filtresub").rotate({animateTo:0});
    $("#r9").rotate({animateTo:90}); 
    $(".subfilters").hide();  
  });

  $("#AMA_DAR_01").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_01/AMA_DAR_01_V2.jpg');
      $("#desenAdi").text("AMA_DAR_01");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_01/AMA_DAR_01_D_01.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_01/AMA_DAR_01_D_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_01/AMA_DAR_01_D_01.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_01/AMA_DAR_01_D_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_01/AMA_DAR_01_C2.jpg');          
  });



  $("#AMA_DAR_02").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_02/AMA_DAR_02_V.jpg');
      $("#desenAdi").text("AMA_DAR_02");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_02/AMA_DAR_02_D_01.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_02/AMA_DAR_02_D_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_02/AMA_DAR_02_D_01.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_02/AMA_DAR_02_D_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_02/AMA_DAR_02_C.jpg');
  });

  $("#AMA_DAR_03").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_03/AMA_DAR_03_V-01.jpg');
      $("#desenAdi").text("AMA_DAR_03");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_03/AMA_DAR_03_D_01.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_03/AMA_DAR_03_D_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_03/AMA_DAR_03_D_01.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_03/AMA_DAR_03_D_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_03/AMA_DAR_03_C-01.jpg');
  });

  $("#AMA_DAR_07a").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_07a/AMA_DAR_07a_V.jpg');
      $("#desenAdi").text("AMA_DAR_07a");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_07a/AMA_DAR_07a_D.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_07a/AMA_DAR_07a_Y_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_07a/AMA_DAR_07a_D.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_07a/AMA_DAR_07a_Y_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_07a/AMA_DAR_07a_C.jpg');
  });

  $("#AMA_DAR_07b").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_07b/AMA_DAR_07b_V.jpg');
      $("#desenAdi").text("AMA_DAR_07b");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_07b/AMA_DAR_07b_D.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_07b/AMA_DAR_07b_Y_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_07b/AMA_DAR_07b_D.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_07b/AMA_DAR_07b_Y_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_07b/AMA_DAR_07b_C.jpg');
  });

    $("#AMA_DAR_07c").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_07c/AMA_DAR_07b_V.jpg');
      $("#desenAdi").text("AMA_DAR_07c");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_07c/AMA_DAR_07c_D.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_07c/AMA_DAR_07c_Y_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_07c/AMA_DAR_07c_D.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_07c/AMA_DAR_07c_Y_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_07c/AMA_DAR_07b_C.jpg');
  });

    $("#AMA_DAR_07d").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_07d/AMA_DAR_07d_V.jpg');
      $("#desenAdi").text("AMA_DAR_07d");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_07d/AMA_DAR_07d_D.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_07d/AMA_DAR_07d_Y_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_07d/AMA_DAR_07d_D.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_07d/AMA_DAR_07d_Y_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_07d/AMA_DAR_07d_C.jpg');
  });

    $("#AMA_DAR_09").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_09/AMA_DAR_09_V.jpg');
      $("#desenAdi").text("AMA_DAR_09");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_09/AMA_DAR_09_D_01.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_09/AMA_DAR_09_D_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_09/AMA_DAR_09_D_01.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_09/AMA_DAR_09_D_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_09/AMA_DAR_09_C.jpg');
  });


    $("#AMA_DAR_11").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_11/AMA_DAR_11_V.jpg');
      $("#desenAdi").text("AMA_DAR_11");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_11/AMA_DAR_11_D.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_11/AMA_DAR_11_Y_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_11/AMA_DAR_11_D.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_11/AMA_DAR_11_Y_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_11/AMA_DAR_11_C.jpg');
  });

    $("#AMA_DAR_17").click(function(){
    $("#desenVektorel").attr('src', 'images/desenler/AMA_DAR_17/AMA_DAR_17_V.jpg');
      $("#desenAdi").text("AMA_DAR_17");
      $("#desenYapi").text("Amasya Darüşifası");
      $("#desenFoto1k").attr('src', 'images/desenler/AMA_DAR_17/AMA_DAR_17_D.jpg');
      $("#desenFoto2k").attr('src', 'images/desenler/AMA_DAR_17/AMA_DAR_17_Y_02.jpg');
      $("#desenFoto1").attr('src', 'images/desenler/AMA_DAR_17/AMA_DAR_17_D.jpg');
      $("#desenFoto2").attr('src', 'images/desenler/AMA_DAR_17/AMA_DAR_17_Y_02.jpg');
      $("#desenCozum").attr('src', 'images/desenler/AMA_DAR_17/AMA_DAR_17_C.jpg');
  });

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.desenimaj'
});

// store filter for each group
var filters = {};

$('.isotope-filter').on( 'click', '.filterdown', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.filterdown', function() {
/*    $(this).parent().addClass('.is-checked')
    if ($( this ).hasClass('is-checked')) {
      $( this ).removeClass('is-checked');
      $("#filter1bos").click();
      $(this).parent().removeClass('.is-checked')
    }else{
 */   $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}


    

});