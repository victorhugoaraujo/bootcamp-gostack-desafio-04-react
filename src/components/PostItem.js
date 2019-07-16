import React from 'react';

function PostHeader({author, date}) {
	return (
		<div className="post-header">
			<img className="avatar" src={author.avatar} />
			<div className="details">
				<span>{author.name}</span>
				<span>{date}</span>
			</div>
		</div>
	);
}

function PostComment({ comments }) {
	return (
		<div className="post-comments">
			<div className="divider" />
			{comments.map(comment => 
				<div className="comment" key={comment.id}>
					<img className="avatar" src={comment.author.avatar}/>
					<p>
						<span>{comment.author.name} </span>
						{comment.content}
					</p>
				</div>)}
		</div>
	)
}

function PostItem({ author, date, content, comments }){
	return (
		<div className="post">
			<PostHeader author={author} date={date} />
			<p className="post-content">{content}</p>
			<PostComment comments={comments} />
		</div>
	)
}

export default PostItem;