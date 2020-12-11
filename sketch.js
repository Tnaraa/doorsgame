var t, l, h, xM, ya, yb, yc, xc, lc, hc, eu, p, a, b, j, value;
var fim, ganhou, e;
//j = 8;  // SUBTELA
t = 1;    // TELA
l = 220;  // LARGURA AREA DE SELEÇÃO
h = 50;   // ALTURA AREA DE SELEÇÃO
lc = 60;  // LARGURA AREA DE SELEÇÃO OPÇÃO VOLTAR
hc = 40;  // ALTURA AREA DE SELEÇÃO OPÇÃO VOLTAR
xM = 110; // POSIÇÃO X
xc = 10;  // POSIÇÃO X, VOLTAR
ya = 90;  // POSIÇÃO Y, COMEÇAR
yb = 173; // POSIÇÇÃO Y, INSTRUÇÇÕES
yc = 350; // POSIÇÃO Y, VOLTAR
ys = 265; // POSIÇÃO Y, CRÉTIDO
e = 0;
let tempo = 0, cont = 0; rate = 30;

function preload(){
  
   eu = loadImage("fotoeu.jpg");
   p  = loadImage("pessoa.png");
   a  = loadImage("image (1).png");
   b  = loadImage("image.png");
   fim = loadImage("fimjogo.png");
   ganhou = loadImage("ganhou.jpeg");
   frameRate(rate);
  
}

function setup() {
  createCanvas(450, 400);
}

function doubleClicked() {
    if (value === 0) {
    value = 255;
  } 
    else {
    value = 0;
  }
}

