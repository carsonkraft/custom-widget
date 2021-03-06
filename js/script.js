  $.widget( "custom.mySlider", $.ui.slider, {
      tabs: function() {
          var max = this.options.max;
          for(i = 0; i <= max; i++){
            this.element.append('<div class="tabcontent" id="tab'+ i +'"></div>');
            $("#navtext").append('<div class="tabtitle" id="title'+ i +'"></div>');
          }
      },
      addTabContent: function(tabTitle, tabContents, tabNumber) {
          var max = this.options.max;
            $( '#title'+ tabNumber ).append(tabTitle);
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
          var tabtitle = document.getElementsByClassName("tabtitle");

          for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
          }
          document.getElementById("tab" + tabValue).style.display = "block";
        }
      });
      $( "#amount" ).val( $( "#slider2" ).mySlider( "value" ) );
      $( "#slider2" ).mySlider( "tabs");
      var billing = document.getElementById('billing').innerHTML;
      var shipping = document.getElementById('shipping').innerHTML;
      $( "#slider2" ).mySlider( "addTabContent","REVIEW","Review Your Order",2);
      $( "#slider2" ).mySlider( "addTabContent","BILLING",billing,1);
      $( "#slider2" ).mySlider( "addTabContent","SHIPPING",shipping,0);
      $( "#slider2" ).mySlider( "addTabContent","","Thank you for your order!",3);
    } );
