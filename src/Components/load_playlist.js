export const load_playlist = (playlistId) => new Promise((resolve, reject) => {
    const gapi = window.gapi
    
    gapi.load('client', () => {
    
        gapi.client.setApiKey('AIzaSyDbpJEW0O41SU1v8Q34sBkuRacHGL4_xw0');
    
        gapi.client.load('youtube', 'v3', () => {
            console.log('youtube api loaded')
            var request = gapi.client.youtube.playlistItems.list({
                part: 'snippet',
                playlistId,
                maxResults: 15
            });
    
            const videos = []

            request.execute( ( response ) => {
                if(response.error){
                    const error = new Error(response.error.message)
                    reject(error)
                    return; 
                }
                for (var i = 0; i < response.items.length; i++) {
                    const { snippet:{title,thumbnails:{high:{url}},description,resourceId:{videoId}}} = response.items[i]
                    const video = {title,thumbnail:url,description,id:videoId}
                    videos.push(video)
                }
                resolve(videos)
            });
        });
    })
})