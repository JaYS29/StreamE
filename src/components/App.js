import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import StreameCreate from './streams/StreamCreate'
import StreameEdit from './streams/StreamEdit'
import StreameDelete from './streams/StreamDelete'
import StreameShow from './streams/StreamShow'
import StreameList from './streams/StreamList'
import Header from './Header'


const App = () => {
    return ( 
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreameList} />
                    <Route path="/streams/new" exact component={StreameCreate} />
                    <Route path="/streams/edit" exact component={StreameEdit} />
                    <Route path="/streams/delete" exact component={StreameDelete} />
                    <Route path="/streams/show" exact component={StreameShow} />
                </div>
            </BrowserRouter>
        </div>
     );
}
 
export default App;