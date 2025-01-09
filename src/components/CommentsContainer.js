import React from 'react'

const CommentsContainer = () => {
  const commentsData = [
    {
      Name: "Sahil",
      Comment: 'This is a great video!',
      Date: '2022-01-01',
      Replies: []
    },
    {
      Name: "John",
      Comment: 'I love it!',
      Date: '2022-02-15',
      Replies: [
        {
          Name: 'Sahil',
          Comment: 'Thanks to the creator!',
          Date: '2022-02-17',
          Replies: [
            {
              Name: 'John',
              Comment: 'Absolutely!',
              Date: '2022-02-18',
              Replies: [
                {
                  Name: 'Emily',
                  Comment: 'Its too long!',
                  Date: '2022-02-20',
                  Replies: [
                    {
                      Name: 'Sahil',
                      Comment: 'I think so too!',
                      Date: '2022-02-21',
                      Replies: []
                    }
                  ]
                }
              ]
            },
            {
              Name: 'Sahil',
              Comment: 'I agree with you!',
              Date: '2022-02-19',
              Replies: []
            }
          ]
        }
      ]
    },
    {
      Name: "Emily",
      Comment: "I'm glad you found it useful!",
      Date: '2022-03-05',
      Replies: [
        {
          Name: 'John',
          Comment: 'I completely agree!',
          Date: '2022-03-07',
          Replies: []
        },
        {
          Name: 'Emily',
          Comment: 'Definitely!',
          Date: '2022-03-09',
          Replies: []
        }
      ]
    }
  ];


  const Comment = ({ data }) => {
    return (
      <div className="mb-4 flex bg-gray-100 shadow-sm rounded-l-full pl-2 rounded-r-md">
        <div className="w-7 h-7 self-center flex items-center justify-center text-white bg-red-800 rounded-full">
          {data.Name?.charAt(0)}
        </div>
        <div className="flex flex-col pl-2">
          <span className="text-sm font-semibold">{data.Name}</span>
          {/* <span className="text-xs text-gray-600">{data.Date}</span> */}
          <p className="text-sm mt-1">{data.Comment}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        {comment.Replies && comment.Replies.length > 0 && (
          <div className="pl-4 border-l-2 border-gray-300 ml-4">
            <CommentsList comments={comment.Replies} />
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="m-2 lg:m-5 p-2">
      <h1 className="text-xl lg:text-2xl font-bold my-4">Comment Section</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;