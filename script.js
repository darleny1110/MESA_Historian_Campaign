function openEn(){
    const envelope = document.getElementById('container_ene'); 
    const pre = document.getElementById('paco');
    envelope.classList.add('open');
    setTimeout(() =>{
        pre.classList.add('active');
    },500);

}

function closelet(){
    document.getElementById('paco').classList.remove('active');
    const envelope = document.getElementById('container_ene');
    const prelet = document.getElementById('paco');
    
    prelet.classList.remove('active');
    setTimeout(() =>{
        envelope.classList.remove('open');
    },500);

}