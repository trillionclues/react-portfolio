import { Link, useRouteError } from 'react-router-dom'
import '../error.css'

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className='error-page'>
      <div class='wrap'>
        <video
          class='video'
          poster='https://knife.media/wp-content/themes/knife/assets/images/poster-error.jpg'
          autoplay
          preload
          loop
          muted
        >
          <source
            src='https://knife.media/wp-content/themes/knife/assets/video/video-error.mp4'
            type='video/mp4'
          />
        </video>

        <div class='message'>
          <h1>Oopsie!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            Go back to
            <Link className='home__test' to='/'>
              {' '}
              Homepage
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
