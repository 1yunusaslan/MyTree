



const dizi = [
    {
        ad:'Ana Sayfa',
        href:'index'
        
    },
    {
        ad:'İletişim',
        href:'iletisim'
        
    },
    {
        ad:'Makale',
        href:'makale'
        
    }
]

const ul = document.getElementById('#navbar');

dizi.forEach(link => {

    const a = document.createElement('a');
    a.textContent = link.ad;
    a.href = link.href;

    const li = document.createElement('li');
    li.appendChild(a);

    ul.appendChild(li);
});