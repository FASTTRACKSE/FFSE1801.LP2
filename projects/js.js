var invocation = new XMLHttpRequest();
var url = 'https://lp2.fasttrack.edu.vn/';
if(invocation) {
    invocation.open('GET', url, true);
    invocation.withCredentials = true;
    invocation.send(); 
}
        