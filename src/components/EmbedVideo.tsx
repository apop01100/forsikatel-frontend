

const EmbedVideo = ({ videoId, title, channel }: { videoId: string | undefined, title?: string, channel?: string}) => {
    // const [channel, setChannel] = useState("Loading...");

    
    // useEffect(() => {
    //     const fetchVideoTitle = async () => {
    //         try{
    //             const ytVideoId = getYouTubeVideoId(videoId)
    //             const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    //             const data = await response.json();
    //             setTitle(data.items[0].snippet.title);
    //             setChannel(data.items[0].snippet.channelTitle);
    //             console.log(title, channel);
    //         } catch (error) {
    //             console.error("Error fetching video title:", error);
    //         }
            
    //     };
    //     function getYouTubeVideoId(videoId: string) {
    //         const match = videoId.match(/(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^?&]+)/);
    //         return match ? match[1] : null;
    //     }

    //     fetchVideoTitle();
    // }, [videoId]);

    function getYouTubeVideoId(videoId: string) {
                const match = videoId.match(/(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^?&]+)/);
                return match ? match[1] : null;
        }
    
  return (
    <>
        <div className="bg-neutral-500 rounded-2xl">
            <iframe
                id="ytplayer"
                className="rounded-t-2xl w-full 2xl:w-[45rem] 2xl:h-[20rem] md:h-[28rem] h-[15rem]"
                typeof="text/html"
                src={`https://www.youtube.com/embed/${getYouTubeVideoId(videoId || "")}`}
                allow="accelerometer; autoplay; picture-in-picture"
                allowFullScreen
            >
            </iframe>
        </div>
        <div className="px-10 pt-3">
            <h3 className="font-normal font-source text-lg text-neutral-500">{channel || "Loading..."}</h3>
            <h2 className="text-2xl font-semibold font-source text-neutral-900">{title || "Loading..."}</h2>
        </div>
    </>
  )
}

export default EmbedVideo