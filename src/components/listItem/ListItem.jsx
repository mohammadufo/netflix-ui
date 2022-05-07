import './listItem.scss';
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from '@mui/icons-material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ListItem({ index, src }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://aspb2.cdn.asset.aparat.com/aparat-video/f613ac58e493ebfe613d1498fe68097a6738819-270p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImE2NjIxMmI1NWY5NjEyOGEwMmQ5ZmY2MDcwZTQyMDA4IiwiZXhwIjoxNjUxOTM0MTAzLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.QksEA90jVDWh3P6qLbMDiaN25MQ4UCTxR4SkSB62hP0';
  return (
    <Link to="/watch">
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={src} alt="" />
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium hic rem eveniet error possimus, neque ex doloribus.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
