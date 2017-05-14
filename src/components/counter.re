module Counter = {
    include ReactRe.Component;

    type props = { value: int, onChange: int => unit };

    let name = "Counter";

    let handleChange change {props} _event => {
        props.onChange change;
    };

    let render { props, handler } =>
        <div>
            <button
                onClick=(handler (handleChange (-1)))
            >(ReactRe.stringToElement "-")</button>
            (ReactRe.stringToElement (string_of_int props.value))
            <button
                onClick=(handler (handleChange 1))
            >(ReactRe.stringToElement "+")</button>
        </div>;
};

include ReactRe.CreateComponent Counter;

let createElement ::value ::onChange => wrapProps { value, onChange };
