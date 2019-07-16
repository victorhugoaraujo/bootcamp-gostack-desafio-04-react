import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
	state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Victor Hugo',
          avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/men/78.jpg'
            },
            content: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
          }
        ],
			},
			{
        id: 2,
        author: {
          name: 'Victor Hugo',
          avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/women/78.jpg'
            },
            content: "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing"
          }
        ],
			},
			{
        id: 3,
        author: {
          name: 'Victor Hugo',
          avatar: 'https://randomuser.me/api/portraits/women/76.jpg'
        },
        date: '04 Jun 2019',
        content: 'over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word',
        comments: [
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://randomuser.me/api/portraits/men/82.jpg'
            },
            content: "The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance."
          }
        ],
			},
    ]
  };
	render(){
		const { posts } = this.state;
		return (
			<div className="postlist">
				{posts.map(post => <PostItem key={post.id} {...post} />)}
			</div>
		)
	}
}

export default PostList;