function skillsMember() {
    var member = document.getElementById('member');
    var membervalue = member.options[member.selectedIndex].value;
    if (membervalue == 'yes') {
        document.getElementById('skill').style.display = 'block';
    } else {
        document.getElementById('skill').style.display = 'none';
    }
}
