import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { AbsoluteFill } from "remotion";
import { wipe } from "@remotion/transitions/wipe";
import { z } from "zod";
import Screens, { ScreensSchema } from "./Screens";
import Scene4, { scene4Schema } from "./Components/Scene4";
import Scene5, { scene5Schema } from "./Components/Scene5";
import Scene6, { scene6Schema } from "./Components/Scene6";
import Bubbles from "./Components/Bubbles";
import "./style.css";

export const schema = z.object({
    screenProps: ScreensSchema,
    scene4Props: scene4Schema,
    scene5Props: scene5Schema,
    scene6Props: scene6Schema,
  });

type VideoPlayProps = z.infer<typeof schema> 


const VideoPlay: React.FC<VideoPlayProps> = (props) => {

    return (
        <AbsoluteFill
        style={{
            background: "#000000",
            color: "#fff",
        }}
        className="claspo-nd-font"
        >
            <TransitionSeries>
                <TransitionSeries.Sequence durationInFrames={110}>
                    <Screens {...props.screenProps} />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition
                    presentation={wipe({
                        direction: "from-top"
                    })}
                    timing={linearTiming({ durationInFrames: 10})}
                />
            
                <TransitionSeries.Sequence durationInFrames={40}>
                    <Scene4 {...props.scene4Props} />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition
                presentation={wipe({
                    direction: "from-top"
                })}
                timing={linearTiming({ durationInFrames: 15})}
                />

                <TransitionSeries.Sequence durationInFrames={60}>
                    <Scene5 {...props.scene5Props} />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition
                    presentation={wipe({
                        direction: "from-right",
                    })}
                    timing={linearTiming({
                        durationInFrames: 35,
                    })}
                />

                <TransitionSeries.Sequence durationInFrames={90}>
                    <Scene6 {...props.scene6Props} />
                </TransitionSeries.Sequence>
            </TransitionSeries>

            <Bubbles />
        </AbsoluteFill>
    )
}

export default VideoPlay;