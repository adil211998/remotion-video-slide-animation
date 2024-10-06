import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import { linearTiming, TransitionSeries } from '@remotion/transitions';
import { wipe } from '@remotion/transitions/wipe';
import { z } from 'zod';

export const scene4Schema = z.object({
    text: z.string(),
    image: z.string(),
    color: z.string(),
    textStrokeColor: z.string(),
    textStrokeWidth: z.string(),
    backgroundColor: z.string()
});

type Scene4Props = z.infer<typeof scene4Schema> 

const Scene4: React.FC<Scene4Props> = (props) => {

    const { text, image, color, textStrokeColor, textStrokeWidth, backgroundColor } = props;
    const frame = useCurrentFrame()

    const rythmTranslateY = interpolate(frame, [0, 10], [60, 0], {
        extrapolateRight: "clamp"
    });

    return (
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={30}>
                <div style={{
                    position: "absolute",
                    inset: "0",
                    background: backgroundColor,
                    overflow: "hidden"
                }}>
                    <AbsoluteFill
                        style={{
                            fontSize: 80 * 2.8,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "600",
                            transform: `translateY(${rythmTranslateY}%)`,
                            WebkitTextStrokeWidth: textStrokeWidth,
                            WebkitTextStrokeColor: textStrokeColor,
                            color: "transparent"
                        }}
                        >
                        <span>{text}</span>
                    </AbsoluteFill>
                </div>
            </TransitionSeries.Sequence>

            <TransitionSeries.Transition
            presentation={wipe({
                direction: "from-top"
            })}
            timing={linearTiming({ durationInFrames: 30})}
            />

            <TransitionSeries.Sequence durationInFrames={40}>
                <img src={image} alt='Rythm' width={"100%"} style={{position: "absolute", inset: "0", objectFit: "cover"}} />
                <AbsoluteFill
                    style={{
                        fontSize: 80 * 2.8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "600",
                        color: color
                    }}
                    className="claspo-nd-font"
                    >
                    {'Rythm'}
                </AbsoluteFill>
            </TransitionSeries.Sequence>
        </TransitionSeries>
    )
}

export default Scene4