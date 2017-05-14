external isHot : bool = "module.hot" [@@bs.val];

external accept : string => (unit => unit) => unit =
    "module.hot.accept" [@@bs.val];

external appContainer : ReactRe.reactClass =
    "AppContainer" [@@bs.module "react-hot-loader"];

module AppContainer = {
    let createElement = ReactRe.wrapPropsShamelessly
        appContainer
        (Js.Obj.empty ());
};
