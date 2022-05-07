import { ArrowBackOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './watch.scss';

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <Link to="/" className="link">
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://hw19.cdn.asset.aparat.com/aparat-video/3dd75aa2e4021aa9148b3f040e3677bd25700619-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ0NzE0MWVjYjE5ZWZiYjNjNjRjZjA1NzAwYWMxMmZhIiwiZXhwIjoxNjUxOTM0MjkwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.eTSgr5Mx9k41k33u5hsx6K2QyHThs-Zs7UrFfFxuq18"
      />
    </div>
  );
}
