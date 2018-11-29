  $.widget( "custom.mySlider", $.ui.slider, {
      tabs: function() {
          var max = this.options.max;
          for(i = 0; i <= max; i++){
            this.element.append('<div class="tabcontent" id="tab'+ i +'"></div>');
          }
      },
      addTabContent: function(tabContents, tabNumber) {
          var max = this.options.max;
            $( '#tab'+ tabNumber ).append(tabContents);
      },
  });


  $( function() {
      $( "#slider2" ).mySlider({
        value: 0,
        min: 0,
        max: 3,
        step: 1,
        range: "min",
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.value );
          var tabValue = ui.value;
          var tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
          }
          document.getElementById("tab" + tabValue).style.display = "block";
        }
      });
      $( "#amount" ).val( $( "#slider2" ).mySlider( "value" ) );
      $( "#slider2" ).mySlider( "tabs");
      $( "#slider2" ).mySlider( "addTabContent","Review Your Order",2);
      $( "#slider2" ).mySlider( "addTabContent","Billing Info",1);
      $( "#slider2" ).mySlider( "addTabContent","Shipping Info",0);
      $( "#slider2" ).mySlider( "addTabContent","Thank you for your order!",3);
    } );
