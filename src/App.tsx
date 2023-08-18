import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';

function App() {
  // create & configure cloud instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'djwtajs1l',
    },
  });

  // use video with public ID, 'video-tv-01_dphuok'
  const homePageVideo = cld.video('video-tv-01_dphuok');

  return (
    <div className="h-screen flex justify-center items-center">
      <AdvancedVideo cldVid={homePageVideo} autoPlay loop />
    </div>
  );
}

export default App;
