import React from 'react';
import axios from 'axios';
import config from './config';

export default function DeletePost({ post}) {
  const handleDelete = async () => {
    try {
      // Make an Axios DELETE request to delete the post by its ID
      await axios.delete(`${config.DELETE_POST}/${post._id}`);
      // Notify the parent component that the post has been deleted
      // onDelete(post._id);
    } catch (error) {
      console.error('Error deleting the post:', error);
    }
  };

  return (
    <button
      className="btn btn-danger"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import config from './config';

// export default function DeletePost({ post }) {
//   const [isDeleting, setIsDeleting] = useState(false);

//   const handleDelete = async () => {
//     setIsDeleting(true); // Show the spinner

//     try {
//       // Simulate a delay for 2 seconds before making the actual delete request
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       await axios.delete(`${config.DELETE_POST}/${post._id}`);
//       // Notify the parent component that the post has been deleted
//       // onDelete(post._id);
//     } catch (error) {
//       console.error('Error deleting the post:', error);
//     } finally {
//       setIsDeleting(false); // Hide the spinner after the operation is complete
//     }
//   };

//   useEffect(() => {
//     // Clean up the spinner after 2 seconds (or after the operation is complete)
//     const timer = setTimeout(() => {
//       setIsDeleting(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {isDeleting ? (
//         <div className="spinner-border text-danger" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       ) : (
//         <button className="btn btn-danger" onClick={handleDelete}>
//           Delete
//         </button>
//       )}
//     </div>
//   );
// }
