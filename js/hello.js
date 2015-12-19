$(document).ready(function() {
    $('#exampleHome,#exampleOne,#exampleTwo,#exampleThree').DataTable( {
        "pagingType": "full_numbers"
    } );
    
    
    $(".accordion").accordion({
    	//whether the first section is expanded or not
    	firstChildExpand: false,
    	//whether expanding mulitple section is allowed or not
    	multiExpand: false,
    	//slide animation speed
    	slideSpeed: 500,
    	//drop down icon
    	dropDownIcon: "&#9660",
    	});
    
} )