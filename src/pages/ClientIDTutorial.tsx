import { styled } from 'goober'
import { Link } from '../components/Link.tsx'
import { Button } from '../components/Button.tsx'
import { useState } from 'preact/hooks'
import { TextInput } from '../components/TextInput.tsx'
import { clientID } from '../utils/signals.ts'
import { login } from '../api/login.ts'
import { colors } from '../utils/colors.ts'

export function ClientIDTutorial() {
  const [pageNum, setPageNum] = useState(1)
  const [showBigImg, setShowBigImg] = useState(false)

  const pages: {
    text: JSX.Element
    img: string
  }[] = [
    {
      text: (
        <>
          Go to <Link label='developer.spotify.com' url='https://developer.spotify.com/' /> and log
          in using your spotify account
        </>
      ),
      img: '/public/tutorial1.webp',
    },
    {
      text: (
        <>
          Once logged in, create a new app at{' '}
          <Link
            label='developer.spotify.com/dashboard/create'
            url='https://developer.spotify.com/dashboard/create'
          />
        </>
      ),
      img: '/public/tutorial2.webp',
    },
    {
      text: (
        <ol>
          <li>Fill out "App name" and "App description"</li>
          <li>
            Add <CopyText>https://spotifywithtags.web.app</CopyText> to "Redirect URIs"
          </li>
          <li>Enable the "Web API" checkbox</li>
          <li>Click "Save"</li>
        </ol>
      ),
      img: '/public/tutorial3.webp',
    },
    {
      text: <>From the dashboard, go to "Settings"</>,
      img: '/public/tutorial4.webp',
    },
    {
      text: <>In the settings, copy the Client ID and paste it below</>,
      img: '/public/tutorial5.webp',
    },
  ]

  const handleNext = () => {
    setPageNum(pageNum + 1)
  }

  return (
    <Container>
      <div>
        {pageNum}/{pages.length}
      </div>
      <div>{pages[pageNum - 1].text}</div>
      <Img src={pages[pageNum - 1].img} alt='Tutorial' onClick={() => setShowBigImg(true)} />
      {showBigImg && (
        <BigImg src={pages[pageNum - 1].img} alt='Tutorial' onClick={() => setShowBigImg(false)} />
      )}
      {pageNum === pages.length ? (
        <>
          <TextInput signal={clientID} placeholder='Paste your Client ID here' />
          <Button label='Connect' onClick={login} disabled={!clientID.value} />
        </>
      ) : (
        <Button label='Next' onClick={handleNext} />
      )}
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
`

const Img = styled('img')`
  width: 400px;
  max-width: 100vw;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    outline: 1px solid white;
  }
`

const BigImg = styled('img')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100svh;
  cursor: pointer;
  object-fit: contain;
  background-color: ${colors.bg1};
`

const CopyText = styled('span')`
  user-select: all;
  cursor: pointer;
`
