
    document.getElementById('demo').innerHTML ="Welcome " + localStorage.getItem('userName')         


function Logout(){
    localStorage.removeItem('userName')
    window.location='index.html'
}
