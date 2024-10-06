import { springTiming, TransitionSeries } from '@remotion/transitions'
import { wipe } from '@remotion/transitions/wipe'
import React from 'react'
import { AbsoluteFill } from 'remotion'
import { z } from 'zod'

export const scene2Schema = z.object({
    text: z.string(),
    image: z.string(),
    color: z.string(),
    textStrokeColor: z.string(),
    textStrokeWidth: z.string(),
});

type Scene2Props = z.infer<typeof scene2Schema> 

const Scene2: React.FC<Scene2Props> = (props) => {
    const { text, image, color, textStrokeColor, textStrokeWidth } = props
    return (
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={40}>
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
                ><div>{text}</div></AbsoluteFill>
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
                <AbsoluteFill
                style={{
                background: `url(${image})`,
                backgroundSize: "cover"
                }}
                >
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
            </TransitionSeries.Sequence>
        </TransitionSeries>
    )
}

export default Scene2