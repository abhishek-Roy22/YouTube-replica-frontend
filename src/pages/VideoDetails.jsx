import React from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share2, Download, Flag } from 'lucide-react';
import { videos } from '../utils/StaticData';
import VideoCard from '../components/VideoCard';

function VideoDetails() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === Number(id));

  if (!video) {
    return <div className="p-6">Video not found</div>;
  }

  const relatedVideos = videos.filter((v) => v.id !== video.id).slice(0, 5);

  return (
    <div className="w-full flex flex-col md:flex-row p-1 md:p-6 gap-2 overflow-hidden">
      <div className="lg:col-span-3">
        <div className="aspect-video w-full">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="mt-4">
          <h1 className="text-base md:text-xl font-semibold text-slate-100">
            {video.title}
          </h1>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${video.channel}`}
                  alt={video.channel}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-normal text-slate-400 md:font-medium">
                  {video.channel}
                </h3>
                <p className="text-sm text-gray-600">1.2M subscribers</p>
              </div>
              <button className="ml-4 px-4 py-2 bg-slate-800 text-slate-100 rounded-full hover:bg-gray-800">
                Subscribe
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center bg-slate-800 rounded-full">
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-400 rounded-l-full">
                  <ThumbsUp className="w-5 h-5" />
                  <span>123K</span>
                </button>
                <button className="px-4 py-2 hover:bg-slate-400 rounded-r-full border-l border-slate-400">
                  <ThumbsDown className="w-5 h-5" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-400 rounded-full">
                <Share2 className="w-5 h-5" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-400 rounded-full">
                <Download className="w-5 h-5" />
                Download
              </button>
              <button className="p-2 hover:bg-slate-400 bg-slate-800 rounded-full">
                <Flag className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 bg-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>{video.views} views</span>
              <span>•</span>
              <span>2 weeks ago</span>
            </div>
            <p className="text-sm text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <h2 className="font-medium mb-4 text-slate-700">Related Videos</h2>
        <div className="space-y-4 pb-2">
          {relatedVideos.map((relatedVideo) => (
            <VideoCard key={relatedVideo.id} {...relatedVideo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
