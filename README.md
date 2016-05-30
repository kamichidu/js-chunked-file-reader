ChunkdFileReader
========================================================================================================================
Reading a large file in the browser context as chunked.

How to Use
------------------------------------------------------------------------------------------------------------------------
```js
var fileElement= document.querySelector('input[type="file"]');
fileElement.addEventListener('change', function(evt){
    // Create object
    var reader= new ChunkdFileReader();

    // Subscribe event listeners
    reader.subscribe('begin', function(evt){
        console.log('Start reading');
    });
    reader.subscribe('progress', function(evt){
        console.log('Progress ' + evt.done + ' / ' + evt.nchunks + ' chunks (' + (evt.done_ratio * 100).toFixed(2) + '%)');
    });
    reader.subscribe('chunk', function(evt){
        console.log('Read chunk: ' + new Uint8Array(evt.chunk));
    });
    reader.subscribe('end', function(evt){
        console.log('Done reading');
    });

    // Read it!
    reader.readChunks(evt.target.files[0]);
});
```
