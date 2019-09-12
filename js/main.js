//JQuery Code inside the curly brackets
$(document).ready(function(){
    var el = document.getElementById('text');

    $(document).on('contextmenu', function(){
        return false;

    });
    $(document).on('mousedown', function(event){
        event.preventDefault();

        if(event.which == 3){ 
            $(".hidden").removeClass('shown');

            if($(event.target).is('img')){
                $('.saveimg, .newtab').addClass('shown');
            }else if($(event.target).is('a')){
                $('.newtab').addClass('shown');
            }
            console.log(event.pageX, event.pageY);

            $('#context').css({
                top:event.pageY,
                left:event.pageX
            });

            $('#context').fadeIn();
            return false;
            
        }
        $('#context').fadeOut();

    

    });

    $('[data-trigger="dropdown"]').on('mouseenter',function(){
        var submenu = $(this).parent().find('.submenu');
        //submenu.addClass('active');
        submenu.fadeIn(300);

        $('.profile-menu').on('mouseleave',function(){
            //submenu.removeClass('active');
            submenu.fadeOut(300);
        });
    });

    $('#prepend, #append, #replace').on('click',function(e){
        e.preventDefault();
        
        var el = $(e.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val();

        if (action == "prepend"){
            console.log("Prepending...");
            $('#main').prepend(content);

        } else if(action == "append"){
            console.log("Appending...");
            $('#main').append(content);

        } else if(action == "replace"){
            console.log("Replacing...");
            $('#main').html(content);

        }

        $('.text').val('');

    });
    



});