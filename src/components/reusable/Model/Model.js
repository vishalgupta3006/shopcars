import './Model.css';
import ModelBody from './ModelBody';
import ModelHeading from './ModelHeading';

export default function Model(props) {
    const { className, heading, closeHandler, isOpen } = props;
    const visibility = isOpen ? "unhide" : "";
    return (
        <div className={"ModelContainer " + visibility + "ModelContainer"}>
            <div className="ModelBackground" onClick={() => { closeHandler() }}>
                <div className={"modelContent " + className} onClick={(e) => e.stopPropagation()} >
                    <ModelHeading heading={heading} closeHandler={closeHandler} />
                    <ModelBody>
                        {props.children}
                    </ModelBody>
                </div>
            </div>
        </div>
    );
}