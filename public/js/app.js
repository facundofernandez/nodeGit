(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function b(){return a['default']}:function b(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){c(1),a.exports=c(2)},function(a,b){function c(){axios.get('api/tags').then(function(a){var b=a.data,c=document.querySelector('.tags');c.innerHTML='';var e,f=function a(b){var e=document.createElement('span');e.addEventListener('click',function(){axios.get('api/checkout/'+b).then(function(a){console.log('checkout',a.data),d()})}),e.innerHTML='<span>'.concat(b,'</span>'),c.appendChild(e)},g=!0,h=!1;try{for(var i,j,k=b[Symbol.iterator]();!(g=(i=k.next()).done);g=!0)j=i.value,f(j)}catch(a){h=!0,e=a}finally{try{g||null==k.return||k.return()}finally{if(h)throw e}}})}function d(){axios.get('api/branch').then(function(a){var b=a.data.current,c=a.data.branches,e=document.querySelector('.branches');e.innerHTML='',console.log(c);var f=function a(b){var f=c[b],g=document.createElement('span');g.addEventListener('click',function(){axios.get('api/checkout/'+f.name).then(function(a){console.log('checkout',a.data),d()})}),g.innerHTML='<span class="'.concat(f.current?'current':'','">').concat(f.name,'</span>'),e.appendChild(g)};for(var g in c)f(g)})}function e(){var a=document.querySelector('.btn-pull');axios.get('api/fetch').then(function(a){d(),c()})}function f(){var a=document.querySelector('.remote .tags'),b=document.querySelector('.remote .heads');axios.get('api/listRemote').then(function(c){a.innerHTML='',b.innerHTML='';var d,e=!0,f=!1;try{for(var g,h,i=c.data.heads[Symbol.iterator]();!(e=(g=i.next()).done);e=!0)h=g.value,b.innerHTML+='<p>'.concat(h,'</p>')}catch(a){f=!0,d=a}finally{try{e||null==i.return||i.return()}finally{if(f)throw d}}var j,k=!0,l=!1;try{for(var m,n,o=c.data.tags[Symbol.iterator]();!(k=(m=o.next()).done);k=!0)n=m.value,a.innerHTML+='<p>'.concat(n,'</p>')}catch(a){l=!0,j=a}finally{try{k||null==o.return||o.return()}finally{if(l)throw j}}})}f(),setInterval(function(){f()},6e4),d(),c()},function(a,b){}]);