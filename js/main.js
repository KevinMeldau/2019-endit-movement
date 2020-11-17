var drawBox = {
  myp5: null,
  overCanvas: false,
  init: function() {
    this.myp5 = new p5(this.setupCanvas);
  },
  setupCanvas: function(p) {
    var bg,
        drawBox = $('.draw-box-wrapper');

    p.setup = function() {
      // Initialize Canvas
      p.createCanvas(drawBox.width(), drawBox.height());

      // Move Canvas into wrapper
      canva = $('#defaultCanvas0');
      canva.appendTo(drawBox);

    }

    p.mouseDragged = function() {
      p.strokeWeight(10);
      p.stroke('red');
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }

    p.mouseReleased = function() {
      if (this.overCanvas === true) {
        canva.fadeOut(2000, function(){
          p.setup();
          canva.show();
        });
      }
    }

    p.touchEnded = function() {
      canva.fadeOut(2000, function(){
        p.setup();
        canva.show();
      });
    }

    $('.draw-box-wrapper').mouseenter(function() {
      this.overCanvas = true;
    });

    $('.draw-box-wrapper').mouseleave(function() {
      this.overCanvas = false;
    });

    $('.draw-box-wrapper').mouseup(function() {
      if (this.overCanvas === true) {
        canva.fadeOut(2000, function(){
          p.setup();
          canva.show();
        });
      }
    });
  }
};

