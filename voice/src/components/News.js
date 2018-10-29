import React from 'react';

// class News extends React.Component {
//     render () {
//         return (
//             <div>
//                 <h2>News.... {this.props.match.params.id}</h2>
//             </div>
//         );
//     }
// }

const News = ({match}) => {
    return (
        <div>
            <h2>News.... {match.params.id}</h2>
        </div>
    );
}

export default News;