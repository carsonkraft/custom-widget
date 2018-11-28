  $.widget( "custom.mySlider", $.ui.slider, {

      tabs: function() {
          var max = this.options.max;
          for(i = 0; i < max; i++){
            this.element.append('<div class="container" id="tab'+ i +'"></div>');
          }
      },
      addTabContent: function(tabContents, tabNumber) {
          var max = this.options.max;
            $( '#tab'+ tabNumber ).append(tabContents);
      }

  });


  $( function() {
      $( "#slider2" ).mySlider({
        value: 0,
        min: 0,
        max: 5,
        step: 1,
        range: "min",
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.value );
        }
      });
      $( "#amount" ).val( $( "#slider2" ).mySlider( "value" ) );
      $( "#slider2" ).mySlider( "tabs");
      $( "#slider2" ).mySlider( "addTabContent","hello world",2);
    } );
