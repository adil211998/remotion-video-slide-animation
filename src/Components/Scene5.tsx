import React from 'react'
import { AbsoluteFill } from 'remotion'
import { linearTiming, TransitionSeries } from '@remotion/transitions';
import { wipe } from '@remotion/transitions/wipe';
import { z } from 'zod';

export const scene5Schema = z.object({
    text: z.string(),
    image: z.string(),
    color: z.string(),
    textStrokeColor: z.string(),
    textStrokeWidth: z.string(),
    backgroundColor: z.string()
});

type Scene5Props = z.infer<typeof scene5Schema> 

const Style: React.FC<Scene5Props> = (props) => {

    const { text, image, color, textStrokeColor, textStrokeWidth, backgroundColor } = props;

    return (
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={30}>
                <AbsoluteFill
                    style={{
                        fontSize: 80 * 2.8,
                        background: backgroundColor,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "600",
                        WebkitTextStrokeWidth: textStrokeWidth,
                        WebkitTextStrokeColor: textStrokeColor,
                        color: "transparent"
                    }}
                    >
                    {text}
                </AbsoluteFill>
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
            presentation={wipe({
                direction: "from-top"
            })}
            timing={linearTiming({ durationInFrames: 25})}
            />

            <TransitionSeries.Sequence durationInFrames={60}>
                <img src={image} alt='style' width={"100%"} style={{position: "absolute", inset: "0", objectFit: "cover"}} />
                <AbsoluteFill
                    style={{
                        fontSize: 80 * 2.8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "600",
                        color: color
                    }}
                    >
                    {text}
                </AbsoluteFill>
            </TransitionSeries.Sequence>
        </TransitionSeries>
    )
}

export default Style