function draw() { 
   textFont('Georgia');
  //Na tela de menu:
   if(t == 1){
     background(230,230,250);
     textSize(35);
     fill(65,105,225);
     textStyle(BOLDITALIC);
     text("DOOR'S GAME", 220,50);
  // Iniciar o jogo:
    textAlign(CENTER);
    textSize(35);
    textStyle(ITALIC);

    if(mouseX > xM && mouseX < xM + l && mouseY > ya && mouseY < ya + h){
      
    stroke(240);
    fill(240,255,255);
    rect(xM, ya, l, h, 100);
      
      if(mouseIsPressed){
        t = 2;
    }
  }
    
    fill(75,0,130);
    noStroke();
    text("Começar", 220, 125);
    
    // Informaçoes:
    if(mouseX > xM && mouseX < xM + l && mouseY > yb && mouseY < yb + h){
      
    stroke(240);
    fill(240,255,255);
    rect(xM, yb, l, h, 100);
    
      if(mouseIsPressed){
        t = 3;
    }
  }
    
    fill(75,0,130);
    noStroke();
    text("Instruções", 220, 210);
    
    // Créditos:
    if(mouseX > xM && mouseX < xM + l && mouseY > ys && mouseY < ys + h){
    stroke(240);
    fill(240,255,255);
    rect(xM, ys, l, h, 100);
    
      if(mouseIsPressed){
        t = 4;
    }
  }
    fill(75,0,130);
    noStroke();
    text("Créditos", 220, 300);
    
} 
    // Jogando:
  else if(t == 2){
    background(240,255,255);
    fill(10);
    textSize(26);
    noStroke();
    textAlign(CENTER);   
      
    // Texto: Tutorial
    textFont('Georgia');
    textStyle(BOLDITALIC);
    fill("#4B0082");
    text("TUTORIAL", 220, 50);
    textSize(24);
    fill(20, 20, 20);
    text("Escolha uma porta:", 220, 80);
    fill(215,190,190);
    textSize(20);
    text("Selecione a porta com um (as vezes dois) cliques", 220, 345);
    text("Lembre-se de escolher dentro de 10s", 220, 380);
    // Porta 1:
    image(b, 130, 120, 200, 200);
  
      // Escolhendo a porta:
       if(mouseX > 222 && mouseX < 300&& mouseY > 100 && mouseY <300){
    image(a, 130, 120, 200, 200);
       if(mouseIsPressed){
      t = 7;
    }
  }
  }  
  
  else if(t == 7){
    background(240,255,255);
    fill(10);
    textSize(26);
    noStroke();
    textAlign(CENTER);   
      
    // Texto:
      textFont('Georgia');
      textStyle(BOLDITALIC);
      text("Do you understand the game rules?", 220, 50);
      textAlign(LEFT); 
      textSize(24);
      text("1 - Yes", 50, 130);
      text("2 - No", 50, 160);
      textSize(20);
      fill(215,190,190);
      text(" Escolha a alternativa correta e passe para a\netapa seguinte.", 30, 270);
      // escolher alternativa:
      if(mouseX > 45 && mouseX < 110 && mouseY > 120 && mouseY <140){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      textSize(22);
      text("1  - Yes", 50, 130);
     if(mouseIsPressed){
         t = 6;
         j = 1;
    }
    }
      if(mouseX > 45 && mouseX < 110 && mouseY > 150 && mouseY <170){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      textSize(22);
      text("2  - No", 50, 160);
    }
}
  
  // Intruções:
  else if(t == 3){
    background(230,230,250);
    fill(75,0,130);
    textSize(20);
    noStroke();
    textAlign(LEFT);
    text(" Instruções:", 5, 30);
    text(" Público-alvo:", 5, 190);
    text(" Disciplina:", 5, 270);
    text(" Habilidades:", 5, 300);
    fill(28,28,28);
    text(" O jogo consiste em três fases, cada uma com 3 sub-\n niveis. Em cada fase, selecione uma porta dentro do \n tempo determinado, e, quando solicitado, responda \n corretamente a pergunta. Caso escolha a alternativa \n incorreta, o jogo é encerrado. Use o mouse para jogar.", 5, 55);
    text(" Alunos que estejam cursando o 6° ano do fundamental\n e qualquer pessoa que esteja aprendendo inglês.", 5, 215);
    text("Lingua Inglesa", 100, 270);
    text("EF0LI20 e EF06LI19", 115, 300);  
    textSize(15);
    textAlign(CENTER);
    text(" EF06LI19: 'Utilizar o presente do indicativo para identificar pessoas\n (verbo to be) e descrever rotinas diárias'\n EF06LI20: 'Utilizar o presente contínuo para\n descrever ações em progresso'", 220, 325);
        
  } 
  
  //Créditos
  else if(t == 4){
    
    background(230,230,250);
    fill(75,0,130);
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(LEFT);
    text("CRÉDITOS", 150, 20);
    image(eu,10, 40, 100, 100);
    image(p, 10, 150, 100, 100);
    image(p, 10, 260, 100, 100);
    // TEXTOS
    textStyle(NORMAL);
    text(" Thaynara Maria Cunha de Andrade \n Função:", 110, 55);
    text(" Morgan Oliveira\n Função:", 110, 170);
    text(" Ser(es) de codinome Carlosejoao \n Função:", 110, 280);
    fill(28,28,28);
    text("Programadora", 180, 80);
    text("Elaboração das Perguntas", 180, 195);
    text("Ideia/descrição do jogo", 180, 305);
    
    textSize(15);
    text(" Estudante do curso bacharelado Interdisciplinar em \n Ciências e Tecnologia, na Universidade Federal do \n Rio Grande do Norte.", 110, 100);
    text(" Estudante do curso de Fisica, na Universidade Federal \n do Rio Grande do Norte.", 110, 215);
    text(" Descrição retirada do Colabeduc \n Sem dados para exibição...", 110, 325);   
  } 
  
  //Tela final do jogo quando perde
  else if (t == 5){
    
    background(230,230,250);
    fill(75,0,130);
    textSize(20);
    noStroke();
    textAlign(LEFT);
    text(" Infelizmente você não conseguiu :(", 50, 30);
    e = e + 1;
      if(e<=10){   
        image(fim, 50, 100, 100, 100);
}
      if(e<=20 && e >10){   
        image(fim, 100, 200, 100, 100);
}
      if(e<30 && e >20){   
        image(fim, 10, 150, 100, 100);
}
       if(e<40 && e >30){   
        image(fim, 300, 200, 100, 100);
}
       if(e<50 && e >40){   
        image(fim, 50, 300, 100, 100);
}
    
       if(e<60 && e >40){   
        image(fim, 300, 300, 100, 100);
}
       if(e<70 && e >20){   
        image(fim, 200, 200, 100, 100);
}

       if(e<=50 && e >40){   
        image(fim, 150, 100, 100, 100);
}
       else if(e > 60){ 
         image(fim, 30, 10, 400, 390);
    }
} 
  
//Tutorial e jogos seguintes:
  else if(t==6){
   //Nivel 1.1:
    if(j == 1){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 1.1", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
    //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300)
         {
   image(a, 30, 150, 130, 150);
       if(mouseIsPressed){
         t = 6;
      j = 3;
    }
  }   
    // segunda porta
             if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(mouseIsPressed){
      t = 6;
        j = 2;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
    image(a, 310, 150, 130, 150);
       if(mouseIsPressed){
         t=6;
      j = 3;
    }
  }
  }
     
    else if(j==2){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 1.1", 70, 50);
    fill(10);
    textSize(23);
    text("I woke up and went to the bathroom.\n To brush my teeth, I needed to find my:", 220, 90);
     textAlign(LEFT); 
     text("1 - Shower", 50, 170);
     text("2 - Toothpaste", 50, 200);
     text("3 - Toilet", 50, 230);
      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 50 && mouseX < 150 && mouseY > 160 && mouseY <180){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - Shower", 50, 170);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 50 && mouseX < 150 && mouseY > 220 && mouseY <240){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - Toilet", 50, 230);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 50 && mouseX < 170 && mouseY > 190 && mouseY <210){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - Toothpaste", 50, 200);
     if(mouseIsPressed){
         t = 6;
       j = 3;
    }
    }
}    
      
   //Nivel 1.2  
    else if(j==3){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 1.2", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
         //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300){
    image(a, 30, 150, 130, 150);
       if(value){
         t = 6;
      j = 4.1;
    }
  }   
         // segunda porta
             if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(value){
         t = 6;
      j = 5;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
    image(a, 310, 150, 130, 150);
       if(value){
         t = 6;
      j = 4;
    }
  }
  }
     
    else  if(j==4){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 1.2", 70, 50);
    fill(10);
    textSize(23);
    text("When I realized I was late, I went rushing\n to the door. But I had forgotten something \nimportant; without it I couldn’t leave.\n What was it again?", 220, 90);
       textAlign(LEFT);
       text("1 - My Keys", 50, 220);
       text("2 - My Microwave", 50, 250);
       text("3 - My Spoons", 50, 280);
       text("4 - My Pillow", 50, 310);
     //erradas
      if(mouseX > 50 && mouseX < 200 && mouseY > 235 && mouseY <260){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - My Microwave", 50, 250);
     if(mouseIsPressed){
         t = 5;
    }
    }
      if(mouseX > 50 && mouseX < 180 && mouseY > 270 && mouseY <300){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - My Spoons", 50, 280);
     if(mouseIsPressed){
         t = 5;
    }
    }
      if(mouseX > 50 && mouseX < 180 && mouseY > 305 && mouseY <315){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - My Pillow", 50, 310);
     if(mouseIsPressed){
         t = 5;
    }
    }
     
     // Certa
      if(mouseX > 50 && mouseX < 150 && mouseY > 210 && mouseY <230){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - My Keys", 50, 220);
     if(mouseIsPressed){
         t = 6;
       j = 5;
    }
    }
     
    }
      
    else   if(j==4.1){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 1.2", 70, 50);
    fill(10);
    textSize(23);
    text("I also needed to get my ****** so I could\n show a slideshow about my research at the\n conference my company was holding today.", 220, 90);
       textAlign(LEFT);
       text("1 - TikTok", 50, 190);
       text("2 - iPhone", 50, 220);
       text("3 - Laptop", 50, 250);
       text("4 - Pencil", 50, 280);
      
       //erradas
      if(mouseX > 50 && mouseX < 200 && mouseY > 180 && mouseY <200){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - TikTok", 50, 190);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
       if(mouseX > 50 && mouseX < 200 && mouseY > 210 && mouseY <230){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - iPhone", 50, 220);
     if(mouseIsPressed){
         t = 5;
    }
    }
   if(mouseX > 50 && mouseX < 200 && mouseY > 270 && mouseY <290){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - Pencil", 50, 280);
     if(mouseIsPressed){
         t = 5;
    }
    }
  
      // Correta
     if(mouseX > 50 && mouseX < 200 && mouseY > 240 && mouseY <260){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - Laptop", 50, 250);
     if(mouseIsPressed){
         t = 6;
         j = 5;
    }
    }
    }
     
    //Nivel 1.3
    else if(j == 5){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 1.3", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
         //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300){
   image(a, 30, 150, 130, 150);
       if(value){
      j = 6;
    }
  }   
         // segunda porta
             if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(value){
      j = 6.5;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
    image(a, 310, 150, 130, 150);
       if(value){
      j = 6.5;
    }
  }
  }
    
    else if(j==6){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 1.3", 70, 50);
    fill(10);
    textSize(23);
    text("After I got my keys and left the house,\n I needed to take the bus. Where could\n I take it?", 220, 90);
     textAlign(LEFT); 
     text("1 - My neighboor’s house", 50, 190);
     text("2 - The bus stop", 50, 220);
     text("3 - The grocery store", 50, 250);
     text("4 - Uber", 50, 280);
     text("5 - The bakery", 50, 310);

      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 50 && mouseX < 280 && mouseY > 175 && mouseY <200){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - My neighboor’s house", 50, 190);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 50 && mouseX < 250 && mouseY > 240 && mouseY <260){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - The grocery store", 50, 250);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 50 && mouseX < 150 && mouseY > 270 && mouseY <290){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - Uber", 50, 280);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 50 && mouseX < 200 && mouseY > 300 && mouseY <320){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("5 - The bakery", 50, 310);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 50 && mouseX < 170 && mouseY > 210 && mouseY <230){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - The bus stop", 50, 220);
     if(mouseIsPressed){
         t = 6;
       j = 6.5;
    }
    }
     }
     
    else if(j==6.5){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 1.3 - Final", 70, 50);
    fill(10);
    textSize(23);
    text(" My bus was taking too long but I didn’t have \nanother option, so I waited until it came. \nI gave my bus *ket to the driver and \nwent to work.", 220, 82);
     textAlign(LEFT); 
     text("1 - Cricket", 50, 200);
     text("2 - Bucket", 50, 230);
     text("3 - Ticket", 50, 260);
     text("4 - Brisket", 50, 290);
     text("5 - Wicket", 50, 320);
     text("6 - Trinket", 50, 350);
      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 50 && mouseX < 150 && mouseY > 185 && mouseY <210){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - Cricket", 50, 200);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 50 && mouseX < 150 && mouseY > 220 && mouseY <240){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - Bucket", 50, 230);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 50 && mouseX < 150 && mouseY > 280 && mouseY <300){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - Brisket", 50, 290);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 50 && mouseX < 150 && mouseY > 310 && mouseY <330){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("5 - Wicket", 50, 320);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 50 && mouseX < 150 && mouseY > 340 && mouseY <350){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("6 - Trinket", 50, 350);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 50 && mouseX < 150 && mouseY > 250 && mouseY <270){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - Ticket", 50, 260);
     if(mouseIsPressed){
         t = 6;
       j = 7;
    }
    }
     }
    
     // Nivel 2.1
    else if(j==7){
       
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 2.1", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
         //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300){
   image(a, 30, 150, 130, 150);
       if(value){
      j = 9;
    }
  }   
         // segunda porta
             if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(value){
      j = 9;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
    image(a, 310, 150, 130, 150);
       if(value){
      j = 8;
    }
  }
  }

    else if(j==8){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 2.1", 70, 50);
    fill(10);
    textSize(23);
    text("I finally got to work. My boss didn’t seem\n upset about me being late, so I got lucky I \nguess. I needed to eat something like bread,\n so I went to the...", 220, 90);
     textAlign(LEFT); 
     text("1 - Local Café", 50, 220);
     text("2 - Local Restaurant", 50, 250);
     text("3 - Local Bakery", 50, 280);
      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 50 && mouseX < 190 && mouseY > 210 && mouseY <230){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - Local Café", 50, 220);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 50 && mouseX < 220 && mouseY > 240 && mouseY <260){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - Local Restaurant", 50, 250);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 50 && mouseX < 200 && mouseY > 270 && mouseY <290){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - Local Bakery", 50, 280);
     if(mouseIsPressed){
         t = 6;
       j = 9;
    }
    }
     }
     
     //Nivel 2.2
    else if(j==9){
       
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 2.2", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
         //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300){
    image(a, 30, 150, 130, 150);
       if(value){
      j = 10.1;
    }
  }   
         // segunda porta
             if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(value){
      j = 10.2;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
    image(a, 310, 150, 130, 150);
       if(value){
      j = 11;
    }
  }
  }
     
    else if(j == 10.1){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 2.2", 70, 50);
    fill(10);
    textSize(23);
    text("After eating, it’s time to finish some easy\n work before heading to the conference.\n Do you know what a conference is?", 220, 90);
       textAlign(LEFT);
       text("1 - A meeting for consultation or discussion\n     about something;", 20, 190);
       text("2 - A place where we check if our salary can\n     get bigger;", 20, 250);
       text("3 - It’s the same as a playground;", 20, 310);
       text("4 - A festival for selling goods.", 20, 340);
      
       //erradas
      if(mouseX > 20 && mouseX < 400 && mouseY > 240 && mouseY <290){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - A place where we check if our salary can\n     get bigger;", 20, 250);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
       if(mouseX > 20 && mouseX < 320 && mouseY > 300 && mouseY <320){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - It’s the same as a playground;", 20, 310);
     if(mouseIsPressed){
         t = 5;
    }
    }
   if(mouseX > 20 && mouseX < 300 && mouseY > 330 && mouseY <350){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - A festival for selling goods.", 20, 340);
     if(mouseIsPressed){
         t = 5;
    }
    }
  
      // Correta
     if(mouseX > 20 && mouseX < 400 && mouseY > 180 && mouseY <230){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - A meeting for consultation or discussion\n     about something;", 20, 190);
     if(mouseIsPressed){
        t = 6;
         j = 11;
    }
    }
    
     }
     
    else if(j==10.2){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 2.2", 70, 50);
    fill(10);
    textSize(20);
    text("After helping Brian, we went to the conference. My\n presentation was the last, so I was able to enjoy all\n kinds of research. There was this one guy who bit his\n lip and said a weird word. Brian then asked me\n what the guy was trying to say with:", 220, 90);
       textStyle(ITALIC);
       text("“I’m a mekyanic – ow I bit my lip!”", 220, 215);
       textStyle(BOLDITALIC);
       textAlign(LEFT);
       text("1 - I’m a machinist", 50, 250);
       text("2 - I’m a mariner", 50, 280);
       text("3 - I’m a mathematician", 50, 310);
       text("4 - I’m a mechanic", 50, 340);
      
       //erradas
      if(mouseX > 50 && mouseX < 200 && mouseY > 240 && mouseY <260){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - I’m a machinist", 50, 250);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
       if(mouseX > 50 && mouseX < 190 && mouseY > 270 && mouseY <290){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - I’m a mariner", 50, 280);
     if(mouseIsPressed){
         t = 5;
    }
    }
   if(mouseX > 50 && mouseX < 250 && mouseY > 300 && mouseY <320){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - I’m a mathematician", 50, 310);
     if(mouseIsPressed){
         t = 5;
    }
    }
  
      // Correta
     if(mouseX > 50 && mouseX < 200 && mouseY > 330 && mouseY <350){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - I’m a mechanic", 50, 340);
     if(mouseIsPressed){
         t = 6;
         j = 11;
    }
    }
    
     }
     
     // Nível 2.3
     else if(j==11){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 2.3", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
         //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300){
   image(a, 30, 150, 130, 150);
       if(mouseIsPressed){
         t = 6;
         j = 12.1;
    }
  }   
         // segunda porta
             if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(value){
         t = 6;
      j = 12;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
    image(a, 310, 150, 130, 150);
       if(value){
         t = 6;
         j = 12.1;
    }
  }
     }
     
     else if(j == 12){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 2.3", 70, 30);
    fill(10);
    textSize(20);
    text("It was time for Brian’s presentation. He was talking\n about some theory – something to do with condensed\n matter physics. It was nicely done, but there was this\n one word I couldn’t remember the meaning no matter\n (no pun intended) how much I tried: “macroscopic”.\n O que essa palavra significa?", 220, 60);
     textAlign(LEFT); 
     text("1 - Something that can be seen with naked eyes.", 20, 225);
     text("2 - Something that can’t be seen with naked eyes;\n     only with an “macroscopic“ device.", 20, 255);
     text("3 - Something that can’t be seen at all.", 20, 310);
     text("4 - Something the size of a proton", 20, 340);
     text("5 - Something so big it can’t be seen with naked \n     eyes.", 20, 370);

      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 20 && mouseX < 400 && mouseY > 245 && mouseY <280){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - Something that can’t be seen with naked eyes;\n     only with an “macroscopic“ device.", 20, 255);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 20 && mouseX < 350 && mouseY > 300 && mouseY <320){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - Something that can’t be seen at all.", 20, 310);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 20 && mouseX < 300 && mouseY > 330 && mouseY <350){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - Something the size of a proton", 20, 340);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 20 && mouseX < 400 && mouseY > 360 && mouseY <390){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("5 - Something so big it can’t be seen with naked \n     eyes.", 20, 370);    
         if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 20 && mouseX < 390 && mouseY > 215 && mouseY <235){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - Something that can be seen with naked eyes.", 20, 225);
     if(mouseIsPressed){
         t = 6;
         j = 12.1;
    }
    }  
}
     
    else if(j==12.1){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 2.3 - Final", 70, 50);
    fill(10);
    textSize(23);
    text(" There was one thing I forgot to tell:\nRight before the conference, my coworker \nBrian came to me and asked if I could help\n him find a word that describes;", 220, 82);
    textStyle(ITALIC);
    text("“A coherent group of tested general \npropositions, commonly regarded as correct,\n that can be used as principles of explanation\n and prediction for a class of phenomena”:", 220, 200);
    fill(215,180,180);
    textSize(20);
    text("Clique em prosseguir para ver e escolher\n as alternativas.", 220, 320);
     
      if(mouseX > 330 && mouseX < 400 && mouseY > 370 && mouseY < 390){
    stroke(200);
    fill(215,180,180);
    rect(330, 355, 100, 40, 100);
      
       if(mouseIsPressed){
          t = 6;
          j = 12.2;
    }
  }
    textAlign(LEFT);
    textSize(18);
    fill(75,0,130);
    text("Prosseguir", 340, 380);
     }
     
     else if(j == 12.2){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(LEFT); 
    text("Nivel 2.3 - Final", 30, 50);
    fill(10);
    textSize(23);
     text("Alternativas da pergunta 2.3 - Final:", 50, 90);
     text("1 - Absolute truth", 50, 150);
     text("2 - Theory", 50, 190);
     text("3 - Common sense", 50, 230);
     text("4 - Religious thought", 50, 270);
     text("5 - An outrageous lie", 50, 310);
     text("6 - Something uncertain", 50, 350);
      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 50 && mouseX < 250 && mouseY > 140 && mouseY <170){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - Absolute truth", 50, 150);
      
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 50 && mouseX < 230 && mouseY > 220 && mouseY <240){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - Common sense", 50, 230);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 50 && mouseX < 250 && mouseY > 260 && mouseY <290){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - Religious thought", 50, 270);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 50 && mouseX < 250 && mouseY > 300 && mouseY <320){
         
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("5 - An outrageous lie", 50, 310);
         
     if(mouseIsPressed){
         t = 5;
    }
    }
       
       if(mouseX > 50 && mouseX < 270 && mouseY > 340 && mouseY <360){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("6 - Something uncertain", 50, 350);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 50 && mouseX < 150 && mouseY > 180 && mouseY <200){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - Theory", 50, 190);
     if(mouseIsPressed){
       t = 6;
       j = 13;
    }
    }
     }
     
     // Nivel 3.1:
     else if(j == 13){ 
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.1", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
         //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300){
   image(a, 30, 150, 130, 150);
       if(value){
         t = 6;
         j = 14.1;
    }
  }   
         // segunda porta
             if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(value){
         t = 6;
         j = 15;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
    image(a, 310, 150, 130, 150);
       if(value){
         t = 6;
         j = 14.2;
    }
  }
}
     
     else if(j == 14.1){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(LEFT); 
    text("Nivel 3.1", 30, 50);
    fill(10);
    textSize(20);
    text("     After Brian’s presentation, it was time for his\nwife, Mary, to talk about her research. She was \nresearching complex numbers. During her talk, she \nasked the audience if they knew what a complex \nnumber is. I think the answer is...", 20, 90);
      fill(215,180,180);
      text("OBS: O numero complexo é um número escrito \ncom uma parte real e outra imaginária (a + bi).", 20, 360);
      fill(10);
      text("1 - A number that can be expressed as a real or\n imaginary number", 20, 220);
      text("2 - It’s the same as a natural number", 20, 275);
      text("3 -  It’s an expansion of a real number – also called \nan “hyperreal number”", 20, 305);
      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 20 && mouseX < 320 && mouseY > 265 && mouseY <285){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - It’s the same as a natural number", 20, 275);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 20 && mouseX < 430 && mouseY > 295 && mouseY <330){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 -  It’s an expansion of a real number – also called \nan “hyperreal number”", 20, 305);     if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 20 && mouseX < 410 && mouseY > 210 && mouseY <250){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - A number that can be expressed as a real or\n imaginary number", 20, 220);
     if(mouseIsPressed){
         t = 6;
         j = 15;
    }
    }
    
     }
     
     else if (j == 14.2){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(LEFT); 
    text("Nivel 3.1", 30, 50);
    fill(10);
    textSize(23);
    text("Epistemologia é uma área da filosofia que \nestuda como o conhecimento é obtido, quais \nsão as suas fontes, o que é conhecimento, \nassim como o que é senso comum e o que é \nciência, entre outros aspectos que giram em \ntorno do saber.\n\nSabendo disso, clique em prosseguir para \nvisualizar a pergunta desse nível.", 20, 90);
       
       if(mouseX > 330 && mouseX < 400 && mouseY > 370 && mouseY < 390){
    stroke(200);
    fill(215,180,180);
    rect(330, 355, 100, 40, 100);
      
       if(mouseIsPressed){
          t = 6;
          j = 14.3;
    }
  }
  textAlign(LEFT);
  textSize(18);
  fill(75,0,130);
  text("Prosseguir", 340, 380);
     }
     
     else if(j == 14.3){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.1", 70, 50);
    fill(10);
    textSize(20);
    text("There was two people left to talk about their research \nbefore me, so I started getting nervous. In fact, I got \nso nervous that I forgot the meaning of \n“Epistemology”. Fortunately, Mary, the wife of \nBrian, was sitting on my left side and when I asked \nher, she answered correctly: ", 225, 90);
     textAlign(LEFT); 
     text("1 - It’s a branch of philosophy that talks about\n     knowledge.", 20, 250);
     text("2 - It a new brand of toothpaste.", 20, 305);
     text("3 - It’s a branch of science that talks about \n     quantum mechanics.", 20, 335);
      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 20 && mouseX < 290 && mouseY > 295 && mouseY <315){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - It a new brand of toothpaste.", 20, 305);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 20 && mouseX < 390 && mouseY > 325 && mouseY <355){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - It’s a branch of science that talks about \n     quantum mechanics.", 20, 335);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 20 && mouseX < 390 && mouseY > 240 && mouseY <285){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - It’s a branch of philosophy that talks about\n     knowledge.", 20, 250);
        if(mouseIsPressed){
         t = 6;
         j = 15;
    }
    }
}
     
    //Nivel 3.2
     else if(j== 15){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.2", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
         //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300){
   image(a, 30, 150, 130, 150);
       if(value){
       j = 16.1;
    }
  }   
         // segunda porta
         if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(value){
       j = 17;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
    image(a, 310, 150, 130, 150);
       if(value){
       j = 16.2;
    }
  }  
}
     
     else if(j == 16.1){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.2", 70, 30);
    fill(10);
    textSize(20);
    text("Since after this presentation it would be my turn,\n I went to the preparation room and started \norganizing my thoughts. My research was about the\nTravelling Salesman Problem, a very important \ncomputer science topic. How should I start my \npresentation? (Linguagem formal)", 220, 60);
       textAlign(LEFT);
       textSize(18);
       text("1 -“Hi! My name is Tom, and I’m here to talk about the\n      Travelling Salesman Problem”", 20, 225);
       text("2 - “Let just talk about my research quickly and leave”", 20, 280);
       text("3 - “Name’s Tom. I’ll teach you about computer science”", 20, 310);
       text("4 - “The Travelling Salesman is an important topic that \n      should be discussed even at the lower levels of\n      education....”", 20, 340);
      
       //erradas
      if(mouseX > 20 && mouseX < 400 && mouseY > 270 && mouseY <290){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - “Let just talk about my research quickly and leave”", 20, 280);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
       if(mouseX > 20 && mouseX < 420 && mouseY > 300 && mouseY <320){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - “Name’s Tom. I’ll teach you about computer science”", 20, 310);
     if(mouseIsPressed){
         t = 5;
    }
    }
   if(mouseX > 20 && mouseX < 420 && mouseY > 330 && mouseY <390){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - “The Travelling Salesman is an important topic that \n      should be discussed even at the lower levels of\n      education....”", 20, 340);
     if(mouseIsPressed){
         t = 5;
    }
    }
  
      // Correta
     if(mouseX > 20 && mouseX < 400 && mouseY > 215 && mouseY <245){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 -“Hi! My name is Tom, and I’m here to talk about the\n      Travelling Salesman Problem”", 20, 225);
     if(mouseIsPressed){
        t = 6;
        j = 17;
    }
    }
    
     }
     
     else if(j==16.2){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.2", 70, 50);
    fill(10);
    textSize(20);
    text("Just before how to start my presentation, I started \norganizing my slideshow and realized one of the \nslides had a misspelled word. I was talking about \nsomething that could last a thousand years to \ncompute, even on a supercomputer. What is the \nright way to write the word that refers to \n“thousand years”?", 220, 80);
       textAlign(LEFT);
       text("1 - Milenium", 50, 270);
       text("2 - Millenium", 50, 300);
       text("3 - Millennium", 50, 330);
       text("4 - Milennium", 50, 360);
      
       //erradas
      if(mouseX > 50 && mouseX < 200 && mouseY > 260 && mouseY <280){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - Milenium", 50, 270);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
       if(mouseX > 50 && mouseX < 190 && mouseY > 290 && mouseY <310){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - Millenium", 50, 300);
     if(mouseIsPressed){
         t = 5;
    }
    }
   if(mouseX > 50 && mouseX < 200 && mouseY > 350 && mouseY <370){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - Milennium", 50, 360);
     if(mouseIsPressed){
         t = 5;
    }
    }
  
      // Correta
     if(mouseX > 50 && mouseX < 200 && mouseY > 320 && mouseY <340){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - Millennium", 50, 330);
     if(mouseIsPressed){
         t = 6;
         j = 17;
    }
    }
    
     }
     
     //Nivel 3.3
     else if(j==17){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.3", 70, 50);
    fill(10);
    textSize(23);
    text("Escolha uma porta:", 220, 100);
    image(b, 30, 150, 130, 150);
    image(b, 170, 150, 130, 150);
    image(b, 310, 150, 130, 150);
         
         //primeira porta
         if(mouseX > 20 && mouseX < 150 && mouseY > 130 && mouseY <300){
   image(a, 30, 150, 130, 150);
       if(value){
         t = 6;
         j = 18.2;
    }
  }   
         // segunda porta
         if(mouseX > 180 && mouseX < 280 && mouseY > 130 && mouseY <300){
    image(a, 170, 150, 130, 150);
       if(value){
      t = 6;
      j = 18.3;
    }
  }
         //terceira porta
          if(mouseX > 315 && mouseX < 420 && mouseY > 130 && mouseY <300){
  image(a, 310, 150, 130, 150);
       if(value){
      t = 6;
      j = 20;
    }
  }
   
     }
     
     else if(j==18.2){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.3", 70, 30);
    fill(10);
    textSize(20);
    text("I fixed everything that was wrong with my slideshow. \nNow I needed to improve my looks. I went to the \nbathroom and looked at the mirror. I was looking \ngood, feeling good, and had an excellent work to \nshow. This conference was an important one, \nbecause my research would get visibility. Talking \nabout research and visibility, what is the highest tier \nprize a physics researcher can get?", 220, 60);
     textAlign(LEFT); 
     text("1 - Nobel Prize of Physics.", 20, 270);
     text("2 - LeRoy Apker Prize.", 20, 300);
     text("3 - Lawrence Bragg Prize.", 20, 330);
     text("4 - Lise Meitner Prize.", 20, 360);
     text("5 - Clifford Paterson Prize.", 20, 390);

      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 20 && mouseX < 290 && mouseY > 290 && mouseY <310){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - LeRoy Apker Prize.", 20, 300);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 20 && mouseX < 200 && mouseY > 320 && mouseY <340){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - Lawrence Bragg Prize.", 20, 330);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 20 && mouseX < 290 && mouseY > 380 && mouseY <400){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("5 - Clifford Paterson Prize.", 20, 390);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 20 && mouseX < 200 && mouseY > 350 && mouseY <370){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - Lise Meitner Prize.", 20, 360);
         if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 20 && mouseX < 290 && mouseY > 260 && mouseY <280){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - Nobel Prize of Physics.", 20, 270);
     if(mouseIsPressed){
         t = 6;
         j = 20;
    }
    }
    
     }
     
     else if(j==18.3){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.3", 70, 30);
    fill(10);
    textSize(20);
    text("Mary and Brian came over to the preparation room \nto check how I was doing and to encourage me. \nThey both knew this was an important moment to \nme, so that made me happy. After we talked for a \nwhile, Brian suggested that I rehearsed, and I \nthought it was a good idea. \nWhat does “rehearse” means?", 220, 60);
     textAlign(LEFT); 
     textSize(18);
     text("1 - To give up on something to try again next year.", 20, 245);
     text("2 - To change everything about a presentation.", 20, 275);
     text("3 - To practice what you’re going to present at a public \nevent.", 20, 305);
     text("4 - To say something again in a terrifying voice.", 20, 355);
     text("5 - To change places with someone.", 20, 380);
      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 20 && mouseX < 400 && mouseY > 235 && mouseY <255){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - To give up on something to try again next year.", 20, 245);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 20 && mouseX < 350 && mouseY > 265 && mouseY <285){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - To change everything about a presentation.", 20, 275);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 20 && mouseX < 390 && mouseY > 345 && mouseY <365){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - To say something again in a terrifying voice.", 20, 355);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 20 && mouseX < 300 && mouseY > 370 && mouseY <390){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("5 - To change places with someone.", 20, 380);
         if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 20 && mouseX < 400 && mouseY > 295 && mouseY <325){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 - To practice what you’re going to present at a public \nevent.", 20, 305);
     if(mouseIsPressed){
         t = 6;
         j = 20;
    }
    }      
}
     
     else if(j==20){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(CENTER); 
    text("Nivel 3.3 - Final", 70, 30);
    fill(10);
    textSize(20); 
    text("It was finally my time. I grabbed my laptop and \nwent on to the conference room once again. I said \neverything I wanted to say, and it all went smoothly. \nIt felt great. Everyone was astonished at my \ndiscoveries about the Travelling Salesman Problem. \nBut there was one thing that went unnoticed by me \nuntil after the event ended: My boss was watching. \nHe was a well- known researcher as well. Brian said \nit was better that I didn’t notice, otherwise it would \nmake me feel anxious. Mary agreed with him, \nsaying “It would have made your presentation feel \nonerous, wouldn’t it?” We all laughed and agreed \nwith her. It was a pleasurable day.    ", 220, 60);
     
      if(mouseX > 340 && mouseX < 450 && mouseY > 375 && mouseY < 395){
    stroke(200);
    fill(215,180,180);
    rect(350, 360, 90, 40, 100);
      
       if(mouseIsPressed){
          t = 6;
          j = 20.1;
    }
  }
  textAlign(LEFT);
  textSize(16);
  fill(75,0,130);
  text("Prosseguir", 360, 385);
}
     
     else if(j==20.1){
    background(240,255,255);
    fill("#4B0082");
    textFont('Georgia');
    textStyle(BOLDITALIC);
    textSize(20);
    noStroke();
    textAlign(LEFT); 
    text("Nivel 3.3 - Final", 30, 50);
    fill(10);
    textSize(18);
    textAlign(CENTER); 
    text("So, for the final question: What does “onerous” mean?", 220, 90);
     textAlign(LEFT); 
     text("1 - Something so easy it’s boring", 30, 135);
     text("2 - Something tasteless", 30, 175);
     text("3 -Something burdensome, really hard to handle", 30, 215);
     text("4 - Something not worthy of praise", 30, 255);
     text("5 - Something complicated to explain, like a really hard \nmath problem", 30, 295);
     text("6 - Something that can’t be good no matter what \nchanges", 30, 350);
      
  // ALTERNATIVAS ERRADAS    
    if(mouseX > 30 && mouseX < 350 && mouseY > 125 && mouseY <145){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("1 - Something so easy it’s boring", 30, 135);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 30 && mouseX < 290 && mouseY > 165 && mouseY <185){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("2 - Something tasteless", 30, 175);
     if(mouseIsPressed){
         t = 5;
    }
    }
        if(mouseX > 30 && mouseX < 300 && mouseY > 245 && mouseY <265){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("4 - Something not worthy of praise", 30, 255);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 30 && mouseX < 430 && mouseY > 285 && mouseY <320){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("5 - Something complicated to explain, like a really hard \nmath problem", 30, 295);
     if(mouseIsPressed){
         t = 5;
    }
    }
       if(mouseX > 30 && mouseX < 400 && mouseY > 340 && mouseY <370){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("6 - Something that can’t be good no matter what \nchanges", 30, 350);
     if(mouseIsPressed){
         t = 5;
    }
    }
      
      //ALTERNATIVA CORRETA
      if(mouseX > 30 && mouseX < 400 && mouseY > 205 && mouseY <225){
      stroke("#4B0082");
      fill(240);
      textAlign(LEFT); 
      noStroke(24);
      text("3 -Something burdensome, really hard to handle", 30, 215);
     if(mouseIsPressed){
         t = 8;
    }
    }
}
//FIM TELA 6
   }   
  
