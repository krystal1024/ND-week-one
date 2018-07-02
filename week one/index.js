window.onload = function() {
    var oLi = document.getElementById('newadd');
    var oDiv = document.getElementById('addworks');
    var oBtn = document.getElementById('works-close');
    oLi.onclick = function() {
        oDiv.style.display = 'block';
    };
    oBtn.onclick = function() {
        oDiv.style.display = 'none';
    };

    var oBtn2 = document.getElementById('btn-add-authors');
    var oDiv2 = document.getElementById('classmember');
    var oBtn3 = document.getElementsByClassName('works-close')[0];
    oBtn3.onclick = function() {
        oDiv2.style.display = 'none';
    };
    oBtn2.onclick = function() {
        oDiv2.style.display = 'block';

    };
};