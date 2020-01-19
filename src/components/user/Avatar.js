import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { getHexadecimalColor } from '../../utility/utility';

function getAvatarWithInitials(props) {
    return (
        <div style={{backgroundColor: getHexadecimalColor()}} className="avatar">
            <div className="avatar-initials">{props.name? props.name.substr(0, 1) : ""}</div>
        </div>
    );
}

const Avatar = (props) => {
    let [imageFailed, setImageFailed] = useState(false);

    let avatar = null;

    if (!props.avatar) {
        avatar = getAvatarWithInitials(props);
    } else {
        avatar = <Image
            floated='left'
            size='massive'
            src={props.avatar}
            avatar
            onError={function () {
                setImageFailed(true);
            }}
        />;
    }

    avatar = imageFailed ? getAvatarWithInitials(props) : avatar;

    return avatar;
};

export default Avatar;
