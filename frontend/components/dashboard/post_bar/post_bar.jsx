import React from 'react';
import TextFormContainer from './dropdown_forms/text_form_container';
import PhotoFormContainer from './dropdown_forms/photo_form_container';
import QuoteFormContainer from './dropdown_forms/quote_form_container';
import LinkFormContainer from './dropdown_forms/link_form_container';
import ChatFormContainer from './dropdown_forms/chat_form_container';
import VideoFormContainer from './dropdown_forms/video_form_container';
import AudioFormContainer from './dropdown_forms/audio_form_container';


export default (props) => {
  return (
    <div className="post-bar">
      <ul>
        <li className="post-bar-li"><TextFormContainer /></li>
        <li className="post-bar-li"><PhotoFormContainer /></li>
        <li className="post-bar-li"><QuoteFormContainer /></li>
        <li className="post-bar-li"><LinkFormContainer /></li>
        <li className="post-bar-li"><ChatFormContainer /></li>
        <li className="post-bar-li"><AudioFormContainer /></li>
        <li className="post-bar-li"><VideoFormContainer /></li>
      </ul>
    </div>
  )
}