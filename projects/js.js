$.ajax({
    url: "https://lp2.fasttrack.edu.vn/re.php",
    dataType: 'jsonp',
    type: 'GET',
    xhrFields: {
        'withCredentials': true
    },
    crossDomain: true
})
