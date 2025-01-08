const dropdown = document.querySelector('.dropdown__product');
const dropdownlist = document.querySelector('.dropdown__product--list');

dropdown.addEventListener('mouseenter', function() {
    dropdownlist.style.display='block';
});
dropdown.addEventListener('mouseleave', function() {
    dropdownlist.style.display='none';
});
dropdownlist.addEventListener('mouseenter', function() {
    dropdownlist.style.display='block';
});
dropdownlist.addEventListener('mouseleave', function() {
    dropdownlist.style.display='none';
});

const dropDesign = document.querySelector('.dowpdown__design');
const dropDesignList = document.querySelector('.dropdown__design--list');

dropDesign.addEventListener('mouseenter', function() {
    dropDesignList.style.display='block';
})
dropDesign.addEventListener('mouseleave', function() {
    dropDesignList.style.display='none';
})
dropDesignList.addEventListener('mouseenter', function() {
    dropDesignList.style.display='block';
})
dropDesignList.addEventListener('mouseleave', function() {
    dropDesignList.style.display='none';
})





