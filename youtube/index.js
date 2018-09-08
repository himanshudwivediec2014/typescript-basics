var YoutubeVideo = /** @class */ (function () {
    //Constructor starts
    function YoutubeVideo(videoTitle, channelName, noOfSubscribers, videoDuration, videoQuality, noOfLikes, noOfDislikes, videoPublishedDate, noOfComments, fullScreen, category, description, comments) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.channelName = channelName;
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
        //Constructor Ends
        //getters
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getSubscribers = function () {
            return _this.noOfSubscribers;
        };
        this.getDuration = function () {
            return _this.videoDuration;
        };
        this.getLikes = function () {
            return _this.noOfLikes;
        };
        this.getDislikes = function () {
            return _this.noOfDislikes;
        };
        this.getPublishedDate = function () {
            return _this.videoPublishedDate;
        };
        this.getNumberOfComments = function () {
            return _this.noOfComments;
        };
        this.getVideoQuality = function () {
            return _this.videoQuality;
        };
        this.isFullScreenOn = function () {
            return _this.fullScreen;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getVideoDescription = function () {
            return _this.description;
        };
        this.getComments = function () {
            return _this.comments;
        };
        /* */
        this.getRelatedVideos = function () {
            console.log("Related Videos are shown.");
        };
        //Getters end
        //setters
        this.setCategory = function (setCategory) {
            _this.category = setCategory;
        };
        this.setFullScreen = function (screen) {
            _this.fullScreen = screen;
        };
        this.setVideoTitle = function (title) {
            _this.videoTitle = title;
        };
        this.setChannelName = function (name) {
            _this.channelName = name;
        };
        this.setSubscribers = function (subscribers) {
            _this.noOfSubscribers = subscribers;
        };
        this.setDuration = function (duration) {
            _this.videoDuration = duration;
        };
        this.setLikes = function (likes) {
            _this.noOfLikes = likes;
        };
        this.setDislikes = function (dislikes) {
            _this.noOfDislikes = dislikes;
        };
        this.setNumberOfComments = function (comments) {
            _this.noOfComments = comments;
        };
        this.setVideoQuality = function (quality) {
            _this.videoQuality = quality;
        };
        this.setComments = function () {
            var comment = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                comment[_i] = arguments[_i];
            }
            _this.comments = _this.comments.concat(comment);
        };
        this.videoTitle = videoTitle;
        this.channelName = channelName;
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
    return YoutubeVideo;
}());
//An Object of class YoutubeVideo
var video = new YoutubeVideo("DO's and Dont's of programming", "Some Channel", 1000000, "3:03", "240px", 34000, 899, "06/09/2018", 3200, true, "Science and Technology", "This is a video for and by the programmers !!", ["Very Nice Video."]);
//trying to manipulate the properties of the video object 
console.log("The current video quality is " + video.getVideoQuality() + ".");
video.setVideoQuality("780px");
console.log("The updated video quality is " + video.getVideoQuality() + ".");
console.log("The title of the video is \"" + video.getVideoTitle() + "\".");
console.log("Published on " + video.getPublishedDate() + ".");
console.log("The name of the youtube channel is \"" + video.getChannelName() + "\".");
console.log("Number of subscribers are " + video.getSubscribers() + ".");
video.setSubscribers(1000500);
console.log("Updated number of subscribers are " + video.getSubscribers() + ".");
console.log("The video duration is " + video.getDuration() + ".");
console.log("Number of comments: " + video.getNumberOfComments() + ".");
video.setNumberOfComments(video.getNumberOfComments() + 299);
console.log("Updated number of comments: " + video.getNumberOfComments() + ".");
console.log("FUll Screen on ?? - " + video.isFullScreenOn() + ".");
video.setFullScreen(false);
console.log("FUll Screen on ?? - " + video.isFullScreenOn() + ".");
console.log("Category: \"" + video.getCategory() + "\"");
console.log("Description: \"" + video.getVideoDescription() + "\"");
console.log("Comments: " + video.getComments());
video.setComments("\n          Very Informative Video.", "\n          Its better than the previous one !!");
console.log("Comments: " + video.getComments());
