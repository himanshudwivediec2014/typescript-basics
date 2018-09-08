class YoutubeVideo{
    //Constructor starts
        constructor(
            private videoTitle: string, 
            private channelName: string, 
            private noOfSubscribers: number,
            private videoDuration: string,
            private videoQuality: string,
            private noOfLikes: number, 
            private noOfDislikes: number,
            private videoPublishedDate: string,
            private noOfComments: number,
            private fullScreen: boolean,
            private category: string,
            private description: string,
            private comments: string[]
        ){
            this.videoTitle = videoTitle;
            this. channelName = channelName;
            this.noOfSubscribers = noOfSubscribers;
            this.videoDuration = videoDuration;
            this.videoQuality = videoQuality;
            this.noOfLikes = noOfLikes;
            this.noOfDislikes = noOfDislikes;
            this.videoPublishedDate = videoPublishedDate;
            this.noOfComments = noOfComments;
            this.fullScreen = fullScreen;
            this.category = category;
            this.description = description;
            this.comments = comments;
        }
    //Constructor Ends

    //getters
        getVideoTitle = ():string => {
            return this.videoTitle
        }
        getChannelName = ():string => {
            return this.channelName;
        }
        getSubscribers = ():number => {
            return this.noOfSubscribers;
        }
        getDuration = ():string =>{
            return this.videoDuration;
        }
        getLikes = ():number =>{
            return this.noOfLikes;
        }
        getDislikes = ():number =>{
            return this.noOfDislikes;
        }
        getPublishedDate = ():string =>{
            return this.videoPublishedDate;
        }
        getNumberOfComments = () =>{
            return this.noOfComments;
        }
        getVideoQuality = ():string =>{
            return this.videoQuality;
        }
        isFullScreenOn = ():boolean =>{
            return this.fullScreen;
        }
        getCategory = ():string =>{
            return this.category;
        }
        getVideoDescription = ():string =>{
            return this.description;
        }
        getComments = ():string[] =>{
            return this.comments;
        }
        /* */
        getRelatedVideos = () =>{
            console.log("Related Videos are shown.")
        }
    //Getters end

    //setters
        setCategory = (setCategory:string) =>{
            this.category = setCategory;
        }
        setFullScreen = (screen:boolean) =>{
            this.fullScreen = screen;
        }
        setVideoTitle = (title:string) => {
        this.videoTitle = title;
        }
        setChannelName = (name:string) => {
            this.channelName = name;
        }
        setSubscribers = (subscribers:number) => {
            this.noOfSubscribers = subscribers;
        }
        setDuration = (duration:string) =>{
            this.videoDuration = duration;
        }
        setLikes = (likes:number) =>{
            this.noOfLikes = likes;
        }
        setDislikes = (dislikes:number) =>{
            this.noOfDislikes = dislikes;
        }
        setNumberOfComments = (comments:number) =>{
            this.noOfComments = comments;
        }
        setVideoQuality = (quality:string) =>{
            this.videoQuality = quality;
        }
        setComments = (...comment:string[]) =>{
            this.comments = this.comments.concat(comment);
        }
    //setters ends
}

//An Object of class YoutubeVideo
    let video = new YoutubeVideo("DO's and Dont's of programming", "Some Channel", 1000000, "3:03", "240px", 34000, 899, "06/09/2018", 3200, true, "Science and Technology", "This is a video for and by the programmers !!", ["Very Nice Video."])

//trying to manipulate the properties of the video object 
    console.log(`The current video quality is ${video.getVideoQuality()}.`);
    
    video.setVideoQuality("780px");

    console.log(`The updated video quality is ${video.getVideoQuality()}.`);

    console.log(`The title of the video is "${video.getVideoTitle()}".`);
    console.log(`Published on ${video.getPublishedDate()}.`);
    console.log(`The name of the youtube channel is "${video.getChannelName()}".`);

    console.log(`Number of subscribers are ${video.getSubscribers()}.`);
    video.setSubscribers(1000500)
    console.log(`Updated number of subscribers are ${video.getSubscribers()}.`);


    console.log(`The video duration is ${video.getDuration()}.`);

    console.log(`Number of comments: ${video.getNumberOfComments()}.`)
    video.setNumberOfComments(video.getNumberOfComments() + 299);
    console.log(`Updated number of comments: ${video.getNumberOfComments()}.`);

    console.log(`FUll Screen on ?? - ${video.isFullScreenOn()}.`)
    video.setFullScreen(false);
    console.log(`FUll Screen on ?? - ${video.isFullScreenOn()}.`)

    console.log(`Category: "${video.getCategory()}"`);
    console.log(`Description: "${video.getVideoDescription()}"`);

    console.log(`Comments: ${video.getComments()}`);
    video.setComments("\n          Very Informative Video.", "\n          Its better than the previous one !!");
    console.log(`Comments: ${video.getComments()}`);