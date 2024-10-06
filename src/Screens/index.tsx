import React from 'react'
import { AbsoluteFill } from 'remotion'
import { springTiming, TransitionSeries } from '@remotion/transitions'
import { slide } from '@remotion/transitions/slide'
import { wipe } from '@remotion/transitions/wipe'
import BlankScene from "../Components/blank-screen"
import Scene1, { scene1Schema } from '../Components/Scene1'
import { z } from 'zod'
import Scene2, { scene2Schema } from '../Components/Scene2'
import Scene3, { scene3Schema } from '../Components/Scene3'

export const ScreensSchema = z.object({
    scene1Props: scene1Schema,
    scene2Props: scene2Schema,
    scene3Props: scene3Schema,
  });

type ScreensProps = z.infer<typeof ScreensSchema> 

const Screens: React.FC<ScreensProps> = (props) => {
  return (
    <AbsoluteFill>
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={30}>
                <BlankScene />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={slide({
                    direction: "from-right"
                })}
                timing={springTiming({ 
                    config: {
                        damping: 10,
                        stiffness: 50
                    },
                    durationInFrames: 30
                })}
            />

            <TransitionSeries.Sequence durationInFrames={30 * 1.4}>
                <Scene1 {...props.scene1Props} />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={wipe({
                    direction: "from-right"
                })}
                timing={springTiming({ 
                    config: {
                        damping: 100,
                        mass: 8.6,
                        stiffness: 102,
                    },
                    durationInFrames: 30
                })}
            />

            <TransitionSeries.Sequence durationInFrames={55}>
                <Scene2 {...props.scene2Props} />
            </TransitionSeries.Sequence>

            {/* <TransitionSeries.Sequence durationInFrames={40}>
                <FashionWhiteScreen />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={wipe({
                    direction: "from-right",
                })}
                timing={springTiming({
                    config: {
                        damping: 100,
                        mass: 8.6,
                        stiffness: 102,
                    },
                    durationInFrames: 30,
                })}
            />

            <TransitionSeries.Sequence durationInFrames={45}>
                <FashionImageScreen />
            </TransitionSeries.Sequence> */}

            <TransitionSeries.Transition
                presentation={wipe({
                    direction: "from-right",
                })}
                timing={springTiming({
                    config: {
                        damping: 100,
                        mass: 8.6,
                        stiffness: 200,
                    },
                    durationInFrames: 35,
                })}
            />

            <TransitionSeries.Sequence durationInFrames={98}>
                <Scene3 {...props.scene3Props} />
            </TransitionSeries.Sequence>

            {/* <TransitionSeries.Sequence durationInFrames={48}>
                <VibeWhiteScreen />
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
                presentation={wipe({
                    direction: "from-right",
                })}
                timing={linearTiming({
                    durationInFrames: 40,
                })}
            />

            <TransitionSeries.Sequence durationInFrames={90}>
                <VibeImageScreen />
            </TransitionSeries.Sequence> */}
        </TransitionSeries>
    </AbsoluteFill>
  )
}

export default Screens