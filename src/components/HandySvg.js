// import imageSrc from 'C:/Users/79275/web/React_Netology/fullstack3/project19/src/icons/image.svg';
import imageSrc from "../icons/image.svg";
import {HandySvg} from 'handy-svg';


export const IconImage = () => (
    <HandySvg
        src={imageSrc}
        // src={'src/icons/image.svg'}
        // className="icon"
        width="32"
        height="32"
    />
);