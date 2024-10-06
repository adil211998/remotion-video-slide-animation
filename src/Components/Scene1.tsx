import React from 'react'
import { AbsoluteFill, interpolate, spring, useCurrentFrame } from 'remotion'
import { TransitionSeries } from '@remotion/transitions'
import { z } from 'zod';

export const scene1Schema = z.object({
    text: z.string(),
    image: z.string(),
    color: z.string()
});

type Scene1Props = z.infer<typeof scene1Schema> 

const Scene1: React.FC<Scene1Props> = (props) => {

    const frame = useCurrentFrame()
    
    const textTranslate = interpolate(frame, [0, 15], [-500, 0], {
        extrapolateRight: "clamp"
    })

    const { text } = props;


  return (
    <AbsoluteFill>
        <TransitionSeries>
            <TransitionSeries.Sequence durationInFrames={60}
            style={{
                overflow: "hidden"
            }}>
                <img src={props.image} alt='Image 1' width={"100%"} />
                <AbsoluteFill
                style={{
                    background: "transparent",
                    fontSize: 80 * 2.8,
                    transform: `translateX(${textTranslate}px)`,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "uppercase",
                    fontWeight: "600",
                    color: props.color
                }}
                >
                    <div style={{display: "flex"}}>
                    {
                        text.split("").map((letter, index) => {
                        // Animate each letter's appearance with a spring
                        const springEffect = spring({
                            frame: frame - (text.length - index) * 2, // Delay each letter's animation by 5 frames
                            fps: 18,
                            config: {
                                damping: 10,
                            },
                        });

                        // Translate each letter from left to right
                        const translateX = index > 1 ? 0 : interpolate(springEffect, [0, 1], [-100, 0]);

                        return (
                            <span
                                key={index}
                                style={{
                                    display: 'inline-block',
                                    transform: `translateX(${translateX}px)`,
                                    marginRight: 10, // Adjust letter spacing
                                }}
                            >
                                {letter}
                            </span>
                        );
                        })
                    }
                    </div>
                </AbsoluteFill>
            </TransitionSeries.Sequence>
        </TransitionSeries>
    </AbsoluteFill>
  )
}

export default Scene1