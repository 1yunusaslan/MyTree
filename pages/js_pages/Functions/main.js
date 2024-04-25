const data = {

    eng:{
         navbar :{
              a:[
                   {
                        name: 'contact',
                        href: './pages/contact.html'
                   },
                   {
                        name: 'articles',
                        href: './pages/articles.html'
                   }
              ],
              selection:[
                   {
                        name:'TR',
                        value:'turkce'                   
                   },
                   {
                        name:'ENG',
                        value:'english'                   
                   },
              ]
         },
    
         content: {
              img:[
                   {
                        src:'./assets/img/mypic_png.png'
                   }
              ],
              main:[
                   {
                        tittle:'Yunus Aslan',
                        subtittle:'Front-End Developer',
                        about:'I am a junior developer for web and mobile applications. Eager to learn the new technologies, and excited to get web fundementals. I have a passion to improve my self. Currently based in the great city of Istanbul, Turkey.'
                   }
              ]
         },
    
         footer: {
              outside_a:[
                   {
                        name:'developed by @yunusaslan',
                        href:'/',
                        class:'link'
                   }
              ],
              inside_a:[
                   {
                        name:'Twitter',
                        href:'https://twitter.com/yonaharieh',
                        class:'link'
                   },
                   {
                        name:'Instagram',
                        href:'https://www.instagram.com/yonaharieh/',
                        class:'link'
                   },
                   {
                        name:'GitHub',
                        href:'https://twitter.com/yonaharieh',
                        class:'link'
                   },
                   {
                        name:'Twitter',
                        href:'https://www.linkedin.com/in/yunusemreaslan1/',
                        class:'link'
                   }
              ]
         }
    },

    tr:{
         navbar :{
              a:[
                   {
                        name: 'iletisim',
                        href: './pages/contact.html'
                   },
                   {
                        name: 'makaleler',
                        href: './pages/articles.html'
                   }
              ],
              selection:[
                   {
                        name:'TR',
                        value:'turkce'                   
                   },
                   {
                        name:'ENG',
                        value:'english'                   
                   },
              ]
         },
    
         content: {
              img:[
                   {
                        src:'./assets/img/mypic_png.png'
                   }
              ],
              main:[
                   {
                        tittle:'Yunus Aslan',
                        subtittle:'Ön Yüz Geliştiricisi',
                        about:'Web ve mobil uygulamalar konusunda genç bir geliştiriciyim. Yeni teknolojileri öğrenmeye istekli ve web ile ilgili temel bilgileri edinme konusunda heyecanlı. Kendimi geliştirme tutkum var. Şu an da İstanbulda yaşıyorum.'
                   }
              ]
         },
    
         footer: {
              outside_a:[
                   {
                        name:'@yunusaslan tarafından geliştirildi',
                        href:'/',
                        class:'link'
                   }
              ],
              inside_a:[
                   {
                        name:'Twitter',
                        href:'https://twitter.com/yonaharieh',
                        class:'link'
                   },
                   {
                        name:'Instagram',
                        href:'https://www.instagram.com/yonaharieh/',
                        class:'link'
                   },
                   {
                        name:'GitHub',
                        href:'https://twitter.com/yonaharieh',
                        class:'link'
                   },
                   {
                        name:'Twitter',
                        href:'https://www.linkedin.com/in/yunusemreaslan1/',
                        class:'link'
                   }
              ]
         }

    }
    
}




var forEach = (dizi, f) => {
     for(var i = 0; i < dizi.length; i++) {
        f(dizi[i]);
     }
 }

 forEach([1, 2, 3], console.log);



function topla(x, y, genelToplam) {
    var toplam = x + y;
    genelToplam += toplam;
    return [toplam, genelToplam];
}

function genelToplam() {
    return topla(2, 3, topla(4, 5, 0)[1])[1];
}

var snc = genelToplam();

console.log(snc);

function createLinks(links){
    const createLinks =[];
    links.forEach(link =>{
        const a_links = createLink(link);
        createLinks.push(a_links);
    })
}

 

function createLink(link){
    const a = document.createElement("a");
    a.textContent= link.name;
    a.className=link.class;
    return a;
}