if ($('body').hasClass('homepage') == true) {
  drawBox.init();
}
$(function(){
  var gdpData = {
        'AD':	8,
        'AE':	797,
        'AF':	49,
        'AG':	41,
        'AI':	10,
        'AL':	90,
        'AM':	55,
        'AO':	20,
        'AR':	1431,
        'AS':	10,
        'AT':	1156,
        'AU':	8847,
        'AW':	26,
        'AX':	5,
        'AZ':	87,
        'BA':	133,
        'BB':	91,
        'BD':	178,
        'BE':	1332,
        'BF':	13,
        'BG':	461,
        'BH':	104,
        'BI':	4,
        'BJ':	13,
        'BM':	66,
        'BN':	46,
        'BO':	251,
        'BR':	8847,
        'BS':	228,
        'BT':	3,
        'BW':	35,
        'BY':	290,
        'BZ':	79,
        'CA':	8847,
        'CG':	16,
        'CH':	2128,
        'CI':	22,
        'CL':	1021,
        'CM':	36,
        'CN':	625,
        'CO':	1475,
        'CR':	844,
        'CU':	1,
        'CW':	41,
        'CY':	176,
        'CZ':	1010,
        'DE':	8847,
        'DJ':	7,
        'DK':	1440,
        'DM':	20,
        'DO':	493,
        'DZ':	97,
        'EC':	402,
        'EE':	494,
        'EG':	401,
        'ES':	3119,
        'ET':	81,
        'FI':	1859,
        'FJ':	74,
        'FM':	219,
        'FO':	66,
        'FR':	5281,
        'GA':	2,
        'GB':	8847,
        'GD':	27,
        'GE':	119,
        'GF':	4,
        'GG':	16,
        'GH':	254,
        'GI':	23,
        'GL':	3,
        'GM':	6,
        'GN':	7,
        'GP':	10,
        'GQ':	1,
        'GR':	1180,
        'GT':	709,
        'GU':	120,
        'GY':	17,
        'HN':	429,
        'HR':	424,
        'HT':	146,
        'HU':	1008,
        'ID':	1308,
        'IE':	1273,
        'IL':	807,
        'IM':	11,
        'IN':	4000,
        'IQ':	134,
        'IR':	171,
        'IS':	198,
        'IT':	3983,
        'JE':	24,
        'JM':	245,
        'JO':	148,
        'JP':	2031,
        'KE':	568,
        'KG':	335,
        'KH':	266,
        'KI':	71,
        'KR':	2043,
        'KW':	177,
        'KY':	34,
        'KZ':	209,
        'LA':	35,
        'LB':	183,
        'LI':	3,
        'LK':	135,
        'LR':	7,
        'LS':	23,
        'LT':	315,
        'LU':	124,
        'LV':	304,
        'LY':	28,
        'MA':	224,
        'MC':	4,
        'ME':	25,
        'MG':	39,
        'MH':	5,
        'ML':	7,
        'MM':	57,
        'MN':	37,
        'MP':	14,
        'MQ':	14,
        'MR':	4,
        'MS':	1,
        'MT':	186,
        'MU':	60,
        'MV':	22,
        'MW':	47,
        'MX':	5739,
        'MY':	1435,
        'MZ':	42,
        'NA':	69,
        'NC':	19,
        'NE':	5,
        'NF':	1,
        'NG':	361,
        'NI':	212,
        'NL':	3544,
        'NO':	1914,
        'NP':	118,
        'NZ':	2871,
        'OM':	64,
        'PA':	263,
        'PE':	1278,
        'PF':	12,
        'PG':	20,
        'PH':	3198,
        'PK':	393,
        'PL':	2896,
        'PR':	873,
        'PT':	1543,
        'PY':	128,
        'QA':	194,
        'RE':	15,
        'RO':	1704,
        'RS':	272,
        'RU':	8650,
        'RW':	47,
        'SA':	589,
        'SB':	1,
        'SC':	3,
        'SD':	132,
        'SE':	2678,
        'SG':	1991,
        'SI':	243,
        'SK':	534,
        'SL':	4,
        'SM':	2,
        'SN':	135,
        'SO':	4,
        'SR':	38,
        'SS':	4,
        'ST':	1,
        'SV':	211,
        'SX':	17,
        'SY':	20,
        'SZ':	5,
        'TC':	9,
        'TD':	2,
        'TG':	8,
        'TH':	1106,
        'TJ':	9,
        'TL':	6,
        'TN':	102,
        'TO':	2,
        'TR':	1167,
        'TT':	273,
        'TW':	1708,
        'UA':	1519,
        'UG':	187,
        'US':	8847,
        'UY':	178,
        'UZ':	12,
        'VE':	377,
        'VG':	8,
        'VN':	292,
        'VU':	1,
        'WS':	4,
        'YE':	29,
        'YT':	1,
        'ZA':	3441,
        'ZM':	72,
        'ZW':	98
      };

  $('.swipe-space').click(function(){
    var $this = $('.swipe-space'),
        images = $this.find('img');

    images.first().detach().appendTo($this);
  });

  function setFooterGrid() {
    var container = $('.swipe-area'),
        containerWidth = container.width(),
        items = container.find('.x-item'),
        itemCol = (containerWidth > 767) ? 14 : 8,
        itemSize = containerWidth / itemCol;
    items.css({
      'width': itemSize + 'px',
      'height': itemSize + 'px'
    });
  }

  setFooterGrid();

  $(window).on('resize', function(){
    setFooterGrid();
  });

  if ($('body').hasClass('homepage') == true) {
    $('#worldMap').css('height', '50vw').vectorMap({
      map: 'world_mill',
      backgroundColor: '#ff3333',
      zoomOnScroll: false,
      series: {
        regions: [{
          values: gdpData,
          scale: ['#ff5353', '#ffffff'],
          normalizeFunction: 'polynomial'
        }]
      },
      regionStyle: {
        initial: {
          fill: '#ff5353'
        }
      }
    });

    $(window).scroll(function(){
      var iWindow = $('#invertWindow'),
          iWindowTop = iWindow.offset().top,
          iWindowBottom = iWindowTop + iWindow.height(),
          iItem = $('.invert-item');

      iItem.each(function(){
        var $this = $(this),
            iItemTop = $this.offset().top,
            iItemBottom = iItemTop + $this.height();

        if ( iItemTop > iWindowTop && iItemBottom < iWindowBottom) {
          $this.addClass('inverted');
        } else {
          $this.removeClass('inverted');
        }
      });
    });
  }

  $('#hamburger').click(function(){
    $('nav').toggleClass('open');
  });

  $('.nav-link').click(function(){
    $('nav').removeClass('open');
  });
});
