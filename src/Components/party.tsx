import React, { useMemo } from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { z } from 'zod';

export const zoomInSchema = z.object({
    text: z.string(),
    image: z.string(),
    color: z.string(),
});

type ZoomInProps = z.infer<typeof zoomInSchema> 

const PartyScreen: React.FC<ZoomInProps> = (props) => {

    const { text, image, color } = props

    const frame = useCurrentFrame()

    const scale = useMemo(() => {
        return interpolate(frame, [0, 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp"
        })
    }, [frame])

    return (
    <AbsoluteFill>
        <div style={{
            position: "absolute",
            inset: "0",
            transform: `scale(${scale})`,
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
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
        </div>
    </AbsoluteFill>
    )
}

export default PartyScreen