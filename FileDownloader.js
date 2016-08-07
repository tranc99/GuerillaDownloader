function getFileName(link) { 
  return link.innerHTML.toString().concat(".cpp"); 
}

numLinks = document.links.length;

alert("Now downloading " + numLinks + "documents found");

for(i=0; i < 350; i++) { 
  af = document.links[i]; 
  console.log(i + ": \n"); 
  console.log(af); 
  af.setAttribute("download", getFileName(af)); 
  af.click(); 
  
}