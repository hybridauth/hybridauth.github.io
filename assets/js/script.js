$(function () {
    prettyPrint()

    // am lazy p
    $('#content img').each(function() {
        $(this).wrap("<a target='_blank' href='" + $(this).attr("src") + "'</a>")
    })

    $('table').addClass('table');
    $('table').addClass('table-striped');
    $('table').addClass('table-bordered');
	$('pre').addClass('prettyprint');
	prettyPrint()
    $('header form').remove();

    window.addEventListener("scroll", function() {
        if ( window.scrollY > 50 ) {
            $('.navbar, .githubico').css( 'opacity', 0.8 )
        }
        else {
            $('.navbar, .githubico').css( 'opacity', 1 )
        }
    },false)
})
