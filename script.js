window.onload = function () {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById("content_calc").style.display = 'block';
    document.getElementById("menubutton").onclick=function(){
        document.getElementById("sidebar").classList.add('open');
        document.getElementById("overlay").classList.add('show');
    }
    document.getElementById("overlay").onclick=function(){
        document.getElementById("sidebar").classList.remove('open');
        document.getElementById("overlay").classList.remove('show');
    }
    document.getElementById("scheme").onclick=function(){
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById("content_scheme").style.display = 'block';
    }
    document.getElementById("calc").onclick=function(){
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById("content_calc").style.display = 'block';
    }
    document.getElementById("i").onclick=function(){
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById("content_i").style.display = 'block';
    }
    document.getElementById("corner").onclick=function(){
        tabs.forEach(tab => tab.style.display = 'none');
        document.getElementById("content_scheme").style.display = 'block';
    }
    document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");
        
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        }
    }
    });
};