//voltar tela inicial 
  if(t==3 || t == 4){
  if(mouseX > xc && mouseX < xc + lc && mouseY > yc && mouseY < yc + hc){
    stroke(200);
    fill(240,255,255);
    rect(xc, yc, lc, hc, 100);
      
       if(mouseIsPressed){
          t = 1;
    }
  }
    
    fill(75,0,130);
    noStroke();
    textSize(15);
    textAlign(LEFT);
    text("Inicio", 20, 375);
}

// Ganhou
  if(t==8){
    background(230,230,250);
    fill(75,0,130);
    textSize(20);
    noStroke();
    textAlign(LEFT);
    text("PARABÉÉNS!!! VOCÊ CONSEGUIU!!!", 50, 50);
    image(ganhou, 0,60,450,400);
    
  }
  
// Voltar tela inicial quando perde ou ganha o jogo
  if( t == 5 || t == 8){
  if(mouseX > 160 && mouseX < 290 && mouseY > 180 && mouseY < 220){
    stroke(100);
    fill(245,245,245);
    rect(140, 170, 155, 50, 10);
      
       if(mouseIsPressed){
          t = 1;
    }
  }
    fill(245,245,245);
    rect(140, 170, 155, 50, 10);
    fill(25,25,112);
    noStroke(200);
    textSize(20);
    textStyle(ITALIC);
    textAlign(CENTER);
    text("TELA INICIAL", 220, 200);
}

// o tempo
  if(t==6){
  if(int(j%2==1) && int(j%2!=0)){
      cont = cont + 1;
      tempo = parseInt(cont/rate);
      if(tempo > 10){
      t = 5; //  colocar a tela final
      cont = 0;
    }
}
  else {
    cont = 0;
    temp = 0;
  }
}
}