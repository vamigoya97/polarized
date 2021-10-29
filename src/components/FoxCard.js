import '../App.css';
import { useState } from 'react';


function FoxCard(props) {

    const [trust, setTrust] = useState(0);
    const [untrust, setUntrust] = useState(0);

    return (
        <div className="media-card">
            <img className='post-img' alt='post' src={props.image} />
            {console.log(props.user)}
            {props.user ? 
            <div>
                <button onClick={() => setTrust((trust + 1))}>trust {trust}</button>
                <button onClick={() => setUntrust((untrust + 1))}>dont trust {untrust}</button>
            </div> : <br></br>}
            <p>{props.caption}</p>
            {props.date}
        </div>
    )
}

export default FoxCard;