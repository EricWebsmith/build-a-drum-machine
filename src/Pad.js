export default function Pad(props) {
    function play() {
        props.updateDisplay(props.name);
        const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/drums/${props.filename}.mp3`);
        audio.play();
    }

    function handleKeyDown(e) {
        console.log(e);
        console.log(e.key);
        if(e.key === props.value.tolowercase()) {
            play();
            e.preventDefault();
        }
        //
    }

    // console.log('props.value');
    // console.log(props.value);

    return (
        <button id={props.value} className="drum-pad" onClick={play} onKeyDown={handleKeyDown}>
            {props.value}
        </button>
    );
}