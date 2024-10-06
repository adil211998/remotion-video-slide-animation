import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { z } from 'zod';

export const zoomIn2Schema = z.object({
    text: z.string(),
    image: z.string(),
    color: z.string(),
    backgroundColor: z.string()
});

type ZoomIn2Props = z.infer<typeof zoomIn2Schema> 

const SleekScreen: React.FC<ZoomIn2Props> = (props) => {

    const { text, image, color, backgroundColor } = props;
    const frame = useCurrentFrame()

    const sleekWrapperScale = interpolate(frame, [0, 10], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });
    
    const sleekImgScale = interpolate(frame, [2, 12], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    });

    return (
        <AbsoluteFill
        style={{
            scale: `${sleekWrapperScale}`,
            background: backgroundColor,
            overflow:"hidden"
        }}>
            <AbsoluteFill
            style={{
                scale: `${sleekImgScale}`,
                overflow:"hidden"
            }}>
                <img src={image} alt='party' width={"100%"} />

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
        </AbsoluteFill>
    )
}

export default SleekScreen;