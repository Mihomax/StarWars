import React from 'react';
import music from '../../audio/darth.mp3';

const swmusic = () =>{
    return (<audio src={music} controls autoPlay>
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>)}

export default swmusic;