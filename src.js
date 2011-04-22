for($ in a)a[$[0]+($[6]||$[2])]=a[$];
s=c.width=c.height=320;v=120;k=20;q=200;p=[];l=3;j=I=0;t=2;z=10;h=160;
C='#00F7#8407#FFF7#0007#AAF7#0407#8F87#4207#C81'.split(7);
a.font='20px serif'
with(a) {
  B=cL(0,0,0,v);with(B){addColorStop(0,C[0]);addColorStop(1, C[4])};
  G=cL(0,v,0,s);with(G){addColorStop(0,C[5]);addColorStop(1, C[6])};
  S=cL(0,v,0,s);with(S){addColorStop(0,C[7]);addColorStop(1, C[8])};  
};
sT=setTimeout;
window.onkeydown=function(e) {key=e.keyCode;if(key==37)t--;if(key==39)t++;t=t<0?0:(t>3?3:t)};
f=function() {
  if(p.length==5 && ((p[4] & (1 << t)) > 0)) {
    l--,p=[];
    if(l<=0)g()
  } else I+=5;
  if(!(I%q))z=z<1?1:z-1;
  p.unshift(Math.random()*14|0);
  if(p.length>5)p.pop();
},g=function() {
  a.fx('GAME OVER', y,20);
  l=3;I=0;z=11;
  clearTimeout(T);
  sT(d, 2000);
},d=function() {
  with(a) {
    
    sv();
    ce(0,0,s,s);
    fillStyle=B;fc(0,0,s,v);
    fillStyle=G;fc(0,v,s,q);
    ta(0,v);
    // field
    ba();fillStyle=S;
    mv(h,0);ln(s,q);ln(0,q);ln(h,0);ca();fl();
    fillStyle=C[1];
    ll=p.length;for(i=0;i<ll;i++){
      y=(7*i*i);
      for(x=0;x<4;x++) {
        if((p[i] & (1 << x)) > 0) a.fillRect(x*(10*i + 5) + (h - (i*20)),y + 40,i*5+1,i*2+2);
      }
        
    }
    r = 0.37-(t/4);
    ta(70+(t*60),h);
    rt(r);
    strokeStyle=C[2];
    lineWidth=5;
    ba();
    ac(0,-10,12,-4,1, false);
    sr();
    fillStyle=C[1];
    fc(-12,-4,24,16);
    fc(-18,0,5,k);
    fc(13,0,5,k);
    re();
    fillStyle=C[3];
    
    fx(I, 280, k);
    fx(l, k,k);
    
  }
  T=sT(d,50);
  j++;
  if(j%z==0)f();
};
d();