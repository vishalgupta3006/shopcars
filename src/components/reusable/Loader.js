import buffering from '../../images/buffering.gif';
import styled from 'styled-components';

const Loader = () => {

    return(
        <div>
            <img src = {buffering} />
        </div>
    );
}
export default Loader;