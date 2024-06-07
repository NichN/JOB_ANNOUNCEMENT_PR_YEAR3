function toggleReadMore(id, element) {
    var paragraph = document.getElementById(id);
    if (paragraph.classList.contains('expanded')) {
        paragraph.classList.remove('expanded');
        element.innerText = 'Read more';
    } else {
        paragraph.classList.add('expanded');
        element.innerText = 'Read less';
    }
}
