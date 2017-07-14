let store: Store<AppState> = createStore<AppState>(counterReducer);

const devtools: StoreEnhancer<AppState> =
    window['devToolsExtension'] ?
        window['devToolsExtension']() : f => f;
