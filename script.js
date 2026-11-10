function openEn(){
    const envelope = document.getElementById('container_ene'); 
    const pre = document.getElementById('paco');
    envelope.classList.add('open');
    setTimeout(() =>{
        pre.classList.add('active');
    },1500);

}

