$('#search').change(function() {
     var searchStr = $(this).val();
     $('.caption').each(function() {
          var str = $(this).attr("data-title"); 
          if(str.indexOf(searchStr) > -1) { //compares search text to title text
               $(this).show(); // if the entry is found show the container
               //or you can do $(this).closest('.image').show();
          } else {
               $(this).hide(); // if not found, hide it.
               //or you can do $(this).closest('.image').hide();
          }
     });
});

