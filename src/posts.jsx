import React from 'react';

// posts
function Blog(props) {
	const sidebar = (
	<p>
	  <ol>
		{props.posts.map((post) =>
		  <li key={post.id}>{post.title}</li>
		)}
	  </ol>
	</p>	
	);

	const content = props.posts.map((post) =>  
	  <div key={post.id}>
		<h3>{post.title}</h3>
		<p>{post.content}</p>
	  </div>
	);

	return (
	  <div>
		<hr />
		{sidebar}
		<hr />
		{content}    
	  </div>
	);
}
  

export default Blog;