let render what =>
    ReactDOMRe.renderToElementWithClassName
        <Reloadable.AppContainer>
            (what ())
        </Reloadable.AppContainer>
        "js-app";

render (fun _ => <App />);

if (Reloadable.isHot) {
    Reloadable.accept 
        "./components/app.js"
        (fun _ => render (fun _ => <App />));
};
