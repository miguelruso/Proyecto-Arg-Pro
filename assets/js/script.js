/* =======================================================================
Nombre de la plantilla: CV
Autor:  Miguel Angel Berezosky
Descripcion: Plantilla de un CV en html
======================================================================= */

				$.ajax({
  url: 'https://randomuser.me/api/?nat=es',
  dataType: 'json',
  success: function(data){
    $("#result").html(data.results[0].picture.large);
    $("img").attr("src",data.results[0].picture.large);
	$("#name").html (data.results[0].name.first);
	$("#name2").html (data.results[0].name.first);
    $("#last").html (data.results[0].name.last);
	$("#last2").html (data.results[0].name.last);
	$("#telefono").html (data.results[0].phone);
	$("#email").html (data.results[0].email);
	$("#email2").html (data.results[0].email);
	$("#city").html (data.results[0].location.city);
	$("#state").html (data.results[0].location.state);
	$("#country").html (data.results[0].location.country);
  }

});
