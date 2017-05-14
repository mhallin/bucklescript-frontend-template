module App = {
    include ReactRe.Component.Stateful;

    type props = ();
    type state = {
        c1: int,
        c2: int,
        c3: int,
    };

    let getInitialState _ =>
        { c1: 0, c2: 0, c3: 0 };

    let name = "App";

    let handleChange idx { state } change =>
        switch idx {
        | 0 => Some { ...state, c1: state.c1 + change }
        | 1 => Some { ...state, c2: state.c2 + change }
        | 2 => Some { ...state, c3: state.c3 + change }
        | _ => None
        };

    let render { state, updater } => 
        <div>
            <Counter
                value=state.c1
                onChange=(updater (handleChange 0))
            />
            <br />
            <Counter
                value=state.c2 
                onChange=(updater (handleChange 1))
            />
            <br />
            <Counter
                value=state.c3
                onChange=(updater (handleChange 2))
            />
        </div>;
};

include ReactRe.CreateComponent App;

let createElement = wrapProps ();
