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
      <div className='mb-4 flex bg-gray-100 shadow-sm rounded-l-full pl-2 rounded-r-md'>
        <div className='w-7 my-auto h-7  text-white bg-red-800 text-center rounded-full' fill='none' >
          {data.Name?.charAt(0)}
        </div>
        <div className='items-center pl-2 '>
          <span className=' text-sm'>{data.Name}</span>
          <span className='text-sm text-gray-600 ml-2'>{data.Date}</span>
          <p>{data.Comment}</p>
        </div>
        {/* {(data.Replies.length > 0) && <Comment data={data.Replies} />} */}
      </div>
    )
  }

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => <div key={index} >
      <Comment data={comment} />
      <div className='pl-5 border border-l-black  ml-5'>
        <CommentsList comments={comment.Replies} />
      </div>
    </div>)
  }

  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold my-4'>Comment Section</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer