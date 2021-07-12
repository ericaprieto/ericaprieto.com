import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import "plyr/dist/plyr.css"
import theme from "../../theme"

const Wrapper = styled.div`
  border: 1px solid ${theme.baseColor};

  img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`

const MediaPlayer = ({ src, poster }) => {
  const nodeRef = useRef()

  useEffect(() => {
    let mounted = true
    let player

    import("plyr").then(({ default: Plyr }) => {
      if (mounted) {
        player = new Plyr(nodeRef.current)

        player.source = {
          type: "audio",
          title: "Example title",
          sources: [{ src, type: "audio/mp3" }],
        }
      }
    })

    return () => {
      mounted = false

      if (player) {
        player.destroy()
      }
    }
  }, [src])

  return (
    <Wrapper>
      <img src={poster} alt="" />
      <audio ref={nodeRef} />
    </Wrapper>
  )
}

export default MediaPlayer
