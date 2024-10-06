import React, { CSSProperties } from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import { z } from 'zod';

export const scene6Schema = z.object({
  logo: z.string(),
  backgroundColor: z.string()
});

type Scene6Props = z.infer<typeof scene6Schema>

const LogoScene: React.FC<Scene6Props> = (props) => {

  const { logo, backgroundColor } = props

  return (
    <AbsoluteFill
    style={{
        background: backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}
    >
      <LogoSvg logo={logo} />
    </AbsoluteFill>
  )
}

export default LogoScene


interface LogoProps {
  logo: string
}

const LogoSvg: React.FC<LogoProps> = (props) => {

  const { logo } = props
    const frame = useCurrentFrame()

    const scaleEffect = interpolate(frame, [17, 22], [1.01, 1])

    const svgStyle: CSSProperties = {
        width: "600px",
        transform: `scale(${scaleEffect})`
    }

    return (
      <img src={logo} alt='logo' width={"100%"} style={svgStyle} />
    )
}