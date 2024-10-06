import { linearTiming, TransitionSeries } from '@remotion/transitions'
import { wipe } from '@remotion/transitions/wipe'
import React from 'react'
import { AbsoluteFill, Sequence } from 'remotion'
import PartyScreen, { zoomInSchema } from './party'
import SleekScreen, { zoomIn2Schema } from './saleek'
import { z } from 'zod'

export const scene3Schema = z.object({
    text: z.string(),
    image: z.string(),
    color: z.string(),
    textStrokeColor: z.string(),
    textStrokeWidth: z.string(),
    zoomInProps: zoomInSchema,
    zoomin2Props: zoomIn2Schema
});

type Scene3Props = z.infer<typeof scene3Schema> 

const Scene3: React.FC<Scene3Props> = (props) => {
    const { text, color, image, textStrokeColor, textStrokeWidth } = props
    return (
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={48}>
                <AbsoluteFill
                    style={{
                        background: "#fff",
                        color: color,
                        fontSize: 80 * 2.8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "600",
                        WebkitTextStrokeColor: textStrokeColor,
                        WebkitTextStrokeWidth: textStrokeWidth
                    }}
                ><span>{text}</span></AbsoluteFill>
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
                <AbsoluteFill>
                    <img src={image} alt='Vibe' width={"100%"} style={{position: "absolute", inset: "0", objectFit: "cover"}} />
                    <AbsoluteFill
                        style={{
                            color: color,
                            fontSize: 80 * 2.8,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "600",
                        }}
                        >
                        <span>{text}</span>
                    </AbsoluteFill>
                </AbsoluteFill>

                <Sequence from={38}>
                    <PartyScreen {...props.zoomInProps} />
                </Sequence>

                <Sequence from={50}>
                    <SleekScreen {...props.zoomin2Props} />
                </Sequence>
            </TransitionSeries.Sequence>
        </TransitionSeries>
  )
}

export default Scene3