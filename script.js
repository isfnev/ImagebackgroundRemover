const fileEl = document.getElementsByTagName('input')[0];
const btnEl = document.getElementsByTagName('button')[0];

let imgUrl ;

fileEl.addEventListener('change',()=>{
    const imgEl = document.getElementsByTagName('img')[0];
    if ( imgEl )
        document.getElementsByClassName('container')[0].removeChild(imgEl);

    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', fileEl.files[0]);

    fetch('https://api.remove.bg/v1.0/removebg',{
        method:'POST',
        headers:{
            'X-Api-Key':'cX3YxRbsrQCdEMbhgonCZvT3'
        },
        body:formData,
    }).then((response)=>{
        return response.blob();
    }).then((blob)=>{
        const url = URL.createObjectURL(blob);
        const img = document.createElement('img');
        img.src = imgUrl = url ;
        document.getElementsByClassName('container')[0].appendChild(img);
    })
    
    btnEl.hidden = false;
});

btnEl.addEventListener('click',function(){
    const anchorEl = document.createElement('a');
    anchorEl.href = imgUrl ;
    anchorEl.download = 'removebg.png';
    document.appendChild(anchorEl);
    anchorEl.click();
    document.removeChild(anchorEl);
});