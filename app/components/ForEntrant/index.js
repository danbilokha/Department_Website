import React from 'react';
import Img from '../../components/Img/index';

import icon_certificate from '../../containers/KafedraPage/images/icon_certificate.png';
import icon_diploma from '../../containers/KafedraPage/images/icon_diploma.png';
import icon_graduate_student from '../../containers/KafedraPage/images/icon_graduate_student.png';
import icon_scroll from '../../containers/KafedraPage/images/icon_scroll.png';

function ForEnterer(props) {
    return (
    <div className = "container_item">
        <Img src={icon_certificate}  className = 'icon_ForEnterer'/>
        <p className = "boldName">{props.boldName}</p>
        <p className = "numberName">{props.numberName}</p>
    </div>);
  }
  
export default ForEnterer;