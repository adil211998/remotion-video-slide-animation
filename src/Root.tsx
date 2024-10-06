import { Composition, staticFile } from "remotion";
import VideoPlay, { schema } from "./video";

export const RemotionRoot: React.FC = () => {
  const durationFrame = 30 * 7;
  return (
    <>
      <Composition
        id="Video"
        component={VideoPlay}
        schema={schema}
        durationInFrames={durationFrame}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          screenProps: {
            scene1Props: {
              text: 'Modern',
              image: staticFile('modern.jpg'),
              color: '#ffffff'
            },
            scene2Props: {
              text: 'Fashion',
              image: staticFile('fashion.jpg'),
              color: '#ffffff',
              textStrokeColor: '#000000',
              textStrokeWidth: '1px'
            },
            scene3Props: {
              text: 'Vibe',
              image: staticFile('vibe.jpg'),
              color: '#ffffff',
              textStrokeColor: '#000000',
              textStrokeWidth: '1px',
              zoomInProps: {
                text: "Party",
                image: staticFile('party.jpg'),
                color: "#fff"
              },
              zoomin2Props: {
                text: "Sleek",
                image: staticFile('sleek.jpg'),
                color: "#fff",
                backgroundColor: "#fff"
              }
            }
          },
          scene4Props: {
            text: 'Rythm',
            image: staticFile('rythm.jpg'),
            color: "#ffffff",
            backgroundColor: "#000000",
            textStrokeColor: '#ffffff',
            textStrokeWidth: '1px',
          },
          scene5Props: {
            text: 'Style',
            image: staticFile('style.jpg'),
            color: "#ffffff",
            backgroundColor: "#ffffff",
            textStrokeColor: '#000000',
            textStrokeWidth: '1px',
          },
          scene6Props: {
            logo: staticFile('logos/example-logo-text.svg'),
            backgroundColor: "#ffffff",
          }
        }}
      />
    </>
  );
};
