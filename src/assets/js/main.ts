fetch("./assets/js/lekkerspelen.json")
  .then(response => response.json())
  .then(streams => 
    renderStreams(streams)    
);


const renderStreams = (streams: any) => {
    console.log(streams.length);
    
    console.log(streams[0]);

    for (let i = 0; i < 200; i++) {

        const stream = streams[i]
        const image = stream.thumbnail_url.replace('%{width}', '320').replace('%{height}', '180');
            
        document.querySelectorAll('.streams')[0].innerHTML += `
        <a href="${stream.url}" target="_blank" class="stream">
            <img src="${image}" class="stream__thumbnail">
            <div class="stream__content">
                <h2 class="stream__title">${stream.title}</h2>
                <div class="stream__duration">${stream.duration}</div>
                <div class="stream__date">${stream.published_at}</div>
            </div>
        </a>
        `;
    };
}