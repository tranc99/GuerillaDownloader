console.log("Usage, invoke function:  downloadFiles(extension, containerID) where extension is the file extension you want files saved as, less the '.', so e.g. 'cpp' for '.cpp' file ending");
console.log("The optional parameter containerID is the HTML ID of the element think div or other, e.g. 'myId', without the hash, which wraps the area from which you want to download files, in case you do not want the selection to be the entire page.");
function getFileName(link, extension, num) { 
  return link.innerHTML.toString().concat(num).concat(".").concat(extension); 
}


function announceDownload(numLinks, extension) {
  alert("Now downloading " + numLinks + "documents found" + ", using extension: " + extension);
}


function downloadFiles(extension, containerID) {
  numLinks = document.links.length;
  if(containerID) {
      numLinks = $("#".concat(containerID)).find("a").length;
  }
  
  announceDownload(numLinks, extension);
  
  for(i=0; i < numLinks; i++) { 
    
    af = document.links[i]; 
    if(containerID) {
      af = $("#".concat(containerID)).find("a")[i];
    }
    console.log(i + ": \n"); 
    console.log(af); 
    af.setAttribute("download", getFileName(af, extension, i.toString())); 
    af.click(); 
    
  }
  
}

downloadFiles("html");

