let imga = document.getElementById('imga');
let imgb = document.getElementById('imgb');
let imgc = document.getElementById('imgc');
let disa = document.getElementById('disa')
let disb = document.getElementById('disb')
let disc = document.getElementById('disc')

imga.onclick = () => {
    imga.src = 'image/批注 2020-07-31 212919.png'
    imgb.src = 'image/批注 2020-07-31 213231.png'
    imgc.src = 'image/批注 2020-07-31 213026.png'
    disa.style.display = 'block'
    disb.style.display = 'none'
    disc.style.display = 'none'
}
imgb.onclick = () => {
    imga.src = 'image/批注 2020-07-31 212937.png'
    imgb.src = 'image/批注 2020-07-31 212951.png'
    imgc.src = 'image/批注 2020-07-31 213026.png'
    disa.style.display='none'
    disb.style.display='block'
    disc.style.display='none'
}
imgc.onclick = () => {
    imga.src = 'image/批注 2020-07-31 212937.png'
    imgb.src = 'image/批注 2020-07-31 213231.png'
    imgc.src = 'image/批注 2020-07-31 213250.png'
    disa.style.display='none'
    disb.style.display='none'
    disc.style.display='block'
}