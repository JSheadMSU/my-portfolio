<div <?php //Using REQUEST_URI

$currentpage = $_SERVER['REQUEST_URI'];

if(preg_match("/index/i", $currentpage)||($currentpage=="/"))
    echo " class=\"navbarorange/*the css class for your nav div*/\" ";
elseif(preg_match("/about/*or second page name*//i", $currentpage))
    echo " class=\"navbarpink\" ";
elseif(preg_match("/contact/* or edit 3rd page name*//i", $currentpage))
    echo " class=\"navbargreen\" ";?> >
</div>

