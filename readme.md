package.json
  

babelrc

public

mobile
  myforapp
     src
       assets
       routes 
     template.html
  personalapp
     template.html

react-router 4.x 嵌套
    原理 ：这里<Router>组件下只允许存在一个子元素，如存在多个则会报错。
    react-route-dom
        BrowserRouter 
        Route
        Link
    history/createBrowserHistory
        createBrowserHistory
    
    React.Element
       <BrowserRouter history={createBroserHGistory()}>
          <Route path="/" component={App}>
       </BrowserRouter>
react-router 4.x以下 嵌套
  