
import {playstation,xbox,nintendo,sega,atari} from './data.js';
const ps = document.getElementById('templatePs').content;
const xb = document.getElementById('templateXbox').content;
const nt = document.getElementById('templateNtnd').content;
const sg = document.getElementById('templateSega').content;
const at = document.getElementById('templateAtari').content;
const fragment = document.createDocumentFragment();
const psItems = document.getElementById('psItems');
const xbItems = document.getElementById('xbItems');
const ntndItems = document.getElementById('ntndItems');
const segaItems = document.getElementById('segaItems');
const atariItems = document.getElementById('atariItems');
document.addEventListener('DOMContentLoaded', ()=>{
cargarPs(playstation);
cargarXbox(xbox);
cargarNtnd(nintendo);
cargarSega(sega);
cargarAtari(atari);
})

const cargarPs = playstation =>{
    console.log(playstation);
    playstation.forEach(psGame => { 
        const {game,image} = psGame;
        ps.querySelector('h5').textContent = game;
        ps.querySelector('img').setAttribute('src',image);
        const clone = ps.cloneNode(true);
        fragment.appendChild(clone)
    });
    psItems.appendChild(fragment);
}

const cargarXbox = xbox =>{
    console.log(xbox);
    xbox.forEach(xboxGame => { 
        const {game,image} = xboxGame;
        xb.querySelector('h5').textContent = game;
        xb.querySelector('img').setAttribute('src',image);
        const clone = xb.cloneNode(true);
        fragment.appendChild(clone)
    });
    xbItems.appendChild(fragment);
}

const cargarNtnd = nintendo =>{
    console.log(nintendo);
    nintendo.forEach(ntndGame => { 
        const {game,image} = ntndGame;
        nt.querySelector('h5').textContent = game;
        nt.querySelector('img').setAttribute('src',image);
        const clone = nt.cloneNode(true);
        fragment.appendChild(clone)
    });
    ntndItems.appendChild(fragment);
}

const cargarSega = sega =>{
    console.log(sega);
    sega.forEach(segaGame => { 
        const {game,image} = segaGame;
        sg.querySelector('h5').textContent = game;
        sg.querySelector('img').setAttribute('src',image);
        const clone = sg.cloneNode(true);
        fragment.appendChild(clone)
    });
    segaItems.appendChild(fragment);
}

const cargarAtari = atari =>{
    console.log(atari);
    atari.forEach(atariGame => { 
        const {game,image} = atariGame;
        at.querySelector('h5').textContent = game;
        at.querySelector('img').setAttribute('src',image);
        const clone = at.cloneNode(true);
        fragment.appendChild(clone)
    });
    atariItems.appendChild(fragment);
}
