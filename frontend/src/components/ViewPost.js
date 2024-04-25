import { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";
import { Link } from "react-router-dom";

// Import the DeletePost component
import DeletePost from './DeletePost';
import EditPost from "./EditPost";


// const dotenv = require("dotenv");
// dotenv.config();


export default function ViewPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        onload();
    }, [posts])


    function onload() {
        axios.get(config.GET_POST)
            .then(function (response) {
                setPosts(response.data);
            }).catch(function (ex) {
                console.log(ex);
            })
    }
    return (
        <div>
            <div></div>
            <table className=" table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>details</th>
                        <th>operation</th>
                    </tr>
                </thead>

                <tbody>
                    {posts.map((post) => (
                        <tr key={post._id}>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                               
                                    <EditPost post={post} />
                               
                                {/* Use the DeletePost component to delete the post */}
                                <DeletePost post={post}/>
                            </td>
                        </tr>
                    ))}
                </tbody>



            </table>
        </div>
    )
}






// // // import Pagination from 'react-bootstrap/Pagination';

// // // function AdvancedExample() {
// // //     return (
// // //         <Pagination>
// // //             <Pagination.First />
// // //             <Pagination.Prev />
// // //             <Pagination.Item>{1}</Pagination.Item>
// // //             <Pagination.Ellipsis />

// // //             <Pagination.Item>{10}</Pagination.Item>
// // //             <Pagination.Item>{11}</Pagination.Item>
// // //             <Pagination.Item active>{12}</Pagination.Item>
// // //             <Pagination.Item>{13}</Pagination.Item>
// // //             <Pagination.Item disabled>{14}</Pagination.Item>

// // //             <Pagination.Ellipsis />
// // //             <Pagination.Item>{20}</Pagination.Item>
// // //             <Pagination.Next />
// // //             <Pagination.Last />
// // //         </Pagination>
// // //     );
// // // }

// // // export default AdvancedExample;







// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import config from "./config";
// // import { Link } from "react-router-dom";
// // import Pagination from 'react-bootstrap/Pagination';

// // export default function ViewPost() {
// //     const [posts, setPosts] = useState([]);
// //     const [activePage, setActivePage] = useState(1);

// //     useEffect(() => {
// //         onLoad();
// //     }, [posts]);

// //     function onLoad() {
// //         axios.get(`${config.GET_POST}?page=${activePage}`)
// //             .then(function (response) {
// //                 setPosts(response.data);
// //             }).catch(function (ex) {
// //                 console.log(ex);
// //             })
// //     }

// //     const handlePageSelect = (pageNumber) => {
// //         setActivePage(pageNumber);
// //     }

// //     return (
// //         <div>
// //             <div></div>
// //             <table className=" table table-hover">
// //                 <thead>
// //                     <tr>
// //                         <th>Title</th>
// //                         <th>Details</th>
// //                         <th>Operation</th>
// //                     </tr>
// //                 </thead>

// //                 <tbody>
// //                     {posts.map((post) => (
// //                         <tr key={post._id} >
// //                             <td>{post.title}</td>
// //                             <td>{post.body}</td>
// //                             <td>
// //                                 <Link to={`/editpost/${post._id}`}>Edit post</Link>
// //                                 <span>|</span>
// //                                 <Link to={`/deletepost/${post._id}`}>Delete post</Link>
// //                             </td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>

// //             <Pagination>
// //                 <Pagination.Prev onClick={() => handlePageSelect(activePage - 1)} disabled={activePage === 1} />
// //                 <Pagination.Item active={activePage === 1} onClick={() => handlePageSelect(1)}>1</Pagination.Item>
// //                 <Pagination.Item active={activePage === 2} onClick={() => handlePageSelect(2)}>2</Pagination.Item>
// //                 <Pagination.Item active={activePage === 3} onClick={() => handlePageSelect(3)}>3</Pagination.Item>
// //                 {/* Add more Pagination.Item elements for additional pages */}
// //                 <Pagination.Next onClick={() => handlePageSelect(activePage + 1)} />
// //             </Pagination>
// //         </div>
// //     )
// // }


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import config from "./config";
// import { Link } from "react-router-dom";
// import Pagination from "react-bootstrap/Pagination";

// export default function ViewPost() {
//     const [posts, setPosts] = useState([]);
//     const [activePage, setActivePage] = useState(1);
//     const itemsPerPage = 10;

//     useEffect(() => {
//         onLoad();
//     }, [activePage]);

//     function onLoad() {
//         const startIndex = (activePage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;

//         axios
//             .get(config.GET_POST)
//             .then(function (response) {
//                 const postsForPage = response.data.slice(startIndex, endIndex);
//                 setPosts(postsForPage);
//             })
//             .catch(function (ex) {
//                 console.log(ex);
//             });
//     }

//     const totalPages = Math.ceil(posts.length / itemsPerPage);

//     const handlePageSelect = (pageNumber) => {
//         setActivePage(pageNumber);
//     };

//     return (
//         <div>
//             <div></div>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Title</th>
//                         <th>Details</th>
//                         <th>Operation</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {posts.map((post) => (
//                         <tr key={post._id}>
//                             <td>{post.title}</td>
//                             <td>{post.body}</td>
//                             <td>
//                                 <Link to={`/editpost/${post._id}`}>Edit post</Link>
//                                 <span>|</span>
//                                 <Link to={`/deletepost/${post._id}`}>Delete post</Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <Pagination>
//                 <Pagination.Prev
//                     onClick={() => handlePageSelect(activePage - 1)}
//                     disabled={activePage === 1}
//                 />
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <Pagination.Item
//                         key={index + 1}
//                         active={index + 1 === activePage}
//                         onClick={() => handlePageSelect(index + 1)}
//                     >
//                         {index + 1}
//                     </Pagination.Item>
//                 ))}
//                 <Pagination.Next
//                     onClick={() => handlePageSelect(activePage + 1)}
//                     disabled={activePage === totalPages}
//                 />
//             </Pagination>
//         </div>
//     );
// }
