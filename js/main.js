/*$(document).ready(function ({
   $(.mobile-menu).on("click" function())


                            }) {

})

 <div id="nav-main" class="nav-collapse collapse">
 <ul class="nav">
 <li>
 <a href='#somewhere'>Somewhere</a>
 </li>
 </ul>
 </div>
*/
$(function(){
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});