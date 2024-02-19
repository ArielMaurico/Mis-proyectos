:root{
  --color1: rgb(11, 124, 128);
  --color2: rgba(83, 85, 84, 0.877);
  --color3: rgba(11,194,211, 0.623);
  --fondo: #f2f2f2;
  --titulos: 33px;
  --margenes: 60px;
  --espacios: 10px;
  --espacios-contenido:45px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'open sans';
  background: var(--fondo);
}

img{
  vertical-align: top;
}


/* Preloader */
.hidden{
  overflow: hidden;
}

.centrado{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background: #cef;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
  left: 6px;
  animation-delay: -0.24s;
}

.lds-facebook div:nth-child(2) {
  left: 26px;
  animation-delay: -0.12s;
}

.lds-facebook div:nth-child(3) {
  left: 45px;
  animation-delay: 0;
}

@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 51px;
  }

  50%,
  100% {
    top: 19px;
    height: 26px;
  }
}

/* Header */

header{
  width: 100%;
  height:600px;
  background: linear-gradient(to bottom,
  rgba(13, 179, 46, 0.6),
  rgba(42, 48, 154, 0.6),
  rgba(14, 202, 223, 0.45)
  ), url(img/fondo.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

nav{
  width: 100%;
  position: fixed;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.5)
}

.nav1{
  background: transparent;
  height: 80px;
  color:#fff;
}

.nav2{
  background: var(--fondo);
  height:100px;
  color:#000;
}

.contenedor-nav{
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width:1000px;
  height:inherit;
  overflow: hidden;
}

nav .enlaces a{
  display: inline-block;
  padding: 5px 0;
  margin-right: 17px;
  font-size: 17px;
  font-weight: 300;
  text-decoration: none;
  border-bottom: 3px solid transparent;
  color: inherit;
}

nav .enlaces a:hover{
  border-bottom: 3px solid #1498a4;
  transition: 0.6s;
}

.logo, .logo img{ height:80px;}

.icono{
  display:none;
  font-size: 24px;
  padding: 23.5px 20px;
  
}
.iconos{
  display:none;
  font-size: 24px;
  padding: 23.5px 20px;
  top: 100px;
}
.iconos a{
  margin-top: 50px;
}

.textos{
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color:#fff;
  overflow: hidden;
  text-align: center;
}

.textos>h1{font-size:50px;;}

.textos>h2{font-size: 30px; font-weight: 300;}

/* Main */

.contenedor{
  margin:auto;
  padding: var(--margenes) 0;
  width: 90%;
  max-width: 1000px;
  text-align: center;
  overflow: hidden;
}

.contenedor h3{
  font-size: var(--titulos);
  color: var(--color1);
  margin-bottom: var(--espacios);
}

.contenedor p{
  font-size: var(--subtitulos);
  font-weight: 300;
  color: var(--color1);
}

.after::after{
  content:'';
  display: block;
  margin: auto;
  margin-top: var(--espacios);
  width: 100px;
  height: 2px;
  background: var(--color1);
  margin-bottom: var(--espacios-contenido);
}

.card{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.content-card{
  width: 31%;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
  overflow: hidden;
  height:400px;
}

.people{
  height: 70%;
}

.content-card img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.texto-team{
  height: 20%;
  width: 100%;
  padding: var(--espacios) 0;
}

.about{
  background: url(img/teclado.jpg);
  height: auto;
}

.servicios{
  display: flex;
  color:#fff;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
}
.caja-servicios{
  width: 30%;
  margin: auto;
  text-align: center;
}
.caja-servicios>h4{
  margin-bottom: var(--espacios);
}

.caja-servicios>p{
  text-align: center;
}

.botones-work{
  overflow: hidden;
}

.botones-work li{
  display: inline-block;
  text-align: center;
  margin-left: var(--espacios);
  margin-bottom: var(--espacios-contenido);
  padding: 6px 12px;
  border: 1px solid var(--color1);
  list-style: none;
  color: var(--color1);
}

.botones-work li:hover{
  background: var(--color1);
  color:#fff;
  cursor: pointer;
}

.botones-work .active{
  background: var(--color1);
  color:#fff;
}

.galeria-work{
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.cont-work{
  width: 31%;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
  height:300px;
  overflow: hidden;
  margin-bottom: var(--espacios-contenido);
}

.img-work{
  height: 90%;
  width: 100%;
}

.img-work img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.textos-work{
  height: 10%;
}

.textos-work h4{
  line-height: 30px;
  font-weight: 300;
}

/* Footer */

footer{background:url(img/teclado.jpg);}

.marca-logo{
  width: 40%;
  margin: auto;
  margin-bottom: var(--espacios);
}
.marca-logo img{
  width: 100%;
}
.iconos{
  display: flex;
  margin: auto;
  justify-content: space-around;
  width: 100%;
}
.fab{
  font-size:60px;
  color: #FFF;
  margin-bottom: var(--espacios);
  display: inline-block;
}

footer p{
  margin-top:var(--espacios);
  
}


@media screen and (max-width: 700px){
  .nav2{
    color: #fff;
  }

  .icono{
    display:block;
    cursor: pointer;
  }

  .enlaces{
    position: fixed;
    top:80px;
    background: #2c3e50;
    left: 0;
    height: 100%;
    transition: 1s;
    width: 0;
    overflow: hidden;
  }

  .enlaces a{
    display: block;
    width: 100%;
    height: 50px;
    padding: 20px;
    text-align: center;
    background: #34495e;
    color:#fff;
  }

  .textos>h1{font-size: 70px;}
  .textos>h2{font-size:35px;}

  .content-card{
    width: 48%;
    margin-bottom:var(--margenes);
  }

  :root{
    --margenes: 30px;
  }
}

@media screen and (max-width: 500px){
  :root{
    --espacios-contenido: 25px;
  }

  .content-card{
    width: 90%;
  }

  .caja-servicios{
    width: 90%;
    margin-bottom: var(--margenes);
  }

  .cont-work{
    width: 85%;
  }

  .marca-logo{
    width: 80%;
  }

  .iconos{
    margin: auto;
  }
}
