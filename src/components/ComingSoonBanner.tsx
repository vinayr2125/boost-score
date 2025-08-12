import { Sparkles, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComingSoonBanner = () => {
  const handleNotifyClick = () => {
    // Redirect to HubSpot form
    window.open("https://2du5os.share-eu1.hsforms.com/29EC3XhDbQZ-ojQayx4CreA", "_blank");
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-3">
        <div className="flex items-center justify-center md:justify-between gap-4 flex-wrap">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="font-semibold text-lg whitespace-nowrap">Big Launch Coming Soon!</span>
            </div>
            <span className="text-sm opacity-90">
              Be the first to access our game-changing LinkedIn automation tools
            </span>
          </div>
          
          <Button 
            onClick={handleNotifyClick}
            variant="secondary" 
            size="sm"
            className="whitespace-nowrap"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notify Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonBanner;